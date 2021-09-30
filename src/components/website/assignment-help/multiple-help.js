import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function MultipleHelp() {
    const [html, setHtml] = useState();
    const [numberForClassActive, setNumberForClassActive] = useState(1);
    
    const showSubjectData = (chosenSubject) => {
        switch (chosenSubject) {
            case 1:
                setHtml(one);
                setNumberForClassActive(1);
                break;
            case 2:
                setHtml(two);
                setNumberForClassActive(2);
                break;
            case 3:
                setHtml(three);
                setNumberForClassActive(3);
                break;
            case 4:
                setHtml(four);
                setNumberForClassActive(4);
                break;
            case 5:
                setHtml(five);
                setNumberForClassActive(5);
                break;
            case 6:
                setHtml(six);
                setNumberForClassActive(6);
                break;
            case 7:
                setHtml(seven);
                setNumberForClassActive(7);
                break;
            default:
                // null;
        }
    }

    useEffect(() => {
        setHtml(one)
    },[]);

    const one = <div className="tab-pane fade show active"  role="tabpanel" aria-labelledby="accounting-tab">
                    <h3>Accounting Assignment Help</h3>
                    <p>Hunting for online assignment help? We are at your doorstep. You can quickly avail our top online assignment help service. Check out a few assignment topics delivered by our experts in the past. </p>
                    <ul>
                        <li><i className="fa fa-dot-circle-o"></i> Cost Accounting</li>
                        <li><i className="fa fa-dot-circle-o"></i> Management Accounting</li>
                        <li><i className="fa fa-dot-circle-o"></i> Auditing</li>
                        <li><i className="fa fa-dot-circle-o"></i> Tax Accounting</li>
                        <li><i className="fa fa-dot-circle-o"></i> Fund Accounting</li>
                        <li><i className="fa fa-dot-circle-o"></i> Forensic Accounting</li>
                        <li><i className="fa fa-dot-circle-o"></i> International Accounting</li>
                        <li><i className="fa fa-dot-circle-o"></i> Financial Accounting</li>
                        <li><i className="fa fa-dot-circle-o"></i> Register now to get the benefit of cost- efficient online assignment help service. Hurry! Make a call now.</li>      <li><a href="#">Get Assignment Solutions</a></li>
                    </ul>
                </div>

    const two = <div className="tab-pane fade show active"  role="tabpanel" aria-labelledby="accounting-tab"> <h3>Science/maths Assignment Help</h3>
    <p>confused? You have no clue what to write in your assignment. We would prefer you to avail our online assignment help service. Have a look at some of the assignment topics handled by our experts earlier. </p>
    <ul>
        <li><i className="fa fa-dot-circle-o"></i> Meteorology.</li> 
        <li><i className="fa fa-dot-circle-o"></i> Zoology.</li> 
        <li><i className="fa fa-dot-circle-o"></i> Human biology.</li> 
        <li><i className="fa fa-dot-circle-o"></i> Botany.</li> 
        <li><i className="fa fa-dot-circle-o"></i> Mycology</li> 
        <li><i className="fa fa-dot-circle-o"></i>  Maths: Algebra.</li> 
        <li><i className="fa fa-dot-circle-o"></i> Calculus and analysis.</li> 
        <li><i className="fa fa-dot-circle-o"></i> Geometry and topology.</li> 
        <li><i className="fa fa-dot-circle-o"></i> Combinatorics.</li> 
        <li><i className="fa fa-dot-circle-o"></i> Mathematical physics</li> 
        <li><i className="fa fa-dot-circle-o"></i> Mathematical physics</li>
        <li>Quickly register online to avail our top assignment services and get your assignments on time.</li>
        <li><a href="#">Get Assignment Solutions</a></li>
    </ul></div>
    const three = <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="accounting-tab">
        <h3>Finance online assignment help </h3>
    <p>Forgot to work on your assignments? Now you don’t know what to do when your deadline is near. We would recommend you to hire our professionals for your assignment task. They will never cross the deadline. Check out a few finance subjects delivered by our team recently. </p>
    <ul>
        <li><i className="fa fa-dot-circle-o"></i> Private equity</li>
        <li><i className="fa fa-dot-circle-o"></i> Risk management</li>
        <li><i className="fa fa-dot-circle-o"></i> Venture capital</li>
        <li><i className="fa fa-dot-circle-o"></i> Financial management</li>
        <li><i className="fa fa-dot-circle-o"></i> Financial markets</li>
        <li><i className="fa fa-dot-circle-o"></i> Financial planning</li>
        <li><i className="fa fa-dot-circle-o"></i> Financial engineering</li>
        <li><i className="fa fa-dot-circle-o"></i> Financial accounting</li>
        <li><i className="fa fa-dot-circle-o"></i> Financial reporting</li>
        <li><i className="fa fa-dot-circle-o"></i> International finance</li>
        <li>Grab our online assignment help service instantly and get the benefit of quality work at a reasonable price.</li>
        <li><a href="#">Get Assignment Solutions</a></li>
    </ul>
    </div>
    const four = <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="accounting-tab">
        <h3>Engineering online assignment help </h3>
    <p>Do you lack in presentation skills when it comes to assignments? Then quickly avail our online engineering help service at a very affordable rate. By taking our services, you’ll get engaging, crisp and presentable content which will surely help you in scoring well. Have a look at some assignment topics below.  </p>
    <ul>
        <li><i className="fa fa-dot-circle-o"></i> Mechatronics Engineering</li>
        <li><i className="fa fa-dot-circle-o"></i> Genetic Engineering</li>
        <li><i className="fa fa-dot-circle-o"></i> Ocean and Marine Engineering</li>
        <li><i className="fa fa-dot-circle-o"></i> Mining Engineering</li>
        <li><i className="fa fa-dot-circle-o"></i> Civil Engineering</li>
        <li><i className="fa fa-dot-circle-o"></i> Mechanical Engineering</li>
        <li><i className="fa fa-dot-circle-o"></i> Electrical Engineering</li>
        <li><i className="fa fa-dot-circle-o"></i> Electrical & Electronics Engineering</li>
        <li><i className="fa fa-dot-circle-o"></i> Electronics & Communication Engineering</li>
        <li><i className="fa fa-dot-circle-o"></i> Ocean and marine Engineering</li>
        <li> If you have any doubt or inquiry on online assignment help service then dial our helpline number instantly.</li>
        <li><a href="#">Get Assignment Solutions</a></li>
    </ul>
   </div>
    const five = <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="accounting-tab">
         <h3>Computer science online assignment help  </h3>
    <p> Stressed? Are you preparing assignments for multiple subjects? Then you hire our professionals. They will write fresh content and will deliver on the target date. Have a look at the assignment topics down below.  </p>
    <ul>
        <li><i className="fa fa-dot-circle-o"></i> DBMS (DataBase management system)</li>
        <li><i className="fa fa-dot-circle-o"></i> Video Game Designer</li>
        <li><i className="fa fa-dot-circle-o"></i> Computer Architecture and Engineering</li>
        <li><i className="fa fa-dot-circle-o"></i> UI designer</li>
        <li><i className="fa fa-dot-circle-o"></i> Computer Animation and 3D design</li>
        <li><i className="fa fa-dot-circle-o"></i> Computer VFX</li>
        <li><i className="fa fa-dot-circle-o"></i> Motion graphics and Visual Effects</li>
        <li><i className="fa fa-dot-circle-o"></i> Computer Biosystem</li>
        <li><i className="fa fa-dot-circle-o"></i> Numeric analysis</li>
        <li><i className="fa fa-dot-circle-o"></i> Cryptography</li>
        <li> Dial to request for online assignment help. Get the benefit of affordable assignments today. Hurry! Dial now.</li>
        <li><a href="#">Get Assignment Solutions</a></li>
    </ul>
    </div>
    const six = <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="accounting-tab"> 
    <h3>Humanities assignment help </h3>
    <p> You Hate doing assignments? Want to get rid of assignment work? Hire our experts today. They are highly skilled in writing academic work. For now, check our assignment topics submitted in the past.  </p>
    <ul>
        <li><i className="fa fa-dot-circle-o"></i> Literature</li>
        <li><i className="fa fa-dot-circle-o"></i> Philosophy</li>
        <li><i className="fa fa-dot-circle-o"></i> Religion</li>
        <li><i className="fa fa-dot-circle-o"></i> Performing arts</li>
        <li><i className="fa fa-dot-circle-o"></i> Visual arts</li>
        <li><i className="fa fa-dot-circle-o"></i> Anthropology</li>
        <li><i className="fa fa-dot-circle-o"></i> Archaeology</li>
        <li><i className="fa fa-dot-circle-o"></i> Classics</li>
        <li><i className="fa fa-dot-circle-o"></i> History</li>
        <li><i className="fa fa-dot-circle-o"></i> Linguistics and languages</li>
        <li><i className="fa fa-dot-circle-o"></i> Law and politics</li>
        <li> Make a call if you are looking for quality assignments. We deliver crisp engaging content to our valuable clients.</li>
        <li><a href="#">Get Assignment Solutions</a></li>
    </ul>
     </div>
    const seven = <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="accounting-tab">
        <h3>Economics online Assignment Help </h3>
    <p>Encountering difficulty in hunting the topics? Then you must look for experienced professionals. You can avail our services. We have experience in handling many spheres. Check some of the topics delivered by our subject matter experts. </p>
    <ul>
        <li><i className="fa fa-dot-circle-o"></i> Macroeconomics and Monetary Economics</li>
        <li><i className="fa fa-dot-circle-o"></i> Game Theory and Bargaining Theory</li>
        <li><i className="fa fa-dot-circle-o"></i> Money and Interest Rates</li>
        <li><i className="fa fa-dot-circle-o"></i> International Economics and International Trade</li>
        <li><i className="fa fa-dot-circle-o"></i> Finance and Financial Economics</li>
        <li><i className="fa fa-dot-circle-o"></i> Public Economics, Taxation, and Government Spending</li>
        <li><i className="fa fa-dot-circle-o"></i> Health, Education, and Welfare</li>
        <li><i className="fa fa-dot-circle-o"></i> Labor and Demographic Economics</li>
        <li><i className="fa fa-dot-circle-o"></i> Agricultural and Natural Resource Economics</li>
        <li><i className="fa fa-dot-circle-o"></i> Urban, Rural, and Regional Economics</li>
        <li> Immediately avail our online assignment help services by enrolling on our site. You can also call or live chat 24/7.</li>
        <li><a href="#">Get Assignment Solutions</a></li>
    </ul>
    </div>
    
    return(       
        <section className="section Content_Covered mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mb-4">
                        <div className="Content_Covered_title pb-3">
                            <h2>Online assignment help </h2>
                            <h3 className="w-100">Get in-depth knowledge of topics covered in our online assignment help service We are a recognized platform for your requirements. Grab our online assignment help service and experience a stress-free life. Our Ph.D. experts are capable enough in handling multiple disciplines. </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-3 tabs_ass_help">
                        <ul className="nav nav-pills flex-column" id="myTab" role="tablist">
                            <li className="nav-item" onClick={()=>{showSubjectData(1)}}>
                                <a className={`ml-0 ${numberForClassActive == 1 ? 'nav-link active' : 'nav-link'}`} id="accounting-tab" data-toggle="tab" href="#accounting" role="tab" aria-controls="accounting" aria-selected="true">Accounting Assignment Help</a>
                            </li>
                            <li className="nav-item" onClick={()=>{showSubjectData(2)}}>
                                <a className={`ml-0 ${numberForClassActive == 2 ? 'nav-link active' : 'nav-link'}`} id="science-tab" data-toggle="tab" href="#science" role="tab" aria-controls="science" aria-selected="false">Science/maths Assignment Help </a>
                            </li>
                            <li className="nav-item" onClick={()=>{showSubjectData(3)}}>
                                <a className={`ml-0 ${numberForClassActive == 3 ? 'nav-link active' : 'nav-link'}`} id="finance-tab" data-toggle="tab" href="#finance" role="tab" aria-controls="finance" aria-selected="false">Finance online assignment help</a>
                            </li>
                            <li className="nav-item" onClick={()=>{showSubjectData(4)}}>
                                <a className={`ml-0 ${numberForClassActive == 4 ? 'nav-link active' : 'nav-link'}`} id="engineering-tab" data-toggle="tab" href="#engineering" role="tab" aria-controls="engineering" aria-selected="false">Engineering online assignment help  </a>
                            </li>
                            <li className="nav-item" onClick={()=>{showSubjectData(5)}}>
                                <a className={`ml-0 ${numberForClassActive == 5 ? 'nav-link active' : 'nav-link'}`} id="computer-tab" data-toggle="tab" href="#computer" role="tab" aria-controls="computer" aria-selected="false">Computer science online assignment help     </a>
                            </li>
                            <li className="nav-item" onClick={()=>{showSubjectData(6)}}>
                                <a className={`ml-0 ${numberForClassActive == 6 ? 'nav-link active' : 'nav-link'}`} id="humanities-tab" data-toggle="tab" href="#humanities" role="tab" aria-controls="humanities" aria-selected="false"> Humanities assignment help      </a>
                            </li>
                            <li className="nav-item" onClick={()=>{showSubjectData(7)}}>
                                <a className={`ml-0 ${numberForClassActive == 7 ? 'nav-link active' : 'nav-link'}`} id="economics-tab" data-toggle="tab" href="#economics" role="tab" aria-controls="economics" aria-selected="false"> Economics online Assignment Help    </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-8 ass_help_tabtext">
                        <div className="tab-content" id="myTabContent">
                            {html}
                            {/* <div className="tab-pane fade" id="science" role="tabpanel" aria-labelledby="science-tab">
                            </div>
                            <div className="tab-pane fade" id="finance" role="tabpanel" aria-labelledby="finance-tab">
                            </div>
                            <div className="tab-pane fade" id="engineering" role="tabpanel" aria-labelledby="engineering-tab">
                            </div>
                            <div className="tab-pane fade" id="computer" role="tabpanel" aria-labelledby="computer-tab">
                            </div>
                            <div className="tab-pane fade" id="humanities" role="tabpanel" aria-labelledby="humanities-tab">
                            </div>
                            <div className="tab-pane fade" id="economics" role="tabpanel" aria-labelledby="economics-tab">
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}