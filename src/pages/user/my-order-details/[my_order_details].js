import DashboardNavbar from '../../../components/website/dashboard/dashboard-navbar'
import SideBar from '../../../components/website/dashboard/sidebar'
// import  OwlCarousel  from "../../../components/common/owl-carousel";
import  OwlCarousel from 'react-owl-carousel';
import { Link, useLocation } from 'react-router-dom';
import {getUser} from '../../../libs/profile'
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState, useContext } from 'react'
import {  saveAssignmentLocal, getAssignmentInfo } from '../../../libs/assignment';
import { useQuery } from 'react-query'
import Razorpay from '../../../components/common/razorpay'
import {Helmet} from 'react-helmet-async'
import useSocket from '../../../components/common/socket'
import {AuthContext} from '../../../context/AuthContext';

export default function MyOrderDetails(){
    const socket = useSocket(`${process.env.HOST}`);

    const { state } = useContext(AuthContext);
    const session = state.isLoggedIn;

    const [data, setData] = useState();
    const [discount, setDiscount] = useState();
    const [localDate, setLocalDate] = useState();

    const { data: user, isLoading: userIsLoading, error: userError } = useQuery(['user-profile'], () => getUser({email:state.email}),{initialData: undefined,staleTime:Infinity, enabled: !!session})

    const params = useParams();
    const history = useHistory();
    useEffect(() => {
        if (socket) {
            console.log("Socket Connected")
            socket.on('connection', () => {
                console.log(`I'm connected with the back-end`);
                alert(`I'm connected with the back-end`);
            });
        }
    }, [socket])

    useEffect(()=>{
        if(data){
            setDiscount((data.amount * 30)/100)
            var utcDate = data.deadline_date;  // ISO-8601 formatted date returned from server
            setLocalDate(new Date(utcDate));
        }
        
    },[data])

    useEffect(()=>{
        const saveLocalAssignmentToDB = async(data) => {
            const form = new FormData();
            form.append('question',data.question)
            form.append('subject',data.subject)
            form.append('subject_id',data.subject_id)
            form.append('sub_subject',data.sub_subject)
            form.append('sub_subject_id',data.sub_subject_id)
            form.append('file',data.image0)
            form.append('deadline_time',data.deadline_time)
            form.append('pages',data.pages)
            form.append('amount',(data.pages) *10)
            form.append('deadline_date',data.deadline_date)
            form.append('reference',data.reference)
            form.append('referenceString',data.referenceString)
            form.append('user_Id',state._id);
            form.append('email',state.email);
            form.append('type','ASSIGNMENT');
            form.append('link','/user/my-orders');
            const res =  await saveAssignmentLocal(form)
            history.push(`/user/my-order-details/${res.assign._id}`, undefined, { shallow: true })
            if(res.assign._id){
                getAssignmentData(res.assign._id,state._id)
            }
        }       
        
        const getAssignmentData = async(id, user_id) => {
            const res = await getAssignmentInfo(id, user_id);
            setData(res.assignment);
        }
        
        if(params.my_order_details==='local'){
            const data = {...JSON.parse(localStorage.getItem('assignmentData1')),...JSON.parse(localStorage.getItem('assignmentData2'))}
            saveLocalAssignmentToDB(data);
        }else{
            getAssignmentData(params.my_order_details, state?._id);
        }
    },[session])
    
    return(
        <>
            <Helmet>
                <link rel="icon" href="/favicon.ico" />
                <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
            </Helmet>
            <DashboardNavbar data={user}/>
            <SideBar data={user}/>
            <section className="content user profile-page">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 Referral_Points">
                            <h2>Hi,  Ashton Cox 
                            <small>Student, ipex College</small></h2>
                        </div>
                        <div className="col-lg-9 col-md-6 col-sm-12  ml-auto text-right">
                            <ul className="breadcrumb breadcrumb2 float-md-right pt-0 pb-0">
                            <li className="breadcrumb-item breadcrumb_cuspom"><Link to="/dashboard"> Dashboard  </Link></li>
                            <li className="breadcrumb-item active breadcrumb_cuspom"><Link to="/user/my-orders"> My Order</Link></li>
                            <li className="breadcrumb-item active breadcrumb_cuspom">  Order Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix mt-4">
                        <div className="col-xl-12">
                            <div className="banner banner-color mt-0 comp">
                            <div className="col-xl-3 col-lg-2 col-md-12">
                                <p>Trusted by students of : </p>
                            </div>
                            <div className="col-lg-9 col-md-8 col-sm-8">
                                {/* <div className="owl-carousel owl-theme slider1 slider_bg"> */}
                                <OwlCarousel  className="owl-carousel owl-theme slider1 slider_bg" loop autoplay={true} nav margin={10}>
                                    <div className="item">
                                        <div className="text_with-img text-center">
                                        <span><img src="/images/student1.png" className="img-fluid" alt=""/></span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="text_with-img text-center">
                                        <span><img src="/images/student2.png" className="img-fluid" alt=""/></span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="text_with-img text-center">
                                        <span><img src="/images/student3.png" className="img-fluid" alt=""/></span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="text_with-img text-center">
                                        <span><img src="/images/student4.png" className="img-fluid" alt=""/></span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="text_with-img text-center">
                                        <span><img src="/images/student5.png" className="img-fluid" alt=""/></span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="text_with-img text-center">
                                        <span><img src="/images/student1.png" className="img-fluid" alt=""/></span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="text_with-img text-center">
                                        <span><img src="/images/student2.png" className="img-fluid" alt=""/></span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="text_with-img text-center">
                                        <span><img src="/images/student3.png" className="img-fluid" alt=""/></span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="text_with-img text-center">
                                        <span><img src="/images/student1.png" className="img-fluid" alt=""/></span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="text_with-img text-center">
                                        <span><img src="/images/student1.png" className="img-fluid" alt=""/></span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="text_with-img text-center">
                                        <span><img src="/images/student1.png" className="img-fluid" alt=""/></span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="text_with-img text-center">
                                        <span><img src="/images/student1.png" className="img-fluid" alt=""/></span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="text_with-img text-center">
                                        <span><img src="/images/student1.png" className="img-fluid" alt=""/></span>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </OwlCarousel>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12">
                            <div className="row clearfix">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="cus_modal profile_modal">
                                        <div className="cus_modal_header clearfix">
                                            <h5 className="title">
                                                <a className="toggle">
                                                <i className="fa fa-user-circle-o"></i> Your Case Study Details
                                                </a>
                                            </h5>
                                        </div>
                                        <div className="collapse show" id="collapseExample">
                                            <div className="cus_modal_body">
                                                <p className="ass_head">Need Case Study before the deadline? No worries!We have got your back.</p>
                                                <div className="details_box assignment">
                                                    <div className="row">
                                                    <div className="col-md-6 aas_details">
                                                        <div className="contain_data">
                                                            <p className="detail_item head_ass">Order Id</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 aas_details">
                                                        <div className="contain_data">
                                                            <p className="detail_item head_ass">{data && data._id}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 aas_details">
                                                        <div className="contain_data">
                                                            <p className="detail_item">Manager Name  </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 aas_details">
                                                        <div className="contain_data">
                                                            <p className="detail_item"> {data && data.tutor_name}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 aas_details">
                                                        <div className="contain_data">
                                                            <p className="detail_item">	proposed Deadline </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 aas_details">
                                                        <div className="contain_data">
                                                            <p className="detail_item">{localDate?.toLocaleString()}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 aas_details">
                                                        <div className="contain_data">
                                                            <p className="detail_item">	No. Of Pages </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 aas_details">
                                                        <div className="contain_data">
                                                            <p className="detail_item">	{data && data.pages}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 aas_details">
                                                        <div className="contain_data">
                                                            <p className="detail_item">	Reference </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 aas_details">
                                                        <div className="contain_data">
                                                            <p className="detail_item">{data && data.referenceString}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 aas_details">
                                                        <div className="contain_data">
                                                            <p className="detail_item">	Status </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 aas_details">
                                                        <div className="contain_data">
                                                            <p className="detail_item"> { data && data.payment_status }</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 aas_details">
                                                        <div className="contain_data">
                                                            <p className="detail_item">	Subject  </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 aas_details">
                                                        <div className="contain_data">
                                                            <p className="detail_item"> { data && data.subject }</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 aas_details">
                                                        <div className="contain_data">
                                                            <p className="detail_item"> Sub-Subject  </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 aas_details">
                                                        <div className="contain_data">
                                                            <p className="detail_item"> { data && data.sub_subject }</p>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="cus_modal profile_modal hc_assignment casestudy">
                                        <div className="cus_modal_header clearfix">
                                            <h5 className="title">
                                                <a className="toggle">
                                                <i className="fa fa-id-card-o"></i> Our Case Study Feature
                                                </a>
                                            </h5>
                                        </div>
                                        <div className="collapse show" id="collapseExample1">
                                            <div className="cus_modal_body">
                                                <p>Exclusive we provide</p>
                                                <div className="details_box mt-1">
                                                    <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="profile_status_rib1 essay clearfix">
                                                            <p className="status1 completed essay"><i className="fa fa-book"></i> </p>
                                                            <h5 className="text_assign">Plagiarism Free Work</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="profile_status_rib1 essay clearfix">
                                                            <p className="status1 Phd_expert essay"><i className="fa fa-user"></i></p>
                                                            <h5 className="text_assign">PhD Experts & Writers</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                            <div className="profile_status_rib1 essay clearfix">
                                                                <p className="status1 Reference essay">
                                                                <i className="fa fa-user"></i>
                                                                </p>
                                                                <h5 className="text_assign">Proper Reference</h5>
                                                            </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="profile_status_rib1 essay clearfix">
                                                            <p className="status1 inreview essay"><i className="fa fa-spinner"></i></p>
                                                            <h5 className="text_assign">Best Price Guarantee</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="profile_status_rib1 essay clearfix">
                                                            <p className="status1 Phd_expert essay"><i className="fa fa-book"></i> </p>
                                                            <h5 className="text_assign">Turnitin Report</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="profile_status_rib1 essay clearfix">
                                                            <p className="status1 completed essay"><i className="fa fa-check"></i></p>
                                                            <h5 className="text_assign">Safe payment Option</h5>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 text-center col-sm-12 Marketing_Channel Thanks_lot">
                            { data && data.payment_status == "unpaid" ? <h2>Thanks a lot for using our services. Please make the payment so that we could quickly create an amazing Case Study for you</h2> :(data && data.payment_status == "half-paid") ? <h2>Thanks for the Advance payment! Our experts will create the assignment that will get you the A+ Grade</h2> : <h2>Your assignment is finished! Get your full assignment here:</h2>}
                        </div>
                    </div>
                </div>
                { data && data.payment_status == "paid-full" ? <></> :
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-md-12 col-lg-12 Your_Order_Status">
                            <div className="card">
                            <div className="header">
                                <h2><strong>Your Order</strong>  Status</h2>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-md-9 Total_cost_of_assignment">
                                        <ul className="new_friend_list list-unstyled row">
                                        <li className="col-lg-2 col-md-2 col-sm-6 col-4">
                                            <a href="#">
                                                <span className="number">${data && data.amount + discount  }</span>
                                                <h6 className="users_name Completed">Total cost of Case Study</h6>
                                            </a>
                                        </li>
                                        <li className="col-lg-2 col-md-2 col-sm-6 col-4">
                                            <a href="#">
                                                <span className="number">${discount}</span>
                                                <h6 className="users_name Rejected">Discount(30% OFF) </h6>
                                            </a>
                                        </li>
                                        <li className="col-lg-2 col-md-2 col-sm-6 col-4">
                                            <a href="#">
                                                <span className="number">${data && data.amount}</span>
                                                <h6 className="users_name Active">Net amount to be Paid   </h6>
                                            </a>
                                        </li>
                                        <li className="col-lg-2 col-md-2 col-sm-6 col-4">
                                            <a href="#">
                                                <span className="number">$0</span>
                                                <h6 className="users_name Pending">Coupon Discount Availed   </h6>
                                            </a>
                                        </li>
                                        <li className="col-lg-2 col-md-2 col-sm-6 col-4">
                                            <a href="#">
                                                <span className="number">${data && data.amount}</span>
                                                <h6 className="users_name">Amount to be paid in Total</h6>
                                            </a>
                                        </li>
                                        <li className="col-lg-2 col-md-2 col-sm-6 col-4">
                                            <a href="#">
                                                <span className="number">${data && (data.amount) * 50 /100}</span>
                                                <h6 className="users_name">{ data && data.payment_status == "unpaid" ? "Pay 50% in Advance" :(data && data.payment_status == "half-paid") ? "Pay Remaining 50%" : "Payment Already Done"}</h6>
                                            </a>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="col-lg-12 col-md-12 col-sm-12 Current_Status">
                                            <div className="text-center Earn_Referral Complete_Profile Pay_From_Wallet">
                                                <h5 className=" ml-auto Add_Money pay mt-2 mb-0"><span>Pay From Wallet </span></h5>
                                                {/* <a href="#" className="btn  ml-auto  pay Add_Money">
                                                <img src="/images/paypal.png" className="img-fluid" alt="paypal"/></a><br/> 
                                                <a href="#" className="btn ml-auto Add_Money">
                                                <img src="/images/razorpay.png" className="img-fluid" alt="razorpay"/></a> */}
                                                <Razorpay type="assignment" amt={data && (data.amount * 50)/100}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>}
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12">
                            <div className="row clearfix">
                            <div className="col-lg-4 col-md-6">
                                <div className="card top_counter Total_Revenu">
                                    <div className="body body_assignment_deliver">
                                        <div className="content float-left">
                                        <div className="text">Case Study Delivered   </div>
                                        <h5 className="">1000000  </h5>
                                        </div>
                                        <div className="icon float-right"><i className="zmdi zmdi-truck"></i> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card top_counter Marketing_Payouts">
                                    <div className="body body_assignment_deliver">
                                        <div className="content float-left">
                                        <div className="text">Happy Students  </div>
                                        <h5 className="">7200000   </h5>
                                        </div>
                                        <div className="icon float-right"><i className="zmdi zmdi-male"></i> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 dear">
                                <div className="card top_counter Total_Order">
                                    <div className="body body_assignment_deliver">
                                        <div className="content float-left">
                                        <div className="text">Student Rating  </div>
                                        <h5 className="">4.8/5</h5>
                                        </div>
                                        <div className="icon float-right"><i className="zmdi zmdi-star"></i> </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="row clearfix">
                            <div className="col-md-12 col-lg-6">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="cus_modal profile_modal payment_section payment_section2">
                                        <div className="cus_modal_header clearfix">
                                            <h5 className="title">
                                                <a className="toggle">
                                                Managment
                                                </a>
                                            </h5>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 Current_Status">
                                            <div className="body">
                                                <div className="text-center Earn_Referral mt-4 Complete_Profile">
                                                    <h4 className="m-t-2 Credits_Earned">Proceed by clicking</h4>
                                                    {/* <a href="#" className="btn  ml-auto Complete pay mt-2"><img src="/images/paypal.png" className="img-fluid" alt="paypal"/> </a>
                                                    or */}
                                                    <Razorpay type="assignment" amt={data && (data.amount * 50)/100}/>
                                                    {/*<a href="#" className="btn mt-4 mb-4  ml-auto Add_Money"><img src="/images/razorpay.png" className="img-fluid" alt="razorpay"/>  </a>
                                                    <br/>*/}
                                                    {/* <a href="#" className="btn  ml-auto Complete pay mt-2">Pay From Wallet </a> */}
                                                    <br/>
                                                    {/* <p className="mt-5">Lorem ilupsm please make the payment so that we could quickly create an amazing Case Study create an amazing Case Study for you
                                                    </p>
                                                    <p className="Jullia_Write">Jullia Write 12 Aug 2020 05:46AM</p> */}
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="card chat-app">
                                    <div className="chat">
                                        <div className="chat-header clearfix">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 Referral_Points">
                                                <img src="/images/avatar2.jpg" alt="avatar"/>
                                                <div className="chat-about">
                                                    <div className="chat-with">Aiden Chavez</div>
                                                    <div className="chat-num-messages">already 8 messages</div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 Earn_Referral ml-auto text-right">
                                                <div className="input-group mb-0 mt-1">
                                                    <input type="text" className="form-control" placeholder="Search..."/>
                                                    <span className="input-group-addon"><i className="zmdi zmdi-search"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="chat-history xl-slategray1">
                                        <ul className="m-b-0">
                                            <li className="clearfix">
                                                <div className="message-data text-right"> <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp; <span className="message-data-name" >Charlotte</span> <i className="zmdi zmdi-circle me"></i> </div>
                                                <div className="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                                            </li>
                                            <li>
                                                <div className="message-data">
                                                    <span className="message-data-name"><i className="zmdi zmdi-circle online"></i> Aiden</span> <span className="message-data-time">10:12 AM, Today</span>
                                                </div>
                                                <div className="message my-message">
                                                    <p>Are we meeting today? Project has been already finished and I have results to show you.</p>
                                                    <div className="row">
                                                    <div className="col-sm-6 col-lg-4"><a href="#"><img src="/images/image2.jpg" alt="" className="img-fluid img-thumbnail"/></a> </div>
                                                    <div className="col-sm-6 col-lg-4"><a href="#"> <img src="/images/image3.jpg" alt="" className="img-fluid img-thumbnail"/></a> </div>
                                                    <div className="col-sm-6 col-lg-4"><a href="#"> <img src="/images/image4.jpg" alt="" className="img-fluid img-thumbnail"/> </a> </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>                                    
                                                <i className="zmdi zmdi-circle online"></i> <i className="zmdi zmdi-circle online" style={{color: "#AED2A6"}}></i> <i className="zmdi zmdi-circle online" style={{color:"#DAE9DA"}}></i> 
                                            </li>
                                        </ul>
                                        </div>
                                        <div className="chat-message clearfix pt-0 pb-0">
                                        <div className="input-group p-t-15">
                                            <input type="text" className="form-control" placeholder="Enter text here..."/>
                                            <span className="input-group-addon">
                                            <i className="zmdi zmdi-mail-send"></i>
                                            </span>
                                        </div>
                                        <a href="#" className="btn btn-raised btn-warning btn-round"><i className="zmdi zmdi-camera"></i></a>
                                        <a href="#" className="btn btn-raised btn-info btn-round"><i className="zmdi zmdi-file-text"></i></a>                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
        </>
    )
}