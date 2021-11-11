/************************* code written by Sami Ullah *************************/
import Header from '../components/website/home/header'
import Navbar from '../components/website/home/navbar'
import Footer from '../components/website/home/footer'
import {useEffect} from 'react'
import Marquee from '../components/common/marquee';

export default function SiteMap(){
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <>
            <Marquee/>
            <Header/>
            <Navbar/>
            <section className="section sitemap_bg mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0 text-left">
                            <div className=" pb-0">
                                <h3 className="hding_sol_mual">Study Help</h3>
                            </div>
                        </div>
                        <div className="col-sm-6 nav_pding  col-lg-3 border-right mb-4"> <a href="/textbook-solutions-manuals/social-science">
                            <h6>Social Science <img src="https://crazyforstudy.com/images/nav-icons/social-science.png" className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
                            </a>
                            <ul>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/social-science/anthropology"><i className="fa fa-angle-right"></i> Anthropology</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/social-science/psychology"><i className="fa fa-angle-right"></i> Psychology</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/social-science/sociology"><i className="fa fa-angle-right"></i> Sociology</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/social-science/history"><i className="fa fa-angle-right"></i> History</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/social-science/political-science"><i className="fa fa-angle-right"></i> Political Science</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/social-science/geography"><i className="fa fa-angle-right"></i> Geography</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/social-science/other"><i className="fa fa-angle-right"></i> Other</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 nav_pding nav_sm_menu_bg col-lg-3 border-right mb-4"> <a href="/textbook-solutions-manuals/business">
                            <h6>Business <img src="https://crazyforstudy.com/images/nav-icons/business.png" className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
                            </a>
                            <ul>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/business/accounting"><i className="fa fa-angle-right"></i> Accounting</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/business/economics"><i className="fa fa-angle-right"></i> Economics</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/business/finance"><i className="fa fa-angle-right"></i> Finance</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/business/operations-management"><i className="fa fa-angle-right"></i> Operations Management</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/business/other"><i className="fa fa-angle-right"></i> Other</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 nav_pding  col-lg-3 border-right mb-4"> <a href="/textbook-solutions-manuals/law">
                            <h6>Law <img src="https://crazyforstudy.com/images/nav-icons/law.png" className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
                            </a>
                            <ul>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/law/criminal-law"><i className="fa fa-angle-right"></i> Criminal Law</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/law/other"><i className="fa fa-angle-right"></i>  Other</a> </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 nav_pding nav_sm_menu_bg col-lg-3 border-right mb-4"> <a href="/textbook-solutions-manuals/engineering">
                            <h6>Engineering <img src="https://crazyforstudy.com/images/nav-icons/engineering.png" className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
                            </a>
                            <ul>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/engineering/chemical-engineering"><i className="fa fa-angle-right"></i> Chemical Engineering</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/engineering/civil-engineering"><i className="fa fa-angle-right"></i> Civil Engineering</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/engineering/computer-engineering"><i className="fa fa-angle-right"></i> Computer Engineering</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/engineering/electrical-engineering"><i className="fa fa-angle-right"></i> Electrical Engineering</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/engineering/mechanical-engineering"><i className="fa fa-angle-right"></i> Mechanical Engineering</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/engineering/other">Other</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 nav_pding nav_sm_menu_bg col-lg-3 border-right mb-4"> <a href="/textbook-solutions-manuals/science">
                            <h6>Science <img src="https://crazyforstudy.com/images/nav-icons/science.png" className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
                            </a>
                            <ul>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/science/physics"><i className="fa fa-angle-right"></i> Physics</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/science/chemistry"><i className="fa fa-angle-right"></i> Chemistry</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/science/biology"><i className="fa fa-angle-right"></i> Biology</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/science/earth-science"><i className="fa fa-angle-right"></i> Earth Science</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/science/nursing"><i className="fa fa-angle-right"></i> Nursing</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/science/other"><i className="fa fa-angle-right"></i> Other</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 nav_pding  col-lg-3 border-right mb-4"> <a href="/textbook-solutions-manuals/maths">
                            <h6>Maths <img src="https://crazyforstudy.com/images/nav-icons/maths.png" className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
                            </a>
                            <ul>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/maths/advanced-math"><i className="fa fa-angle-right"></i> Advanced Math</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/maths/algebra"><i className="fa fa-angle-right"></i> Algebra</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/maths/calculus"><i className="fa fa-angle-right"></i> Calculus</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/maths/geometry"><i className="fa fa-angle-right"></i> Geometry</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/maths/probability"><i className="fa fa-angle-right"></i> Probability</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/maths/statistics"><i className="fa fa-angle-right"></i> Statistics</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/maths/trigonometry"><i className="fa fa-angle-right"></i> Trigonometry</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/maths/pre-algebra"><i className="fa fa-angle-right"></i> Pre Algebra</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/maths/pre-calculus"><i className="fa fa-angle-right"></i> Pre Calculus</a></li>
                            <li><a className="dropdown-item" href="/textbook-solutions-manuals/maths/other"><i className="fa fa-angle-right"></i> Other</a></li>
                            </ul>
                        </div>
                        
                        <div className="col-sm-6 nav_pding nav_sm_menu_bg col-lg-3 border-right mb-4"> <a href="/textbook-solutions-manuals/maths">
                            <h6>Q and A <img src="https://crazyforstudy.com/images/nav-icons/maths.png" className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
                            </a>
                            <ul>
                            <li><a className="dropdown-item" href="/q-and-a"><i className="fa fa-angle-right"></i> Q and A</a></li> 
                            </ul>
                        </div>
                        
                        <div className="col-sm-6 nav_pding  col-lg-3 border-right mb-4"> <a href="/textbook-solutions-manuals/social-science">
                            <h6>Writing Help <img src="https://crazyforstudy.com/images/nav-icons/social-science.png" className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
                            </a>
                            <ul>
                            <li><a className="dropdown-item" href="/writing-help"><i className="fa fa-angle-right"></i> Writing Help</a></li>
                            <li><a className="dropdown-item" href="/writing-help/online-assignment-help"><i className="fa fa-angle-right"></i> Online Assignment Help</a></li> 
                            </ul>
                        </div>
                        
                        <div className="col-sm-6 nav_pding  col-lg-3 border-right mb-4"> <a href="/textbook-solutions-manuals/social-science">
                            <h6>Other Pages <img src="https://crazyforstudy.com/images/nav-icons/social-science.png" className="img-fluid" alt=""/> <i className="fa fa-angle-down"></i></h6>
                            </a>
                            <ul>
                            <li><a className="dropdown-item" href="/privacy-and-policy"><i className="fa fa-angle-right"></i>  Privacy & Policy</a></li>
                            <li><a className="dropdown-item" href="/faqs"><i className="fa fa-angle-right"></i>  FAQ</a></li>
                            <li><a className="dropdown-item" href="/terms-and-conditions"> <i className="fa fa-angle-right"></i> Term of Use</a></li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}