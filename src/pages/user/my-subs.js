import DashboardNavbar from '../../components/website/dashboard/dashboard-navbar'
import SideBar from '../../components/website/dashboard/sidebar'
import {useState, useEffect,useContext } from 'react'
import { Link } from 'react-router-dom';
import BlockHeader from '../../components/website/dashboard/block-header';
import { useQuery } from 'react-query'
import {getUser} from '../../libs/profile'
import {getMySubscription} from '../../libs/question'
import moment from 'moment'
import {AuthContext} from '../../context/AuthContext';
import BuyBookSub from '../../components/common/buy-book-sub'

export default function MySubs(){
    const { state } = useContext(AuthContext);
    const session = state.isLoggedIn;

    const [display, setDisplay] = useState();
    const { data: user, isLoading: userIsLoading, error: userError } = useQuery(['user-profile'], () => getUser({email:state.email}),{initialData: undefined,staleTime:Infinity, enabled: !!session})
    const { data: subscription, isLoading: textbooksIsLoading, error: textbooksError } = useQuery(['my-subscription'], () => getMySubscription({user_Id:state._id}),{staleTime:Infinity, enabled: !!session})

    const openCollapse = (data) => {
        setDisplay(data);
    }


    return(
        <>
        <DashboardNavbar data={user}/>
        <SideBar data={user}/>
        <section className="content user profile-page">
            <BlockHeader data={user} currentPage="Subscription Details"/>
            <div className="container-fluid">
                <div className="row clearfix mt-4">
                    <div className="col-md-12">
                        <div className="card student-list">
                        <div className="header">
                            <h2><strong>My</strong> Subscription</h2>
                        </div>
                        <div className="body">
                            <div className="table-responsive" id="accordion">
                                <table className="table table-hover m-b-0 my-order-new my_subscrption_table space2">
                                    <thead>
                                    <tr className="table_title order">
                                        <th className="w-10">S.No</th>
                                        <th className="w-15">Order ID</th>
                                        <th className="w-15">Start Date</th>
                                        {/* <th className="w-20">End Date</th> */}
                                        <th className="w-20">Action</th>
                                        <th className="w-20">Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {subscription ? subscription.transactions.map((item,key)=>{
                                            if (item.type == "subscription"){
                                                return(
                                                    <tr key={key}>
                                                        <td colSpan="6" style={{padding:"0px"}}>
                                                            <div className="card-header pl-0 pr-0">
                                                                <table style={{width: "100%"}}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="w-10"><span className="">{key}</span></td>
                                                                        <td className="w-15 "><span className="textbook-t">{item.subscription_id}</span></td>
                                                                        <td className="w-15">{item.SubscribeDate.substring(0,10)}</td>
                                                                        {/* <td className="w-20"></td> */}
                                                                        <td className="w-20">
                                                                            <button className="btn btn-link collapsed view-reciept-btn" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1" onClick={()=>{openCollapse(`collapse${key}`)}}>
                                                                            View Receipt
                                                                            </button>
                                                                        </td>
                                                                        <td className="green-aci w-20">{item.subscription_status}</td>
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
                                                                            {/* <img className="order-book-img" src="/images/cfs-dumt-img.png" draggable="false"/> */}
                                                                            </div>
                                                                            <div className="receipt-txt">
                                                                            <h4 className="order-type-collpse">{item.payment_id}</h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-2 mt-auto mb-auto collapse-order-data text-left">
                                                                        <p className="item-type-order">Item Type</p>
                                                                        <h3>{item.type}</h3>
                                                                    </div>
                                                                    <div className="col-md-1 mt-auto mb-auto collapse-order-data text-left">
                                                                        <p className="item-type-order">Amount</p>
                                                                        <h3>$7.00</h3>
                                                                    </div>
                                                                    <div className="col-md-2 mt-auto mb-auto collapse-order-data text-left">
                                                                        <p className="item-type-order">Status</p>
                                                                        <h3>{item.subscription_status}
                                                                        </h3>
                                                                    </div>
                                                                    <div className="col-md-3 mt-auto mb-auto ml-auto">
                                                                        {item.subscription_status == 'active' ? <Link to={`/user/cancelation/${item.subscription_id}`} className="order-sub-cancel">Cancel Subscription Pack</Link> : <BuyBookSub classname="" text="Buy Subscription"/> }
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            }  
                                        }) 
                                        : 
                                        <tr>
                                            <td colSpan="6" style={{padding:"0px"}}>
                                                <div className="card-header pl-0 pr-0">
                                                    <table style={{width: "100%"}}>
                                                        <tbody>
                                                            <tr>
                                                                <BuyBookSub classname="" text="Buy Subscription"/>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        }
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
                            <div className="collapse show">
                                <div className="cus_modal_body">
                                    <div className="details_box assignment">
                                    <div className="row">
                                        <div className="col-md-6 aas_details">
                                            <div className="contain_data">
                                                <p className="detail_item">Item Type </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 aas_details">
                                            <div className="contain_data">
                                                <p className="detail_item">Monthly Membership( <strong>Renew On 31/01/2022  </strong>)</p>
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

                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="recipt_m">
                            <li><Link to="/user/cancelation" className="btn ml-auto mt-0 mb-0 cancel-sub">Cancel Subscription Pack</Link></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}