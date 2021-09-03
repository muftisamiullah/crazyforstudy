import Modal from '../../common/modal'
import {useState} from 'react'

export default function Reviews({...props}){
    const [display, setDisplay] = useState(false);
    const [modalClass, setModalClass] = useState(false);
    const openDialog =  () => {
        setDisplay('block')
        setModalClass('show')
        if (document.body.style.overflow !== "hidden") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }
    
    return(
        <>
        <section className="section Reviews_Ratings text_justify mt-4" id="reviews" >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="Reviews_bg">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="Reviews_Ratings_text">
                                        <h3 className="">Reviews & Ratings</h3>
                                        <p className="start_review_pr"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>  <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <span className="ml-1">4 out of 5 stars</span></p>
                                        <ul>
                                            <li>5 <i className="fa fa-star"></i> <span className="line_rating span5"></span> 0</li>
                                            <li>4 <i className="fa fa-star"></i> <span className="line_rating span4"></span> 18</li>
                                            <li>3 <i className="fa fa-star"></i> <span className="line_rating span3"></span> 10</li>
                                            <li>2 <i className="fa fa-star"></i> <span className="line_rating span2"></span> 0</li>
                                            <li>1 <i className="fa fa-star"></i> <span className="line_rating span1"></span> 0</li>
                                            <li onClick={openDialog}><a href="" onClick={(e)=>{e.preventDefault()}}><i className="fa fa-pencil"></i> WRITE YOUR REVIEW</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    {props.reviews && props.reviews.map((item,key)=>{
                                        return(
                                            <div className="user_icon1_bg" key={key}>
                                                <div className="user_icon1_text text-center">
                                                    <ul>
                                                        <li><span className="img"><img src="/images/user_icon1.png" className="img-fluid" alt=""/></span></li>
                                                        <li>
                                                        {[...Array(item.rating)].map((e, i) => 
                                                            <i className="fa fa-star" key={i}></i>
                                                        )}
                                                        </li>
                                                        <li>Rated <span>{item.rating}/5</span></li>
                                                    </ul>
                                                </div>
                                                <div className="Dre_Brandell">
                                                    <p className="font-16"><strong>{item.name}</strong></p>
                                                    <p>{item.review} </p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <div className="btn1 text-right pr-4 pb-3">
                                        <a href="#" className="text-black rev-btn">View all</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
        <Modal modalClass={modalClass} display={display} setDisplay={setDisplay} setModalClass={setModalClass}/>
        </>
    )
}