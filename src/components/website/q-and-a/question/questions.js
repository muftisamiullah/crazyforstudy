import Pagination from '../../../../components/common/pagination'
// import parse from 'html-react-parser';   // we used htmlDecode for the same purpose
import { Link } from 'react-router-dom';
import { stringToSlug, htmlDecode, isHTML } from '../../../common/make-slug';
// import striptags from 'striptags';   // we used htmlDecode for the same purpose

export default function questions({...props}){
    return(
        <section className="section font_sz text_justify pt-5 pb-4" id='questions'>
            <div className="container">
                <div className="row">
                <div className="col-md-12 pb-4">
                    <div className="text_q_nd_ans">
                        <div className="Qtion_n_Stion_text Recent_text">
                            <h2 className="font-24 mb-3"><span>{props.heading} Questions & Answers</span> </h2>
                            <h3 className="mb-4 font-14">Experts answer in as little as 30 minutes</h3>
                        </div>
                    </div>
                    {props.isLoading ? "Please Wait. .." : props.data && props.data.data.length>0 ? props.data.data.map((item,key)=>{
                        // let name = <span dangerouslySetInnerHTML={{__html: parse(item.question)}}></span>
                        let name = <span dangerouslySetInnerHTML={{__html: htmlDecode(item.question)}}></span>
                        return(
                            <div className="text_q_nd_ans" key={key}>
                                <div className="Qtion_n_Stion_text Recent_text">
                                    <div className="read_more_q">
                                    <span className="qustion_mark1">Q :</span>  
                                        <div className="ques_pl">
                                           
                                            {item && item.question && isHTML(item.question)
                                            // {item.question.includes('<p>')
                                            // ? <p className="mb-0" dangerouslySetInnerHTML={{__html: `${striptags(item.question).substr(0,120)}`}}></p>
                                            // : <p className="mb-0" dangerouslySetInnerHTML={{__html: `${parse(item.question).substr(0,120)}`}}></p>}
                                            ? <p className="mb-0" dangerouslySetInnerHTML={{__html: `${item.question?.substr(0,120)}`}}></p>
                                            : <p className="mb-0" dangerouslySetInnerHTML={{__html:  `${htmlDecode(item.question)?.substr(0,120)}`}}></p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="Qtion_n_Stion_text">
                                    <div className="read_more_q">
                                    <span className="answer_mark1">A :</span> 
                                    <div className="ans_pl">
                                        {/* {item.question.includes('<p>')
                                        ? <p className="font-15"><Link to={`${'/q-and-a/'+router.query.subject+'/'+router.query.subsubject+'/'+router.query.chieldsubject+'/'+stringToSlug(parse(striptags(item.question)).substr(0,90))+'-'+item.old_qid}`}>View Answer</Link></p>
                                        : <p className="font-15"><Link to={`${'/q-and-a/'+router.query.subject+'/'+router.query.subsubject+'/'+router.query.chieldsubject+'/'+stringToSlug(striptags(parse(item.question)).substr(0,90))+'-'+item.old_qid}`}>View Answer</Link></p>} */}
                                        {isHTML(item.question)
                                        // {item.question.includes('<p>')
                                        ? <p className="font-15"><Link to={`${'/q-and-a/'+stringToSlug(item.question)?.substr(0,90)+'-'+item._id}`}>View Answer</Link></p>
                                        : <p className="font-15"><Link to={`${'/q-and-a/'+stringToSlug(htmlDecode(item.question))?.substr(0,90)+'-'+item._id}`}>View Answer</Link></p>}
                                        {/* ? <p className="font-15"><Link to={`${'/q-and-a/'+stringToSlug(parse(striptags(item.question)).substr(0,90))+'-'+item._id}`}>View Answer</Link></p>
                                        : <p className="font-15"><Link to={`${'/q-and-a/'+stringToSlug(striptags(parse(item.question)).substr(0,90))+'-'+item._id}`}>View Answer</Link></p>} */}
                                    </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }):
                    <p>No Questions Found</p>
                    }
                </div>
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
                {props.data && props.data.data.length>0 && <Pagination setPageNo={props.setPageNo} pageNo={props.pageNo} total={props.data.total}/>}
                </div>
            </div>
        </section>
    )
}