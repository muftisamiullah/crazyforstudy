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
                                    <h2> We have a team of experts in Finance</h2>
                                    <p>We have a team of experts in Finance who work incessantly <span>24/7 to solve all your queries</span> related to Finance, provide textbook solutions manual and create your assignments. </p>
                                    <p>Crazy For Study team of experts consists of professors, researchers and finance experts with a prolonged experience in the academic field. </p> 
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
                                    <img src="../images/we-cover-img/finance.png" className="img-fluid" alt=""/>
                                </span>
                            </div>
                            <div className="col-md-7"> 
                                <div className="Text_title text_tb_center3 pb-3">
                                    <h5 className="pb-2">Marketing</h5>
                                    <h2> We have a team of experts in Marketing</h2>
                                    <p>We have a team of marketing experts from top business schools who work incessantly <span>24/7 to solve all your queries</span> related to Marketing, provide textbook solutions manual and create your assignments. </p>
                                    <p>Crazy For Study team of experts consists of professors, researchers and subject matter experts with a prolonged experience in the academic field. </p> 
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
                                    <img src="../images/we-cover-img/finance.png" className="img-fluid" alt=""/>
                                </span>
                            </div>
                            <div className="col-md-7"> 
                                <div className="Text_title text_tb_center3 pb-3">
                                    <h5 className="pb-2">Biology</h5>
                                    <h2> We have a team of experts in Biology</h2>
                                    <p>We have a team of experts in different disciplines of Biology like Microbiology, Zoology, Genetics, Biotechnology, Bioinformatics and Earth Sciences. Crazyforstudy's experts work incessantly <span>24/7 to solve all your queries,</span> provide textbook solutions manual and create your assignments.</p>
                                    <p>Crazy for study team of experts consists of professors, researchers and subject matter experts with a prolonged experience in the academic field. </p> 
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
                                    <img src="../images/we-cover-img/finance.png" className="img-fluid" alt=""/>
                                </span>
                            </div>
                            <div className="col-md-7"> 
                                <div className="Text_title text_tb_center3 pb-3">
                                    <h5 className="pb-2">Accounts</h5>
                                    <h2> We have a team of experts in Accounts</h2>
                                    <p>We have a team of experts in Accounts who work incessantly <span>24/7 to solve all your queries</span> related to Accounts, provide textbook solutions manual and create your assignments. </p>
                                    <p>Crazy for study's team of experts consists of professors, researchers and accounts experts with a prolonged experience in the academic field. </p> 
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
                                        <img src="../images/we-cover-img/finance.png" className="img-fluid" alt=""/>
                                    </span>
                                </div>
                                <div className="col-md-7"> 
                                    <div className="Text_title text_tb_center3 pb-3">
                                        <h5 className="pb-2">Social Science</h5>
                                        <h2> We have a team of experts in Social Science</h2>
                                        <p>We have a team of experts in Social Science who work incessantly <span>24/7 to solve all your queries</span> related to Social Science, provide textbook solutions manual and create your assignments. </p>
                                        <p>Our team of experts consists of professors, researchers and social science experts with a prolonged experience in the academic field. </p> 
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
                                        <img src="../images/we-cover-img/finance.png" className="img-fluid" alt=""/>
                                    </span>
                                </div>
                                <div className="col-md-7"> 
                                    <div className="Text_title text_tb_center3 pb-3">
                                        <h5 className="pb-2">Chemistry</h5>
                                        <h2> We have a team of experts in Chemistry</h2>
                                        <p>We have a team of experts in different disciplines of Chemistry like Organic Chemistry, Biochemistry, Physical Chemistry and Inorganic Chemistry. Our experts work incessantly <span>24/7 to solve all your queries,</span> provide textbook solutions manual and create your assignments.</p>
                                        <p>Crazy for study team of experts consists of professors, researchers and chemistry experts with a prolonged experience in the academic field. </p> 
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
                                        <img src="../images/we-cover-img/finance.png" className="img-fluid" alt=""/>
                                    </span>
                                </div>
                                <div className="col-md-7"> 
                                    <div className="Text_title text_tb_center3 pb-3">
                                        <h5 className="pb-2">Economics</h5>
                                        <h2> We have a team of experts in Economics</h2>
                                        <p>We have a team of experts in Economics who work incessantly <span>24/7 to solve all your queries</span> related to Microeconomics and Macroeconomics, provide textbook solutions manual and create your assignments. </p>
                                        <p>CFS team of experts consists of professors, researchers and Economics experts with a prolonged experience in the academic field. </p> 
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
                                    <img src="../images/we-cover-img/finance.png" className="img-fluid" alt=""/>
                                </span>
                            </div>
                            <div className="col-md-7"> 
                                <div className="Text_title text_tb_center3 pb-3">
                                    <h5 className="pb-2">Physics</h5>
                                    <h2> We have a team of experts in Physics</h2>
                                    <p>We have a team of experts in Physics who work incessantly <span>24/7 to solve all your queries</span> related to Physics, provide textbook solutions manual and create your assignments. </p>
                                    <p>CFS team of physics experts consists of professors, researchers and physics experts with a prolonged experience in the academic field. </p> 
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
                            <h3>We cover various subjects from different fields. Explore each subject Explore each subject to learn more.</h3>
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