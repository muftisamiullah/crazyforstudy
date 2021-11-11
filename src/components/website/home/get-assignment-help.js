import { Link } from "react-router-dom"

export default function AssignmentHelp(){
    return (
        <section className="section bg_colr2 pt-4 pb-4">
            <div className="container">
                <div className="row clearfix1">
                    <div className="col-md-6 text-center float-right"><span><img src="../images/assignment-help.png" className="img-fluid" alt=""/></span>
                    </div>
                    <div className="col-md-6 float-left">
                        <div className="Text_title text_tb_center2 pb-3">
                        <h5 className="pb-2">ASSIGNMENT HELP </h5>
                        <h2>Your assignment <span className="d_b">deadline is our priority.</span></h2>
                        <p>90% of our learners have achieved better grades using our assignment help solutions. You can be one of them too! Get the best assignment assistance by our PhD experts. Our experts customize the answers to meet your professor's expectations. Get plagiarism-free assignment solutions 24x7.</p>
                            <div className="btn1">
                            <Link to="writing-help/online-assignment-help">Get Assignment Help</Link>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    )
}