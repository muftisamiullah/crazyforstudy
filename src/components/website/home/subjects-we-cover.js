import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function SubjectsWeCover(){

    const [html, setHtml] = useState();
    const [subjectForClassActive, setSubjectForClassActive] = useState('finance');
    const finance = <div id="finance" className="tab-pane bg_shdow fade in active show">
                        <div className="row">
                            <div className="col-md-5 text-center finance_img">
                                <span>
                                    <img src="../images/we-cover-img/finance.png" className="img-fluid" alt=""/>
                                </span>
                            </div>
                            <div className="col-md-7"> 
                                <div className="Text_title text_tb_center3 pb-3">
                                    <h5 className="pb-2">Finance</h5>
                                    <h2>Understand Finance subjects like never before!</h2>
                                    <p>Stuck with long financial equations? Our experts will help you with step-by-step solutions. Once subscribed to our services, you get instant access to millions of Finance textbook solutions.</p>
                                    <p>We offer instant solutions to your Assignment questions and Homework questions. Our detailed solutions will help to increase your conceptual understanding. </p> 
                                    <div className="btn1">
                                        <ul>
                                            <li>  <Link to="/writing-help/online-assignment-help">Assignment Help</Link></li>
                                            <li>  <Link to="/textbook-solutions-manuals">Textbook Solution</Link></li>
                                            <li>  <Link to="/q-and-a">Q & A Solution</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>;

    const marketing = <div id="marketing" className="tab-pane bg_shdow fade in active show">
                        <div className="row">
                            <div className="col-md-5 text-center finance_img">
                                <span>
                                    <img src="../images/we-cover-img/marketing.png" className="img-fluid" alt=""/>
                                </span>
                            </div>
                            <div className="col-md-7"> 
                                <div className="Text_title text_tb_center3 pb-3">
                                    <h5 className="pb-2">Marketing</h5>
                                    <h2>Learn Marketing conceptions to the very core!</h2>
                                    <p>Get detailed answers to all your marketing questions within 30 minutes. We provide textbook solutions, assignment solutions, and Q&A solutions 24x7. Our answers and solutions are in a detailed step-by-step manner.</p>
                                    <p>We hire the best marketing experts to assist our writers in creating concise content. We cover as much as possible content from Marketing courses of major universities.</p> 
                                    <div className="btn1">
                                        <ul>
                                            <li>  <Link to="/writing-help/online-assignment-help">Assignment Help</Link></li>
                                            <li>  <Link to="/textbook-solutions-manuals">Textbook Solution</Link></li>
                                            <li>  <Link to="/q-and-a">Q & A Solution</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>;

    const biology = <div id="biology" className="tab-pane bg_shdow fade in active show">
                        <div className="row">
                            <div className="col-md-5 text-center finance_img">
                                <span>
                                    <img src="../images/we-cover-img/biology.png" className="img-fluid" alt=""/>
                                </span>
                            </div>
                            <div className="col-md-7"> 
                                <div className="Text_title text_tb_center3 pb-3">
                                    <h5 className="pb-2">Biology</h5>
                                    <h2>We make the mysteries of Life look easier! </h2>
                                    <p>With CFS’s Biology Solutions, you will get a detailed insight on all the complicated topics of Biology. We cover Genetics, Ecology, Zoology, Botany, Microbiology, and many other disciplines. </p>
                                    <p>We guarantee that our textbook solutions on Biology will get you closer to your dream grades. With our 30 minutes delivery and 24x7 help, rest assured that you will get the best out of your Biology assignments every time!  </p> 
                                    <div className="btn1">
                                        <ul>
                                            <li>  <Link to="/writing-help/online-assignment-help">Assignment Help</Link></li>
                                            <li>  <Link to="/textbook-solutions-manuals">Textbook Solution</Link></li>
                                            <li>  <Link to="/q-and-a">Q & A Solution</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>;

    const accounts = <div id="accounts" className="tab-pane bg_shdow fade in active show">
                        <div className="row">
                            <div className="col-md-5 text-center finance_img">
                                <span>
                                    <img src="../images/we-cover-img/account.png" className="img-fluid" alt=""/>
                                </span>
                            </div>
                            <div className="col-md-7"> 
                                <div className="Text_title text_tb_center3 pb-3">
                                    <h5 className="pb-2">Accounts</h5>
                                    <h2> We deliver step-by-step solutions to Accounts questions!</h2>
                                    <p>Facing trouble in understanding tricky problems in your Accounts course? Let CFS help you with your question! Just post your query in our portal and our Phd Experts will solve your question in 30 minutes! </p>
                                    <p>In the meantime, you can explore our expert-crafted solutions. We are sure that they will help you understand the concepts easily and improve your accounting skills. </p> 
                                    <div className="btn1">
                                        <ul>
                                            <li>  <Link to="/writing-help/online-assignment-help">Assignment Help</Link></li>
                                            <li>  <Link to="/textbook-solutions-manuals">Textbook Solution</Link></li>
                                            <li>  <Link to="/q-and-a">Q & A Solution</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>;

    const socialscience = <div id="socialscience" className="tab-pane bg_shdow fade in active show">
                            <div className="row">
                                <div className="col-md-5 text-center finance_img">
                                    <span>
                                        <img src="../images/we-cover-img/socialscience.png" className="img-fluid" alt=""/>
                                    </span>
                                </div>
                                <div className="col-md-7"> 
                                    <div className="Text_title text_tb_center3 pb-3">
                                        <h5 className="pb-2">Social Science</h5>
                                        <h2>In-Depth solutions for your Social Science doubts!</h2>
                                        <p>With the main motive of going into the depths, our experts write answers that are easy to understand and remember. We cover History, Geography, Political Science, Economics, Anthropology, and many other disciplines. </p>
                                        <p>We simplify answers for your better understanding. Get access to millions of Social Science textbooks and assignment questions instantly. </p> 
                                        <div className="btn1">
                                            <ul>
                                                <li>  <Link to="/writing-help/online-assignment-help">Assignment Help</Link></li>
                                                <li>  <Link to="/textbook-solutions-manuals">Textbook Solution</Link></li>
                                                <li>  <Link to="/q-and-a">Q & A Solution</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>;

    const chemistry =  <div id="chemistry" className="tab-pane bg_shdow fade in active show">
                            <div className="row">
                                <div className="col-md-5 text-center finance_img">
                                    <span>
                                        <img src="../images/we-cover-img/chemistry.png" className="img-fluid" alt=""/>
                                    </span>
                                </div>
                                <div className="col-md-7"> 
                                    <div className="Text_title text_tb_center3 pb-3">
                                        <h5 className="pb-2">Chemistry</h5>
                                        <h2> Solve the mysteries of Organic & In-Organic Chemistry! </h2>
                                        <p>We have the best Chemistry professors in our company. They know how to make things easier for students who are weak in the subject. They explain chemical reactions, numericals, and bonding problems in a step-by-step and systematic manner. Hence, with our solutions, Chemistry becomes very easy for you! </p>
                                        <p>We cover every major topic of organic, inorganic, and physical chemistry. You will find thousands of the most commonly asked questions in our Q&A section. </p> 
                                        <div className="btn1">
                                            <ul>
                                                <li>  <Link to="/writing-help/online-assignment-help">Assignment Help</Link></li>
                                                <li>  <Link to="/textbook-solutions-manuals">Textbook Solution</Link></li>
                                                <li>  <Link to="/q-and-a">Q & A Solution</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>;

    const economics =  <div id="economics" className="tab-pane bg_shdow fade in active show">
                            <div className="row">
                                <div className="col-md-5 text-center finance_img">
                                    <span>
                                        <img src="../images/we-cover-img/economics.png" className="img-fluid" alt=""/>
                                    </span>
                                </div>
                                <div className="col-md-7"> 
                                    <div className="Text_title text_tb_center3 pb-3">
                                        <h5 className="pb-2">Economics</h5>
                                        <h2>Master the basic conceptions behind Economics! </h2>
                                        <p>Economics is an easy subject only when you have the fundamentals clear. Our PhD experts make that possible if you study from our Economics textbook solutions. Our 24x7 Economics Homework help ensures that you get the best solutions whenever you want! </p>
                                        <p>We cover all the major sub-disciplines of Economics. And the best part is, you can get all your answers in just 30 minutes! </p> 
                                        <div className="btn1">
                                            <ul>
                                                <li>  <Link to="/writing-help/online-assignment-help">Assignment Help</Link></li>
                                                <li>  <Link to="/textbook-solutions-manuals">Textbook Solution</Link></li>
                                                <li>  <Link to="/q-and-a">Q & A Solution</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>;

    const physics = <div id="physics" className="tab-pane bg_shdow fade in active show">
                        <div className="row">
                            <div className="col-md-5 text-center finance_img">
                                <span>
                                    <img src="../images/we-cover-img/physics.png" className="img-fluid" alt=""/>
                                </span>
                            </div>
                            <div className="col-md-7"> 
                                <div className="Text_title text_tb_center3 pb-3">
                                    <h5 className="pb-2">Physics</h5>
                                    <h2>100% accurate Physics solutions, written by PhD experts! </h2>
                                    <p>Learning Physics becomes a lot easier when you have our textbook solution manuals. Our proficient Physics professors have a track record of delivering the most appropriate solutions to learners. </p>
                                    <p>From Mechanics to Modern Physics, we have solutions for everything! Explore our pool of Physics Q&As to find what you need. You can also ask new questions, which we are most likely to deliver even less than an hour. </p> 
                                    <div className="btn1">
                                        <ul>
                                            <li>  <Link to="/writing-help/online-assignment-help">Assignment Help</Link></li>
                                            <li>  <Link to="/textbook-solutions-manuals">Textbook Solution</Link></li>
                                            <li>  <Link to="/q-and-a">Q & A Solution</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>;

    useEffect(() => {
        setHtml(finance)
    },[]);

    const showSubjectData = (chosenSubject) => {
        switch (chosenSubject) {
            case "finance":
                setHtml(finance);
                setSubjectForClassActive('finance');
                break;
            case "marketing":
                setHtml(marketing);
                setSubjectForClassActive('marketing');
                break;
            case "biology":
                setHtml(biology);
                setSubjectForClassActive('biology');
                break;
            case "accounts":
                setHtml(accounts);
                setSubjectForClassActive('accounts');
                break;
            case "socialscience":
                setHtml(socialscience);
                setSubjectForClassActive('socialscience');
                break;
            case "chemistry":
                setHtml(chemistry);
                setSubjectForClassActive('chemistry');
                break;
            case "economics":
                setHtml(economics);
                setSubjectForClassActive('economics');
                break;
            case "physics":
                setHtml(physics);
                setSubjectForClassActive('physics');
                break;
            default:
                // null;
        }
    }

    return(
        <section className="section Content_Covered mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="Content_Covered_title pb-3">
                            <h2>Subjects We Cover</h2>
                            <h3>We cover 100+ subjects across different fields. Explore each field to know more about your options. </h3>
                        </div>
                    </div>
            
                    <div className="col-md-12 pt-5">
                        <div className="tabs_frst1">
                            <ul className="nav nav-tabs nav_tab_wecover">
                                <li className="active" onClick={()=>{showSubjectData('finance')}}><a data-toggle="tab" className={`ml-0 ${subjectForClassActive == 'finance' ? 'active' : ''}`}><span><img src="../images/wecover-icons/finance.png" className="img-fluid" alt=""/></span>Finance</a></li>
                                <li onClick={()=>{showSubjectData('marketing')}}><a data-toggle="tab" className={`${subjectForClassActive == 'marketing' ? 'active' : ''}`}><span><img src="../images/wecover-icons/marketing.png" className="img-fluid" alt=""/></span>Marketing</a></li>
                                <li onClick={()=>{showSubjectData('biology')}}><a data-toggle="tab" className={`${subjectForClassActive == 'biology' ? 'active' : ''}`}><span><img src="../images/wecover-icons/biology.png" className="img-fluid" alt=""/></span>Biology</a></li>
                                <li onClick={()=>{showSubjectData('accounts')}}><a data-toggle="tab" className={`${subjectForClassActive == 'accounts' ? 'active' : ''}`}><span><img src="../images/wecover-icons/accounts.png" className="img-fluid" alt=""/></span>Accounts</a></li>
                                <li onClick={()=>{showSubjectData('socialscience')}}><a data-toggle="tab" className={`${subjectForClassActive == 'socialscience' ? 'active' : ''}`}><span><img src="../images/wecover-icons/social_science.png" className="img-fluid" alt=""/></span>Social Science</a></li>
                                <li onClick={()=>{showSubjectData('chemistry')}}><a data-toggle="tab" className={`${subjectForClassActive == 'chemistry' ? 'active' : ''}`}><span><img src="../images/wecover-icons/chemistry.png" className="img-fluid" alt=""/></span>Chemistry</a></li>
                                <li onClick={()=>{showSubjectData('economics')}}><a data-toggle="tab" className={`${subjectForClassActive == 'economics' ? 'active' : ''}`}><span><img src="../images/wecover-icons/economics.png" className="img-fluid" alt=""/></span>Economics</a></li>
                                <li onClick={()=>{showSubjectData('physics')}}><a data-toggle="tab" className={`mr-0 ${subjectForClassActive == 'physics' ? 'active' : ''}`}><span><img src="../images/wecover-icons/physics.png" className="img-fluid" alt=""/></span>Physics</a></li>
                            </ul>
                        </div>
                        <div className="tab-content">
                            {html}
                            {/* <div id="finance" className="tab-pane bg_shdow fade in active show">
                                <div className="row">
                                    <div className="col-md-5 text-center finance_img">
                                        <span>
                                            <img src="../images/we-cover-img/finance.png" className="img-fluid" alt=""/>
                                        </span>
                                    </div>
                                    <div className="col-md-7"> 
                                        <div className="Text_title text_tb_center3 pb-3">
                                            <h5 className="pb-2">Finance</h5>
                                            <h2> We have a team of experts in Finance</h2>
                                            <p>We have a team of experts in Finance who work incessantly <span>24/7 to solve all your queries</span> related to Finance, provide textbook solutions manual and create your assignments. </p>
                                            <p>Crazy For Study team of experts consists of professors, researchers and finance experts with a prolonged experience in the academic field. </p> 
                                            <div className="btn1">
                                                <ul>
                                                    <li>  <Link to="/">Assignment Help</Link></li>
                                                    <li>  <Link to="/">Textbook Solution</Link></li>
                                                    <li>  <Link to="/">Q & A Solution</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="marketing" className="tab-pane bg_shdow fade">
                                <h3>2</h3>
                            </div>

                            <div id="biology" className="tab-pane bg_shdow fade">
                                <h3>3</h3>
                            </div>

                            <div id="accounts" className="tab-pane bg_shdow fade">
                                <h3>4</h3>
                            </div>

                            <div id="socialscience" className="tab-pane bg_shdow fade">
                                <h3>5</h3>
                            </div>

                            <div id="chemistry" className="tab-pane bg_shdow fade">
                                <h3>6</h3>
                            </div>

                            <div id="economics" className="tab-pane bg_shdow fade">
                                <h3>7</h3>
                            </div>

                            <div id="physics" className="tab-pane bg_shdow fade">
                                <h3>8</h3> 
                            </div>  */}

                        </div>
                    </div>                    
                </div>
            </div>
        </section>
    )
}