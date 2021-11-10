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
                        <h2>Get answer as fast as <span className="d_b">in 30 minutes.</span></h2>
                        <p>Unable to solve difficult homework questions? Don’t worry! CFS is here to help. Get immediate access to over 50 million Q/A solutions instantly. What’s more alluring is that you can even ask 50 Homework questions directly to our experts every month! Our experts will deliver step-by-step answers in just 30 minutes.</p>
                            <div className="btn1">
                                <Link to="/user/ask-a-question">Ask an Expert</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}