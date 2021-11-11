import { Link } from "react-router-dom"

export default function FindTbs(){
    return (
        <section className="section bg_colr1 pt-4 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <span><img src="../images/textbook-solutions.png" className="img-fluid" alt=""/></span>
                    </div>
                    <div className="col-md-6">
                        <div className="Text_title text_tb_center pb-3">
                            <h5 className="pb-2">Textbook Solutions </h5>
                            <h2>Get step-by-step textbook solutions by our PhD experts.</h2>
                            <p>Getting laid back for not finding enough solutions to your doubts? Chill, we have got you covered with all the textbooks that you need! Access millions of detailed, step-wise textbook solutions manual instantly. Plus, you can add new textbooks in a flicker, and our experts will deliver in-depth solutions as soon as possible. </p>
                            <div className="btn1">
                                <Link to="/textbook-solutions-manuals">Find Textbook Solutions</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}