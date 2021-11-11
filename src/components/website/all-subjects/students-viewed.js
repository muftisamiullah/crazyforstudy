import { Link } from "react-router-dom"
// import parse from 'html-react-parser';   // we used htmlDecode for the same purpose
// import striptags from 'striptags';   // we used htmlDecode for the same purpose
import { stringToSlug, htmlDecode } from '../../common/make-slug';

export default function StudentViewed({...props}){
    return(
        <section className="section font_sz pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mb-2">
                        <div className="Content_Covered_title pb-2">
                        <h2 className="pb-2">Students who viewed {props.bookname} textbook solution manuals also checked out</h2>
                        <p>Recently Answered - Top 3 {props.bookname} Homework Questions</p>
                        </div>
                    </div>
                    <div className="col-md-12 pb-4 text_justify">
                        <div className="text_q_nd_ans">
                            <div className="Qtion_n_Stion_text Recent_text">
                                <h3 className="mb-4 font-14">Experts answer in as little as 30 minutes</h3>
                            </div>
                        </div>
                        {props.data ? (props.data.data.length >! 0 ? props.data.data.map((item, key)=>{
                            const html = "'" + item.question + "'";
                            return(
                            <div className="text_q_nd_ans" key={key}>
                                <div className="Qtion_n_Stion_text Recent_text">
                                    <div className="read_more_q">
                                        <span className="qustion_mark1">Q :</span>  
                                        <div className="ques_pl">
                                                {item.question.includes('<p>')
                                                ?
                                                <>  
                                                    <p className="mb-0" dangerouslySetInnerHTML={{__html: `${(htmlDecode(item.question))}`}}></p>
                                                    {/* <p className="mb-0" dangerouslySetInnerHTML={{__html: `${(striptags(item.question))}`}}></p> */}
                                                </>
                                                :
                                                <>
                                                    {/* <p className="mb-0" dangerouslySetInnerHTML={{__html: `${parse(`${html}`)}`}}></p> */}
                                                    <p className="mb-0" dangerouslySetInnerHTML={{__html: `${htmlDecode(`${html}`)}`}}></p>
                                                </>
                                                }
                                        </div>
                                    </div>
                                </div>
                                <div className="Qtion_n_Stion_text">
                                    <div className="read_more_q">
                                        <span className="answer_mark1">A :</span> 
                                        <div className="ques_pl ans_3" style={{display:"none"}}>
                                        <p className="mb-0" dangerouslySetInnerHTML={{__html: `${htmlDecode(`${item?.shortanswer}`)}`}}></p>
                                            <div className="ans_pl pl-0">
                                            <p className="font-15"><a href="">View All</a></p>
                                        </div>
                                        </div>
                                        <div className="ans_pl">
                                            {item.question.includes('<p>')
                                                // ? <p className="font-15 view_ans_btn3"><Link to={`${'/q-and-a/'+stringToSlug(parse(striptags(item.question)).substr(0,90))+'-'+item._id}`}>View Answer</Link></p>
                                                // : <p className="font-15 view_ans_btn3"><Link to={`${'/q-and-a/'+stringToSlug(striptags(parse(item.question)).substr(0,90))+'-'+item._id}`}>View Answer</Link></p>}
                                                ? <p className="font-15 view_ans_btn3"><Link to={`${'/q-and-a/'+stringToSlug(htmlDecode(item.question)).substr(0,90)+'-'+item._id}`}>View Answer</Link></p>
                                                : <p className="font-15 view_ans_btn3"><Link to={`${'/q-and-a/'+stringToSlug(htmlDecode(item.question)).substr(0,90)+'-'+item._id}`}>View Answer</Link></p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                        :
                        <p>No Questions Found</p>) : <p>Loading. ..</p>
                    }
                    </div>
                    <div className="col-md-12 btn1 text-center ">
                        <Link to={props.url} className="pl-5 pr-5 text-black">View All</Link> 
                    </div>
                </div>
            </div>
            </section>
    )
}