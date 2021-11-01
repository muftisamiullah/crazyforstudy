import {Link} from 'react-router-dom'
import {useEffect} from 'react'
import Header from '../components/website/home/header'
import Navbar from '../components/website/home/navbar'
import Follow from '../components/website/home/follow'
import Footer from '../components/website/home/footer'
import BreadCrumb from '../components/website/all-subjects/breadcrumb'

export default function About() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
        <Header/>
        <Navbar/>
        <BreadCrumb heading="About us" type="About us"/>
        <section className="pt-5 pb-5 about_text">
            <div className="container">
                <div className="row float_n_disply">
                    <div className="col-md-12 col-lg-5 text-right float-right">
                        <img src="/images/aboutus-img/about-us-CFS.png" alt="about-us"/>
                    </div>
                    <div className="col-md-12 col-lg-7 float-left">
                        <div className="xs-heading">
                        <h2 className="section-title ptop_mobile">About Us</h2>
                        <span className="line"></span>
                        </div>
                        <p>Crazy for study is the leading student-first interconnected learning platform, which is on-demand, adaptive, personalized, and backed up by a network of human help. It is the Smarter Way to Student and it is transforming the way millions of students learn by reconnecting the link between learning and earning through tools and services that support students throughout their educational journey. Our mission is simply to help students save time, save money, and get smarter in order to improve the overall return on educational investment. </p>
                    </div>
                </div>
            </div>
            </section>
            
            <section className="home-choose-section about_text">
            <div className="container">
                <div className="row">
                <div className="col-md-12 text-center mb-5">
            <div className="Content_Covered_title pb-3">
            <h2>Company Leadership </h2> 
            </div>
            </div>
                    
                </div>
            </div>
            </section>

            <section className="company_leaders1 about_text section">
            <div className="container">
                <div className="row float_n_disply">
                    <div className="col-md-12 col-lg-5 float-right eff_Morgan">
                        <img src="/images/aboutus-img/jeff.png" alt="eff Morgan"/>
                    </div>
                    <div className="col-md-12 col-lg-7 float-left">
                    <div className="Text_title pb-3 pt-5">
            <h5 className="pb-2">Jeff Morgan </h5>
            <h2>Co-Founder and CEO</h2> 
                    
                        <p>Jeff Morgan is the Co-Founder and CEO of Crazy For Study. He oversees the company's overall operations, formulates and implements company policies, sets and evaluates performance goals, promotes company culture, and manages relations with clients and partners. Before joining the company, he worked as an Executive Director in Cambridge University Press for 8 years. He received his Master's degree in Policy, Organization, and Leadership Studies from Stanford University School of Education.</p>
                        {/* <ul>
                        <li><Link to=""><img src="/images/aboutus-img/linkedin.png" className="img-fluid" alt=""/> Jeff on Linkedin</Link></li>
                        </ul> */}
                    </div>
                    </div>
                </div>
            </div>
            </section>


            <section className="company_leaders2 mt-5 about_text">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-5">
                        <img src="/images/aboutus-img/peter.png" className="img-fluid" alt="Peter Kennedy"/>
                    </div>
                    <div className="col-md-12 col-lg-7"> 
                        <div className="Text_title pb-3 pt-5">
            <h5 className="pb-2">Peter Kennedy</h5>
            <h2>Co-Founder and COO</h2> 
                        <p>Peter Kennedy is the Co-Founder and COO of Crazy For Study. After completing his Master's of Science in Education Entrepreneurship from the University of Pennsylvania, he worked in various experiential positions in the Education industry. He advocated for equal education throughout his professional life. As the COO, he is responsible for overseeing all of CFS's major corporate decisions and maintaining communication between the Board of Directors and the organization. He deals with major strategic initiatives that contribute to the company's overall growth.</p>
                        {/* <ul>
                        <li><Link to=""><img src="/images/aboutus-img/linkedin.png" className="img-fluid" alt=""/> Peter on Linkedin</Link></li>
                        </ul> */}
                    </div>
                </div>
            </div>
            </div>
            </section>

            <section className="company_leaders1 mt-5 about_text">
            <div className="container">
                <div className="row float_n_disply">
                    <div className="col-md-12 col-lg-5 float-right eff_Morgan">
                        <img src="/images/aboutus-img/joanna.png" alt="eff Morgan"/>
                    </div>
                    <div className="col-md-12 col-lg-7 float-left">
                        
                        <div className="Text_title pb-3 pt-5">
            <h5 className="pb-2">Joanna Donati</h5>
            <h2>Tutor – Operations Manager</h2> 
                        <p>Joanna Donati is the Operations Manager of Crazy For Study. She is responsible for managing various activities related to the production and distribution of services at CFS. She oversees the operations process, service design, performance control, and delivery strategy. Her responsibilities include communicating with the managers of finance, accounting, marketing, and other company functional areas. She received an MBA in Production Management from the University of Georgia.</p>
                        {/*<ul>
                        <li><Link to=""><img src="/images/aboutus-img/linkedin.png" className="img-fluid" alt=""/> Joanna on Linkedin</Link></li>
                        </ul>*/}
                    </div>
                    </div>
                </div>
            </div>
            </section>

            <section className="company_leaders2 mt-5 about_text">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-5">
                        <img src="/images/aboutus-img/lewis.png" className="img-fluid" alt="Peter Kennedy"/>
                    </div>
                    <div className="col-md-12 col-lg-7">
                    
                        <div className="Text_title pb-3 pt-5">
            <h5 className="pb-2">Lewis Levine</h5>
            <h2>Director of Content Operations</h2> 
                        <p>Lewis Levine is the Director of Content Operations of Crazy For Study. Backed by a diverse experience in the Education Industry through teaching, managing and content strategizing, Lewis is now with CFS. Here, he creates, distributes, and promotes highly relevant and valuable content to attract and engage the target audience. He earned his Master's degree in Communication and Media Studies with a specialization in Content Marketing from Texas A&M University. </p>
                        {/* <ul>
                        <li><Link to=""><img src="/images/aboutus-img/linkedin.png" className="img-fluid" alt=""/> Lewis on Linkedin</Link></li>
                        </ul> */}
                    </div>
                </div>
            </div>
            </div>
            </section>
            <Follow/>
            <Footer/>
            </>
    )
}