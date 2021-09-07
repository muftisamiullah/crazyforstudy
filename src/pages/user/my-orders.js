import DashboardNavbar from '../../components/website/dashboard/dashboard-navbar'
import SideBar from '../../components/website/dashboard/sidebar'
import BlockHeader from '../../components/website/dashboard/block-header'
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query'
import {getUser} from '../../libs/profile'
import {useState, useContext} from 'react'
import {getAllAssignments} from '../../libs/assignment'
import {AuthContext} from '../../context/AuthContext';

export default function MyOrders(){
   const { state } = useContext(AuthContext);
   const session = state.isLoggedIn;

   const [display, setDisplay] = useState();
   const { data: user, isLoading:userIsLoading, error:userError } = useQuery(['user-profile'], () => getUser({email:state.email}),{initialData: undefined,staleTime:Infinity, enabled: !!session})
   const { data: assignments, isLoading: assignmentsIsLoading, error: assignmentsError } = useQuery(['my-orders'], () => getAllAssignments({user_Id:state._id}),{staleTime:Infinity, enabled: !!session})

   const openCollapse = (data) => {
      setDisplay(data);
  }


    return(
        <>
        <DashboardNavbar data={user}/>
        <SideBar data={user}/>
        <section className="content user profile-page">
   <BlockHeader data={user}/>
   <div className="container-fluid">
      <div className="row clearfix mt-4">
         <div className="col-md-12">
            <div className="card student-list">
               <div className="header">
                  <h2><strong>My</strong> Orders</h2>
               </div>
               <div className="body">
                  <div className="table-responsive" id="accordion">
                     <table className="table table-hover m-b-0 my-order-new my_subscrption_table">
                        <thead>
                           <tr className="table_title order">
                              <th className="w-25">S.No</th>
                              <th className="w-25">Order ID</th>
                              <th className="w-25">Date</th>
                              <th className="w-25">Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           {assignments && assignments.assignment.map((item,key)=>{
                              return(
                                 <tr key={key}>
                                 <td colSpan="4" style={{padding:"0px"}}>
                                    <div className="card-header pl-0 pr-0">
                                       <table style={{width: "100%"}}>
                                          <tbody>
                                             <tr>
                                                <td className="w-25"><span>{key}</span></td>
                                                <td className="w-25"><span className="textbook-t">{item._id}</span></td>
                                                <td className="w-25">
                                                   <span>{item.deadline_date.substring(0,10)}</span>
                                                </td>
                                                <td className="w-25">
                                                   <button className="btn btn-link collapsed view-reciept-btn" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1" onClick={()=>{openCollapse(`collapse${key}`)}}>
                                                   View Receipt
                                                   </button>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                    <div id="collapse1" className="collapse accod_tab" aria-labelledby="headingTwo2270" data-parent="#accordion" style={ display == `collapse${key}` ? {display:"block"} : {display:"none"} }>
                                       <div className="card-body">
                                          <div className="row">
                                             <div className="col-md-4">
                                                <div className="d-md-flex align-items-center">
                                                   <div className="receipt-img">
                                                      <img className="order-book-img" src="/images/cfs-dumt-img.png" draggable="false"/>
                                                   </div>
                                                   <div className="receipt-txt">
                                                      <h4 className="order-type-collpse">{item.subscription_id}</h4>{item.question.substring(0,100)}
                                                   </div>
                                                </div>
                                             </div>
                                             <div className="col-md-2 mt-auto mb-auto collapse-order-data text-left">
                                                <p className="item-type-order">Item Type</p>
                                                <h3>{item.type}</h3>
                                             </div>
                                             <div className="col-md-1 mt-auto mb-auto collapse-order-data text-left">
                                                <p className="item-type-order">Amount</p>
                                                <h3>${(item.amount)}</h3>
                                             </div>
                                             <div className="col-md-2 mt-auto mb-auto collapse-order-data text-left">
                                                <p className="item-type-order">Status</p>
                                                <h3>{item.payment_status == "unpaid" ? "payment pending" : (item.payment_status=="half-paid") ? "50% paid" : "payment paid fully" }
                                                </h3> 
                                             </div>
                                             <div className="col-md-3 mt-auto mb-auto ml-auto">
                                                {item.payment_status == "paid-full" ? '' : <Link to={`/user/my-order-details/${item._id}`} className="order-sub-cancel" style={{pointerEvents: item.payment_status == "paid-full" ? 'none' : 'auto'}}>{item.payment_status == "unpaid" ? "Pay 50% in Advance" : (item.payment_status=="half-paid") ? "Pay remaining 50%" : "Payment Done" }</Link>}
                                                <Link to={`/user/my-order-details/${item._id}`} className="order-sub-cancel" >View Now</Link>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </td>
                              </tr>
                              )
                           })}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

<div className="modal fade " id="defaultModal" tabIndex="-1" role="dialog">
   <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content defaultModal1">
         <div className="modal-header">
            <div className="">
               <h4 className="title" id="defaultModalLabel">Receipt</h4>
            </div>
            <button type="button" className="btn btn-danger waves-effect" data-dismiss="modal">x</button>
         </div>
         <div className="modal-body">
            <div className="col-md-12">
               <div className="cus_modal profile_modal">
                  <div className="cus_modal_header clearfix">
                     <h5 className="title">
                        <a className="toggle">
                        <i className="fa fa-user-circle-o"></i> View Receipt
                        </a>
                     </h5>
                  </div>
                  <div className="collapse show" id="collapseExample">
                     <div className="cus_modal_body">
                        <div className="details_box assignment">
                           <div className="row">
                              <div className="col-md-6 aas_details">
                                 <div className="contain_data">
                                    <p className="detail_item head_ass">Order Id</p>
                                 </div>
                              </div>
                              <div className="col-md-6 aas_details">
                                 <div className="contain_data">
                                    <p className="detail_item head_ass">CFS20023_1_1998</p>
                                 </div>
                              </div>
                              <div className="col-md-6 aas_details">
                                 <div className="contain_data">
                                    <p className="detail_item">Item Type </p>
                                 </div>
                              </div>
                              <div className="col-md-6 aas_details">
                                 <div className="contain_data">
                                    <p className="detail_item">Assignment Help</p>
                                 </div>
                              </div>
                              <div className="col-md-6 aas_details">
                                 <div className="contain_data">
                                    <p className="detail_item">Amount </p>
                                 </div>
                              </div>
                              <div className="col-md-6 aas_details">
                                 <div className="contain_data">
                                    <p className="detail_item">$5.00</p>
                                 </div>
                              </div>
                              <div className="col-md-6 aas_details">
                                 <div className="contain_data">
                                    <p className="detail_item">Status </p>
                                 </div>
                              </div>
                              <div className="col-md-6 aas_details">
                                 <div className="contain_data">
                                    <p className="detail_item">Payment Pending</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <ul className="recipt_m">
                  <li><a href="#" className="btn ml-auto mt-0 mb-0 aafiate_v">Pay 50% in Advance </a></li>
                  <li><a href="#" className="btn ml-auto mt-0 mb-0 current_offer">View Now</a></li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</div>  
        </>
    )
}