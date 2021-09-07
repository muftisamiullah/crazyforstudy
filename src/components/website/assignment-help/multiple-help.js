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
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, popular belief, Lorem Ipsum is not simply random text.  </p>
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

    const two = <div className="tab-pane fade show active"  role="tabpanel" aria-labelledby="accounting-tab"><h3>two</h3></div>
    const three = <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="accounting-tab"><h3>three</h3></div>
    const four = <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="accounting-tab"><h3>four</h3></div>
    const five = <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="accounting-tab"><h3>five</h3></div>
    const six = <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="accounting-tab"><h3>six</h3></div>
    const seven = <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="accounting-tab"><h3>seven</h3></div>
    
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
                                <a className={`ml-0 ${numberForClassActive == 5 ? 'nav-link active' : 'nav-link'}`} id="computer-tab" data-toggle="tab" href="#computer" role="tab" aria-controls="computer" aria-selected="false">Computer scienec online assignment help     </a>
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