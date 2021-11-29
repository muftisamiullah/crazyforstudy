import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
export default function AskAnExpert(){
    const { selectedCon } =
    useContext(AuthContext);
    const content = selectedCon && selectedCon.content ? selectedCon.content : '';
    
    return(
        <section className="section bg_colr_expert pt-4 pb-4">
            <div className="container">
                <div className="row">
                <div className="col-md-6"><span><img src="/images/qa_s_img.png" className="img-fluid" alt=""/></span></div>
                <div className="col-md-6">
                    <div className="Text_title2 text_tb_center pb-3">
                        <h4 className="pb-2">ASK AN EXPERT </h4>
                        <h2>Get Step-by-step Solutions As fast as in 30 Minutes</h2>
                        <p>Struggling with {content && content.askAnExpertText ? content.askAnExpertText : 'textbook'} solutions? Getting Tough or Difficult textbook question? We have all the textbook that you need! Get step-by-step textbook solutions by our experts.</p>
                        <div className="btn1">
                            <Link to="/textbook-solutions-manuals">Find Textbook Solutions</Link>
                            <small className="text-black">*Browse unlimited textbook solutions manual</small>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}