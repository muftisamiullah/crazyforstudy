import {AuthContext} from '../../../context/AuthContext';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

export default function CollegeTextbooks(){
    const { state, selectedCon } = useContext(AuthContext);
    const session = state.isLoggedIn;
    const content = selectedCon && selectedCon.content ? selectedCon.content : '';
    

    return(
        <section className="section f2feff_color pt-4 pb-4">
            <div className="container">
                <div className="row clearfix1">
                <div className="col-md-6 text-center float-right"><span><img src="/images/textbook-s.png" className="img-fluid" alt=""/></span></div>
                <div className="col-md-6 float-left">
                    <div className="Text_title2 text_tb_center2 pb-3">
                        <h4 className="pb-2">College Textbooks</h4>
                        <h2>Add College Textbooks As fast  <span className="d_b">as in 30 Seconds</span></h2>
                        <p>Add your {content && content.collegeTextBooks ? content.collegeTextBooks : 'college textbooks'} and get their textbooks solutions manual wherever you need. All you have to do is create free account and add college textbook ISBN Easy isn't it?</p>
                        <div className="btn1">
                            {session ? <Link to="/user/my-tbs">Add College Textbook</Link> : <Link to="/auth/signin">Add College Textbook</Link>}
                            <small className="text-black">* Add Unlimited College textbooks and get instant access</small>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}