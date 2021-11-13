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
                                <h2>Small Subscription,<span className="d_b"><span className="yellow">Big </span>Benefits.</span></h2>
                                <p>Subscribing with just $7 per month can give you 24x7 access to our Homework Help and <span>step-by-step</span> Textbook Solutions. We have experts who deliver comprehensive content for your better grades. </p>
                                <p>Our subscription includes -</p>
                                <ul className="include_list">
                                    <li><i className="fa fa-check-circle"></i>Unlimited access to our Q&A solutions</li>
                                    <li><i className="fa fa-check-circle"></i>50 New Questions to ask every month</li>
                                    <li><i className="fa fa-check-circle"></i>Unlimited access to Textbook Solutions</li>
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