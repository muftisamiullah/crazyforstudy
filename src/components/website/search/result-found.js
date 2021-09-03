import { useState } from "react";
import  OwlCarousel  from "../../common/owl-carousel";
import { Link } from 'react-router-dom';
import BookImage from '../../common/book-image'
import Pagination from '../../common/pagination'
import { MakeSlug } from '../../common/make-slug'

export default function ResultsFound({...props}){
    const [classn, setClassN]= useState('books');

    return(
        <>
        <section className="section font_sz bg_colr_expert pt-2 pb-0">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <h3 className="font-18">Results for <strong>“{props.resultsFor}”</strong></h3>
                </div>
                </div>
            </div>
        </section>

        <section className="section mt-4 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 tabs_book_study pb-3">
                        <ul className="nav nav-pills" role="tablist">
                            <li className="nav-item">
                                <a className={`${classn !== 'books' ? 'nav-link' : 'nav-link active'}`} data-toggle="pill" href="#" onClick={()=>{setClassN('books')}}>Books </a>
                            </li>
                            <li className="nav-item">
                                <a className={`${classn !== 'study' ? 'nav-link' : 'nav-link active'}`} data-toggle="pill" href="#" onClick={()=>{setClassN('study')}}>Study</a>
                            </li>
                            <li className="nav-item">
                                <a className={`${classn !== 'qanda' ? 'nav-link' : 'nav-link active'}`} data-toggle="pill" href="#" onClick={()=>{setClassN('qanda')}}>Q&amp;A</a>
                            </li>
                        </ul>
                    </div>

                    <div className="tab-content textbooks_bg">
                        <div id="books" className={`${classn !== 'books' ? 'container tab-pane fade' : 'container tab-pane active'}`}>
                            <div className="row">
                                <div className="col-md-12 textbooks_title mb-2">
                                    <h3>Textbooks</h3>
                                </div>
                                {props && props.dataB && props.dataB.books.length>0 ? props.dataB.books.map((item,key)=>{
                                    return( <div className="col-md-4 textbooks_title" key={key}>
                                                <div className="textbooks_text">
                                                    <div className="">
                                                        <Link to={`/textbook-solutions-manuals/isbn-${item.ISBN13}-${MakeSlug(item.BookName)}-${MakeSlug(item.Edition)}`}>
                                                            <a>
                                                                <span className="accounting_book">
                                                                    {/* <img src="/images/accounting_book.jpg" className="img-fluid" alt=""/> */}
                                                                    <BookImage isbn={item.ISBN13}/>
                                                                </span>
                                                            </a>
                                                        </Link>
                                                        <div className="textbooks_result">
                                                            <Link to={`/textbook-solutions-manuals/isbn-${item.ISBN13}-${MakeSlug(item.BookName)}-${MakeSlug(item.Edition)}`}>
                                                                <a href="#">
                                                                    <div className="accounting_textbook1">
                                                                        <h4>{item.BookName}</h4>
                                                                        <div className="textbook_edition">{item.Edition}</div>
                                                                        <div className="textbook_isbn"><span>ISBN-13: </span><span className="isbn_number"><span>{item.ISBN13}</span></span></div>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                            <div className="view_step_img">
                                                            <Link to={`/textbook-solutions-manuals/isbn-${item.ISBN13}-${MakeSlug(item.BookName)}-${MakeSlug(item.Edition)}`}>
                                                                <a href="#">
                                                                    <span>
                                                                        <BookImage isbn={item.ISBN13}/>
                                                                        {/* <img src="/images/view_step_img.jpg" className="img-fluid img" alt=""/> */}
                                                                    </span> 
                                                                    <div className="step-by-step">View step-by-step <span>solutions</span></div>
                                                                </a>
                                                            </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                }): <div className="col-md-4">No Results Found in Books</div>}
                            </div> 
                            {/* <div className="col-md-12 mt-4">
                                <div className="next_prew">
                                    <ul>
                                        <li><a href="#" className="border-left-0 ">Previous</a></li>
                                        <li><a href="#" className="active">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#">Next</a></li>
                                    </ul>
                                </div>
                            </div> */}
                            <Pagination setPageNo={props.setPageNoB} pageNo={props.pageNoB} total={props.dataB.total}/>
                        </div>

                        <div id="study"  className={`${classn !== 'study' ? 'container tab-pane fade' : 'container tab-pane active'}`}>
                            <div className="row">
                                <div className="col-md-12 textbooks_title mb-2">
                                    <h3>Solution manuals for textbooks</h3>
                                </div>

                                <OwlCarousel items={3} className="owl-carousel study_slider" loop autoplay={true} nav margin={10}>
                                    {props && props.dataB && props.dataB.books.map((item,key)=>{
                                        return( <div className="item textbooks_title"key={key}>
                                                    <div className="textbooks_text">
                                                        <div className="">
                                                            <Link to={"/"+item.ISBN13}>
                                                                <a href="#">
                                                                    <span className="accounting_book">
                                                                        <BookImage isbn={item.ISBN13}/>
                                                                    </span>
                                                                    <div className="textbooks_result">
                                                                        <div className="accounting_textbook1">
                                                                            <h4>{item.BookName}</h4>
                                                                            <div className="textbook_edition">{item.Edition}</div>
                                                                            <div className="textbook_isbn"><span>ISBN-13: </span><span className="isbn_number"><span>{item.ISBN13}</span></span></div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                    })}
                                </OwlCarousel>

                                <section className="section font_sz text_justify pb-4 mt-2">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 pb-4 pl-0 pr-0">
                                                {props && props.dataQ && props.dataQ.questions.length>0 ? props.dataQ.questions.map((item,key)=>{
                                                return( <div className="text_q_nd_ans" key={key}>
                                                        <div className="Qtion_n_Stion_text Recent_text related_a">
                                                        {key === 0 ? <h2 className="mb-3"><span>Related Question and Answer</span> </h2> : ''}
                                                        <div className="read_more_q">
                                                            <span className="qustion_mark1">Q :</span>
                                                            <div className="ques_pl">
                                                                <p className="mb-0">{item.question}</p>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div className="Qtion_n_Stion_text">
                                                        <div className="read_more_q">
                                                            <span className="answer_mark1">A :</span>
                                                            <div className="ans_pl">
                                                                <p className="font-15"><a href="#">View Answer</a></p>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>)
                                                }): <div className="col-md-4">No Results Found in Q&A</div>}
                                            </div>
                                            <Pagination setPageNo={props.setPageNoQ} pageNo={props.pageNoQ} total={props.dataQ.total}/>
                                            {/* <div className="col-md-12 mt-2">
                                                <div className="next_prew">
                                                    <ul>
                                                    <li><a href="#" className="border-left-0 ">Previous</a></li>
                                                    <li><a href="#" className="active">1</a></li>
                                                    <li><a href="#">2</a></li>
                                                    <li><a href="#">3</a></li>
                                                    <li><a href="#">4</a></li>
                                                    <li><a href="#">5</a></li>
                                                    <li><a href="#">Next</a></li>
                                                    </ul>
                                                </div>
                                            </div> */}
                                        </div>
                                        </div>
                                </section>
                               
                            </div>
                        </div> 

                        {/* <div id="qanda" className={`${classn !== 'qanda' ? 'container tab-pane fade' : 'container tab-pane active'}`}>
                            <section className="section font_sz text_justify pb-4 mt-2">
                                <div className="container">
                                <div className="row">
                                    <div className="col-md-12 pb-4 pl-0 pr-0">
                                    {props && props.data && props.data.data1.questions.length>0 ? props.data.data1.questions.map((item,key)=>{
                                       return( <div className="text_q_nd_ans" key={key}>
                                            <div className="Qtion_n_Stion_text Recent_text related_a">
                                            {key === 0 ? <h2 className="mb-3"><span>Related Question and Answer</span> </h2> : ''}
                                            <div className="read_more_q">
                                                <span className="qustion_mark1">Q :</span>
                                                <div className="ques_pl">
                                                    <p className="mb-0">{item.question}</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="Qtion_n_Stion_text">
                                            <div className="read_more_q">
                                                <span className="answer_mark1">A :</span>
                                                <div className="ans_pl">
                                                    <p className="font-15"><a href="#">View Answer</a></p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>)
                                    }): <div>No Results Found in Q&A</div>}
                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <div className="next_prew">
                                            <ul>
                                            <li><a href="#" className="border-left-0 ">Previous</a></li>
                                            <li><a href="#" className="active">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a href="#">Next</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </section>
                        </div> */}

                    </div>
                </div>
            </div>
        </section>
    </>
    )
}