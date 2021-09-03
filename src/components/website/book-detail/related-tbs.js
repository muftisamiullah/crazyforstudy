import BookImage from "../../common/book-image"

export default function RelatedTbs({...props}){
    return(
        <section className="section  pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mb-5">
                        <div className="Content_Covered_title pb-3">
                            <h2>{props.heading ? props.heading : "Students who viewed this book also checked out"}</h2> 
                            <p>{props.subHeading ? props.subHeading : ""}</p>
                        </div>
                    </div>
                    {props.data && props.data.map((item,key)=>{
                        return(
                            <div className="col-md-3 pbtm" key={key}>
                                <div className="our_popular_text">
                                    <div className="our_popular_img">
                                        {/* <img src="/images/our-popular/img1.jpg" className="img-fluid" alt=""/> */}
                                        <BookImage isbn={item.ISBN13}/>
                                    </div>
                                    <div className="our_popular_title">{item.DisplayTitle ? item.DisplayTitle : item.BookName} 
                                    </div>
                                    <div className="our_popular_isbn_no">ISBN: <span>{item.ISBN13} </span>
                                    </div>
                                    <div className="star_rating">
                                        <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-empty"></i>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </section>
    )
}