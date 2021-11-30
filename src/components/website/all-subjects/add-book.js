import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import {AuthContext} from '../../../context/AuthContext';


export default function AddBook({...props}){
    const { state,SelectedSubSubject } = useContext(AuthContext);
    const session = state.isLoggedIn;
    const content = SelectedSubSubject && SelectedSubSubject.content ? SelectedSubSubject.content : {};
   
    return(
        <section className="section bg_img_q_s_c mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center pt-5 pb-5">
                        <h3 className="font-27">
                            {content && content.bannerText ? content.bannerText :
                            "Add you {props.bookname} college textbooks and get their solution manuals wherever you need. All you have to do is free account and add {props.bookname} textbook ISBN. Easy isn't it?"}  </h3>
                        <div className="btn1">
                        {session ? <Link to="/user/my-tbs" className="text-black">Add college Textbook  </Link> : <Link to="/auth/signin" className="text-black">Add college Textbook  </Link> } 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}