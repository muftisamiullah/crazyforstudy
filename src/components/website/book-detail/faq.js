import { Link } from 'react-router-dom';
import {useState} from 'react'


export default function Faq({...props}){
    const [whichCollapse, setWhichCollapse] = useState()

    const openCollapse = (e,string) =>{
        e.preventDefault();
        setWhichCollapse(string)
    }
    
    return(
        <section className="faq faq_bg_sctn faq-t">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center mb-5">
                        <div className="Content_Covered_title pb-3">
                            <h2>{props.heading ? props.heading : "CrazyForStudy Frequently asked questions"}</h2> 
                        </div>
                    </div>

                    <div className="col-md-6 ml-auto">
                        <ul className="faq-list">
                            {props.data && props.data.map((item,key)=>{
                                return(
                                    <li key={key}>
                                        <a data-toggle="collapse" className="collapsed" href="#" onClick={(e)=>{openCollapse(e,`faq${key}`)}}>{item.question}<i className="fa fa-angle-up"></i></a>
                                        <div id="" className={"collapse" + (whichCollapse == `faq${key}` ? 'show' : '' )} data-parent=".faq-list" >
                                            <p className="first-para"><strong>Answer : </strong><span dangerouslySetInnerHTML={{__html: item.answer}}></span></p>
                                        </div>
                                    </li>
                                )
                            })}
                            {/*<li>
                                    <a data-toggle="collapse" className="collapsed" href="#faq1" onClick={()=>{openCollapse('faq1')}}>What are CrazyForStudy step-by-step Shuler: Bioprocess Engineering_c3 (3rd Edition) (Prentice Hall International Series in the Physical and Chemical Engineering Sciences) 3rd Edition Solutions Manuals? <i className="fa fa-angle-up"></i></a>
                                    <div id="faq1" className={"collapse" + (whichCollapse == 'faq1' ? 'show' : '' )} data-parent=".faq-list" >
                                        <p className="first-para"><strong>Answer : </strong>CrazyForStudy Solution Manuals are written by vetted CrazyForStudy 18 experts, and rated by students - so you know you're getting high quality answers. Solutions Manuals are available for thousands of the most popular college and high school textbooks in subjects such as Math, Science (<a href="#">Physics</a>, <a href="#">Chemistry</a>, <a href="#">Biology</a>), Engineering (<a href="#">Mechanical</a>, <a href="#">Electrical</a>, <a href="#">Civil</a>), <a href="#">Business</a> and more. Understanding Shuler: Bioprocess Engineering_c3 (3rd Edition) (Prentice Hall International Series in the Physical and Chemical Engineering Sciences) 3rd Edition homework has never been easier than with CrazyForStudy.</p>
                                    </div>
                                </li>
                            <li>
                                <a data-toggle="collapse" href="#faq2" className="collapsed" onClick={()=>{openCollapse('faq2')}}>Why is CrazyForStudy better than downloaded Shuler: Bioprocess Engineering_c3 (3rd Edition) (Prentice Hall International Series in the Physical and Chemical Engineering Sciences) 3rd Edition PDF solution manuals? <i className="fa fa-angle-up"></i></a>
                                <div id="faq2" className={"collapse" + (whichCollapse == 'faq2' ? 'show' : '' )} data-parent=".faq-list">
                                    <p><strong>Answer : </strong>It's easier to figure out tough problems faster using CrazyForStudy. Unlike static PDF Shuler: Bioprocess Engineering_c3 (3rd Edition) (Prentice Hall International Series in the Physical and Chemical Engineering Sciences) 3rd Edition solution manuals or printed answer keys, our experts show you how to solve each problem step-by-step. No need to wait for office hours or assignments to be graded to find out where you took a wrong turn. You can check your reasoning as you tackle a problem using our interactive solutions viewer.</p>
                                </div>
                            </li>
                            <li>
                                <a data-toggle="collapse" href="#faq3" className="collapsed" onClick={()=>{openCollapse('faq3')}}> How is CrazyForStudy better than a printed Shuler: Bioprocess Engineering_c3 (3rd Edition) (Prentice Hall International Series in the Physical and Chemical Engineering Sciences) 3rd Edition student solution manual from the bookstore? <i className="fa fa-angle-up"></i></a>
                                <div id="faq3" className={"collapse" + (whichCollapse == 'faq3' ? 'show' : '' )} data-parent=".faq-list">
                                    <p><strong>Answer : </strong>Our interactive player makes it easy to find solutions to Shuler: Bioprocess Engineering_c3 (3rd Edition) (Prentice Hall International Series in the Physical and Chemical Engineering Sciences) 3rd Edition problems you're working on - just go to the chapter for your book. Hit a particularly tricky question? Bookmark it to easily review again before an exam. <br/><br/> The best part? As a CrazyForStudy subscriber, you can view available interactive solutions manuals for each of your classNamees for one low monthly price. Why buy extra books when you can get all the homework help you need in one place?</p>
                                </div>
                            </li>
                            <li>
                                <a data-toggle="collapse" href="#faq4" className="collapsed" onClick={()=>{openCollapse('faq4')}}>Can I get help with questions outside of textbook solution manuals? <i className="fa fa-angle-up"></i></a>
                                <div id="faq4" className={"collapse" + (whichCollapse == 'faq4' ? 'show' : '' )} data-parent=".faq-list">
                                    <p><strong>Answer : </strong>You bet! CrazyForStudy Expert Q&amp;A is a great place to find help on problem sets and 18 study guides. Just post a question you need help with, and one of our experts will provide a custom solution. You can also find solutions immediately by searching the millions of fully answered study questions in our archive.</p>
                                </div>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="500" className="aos-init aos-animate">
                                <a data-toggle="collapse" href="#faq5" className="collapsed" onClick={()=>{openCollapse('faq5')}}>   How do I view solution manuals on my smartphone? <i className="fa fa-angle-up"></i></a>
                                <div id="faq5" className={"collapse" + (whichCollapse == 'faq5' ? 'show' : '' )} data-parent=".faq-list">
                                    <p><strong>Answer : </strong>You can <a target="_blank" href="">download</a> our homework help app on iOS to access solutions manuals on your mobile device. Asking a study question in a snap - just take a pic.</p>
                                </div>
                            </li> */}
                        </ul>
                    </div>

                    <div className="col-md-5 faq_img text-center">
                        <span><img src="/images/faq_img.png" className="img-fluid"/></span>
                    </div>

                </div>
            </div>
        </section>  
    )
}