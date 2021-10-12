import BuyBookSub from '../../common/buy-book-sub'

export default function BuySubscription() {
    return(
        <section className="section bg_colr_expert  search_include_bg pt-4 pb-5">
            <div className="container">
            <div className="row">
            <div className="col-md-5">
            <div className="row">
            <div className="col-md-6 text-center">
            <div className="text_homework_help homework_help_bg1">
            <span className="icon"><img src="/images/ask-question-icon.png" className="img-fluid" alt=""/></span>
            <h3><span>50 Question</span>
            to ask every month</h3>
            </div>
            </div>
            <div className="col-md-6 text-center">
            <div className="text_homework_help homework_help_bg2">
            <span className="icon"><img src="/images/ask-question-icon.png" className="img-fluid" alt=""/></span>
            <h3><span>50 Question</span>
            to ask every month</h3>
            </div>
            </div>
            <div className="col-md-6 ml-auto mr-auto text-center">
            <div className="text_homework_help homework_help_bg3">
            <span className="icon"><img src="/images/ask-question-icon.png" className="img-fluid" alt=""/></span>
            <h3><span>50 Question</span>
            to ask every month</h3>
            </div>
            </div>
            </div>

            </div>
            <div className="col-md-7 pl-5">
            <div className="Text_title text_tb_center3 pb-3">
            <h5 className="pb-2">SUBSCRIPTION INCLUDE</h5>
            <h2> Get step by step answers from <span>our</span> expert tutors</h2>
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
