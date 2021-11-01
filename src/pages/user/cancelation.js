import DashboardNavbar from '../../components/website/dashboard/dashboard-navbar'
import SideBar from '../../components/website/dashboard/sidebar'
import BlockHeader from '../../components/website/dashboard/block-header'
import { useEffect, useContext, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import {getUser} from '../../libs/profile'
import {AuthContext} from '../../context/AuthContext';
import { useQuery } from 'react-query'
import {cancelSubscription} from '../../libs/payment'

export default function Cancelation(){
    const { dispatch, state } = useContext(AuthContext);
    const session = state.isLoggedIn;
    const params = useParams();
    const history = useHistory();
    const [tab, setTab] = useState(null);
    const [dis, setDis] = useState("none");
    const [error, setError] = useState("");
    const [reason, setReason] = useState("");
    const [message, setMessage] = useState("");

    const { data: user, isLoading:userIsLoading, error:userError } = useQuery(['user-profile'], () => getUser({email:state.email}),{initialData: undefined,staleTime:Infinity, enabled: !!session})

    const showRadio = (t,event) => {
        setTab(t);
        setReason(event.target.value);
    }

    const cancel = () =>{
        if(reason == ""){
            setError('You need to select a reason')
            return
        }
        setDis('block')
    }

    const closeModal = () =>{
        setDis('none')
    }

    const cancelModal = async (cancel_at_cycle_end) => {
        // const user_Id = localStorage.getItem('_id');
        if(cancel_at_cycle_end == 0){
            dispatch({type: 'SUBSCRIBE'});
        }
        const data = cancelSubscription({subscribe_Id: params.sub_id, cancel_at_cycle_end: cancel_at_cycle_end, reason:reason, message:message ,user_Id: localStorage.getItem('_id')});
        closeModal()
        history.push(`/`);
    }

    const saveMessage = (e) => {
        setMessage(e.target.value)
    }

    useEffect(() => {
		let timerError = setTimeout(() => setError(''), 3000);
		return () => {
			clearTimeout(timerError);
		}
	}, [error])
    
    return(
        <>
        <DashboardNavbar data={user}/>
        <SideBar data={user}/>
        <section className="content user profile-page">
        <BlockHeader data={user} currentPage="Cancel Subscription"/>
            <div className="container-fluid">
                <div className="row clearfix mt-4">
                    <div className="col-md-12">
                        <div className="card student-list">
                        <div className="col-md-12  bg_color_textbooks py-4">
                            <p>Still, want to cancel? Why are you unsubscribing?</p>
                        </div>
                        <div className="col-md-10 ml-auto mr-auto text-center textbooks_title">
                            <h2>We are sorry to see you leave! What went wrong? Can we make it up to you?</h2>
                        </div>
                        <div className="body">
                            <div className="right_dash">
                                <div className="col-md-12 cancelation-block order-accoridan text-left">
                                    <h6></h6>
                                    <form name="cancelreason" method="post" action="">
                                    <ul id="accordion">
                                        <input type="hidden" name="id" value="2264"/>												
                                        <li><input type="radio" className="colleps_1"  name="issue" value="Cannot locate a textbook solution manual in our website?" onChange={(e)=>{showRadio(1,e)}}/>&nbsp;Cannot locate a textbook solution manual in our website?</li>
                                        <div className="other-reason"  id="textar2" style={{display: tab == 1 ? "block" : "none"}}>
                                            <div className="card-body">
                                                <div className=" col-md-12 heading_queastion">
                                                Please add the ISBN13. 
                                                We will upload the solutions manual within 6-12 hours.  
                                                </div>
                                                <div className="row pl_pr_15">
                                                <div className="col-md-6 mt-4">
                                                    <label>ISBN13 No.</label>
                                                    <input type="text" className="form-control" id="isbn" name="isbn" minLength="13" maxLength="13" placeholder="ISBN13 No" onChange={(e)=>{saveMessage(e)}}/>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <li><input type="radio" className="colleps_2"  name="issue" value="Cannot find your homework question in our website?" onChange={(e)=>{showRadio(2,e)}}/> Cannot find your homework question in our website? </li>
                                        <div className="other-reason"  id="textar3" style={{display: tab == 2 ? "block" : "none"}}>
                                            <div className="card-body">
                                                <div className=" col-md-12 heading_queastion">
                                                Please add the Question details. We will upload the solution within 2-4 hours.  
                                                </div>
                                                <div className="row pl_pr_15">
                                                <div className="col-md-12 mt-4">
                                                    <label>Select subject name </label>
                                                    <select className="form-control" id="hw_subject" name="hw_subject">
                                                        <option value=""> Select Subject</option>
                                                        <option value="1_15_551">Accounting</option>
                                                        <option value="2_17_110">Physics </option>
                                                        <option value="2_18_122">Biology </option>
                                                        <option value="2_20_87">Mathematics </option>
                                                        <option value="2_21_135">Earth Science </option>
                                                        <option value="2_22_126">Chemistry</option>
                                                        <option value="2_543_544">Medical / Nursing</option>
                                                        <option value="3_25_240">Finance</option>
                                                        <option value="4_27_269"> Chemical Engineering </option>
                                                        <option value="4_28_254"> Civil Engineering </option>
                                                        <option value="4_29_263"> Electrical Engineering</option>
                                                        <option value="4_202_247"> Mechanical Engineering</option>
                                                        <option value="5_30_310">Computer Science</option>
                                                        <option value="6_44_358">Humanities</option>
                                                        <option value="7_51_466">Economics</option>
                                                        <option value="8_60_414">Management</option>
                                                        <option value="9_62_523">Writing</option>
                                                        <option value="10_68_516">Statistics </option>
                                                    </select>
                                                    <input type="hidden" id="hw_subject2" name="hw_subject2"/>
                                                </div>
                                                <div className="col-md-12 mt-4">
                                                    <label>Add Question</label>
                                                    <textarea rows="5" id="hw_question" name="hw_question" className="form-control" placeholder="write or paste your question" style={{width:"100%"}} onChange={(e)=>{saveMessage(e)}}></textarea>
                                                </div>
                                                </div>
                                            </div>
                                            {error}                      </div>
                                        <li><input type="radio" required name="issue" value="Not satisfied with the services" onChange={(e)=>{showRadio(3,e)}}/> &nbsp;Not satisfied with the services</li>
                                        <li><input type="radio" required name="issue" value="I am pausing my subscription. I will be back!" onChange={(e)=>{showRadio(4,e)}}/> I am pausing my subscription. I will be back!</li>
                                        <li className="active-cancelation-block"><input type="radio" className="colleps_5" required name="issue" value="Other" onChange={(e)=>{showRadio(5,e)}}/>&nbsp;Other Reason </li>
                                        <div className="other-reason" id="textar" style={{display: tab == 5 ? "block" : "none"}}>
                                            <div className="card-body">
                                                <textarea rows="5" id="reason" name="reason" placeholder="Write Your Reason" onChange={(e)=>{saveMessage(e)}}></textarea>
                                            </div>
                                        </div>
                                    </ul>
                                    <h4>Are you sure that you want to cancel?</h4>
                                    <p>Once you cancel your subscription, you will no longer be able to access the Textbook Solutions Manual and Q&amp;As. Also, you will not be able to ask “50 new questions” every month</p>
                                    <span style={{color:"red"}}>{error}</span>
                                    <div className="continoue-btn">
                                        <button type="button" id="submitbtn" name="submit" className="subscontinoue-btn" onClick={cancel} >Cancel my subscription </button>
                                        {/* <button type="button" id="submitbtn2" name="submit22" className="subscontinoue-btn">Cancel my subscription Immediately</button> */}
                                        <div id="myModal" className="modal modalsbu123 can-modal" role="dialog" style={{display: `${dis}`}}>
                                            <div className="modal-dialog" style={{paddingTop: "100px"}}>
                                                
                                                <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal" onClick={closeModal}>×</button>
                                                    <h4 className="modal-title mt-0" id="modalTit">We will provide the solution manual within next 6-12 hours. Do you still Want to cancel the subscription?</h4>
                                                </div>
                                                <div className="modal-body hghgyt">
                                                <button type="button" id="submit2btn" name="submit2" className="btn btn-default dark_btn1" onClick={closeModal}>Okay, I'll Wait For the Solution Manual</button>
                                                    <button type="button" name="submit" className="btn btn-default"  onClick={()=>{cancelModal(0)}}>No, Cancel Immediately</button>
                                                    <button type="button" name="submit" className="btn btn-default"  onClick={()=>{cancelModal(1)}}>No, Cancel at the End of the Month</button>
                                                </div>
                                                {/* <div className="modal-footer">
                                                </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <Link to="/user/my-subs" className="KeepMySubscription-btn">I don’t want to cancel
                                        </Link>
                                    </div>
                                    </form>
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