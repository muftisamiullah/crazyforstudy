import BuyBookSub from '../../common/buy-book-sub'
import {AuthContext} from '../../../context/AuthContext';
import {useContext} from 'react'

export default function SubscribeHere(){
    const { state } = useContext(AuthContext);
    const session = state.isLoggedIn;

    return (<>
        {state.Subscribe != "true" ? 
        <section className="section subscribe_here_bg">
            <div className="subscribe_here_bg_img">
                <img src="../images/subscribe_here_bg.png" className="img-fluid" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 text-right">
                        <span><img src="../images/subscribe_here.png" className="img-fluid" alt=""/></span>
                    </div>
                    <div className="col-md-7">
                        <div className="text_subscribe_here text_tb_center">
                            <h3>Subscribe <span>HERE</span></h3>
                        <div className="text_subscribe">
                        <div className="price_pr_month">
                            <h2><small>Just</small> $7.00/<small>month</small></h2>
                        </div>
                        <ul>
                        <li><i className="fa fa-long-arrow-right"></i> Unlimited access to our Q&A solutions</li>
                        <li><i className="fa fa-long-arrow-right"></i> 50 New Questions to ask every month</li>
                            <li><i className="fa fa-long-arrow-right"></i> Unlimited access to Textbook Solutions </li>
                        </ul>
                        </div>
                            <div className="btn1 text-left mt-3">
                                {/* <a href="#" className="">Subscribe Now</a> */}
                                <BuyBookSub classname="" text="Subscribe Now"/>
                                <small>Pay $7.00/month for Better Grades </small> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
       : ''}
       </>
    )
}