import BuyBookSub from '../../common/buy-book-sub'

export default function BuySubscription(){
    return (
        <section className="section bg_colr_expert pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-5 text-center">
                        <div className="Content_Covered_title pb-3">
                            <h2>Get immediate access to 24/7 Homework Help </h2>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="text_homework_help homework_help_bg1">
                            <span className="icon"><img src="../images/ask-question-icon.png" className="img-fluid" alt=""/></span>
                            <h3><span>50 Questions</span> to ask every month</h3>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="text_homework_help homework_help_bg2">
                            <span className="icon"><img src="../images/ask-question-icon.png" className="img-fluid" alt=""/></span>
                            <h3><span>50 Questions</span> to ask every month</h3>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="text_homework_help homework_help_bg3">
                            <span className="icon"><img src="../images/ask-question-icon.png" className="img-fluid" alt=""/></span>
                            <h3><span>50 Questions</span> to ask every month</h3>
                        </div>
                    </div>

                    <div className="col-md-12 btn1 text-center mt-4">
                        {/* <a href="#" className="pl-5 pr-5 text-black">Buy Subscription</a> */}
                        <BuyBookSub classname="pl-5 pr-5 text-black" text="Buy Subscription"/>
                        <small className="text-black"><strong>$7/</strong> per month (cancel anytime)</small>
                    </div>
                </div>
            </div>
        </section>
    )
}