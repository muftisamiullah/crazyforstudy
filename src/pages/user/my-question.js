import { Link } from 'react-router-dom';
import DashboardNavbar from '../../components/website/dashboard/dashboard-navbar'
import SideBar from '../../components/website/dashboard/sidebar'
import BlockHeader from '../../components/website/dashboard/block-header'
import { useQuery } from 'react-query'
import {getUser} from '../../libs/profile'
import {getQuestions} from '../../libs/question'
import {useEffect, useState, useContext,React} from 'react'
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
   const [hashes, setHashes ] = useState('');
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

   useEffect(()=>{
      const hash = history.location.hash;
      const hash1 = hash.slice(1);
      setHashes(hash1)
      var elmnt = document.getElementById(hash1);
      if(elmnt){
         elmnt.scrollIntoView();
      }
   },[questions]);

   return(
      <>
         <DashboardNavbar data={user}/>
         <SideBar data={user}/>
         <section className="content user profile-page">
            <BlockHeader data={user} currentPage="My Questions"/>
            {/* <div className="container-fluid">
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
                              <div key={key} id={"ASK50"+item._id} className={"hello-ques " + (hashes == "ASK50"+item._id ?  "my-ques" : "")}>
                                 <div className="col-md-12 nav_account1 mt-3 pt-3 bdr_top pd_lr">
                                    <ul className="ul-old mb-0">
                                    <li>Subject: <a href="" className="twzt">{capitalize(item.subject)} </a><i className="fa fa-angle-right mr-1"></i></li>
                                       <li> <a href="" className="twzt"> { capitalize(item.sub_subject)} </a></li>
                                       {item.flag == "rejected" ? <div className="rejected"><p>Rejected</p></div> : (item.flag == "pending" ? <><div className="pending"><p>Pending</p></div><div id={`${item._id}_timer`} className="timer-ask">{calculateTime(`${item._id}_timer`, localDate.getTime(), 'time-over')}</div></> : <div className="answered"><p>Answered</p></div>)  }
                                       <li></li>
                                    </ul>
                                    <ul className="">
                                       <li className="li-new">
                                          {askedDate.toLocaleString()}
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="col-md-12 nav_account1 pd_lr">
                                    <h4 className="ans_s">Question:</h4>
                                    <p><span dangerouslySetInnerHTML={{__html: item.question}}></span>{item.image0 && <img src={imageUrl+item.image0} className="mr-5 mb-2" style={{"height":"200px", "width":"400px"}}/>}{item.image1 && <img src={imageUrl + item.image1} style={{"height":"200px", "width":"400px"}}/>}</p>
                                 </div>
                                 <div className="col-md-12 nav_account1 answer_1 mt-3 mb-5 pd_lr">
                                    {item.flag == "answered" ? 
                                    <>
                                       <h4 className="ans_s"><i className="fa fa-check-circle"></i> Answer and Explanation:</h4>
                                       {item.shortanswer && <p><strong>Short Answer:</strong>
                                       <span dangerouslySetInnerHTML={{__html: item.shortanswer}}></span></p>}
                                       {item.completeanswer && <p><strong>Complete Answer:</strong>
                                       <span dangerouslySetInnerHTML={{__html: item.completeanswer}}></span></p>}
                                    </>
                                   : (item.flag == "pending" ? <p><strong>Answer: </strong></p> : <p><strong>Comments: </strong><span dangerouslySetInnerHTML={{__html: item.rejectionReason}}></span><br/><span dangerouslySetInnerHTML={{__html: item.rejectionReason1}}></span></p>)}
                                 </div>
                              </div>
                           )
                        })}</>}
                     </div>
                  </div>
               </div>
            </div> */}

            <div class="container-fluid">
               <div class="row clearfix mt-4">
                  <div class="col-md-12">
                     <div class="card student-list pb-5">
                        <div class="col-md-12 Askdsft Askdsft2"> 
                           <ul>
                              <li><Link className="active" to="/user/ask-a-question"><img src="/images/question-icon.png" className="img-fluid"/> Ask a Question</Link></li>
                              <li><Link className="" to="/user/my-question"><img src="/images/status-icon.png" className="img-fluid"/> My Question Status</Link></li> 
                           </ul>
                        </div>
                        
                        <div className="col-md-12 mt-4 your_subscription pd_lr">
                           {(!localStorage.getItem('Subscribe')) 
                              ? 
                              <h2>Your Subscription has expired.<Link to={'/paynow'}><button className="subscription-reciept-btn">Activate Subscription</button></Link></h2>
                              :
                              ""
                           }
                        </div>

                        <div class="col-md-12 filter_title mt-3 pt-3">
                           <div class="filter_bg4"> 
                                 <div class="form-check-inline">
                                    <label class="form-check-label filter_icon_text">
                                       <i class="fa fa-filter"></i>  Filter By 
                                    </label>
                                 </div>
                                 <label class="rdio-bnt"> All Questions
                                    <input type="radio" className="form-check-input" id="radio1" name="optradio" value="all" onChange={setQuestionFlag} defaultChecked={flag === 'all' ? 'checked': ""}/>
                                    <span class="checkmark"></span>
                                 </label>
                                 <label class="rdio-bnt"> Pending Questions
                                 <input type="radio" className="form-check-input" id="radio2" name="optradio" value="pending" onChange={setQuestionFlag} defaultChecked={flag === 'pending' ? 'checked': ""}/>
                                    <span class="checkmark"></span>
                                 </label>
                                 <label class="rdio-bnt"> Answered Questions
                                 <input type="radio" className="form-check-input" id="radio3" name="optradio" value="answered" onChange={setQuestionFlag} defaultChecked={flag === 'answered' ? 'checked': ""}/>
                                    <span class="checkmark"></span>
                                 </label>
                                 <label class="rdio-bnt"> Rejected Questions
                                 <input type="radio" className="form-check-input" id="radio4" name="optradio" value="rejected" onChange={setQuestionFlag} defaultChecked={flag === 'rejected' ? 'checked': ""}/>
                                    <span class="checkmark"></span>
                                 </label> 
                              </div>
                           </div>
                           {questionsIsLoading 
                              ? 
                                 <span className="text-center">loading, please wait. ..</span> 
                              : 
                              <>
                                 {questions && questions.data.map((item, key)=>{
                                    const askedDate = new Date(item.created_at);
                                    // if( !item.shortanswer || item.shortanswer === '' || item.shortanswer == "undefined" && !item.completeanswer || item.completeanswer  === '' || item.completeanswer == "undefined" ){}
                                    var utcDate = item.created_at;  // ISO-8601 formatted date returned from server
                                    var localDate = new Date(utcDate);
                                    var currentTime = new Date();
                                    let title = item.title;

                                    return(
                                       <div class="col-md-12" key={key} id={"ASK50"+item._id}>
                                          <div class="qndv2">
                                             <div class="row">
                                                <div class="col-md-6 nav_account1">
                                                   <ul class="subject_lis1">
                                                      <li>Subject:</li>
                                                      <li><a href="">{capitalize(item.subject)}</a> <i class="fa fa-angle-right"></i></li>
                                                      <li><a href="">{capitalize(item.sub_subject)}</a></li> 
                                                   </ul>
                                                </div>
                                                {/* {item.flag == "rejected" ? <div className="rejected"><p>Rejected</p></div> : (item.flag == "pending" ? <><div className="pending"><p>Pending</p></div><div id={`${item._id}_timer`} className="timer-ask">{calculateTime(`${item._id}_timer`, localDate.getTime(), 'time-over')}</div></> : <div className="answered"><p>Answered</p></div>)  } */}

                                                <div class={"col-md-6 text-right timstat1 " + (item.flag === "rejected" ? "timstat3" : (item.flag === "pending" ? "timstat4" : "timstat2"))}>
                                                   <ul>
                                                      <li>{askedDate.toLocaleString()}</li>
                                                      <li>Status:</li>
                                                      <li>{capitalize(item.flag)}</li>
                                                   </ul>
                                                </div>

                                                <div class="col-md-9 qusb5">
                                                   <h2><span><i class="fa fa-question-circle"></i> Question:</span> <span dangerouslySetInnerHTML={{__html: item.question}} className="inside-span"></span></h2>
                                                </div>
                                                <div class="col-md-3 text-right Time-over">
                                                   {item.flag == "pending" 
                                                      ? 
                                                         <button>
                                                            <span id={`${item._id}_timer`} className="timer-ask">{calculateTime(`${item._id}_timer`, localDate.getTime(), 'Time-over')}</span>
                                                         </button> 
                                                      :
                                                         ""
                                                   }
                                                </div>
                                       
                                                <div class="col-md-12">
                                                   <div class="asw3e3">
                                                      <ul>
                                                         <li>
                                                            <div class="ans_ic">
                                                              
                                                               {item.flag == "answered" ? <><img src="/images/a-icon1.png" class="img-fluid" alt="ans"/> Complete Answer:</> : (item.flag == "pending" ? "" : "Comments:")}
                                                            </div>
                                                         </li>
                                                         <li>
                                                         {item.flag == "answered" ? 
                                                            <>
                                                               {item.shortanswer ? <span dangerouslySetInnerHTML={{__html: item.shortanswer}}></span>: ""}
                                                               {item.completeanswer ? <span dangerouslySetInnerHTML={{__html: item.completeanswer}}></span>: ""}
                                                            </>
                                                         : (item.flag == "pending" 
                                                               ? 
                                                               ""
                                                               :
                                                               <>
                                                                  <span dangerouslySetInnerHTML={{__html: item.rejectionReason}}></span><br/>
                                                                  <span dangerouslySetInnerHTML={{__html: item.rejectionReason1}}></span>
                                                               </>)}


                                                         </li>
                                                      </ul>
                                                   </div>
                                                </div>
                                       
                                             </div>
                                          </div>
                                       </div>
                                    )
                                 })}
                              </>
                           }
                        </div>
                     </div>
                  </div>
               </div>
         </section>
      </>
    )
}