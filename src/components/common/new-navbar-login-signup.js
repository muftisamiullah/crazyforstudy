import { Link } from 'react-router-dom';

export default function NewNavbar(){
    return(
        <section className="top_logo_login">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Link to="/"><img src="/images/logo_w.jpg" className="img-fluid" alt="logo"/></Link>
                    </div>
                </div>
            </div> 
        </section>
    )
}
