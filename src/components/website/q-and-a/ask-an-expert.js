import {Link} from 'react-router-dom';

export default function AskExpert(){
    return (
        <section className="section bg_colr_expert pt-4 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <span>
                            <img src="../images/get-answer-fast.png" className="img-fluid" alt=""/>
                        </span>
                    </div>
                    <div className="col-md-6">
                        <div className="Text_title text_tb_center pb-3">
                            <h5 className="pb-2">ASK AN EXPERT </h5>
                            <h2>Get Answer As fast as in 30 Minutes</h2>
                            <p>If we don't have answer for your question, then ask our expert If we don't have answer for your question, then ask our expert If we dont have answer for your question, then ask our expert .
                            </p>
                            <div className="btn1">
                                <Link to="/user/ask-a-question">Ask an Expert</Link>
                                <small className="text-black">*Ask extra 50 Questions direct from the expert</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}