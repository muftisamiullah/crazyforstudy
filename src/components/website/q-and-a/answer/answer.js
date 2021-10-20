import parse from 'html-react-parser';
import striptags from 'striptags';
import { useState, useContext, useEffect, useRef } from 'react';
import {AuthContext} from '../../../../context/AuthContext';
import { Link, useParams } from 'react-router-dom';
import { askForSolutionQANDA } from '../../../../libs/question'
import { useQueryClient } from 'react-query'

export default function Answer({...props}){
    const { state } = useContext(AuthContext);
    const session = state.isLoggedIn;
    const params = useParams();
    const queryClient = useQueryClient()

    const [display1, setDisplay1] = useState(true);
    const [display2, setDisplay2] = useState(true);
    const [loc, setLoc] = useState(true);
    const [answerRequested, setAnswerRequested] = useState();

    const showAll1 = () => {
        if(display1){
            setDisplay1(false)
        }else{
            setDisplay1(true)
        }
    }

    const showAll2 = () => {
        if(display2){
            setDisplay2(false)
        }else{
            setDisplay2(true)
        }
    }

    useEffect(()=>{
        if(state.isLoggedIn != "true"){
            setLoc('/auth/signin?callbackUrl='+`${process.env.REACT_APP_URL}`+'/q-and-a/'+params.subject)
        }else if(state.isLoggedIn == "true" && state.Subscribe != "true"){
            setLoc('/paynow')
        }
    },[]);

    useEffect(()=>{
        if (props.data && props.data.user_Id) {
            setAnswerRequested(true);

            // let fourHours = 60 * 60 * 4;
            // let localTimeFull = new Date(props.data.created_at);
            // let localTime = new Date(props.data.created_at).getTime();
            // console.log(localTime, "- local time -", localTimeFull);
            let addedTwoHours = new Date(new Date(props.data.created_at).getTime() + 4*60*60*1000).getTime();
            // console.log(addedTwoHours, "- local time added 2 hrs");
            // let currentTimeFull = new Date()
            let currentTime = new Date().getTime()
            // console.log(currentTime, "- current Time -", currentTimeFull);
            let difference  = ((addedTwoHours - currentTime) / 1000).toFixed(0) ;
            if(difference <= 0){
                // console.log(difference, "difference")
                // console.log(fourHours, "fourHours")
                setTotalSeconds(0)
                startTimer(0);
            }else{
                // console.log(difference, "difference else")
                // console.log(fourHours, "fourHours else")
                setTotalSeconds(difference)
                startTimer(difference);
            }

        } else {
            setAnswerRequested(false);
        }
    },[props?.data]);

    const requestAnswer = async () => {
        if(state.Subscribe === "true" && props.data.answer == undefined){
            const res =  await askForSolutionQANDA(props.data._id, state.email, state._id)
            if(res){
                queryClient.invalidateQueries([props.data.old_qid]);
            }
        }
    }

    //timer creation from here
    const [timer, setTimer] = useState('00:00:00');
    const [totalSeconds, setTotalSeconds] = useState();
    
    function startTimer(duration) {
        var timer = duration, hours, minutes, seconds;
        setInterval(function () {
            hours   = parseInt(timer / (60 * 60), 10)
            minutes = parseInt((timer / 60) % 60, 10)
            seconds = parseInt(timer % 60, 10);
                        
            hours 	= hours 	< 10 ? "0" + hours 	 : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            setTimer(hours + ":" + minutes + ":" + seconds);
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    return(
        <section className="section font_sz text_justify pt-5 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pb-4">
                        <div className="Qtion_n_Stion_text">
                            <h3 className="mb-4">
                                <span>Question and Solution </span>
                            </h3>
                            <div className="read_more_q">
                                <span className="qustion_mark">Q:</span>  
                                <div className="read_more_text">
                                    {props.data && props.data.question && props?.data?.question.includes('<p>')
                                    ?
                                    <>  
                                        <p className="mb-0" dangerouslySetInnerHTML={{__html: `${(striptags(props?.data?.question))}`}}></p>
                                        {/* code commented for read less and read more */}
                                        {/* <p className="mb-0" style={{display: display1 === false ? "block" : "none" }} dangerouslySetInnerHTML={{__html: `${(striptags(props?.data?.question))}`}}></p>
                                        <p className="mb-0" style={{display: display1 === false ? "none" : "block" }} dangerouslySetInnerHTML={{__html: `${(striptags(props?.data?.question)).substr(0,120)}`}}></p>
                                        <span className={`${display1 == false ? 'collapse' : 'expand'}`} onClick={showAll1}>{display1 === false ? "Read Less" : "Read More"}</span> */}
                                    </>
                                    :
                                    <>
                                        <p className="mb-0" dangerouslySetInnerHTML={{__html: `${parse(`${props?.data?.question}`)}`}}></p>
                                        {/* code commented for read less and read more */}
                                        {/* <p className="mb-0" style={{display: display2 === false ? "block" : "none" }} dangerouslySetInnerHTML={{__html: `${parse(`${props?.data?.question}`)}`}}></p>
                                        <p className="mb-0" style={{display: display2 === false ? "none" : "block" }} dangerouslySetInnerHTML={{__html: `${parse(`${props?.data?.question}`).substr(0,120)}`}}></p>
                                        <span className={`${display2 == false ? 'collapse' : 'expand'}`} onClick={showAll2}>{display2 === false ? "Read Less" : "Read More"}</span> */}
                                    </>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 pb-4">
                        <div className="Qtion_n_Stion_text">
                            <h3 className="mb-2 mt-3 font-14"><i className="fa fa-check-circle"></i> Expert Answer </h3>
                            <div className="read_more_q">
                                <span className="qustion_mark">A:</span> 
                                {state.Subscribe !== "true" ? <div className="read_more_text_a bg_text_img">
                                    <div className="Get_Answer_text m-auto">
                                        <p>This problem has been <span>solved!</span></p>
                                        <div className="btn1 Get_Answer_btn">
                                            <Link to={`${loc}`} className="red_text1">{state.isLoggedIn != "true" ? "Login to Get Answer" : (state.Subscribe != "true") ? "Subscribe to Get Answer" : "Click to Get Answer"}</Link>
                                        </div>
                                    </div>
                                </div>
                                : 
                                <div className={props?.data?.completeanswer != undefined ? "read_more_text_a" : "bg_text_img"}>
                                    {(props?.data?.completeanswer == undefined || props?.data?.completeanswer == "") && answerRequested == true ? 
                                        <div className="text-center">
                                            <h2 className="text-black font-30">Stay tuned, your answer will be ready within</h2>
                                            <span><br/>
                                                <p className="text-center"><strong>{timer}</strong></p>
                                                {totalSeconds == 0 ? <p className="text-center">Its taking longer than expected, Please be Patient</p> : ''}
                                                {/* <img src="/images/time_hour.png" className="img-fluid" alt="time hour"/> */}
                                            </span>
                                        </div> 
                                    :((props?.data?.completeanswer == undefined || props?.data?.completeanswer == "") && answerRequested == false ?
                                        <div className="read_more_text_a bg_text_img">
                                            <div className="Get_Answer_text m-auto">
                                                <p>This problem has not been <span>solved yet!</span></p>
                                                <div className="btn1 Get_Answer_btn">
                                                    {
                                                    state.isLoggedIn != "true" 
                                                        ? <Link to={`${loc}`} className="red_text1">Login to Get Answer</Link> 
                                                        : <Link to="#" className="red_text1" onClick={()=>{requestAnswer()}}>Request Answer</Link> 
                                                    }
                                                </div>
                                            </div>
                                        </div> 
                                    : 
                                        <>
                                            {/* <span dangerouslySetInnerHTML={{__html: `${props?.data?.shortanswer}`}}></span><br/> */}
                                            <span dangerouslySetInnerHTML={{__html: `${props?.data?.completeanswer}`}}></span>
                                        </>
                                    )}
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}