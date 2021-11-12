import { Link } from 'react-router-dom';
import DashboardNavbar from '../../components/website/dashboard/dashboard-navbar'
import SideBar from '../../components/website/dashboard/sidebar'
import BlockHeader from '../../components/website/dashboard/block-header'
import { useQuery } from 'react-query'
import {getUser} from '../../libs/profile'
import {getQuestions} from '../../libs/question'
import {useEffect, useState, useContext} from 'react'
import {AuthContext} from '../../context/AuthContext';
import { imageUrl } from '../../config/config'
import { capitalize, calculateTime } from '../../components/common/make-slug'
import Paynow from '../../pages/paynow';
import { useHistory } from 'react-router-dom';

export default function MyQuestion(){
   const { state } = useContext(AuthContext);
   const history = useHistory();
   const session = state.isLoggedIn;
   const [ flag, setFlag ] = useState('all');
   const [display, setDisplay ] = useState('none');
   const { data: user, isLoading:userIsLoading, error:userError } = useQuery(['user-profile'], () => getUser({email:state.email}),{initialData: undefined,staleTime:Infinity, enabled: !!session})
   const { data: questions, isLoading:questionsIsLoading, error:questionsError } = useQuery([`user-questions-${flag}`], () => getQuestions({user_Id: state._id, type: 'QA'}, flag),{staleTime:Infinity, enabled: !!session})
   
   const setFilter = () => {
      if(display == 'none'){
         setDisplay('block')
      }else{
         setDisplay('none')
      }
   }

   const setQuestionFlag = (e) => {
      setFlag(e.target.value)
   }

   //timer creation from here


   if(state.Subscribe == "false"){
      history.push('/paynow')
   }

   return(
      <>
         <DashboardNavbar data={user}/>
         <SideBar data={user}/>
         <section className="content user profile-page">
            <BlockHeader data={user} currentPage="My Questions"/>
            <div className="container-fluid">
               <div className="row clearfix mt-4">
                  <div className="col-md-12">
                     <div className="card student-list">
                        <div className="col-md-12 pt-3" style={{boxShadow: "-1px 3px 6px #f4750436"}}>
                           <div className="row page-nav-menu-row">
                              <div className="col-md-6 text-right">
                                 <Link to="/user/ask-a-question" className="font-weight-bold page-nav-menu" >Ask a Question</Link>
                              </div>
                              <div className="col-md-6 text-left">
                                 <a className="active-nav  font-weight-bold page-nav-menu" href="#">My Question Status</a>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-12 mt-4 your_subscription pd_lr">
                           {(!localStorage.getItem('Subscribe')) ? <h2>Your Subscription has expired.<Link to={'/paynow'}><button className="subscription-reciept-btn">Activate Subscription</button></Link></h2>:""}
                        </div>
                        {questionsIsLoading ? <span className="text-center">loading, please wait. ..</span> : <>
                        <div className="col-md-12 filter_title mt-3 pt-3 bdr_top pd_lr inline-bb">
                           <p><span onClick={setFilter}><i className="fa fa-filter"></i>  Filter By </span></p>
                           <form style={{display:`${display}`}}>
                              <div className="form-check-inline">
                                 <label className="form-check-label filter_icon_text">
                                 <i className="fa fa-filter"></i>  Filter By 
                                 </label>
                              </div>
                              <div className="form-check-inline">
                                 <label className="form-check-label" htmlFor="radio1">
                                 <input type="radio" className="form-check-input" id="radio1" name="optradio" value="all" onChange={setQuestionFlag} defaultChecked={flag === 'all' ? 'checked': ""}/> All Question 
                                 </label>
                              </div>
                              <div className="form-check-inline">
                                 <label className="form-check-label" htmlFor="radio2">
                                 <input type="radio" className="form-check-input" id="radio2" name="optradio" value="pending" onChange={setQuestionFlag} defaultChecked={flag === 'pending' ? 'checked': ""}/> Pending Question  
                                 </label>
                              </div>
                              <div className="form-check-inline">
                                 <label className="form-check-label" htmlFor="radio3">
                                 <input type="radio" className="form-check-input" id="radio3" name="optradio" value="answered" onChange={setQuestionFlag} defaultChecked={flag === 'answered' ? 'checked': ""}/> Answered Question  
                                 </label>
                              </div>
                              <div className="form-check-inline">
                                 <label className="form-check-label" htmlFor="radio4">
                                 <input type="radio" className="form-check-input" id="radio4" name="optradio" value="rejected" onChange={setQuestionFlag} defaultChecked={flag === 'rejected' ? 'checked': ""}/> Rejected Question       
                                 </label>
                              </div>
                           </form>
                        </div>
                        {questions && questions.data.map((item, key)=>{
                           const askedDate = new Date(item.created_at);
                           if( !item.shortanswer || item.shortanswer === '' || item.shortanswer == "undefined" && !item.completeanswer || item.completeanswer  === '' || item.completeanswer == "undefined" ){
                              
                           }
                           var utcDate = item.created_at;  // ISO-8601 formatted date returned from server
                           var localDate = new Date(utcDate);
                           var currentTime = new Date();
                           let title = item.title;

                           return(
                              <span key={key}>
                                 <div className="col-md-12 nav_account1 mt-3 pt-3 bdr_top pd_lr">
                                    <ul className="ul-old mb-0">
                                    <li>Subject: <a href="" className="twzt">{capitalize(item.subject)} </a><i className="fa fa-angle-right mr-1"></i></li>
                                       <li> <a href="" className="twzt"> { capitalize(item.sub_subject)} </a></li>
                                       {/* <li><a href="">Financial Analysis</a></li> */}
                                       {item.flag == "rejected" ? <div className="rejected"><p>Rejected</p></div> : (item.flag == "pending" ? <><div className="pending"><p>Pending</p></div><div id={`${item.type+key}`} className="timer-ask">{currentTime < (localDate.getTime() + 14400000) ? calculateTime(item.type + key, localDate.getTime()) : 'time-over'}</div></> : <div className="answered"><p>Answered</p></div>)  }
                                       {/* <div className="rejected"><p>Rejected</p></div>
                                       <div className="pending"><p>Pending</p></div> */}
                                       <li></li>
                                    </ul>
                                    <ul className="">
                                       <li className="li-new">
                                          {askedDate.toLocaleString()}
                                       </li>
                                    </ul>
                                 </div>
                                 {/* <div className="col-md-12 nav_account1 mt-3 pt-3 pd_lr">
                                    <h2>Ons left for you to ask before the end of the cycleons left</h2>
                                 </div> */}
                                 {/* <div className="col-md-12 nav_account1 mt-3 pt-3 bdr_top pd_lr">
                                    <button className="btn" id="like"><i className="fa fa-thumbs-up fa-lg" aria-hidden="true"></i> like</button>
                                    <button className="btn" id="deslike"><i className="fa fa-thumbs-down fa-lg" aria-hidden="true"></i> deslike</button>
                                 </div> */}
                                 <div className="col-md-12 nav_account1 pd_lr">
                                    <h4 className="ans_s">Question:</h4>
                                    <p><span dangerouslySetInnerHTML={{__html: item.question}}></span>{item.image0 && <img src={imageUrl+item.image0} className="mr-5 mb-2" style={{"height":"200px", "width":"400px"}}/>}{item.image1 && <img src={imageUrl + item.image1} style={{"height":"200px", "width":"400px"}}/>}</p>
                                 </div>
                                 <div className="col-md-12 nav_account1 answer_1 mt-3 mb-5 pd_lr">
                                    {item.flag == "answered" ? 
                                    <>
                                       <h4 className="ans_s"><i className="fa fa-check-circle"></i> Answer and Explanation:</h4>
                                       <p><><strong>Answer:</strong>
                                       {/* <span dangerouslySetInnerHTML={{__html: item.shortanswer}}></span> */}
                                       <span dangerouslySetInnerHTML={{__html: item.completeanswer}}></span></></p>
                                    </>
                                   : (item.flag == "pending" ? <p><strong>Answer: </strong></p> : <p><strong>Comments: </strong><span dangerouslySetInnerHTML={{__html: item.rejectionReason}}></span><br/><span dangerouslySetInnerHTML={{__html: item.rejectionReason1}}></span></p>)}
                                 </div>
                              </span>
                           )
                        })}</>}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
    )
}