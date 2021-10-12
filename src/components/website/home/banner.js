import Search from '../../common/search-comp'

export default function Banner() {
    return (
        <section className="banner">
            <div className="shap_banner_bottom">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%",width: "100%"}}>
                    <path d="M0.00,49.98 C105.25,246.20 395.31,-56.73 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#fff"}}></path>
                </svg>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6"> <span><img src="../images/women1-min.png" className="img-fluid" alt=""/></span> 
                    </div>
                    <div className="col-md-6 pl-0">
                        <div className="banner_text">
                            <h4>Your Academic Search Engine</h4>
                            <h1> Access step-wise solutions to over 50 million textbooks</h1>
                            <Search placeholder={"Search ISBN, textbook name or homework..."} btnText={"Search"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
  