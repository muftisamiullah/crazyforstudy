import Header from '../components/website/home/header'
import Navbar from '../components/website/home/navbar'
import Footer from '../components/website/home/footer'
import Follow from '../components/website/home/follow'
import Paypal from '../components/common/paypal'
import Razorpay from '../components/common/razorpay'
import StripePay from '../components/common/stripe'
import { useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import {AuthContext} from '../context/AuthContext';

export default function PayNow(){
    const { state } = useContext(AuthContext);
    const params = useParams();
    const history = useHistory();

    useEffect(()=>{
        if(state.Subscribe == "true"){
            history.push('/user/my-subs')
        }
    },[])
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <>
        <Header/>
        <Navbar/>
        <section className="section pt-3 pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mb-5">
                        <div className="pay_now">
                            <h3 className="font-24">Are you Ready for an Amazing Academic Grade at just $7.00/month? <br/> Buy it Right Now!</h3>
                            <p>(No Worries, You Can Cancel Anytime) </p>
                        </div>
                        <div className="yellow-border top-margin-20"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="Subscription_Plan">
                            <h3 className="font-24"><strong>Subscription Plan</strong></h3>
                            <span><img src="/images/plan-balloon.png" width="150" className="img-fluid" alt=""/></span>
                            <div className="text-right plans-margin-2"><span className="regular-font">Unlimited  </span><span className="bold-font">Solutions </span>
                                <span className="regular-font">Manual</span>
                                <i className="fa fa-angle-right arrow-right-size"></i>
                            </div>
                            <div className="text-right plans-margin-2"><span className="regular-font">Unlimited access to the   </span><span className="bold-font">largest  </span>
                                <span className="regular-font">virtual library</span>
                                <i className="fa fa-angle-right arrow-right-size"></i>
                            </div>
                            <div className="text-right plans-margin-2"><span className="regular-font">50 new questions for you to    </span><span className="bold-font">ask every  </span>
                                <span className="regular-font">month</span>
                                <i className="fa fa-angle-right arrow-right-size"></i>
                            </div>
                            <div className="text-right plans-margin-2"><span className="regular-font">Answer to    </span><span className="bold-font">your questions   </span>
                                <span className="regular-font">in 2-4hrs.</span>
                                <i className="fa fa-angle-right arrow-right-size"></i>
                            </div>
                            <div className="pay_option1">
                                <h4><strong>Subscribe With:</strong></h4>
                                <ul>
                                {/* <li><Paypal/></li> */}
                                <li></li>
                                {/* <li><a href="#"><img src="/images/pay-1.png" className="img-fluid" alt=""/></a></li> */}
                                <li><Razorpay type="subscription"/></li>
                                {/* <li><StripePay/></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="Subscription_Plan Subscription_text">
                            <h3 className="font-24"><strong>Your Subscription Includes:</strong></h3>
                            <ul>
                                <li><i className="fa fa-dot-circle-o"></i> Step-by-step, self-explanatory solutions for over 45000 books.</li>
                                <li><i className="fa fa-dot-circle-o"></i> Access to millions of Homework Answers through our virtual library.</li>
                                <li><i className="fa fa-dot-circle-o"></i> Liberty to ask 50 new homework questions from professor.</li>
                            </ul>
                            <div className="billing_details pt-5">
                                <h5>Billing Details </h5>
                                <p>After payment, your <strong>$7.00/month </strong>plan with start and will last you 30 days. Post 30 days, your subscription will be auto-renewed for the successive month and the amount will be deducted from your registered bank account. If you wish to not proceed with the plan, you can get it canceled before the end of the current cycle by logging in to your CFS portal. If you find the services to be unsatisfactory and not up to the mark, you can cancel anytime.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Follow/>
        <Footer/>
        </>
    )
}