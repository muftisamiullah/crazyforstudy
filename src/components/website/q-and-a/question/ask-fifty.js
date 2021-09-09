import { Link } from "react-router-dom"
export default function AskFifty(){
    return(
        <section className="section bg_img_q_s_c">
            <div className="container">
                <div className="row">
                <div className="col-md-12 text-center pt-5 pb-5">
                    <h3 className="font-30">Can't find the Socialogy homework question that you want? Get step-by-step answers from expert tutors now!</h3>
                    <div className="btn1">
                        <Link to="/user/ask-a-question" className="text-black">Ask an Expert</Link>
                        <small>Ask 50 free homework Question every month.</small>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}