import DashboardNavbar from '../../components/website/dashboard/dashboard-navbar'
import SideBar from '../../components/website/dashboard/sidebar'
import BlockHeader from '../../components/website/dashboard/block-header'
import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import {getUser} from '../../libs/profile'
import {AuthContext} from '../../context/AuthContext';

export default function Cancelation(){
    const { state } = useContext(AuthContext);
    const session = state.isLoggedIn;

    return(
        <>
        <DashboardNavbar/>
        <SideBar/>
        <section className="content user profile-page">
            <BlockHeader/>
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
                                        <li><input type="radio" className="colleps_1" required name="issue" value="Cannot locate a textbook solution manual in our website?"/>&nbsp;Cannot locate a textbook solution manual in our website?</li>
                                        <div className="other-reason" required id="textar2" style={{display: "none"}}>
                                            <div className="card-body">
                                                <div className=" col-md-12 heading_queastion">
                                                Please add the ISBN13. 
                                                We will upload the solutions manual within 6-12 hours.  
                                                </div>
                                                <div className="row pl_pr_15">
                                                <div className="col-md-6 mt-4">
                                                    <label>ISBN13 No.</label>
                                                    <input type="text" className="form-control" id="isbn" name="isbn" minLength="13" maxLength="13" placeholder="ISBN13 No"/>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <li><input type="radio" className="colleps_2" required name="issue" value="Cannot find your homework question in our website?"/> Cannot find your homework question in our website? </li>
                                        <div className="other-reason" required id="textar3" style={{display: "none"}}>
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
                                                    <textarea rows="5" id="hw_question" name="hw_question" className="form-control" placeholder="write or paste your question" style={{width:"100%"}}></textarea>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <li><input type="radio" required name="issue" value="Not satisfied with the services"/> &nbsp;Not satisfied with the services</li>
                                        <li><input type="radio" required name="issue" value="I am pausing my subscription. I will be back!"/> I am pausing my subscription. I will be back!</li>
                                        <li className="active-cancelation-block"><input type="radio" className="colleps_5" required name="issue" value="Other"/>&nbsp;Other Reason </li>
                                        <div className="other-reason" required id="textar" style={{display: "none"}}>
                                            <div className="card-body">
                                                <textarea rows="5" id="reason" name="reason" placeholder="Write Your Reason" required></textarea>
                                            </div>
                                        </div>
                                    </ul>
                                    <h4>Are you sure that you want to cancel?</h4>
                                    <p>Once you cancel your subscription, you will no longer be able to access the Textbook Solutions Manual and Q&amp;As. Also, you will not be able to ask “50 new questions” every month</p>
                                    <div className="continoue-btn">
                                        <button type="submit" id="submitbtn" name="submit" className="subscontinoue-btn">Cancel my subscription </button>
                                        <button type="button" id="submitbtn2" style={{display:"none"}} name="submit22" className="subscontinoue-btn">Cancel my subscription</button>
                                       
                                        <div id="myModal" className="modal fade modalsbu123" role="dialog">
                                            <div className="modal-dialog">
                                                
                                                <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                                    <h4 className="modal-title mt-0" id="modalTit">We will provide the solution manual within next 6-12 hours. Do you still Want to cancel the subscription?</h4>
                                                </div>
                                                <div className="modal-body">
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="submit" id="submit2btn" name="submit2" className="btn btn-default dark_btn1">Okay, I'll Wait For the Solution Manual</button>
                                                    <button type="submit" name="submit" className="btn btn-default">No, I Want to Cancel</button>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="KeepMySubscription-btn">I don’t want to cancel
                                        </a>
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