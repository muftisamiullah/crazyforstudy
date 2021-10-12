import BuyBookSub from '../../common/buy-book-sub'

export default function BuySubscription(){
    return (
        <section className="section bg_colr2 pt-4 pb-4">
            <div className="container">
                <div className="row clearfix1">
                    <div className="col-md-6 text-center float-right"><span><img src="../images/subscription-include.png" className="img-fluid" alt=""/></span>
                    </div>
                        <div className="col-md-6 float-left">
                            <div className="Text_title text_tb_center3 pb-3">
                                <h5 className="pb-2">SUBSCRIPTION INCLUDE</h5>
                                <h2> Get step by step answers <span className="d_b">from <span className="yellow">our</span> expert tutors</span></h2>
                                <p>Get immediate access to 24/7 Homework Help, <span>step-by-step</span> solutions, instant homework answer to over 40 million Textbook solution </p>
                                <ul className="include_list">
                                    <li><i className="fa fa-check-circle"></i> 50 Question to ask every month </li>
                                    <li><i className="fa fa-check-circle"></i> Unlimited access to textbook Solutions </li>
                                    <li><i className="fa fa-check-circle"></i> Unlimited access to Q/A library </li>
                                </ul>
                                {/* <div className="btn1">
                                    <a href="#">Buy Subscription</a>
                                </div> */}
                            <BuyBookSub classname="" text="Buy Subscription"/>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    )
}