import parse from 'html-react-parser';
import striptags from 'striptags';
import { useState, useContext} from 'react';
import {AuthContext} from '../../../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Answer({...props}){
    const { state } = useContext(AuthContext);
    const session = state.isLoggedIn;

    const [display1, setDisplay1] = useState(true);
    const [display2, setDisplay2] = useState(true);

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
                                        {/* <span dangerouslySetInnerHTML={{__html: `${(striptags(props?.data?.question)).substr(0,120)}`}}></span><br/> */}
                                        <p className="mb-0" style={{display: display1 === false ? "block" : "none" }} dangerouslySetInnerHTML={{__html: `${(striptags(props?.data?.question))}`}}></p>
                                        <p className="mb-0" style={{display: display1 === false ? "none" : "block" }} dangerouslySetInnerHTML={{__html: `${(striptags(props?.data?.question)).substr(0,120)}`}}></p>
                                        <span className={`${display1 == false ? 'collapse' : 'expand'}`} onClick={showAll1}>{display1 === false ? "Read Less" : "Read More"}</span>
                                    </>
                                    :
                                    <>
                                        {/* <span dangerouslySetInnerHTML={{__html: `${parse(`${props?.data?.question}`).substr(0,120)}`}}></span><br/> */}
                                        <p className="mb-0" style={{display: display2 === false ? "block" : "none" }} dangerouslySetInnerHTML={{__html: `${parse(`${props?.data?.question}`)}`}}></p>
                                        <p className="mb-0" style={{display: display2 === false ? "none" : "block" }} dangerouslySetInnerHTML={{__html: `${parse(`${props?.data?.question}`).substr(0,120)}`}}></p>
                                        <span className={`${display2 == false ? 'collapse' : 'expand'}`} onClick={showAll2}>{display2 === false ? "Read Less" : "Read More"}</span>
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
                                            <Link to="/auth/signin" className="red_text1">Click to Get Answer</Link>
                                        </div>
                                    </div>
                                </div>
                                : 
                                <div className={props?.data?.completeanswer != undefined ? "read_more_text_a" : "bg_text_img"}>
                                    {props?.data?.completeanswer == undefined || props?.data?.completeanswer == "" ? 
                                        <div className="text-center">
                                            <h2 className="text-black font-30">Stay tuned, your answer will be ready within</h2>
                                            <span><img src="/images/time_hour.png" className="img-fluid" alt="time hour"/></span>
                                        </div> : props?.data?.completeanswer}
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}