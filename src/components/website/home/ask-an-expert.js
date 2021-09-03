import {Link} from 'react-router-dom';

export default function AskExpert(){
    return (
        <section className="section bg_colr1 ">
            <div className="container">
                <div className="row">
                    <div className="col-md-6"><span><img src="/images/homework-qa.png" className="img-fluid" alt=""/></span>
                    </div>
                    <div className="col-md-6">
                        <div className="Text_title text_tb_center pb-3">
                        <h5 className="pb-2"> HOMEWORK Q&A </h5>
                        <h2>Get Answer as Fast as <span className="d_b">in 30 Minutes.</span></h2>
                        <p> Getting Tough or Difficult homework questions? Don’t worry! Get immediate access to over 50 million Q/A solutions and Ask 50 Homework questions directly from our expert professor.</p>
                            <div className="btn1">
                                <Link to="/writing-help">Ask an Expert</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}