export default function ViewAll({...props}){
    return(
        <section className="section Reviews_Ratings ratings_pg text_justify mt-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="Reviews_bg">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="rating-block">
                                                    <h4>Average user rating</h4>
                                                    <h2 className="bold padding-bottom-7">4.3 <small>/ 5</small></h2>
                                                    <button type="button" className="btn btn-ddd btn-sm" aria-label="Left Align">
                                                        <i className="fa fa-star"></i>
                                                    </button>
                                                    <button type="button" className="btn btn-ddd btn-sm" aria-label="Left Align">
                                                        <i className="fa fa-star"></i>
                                                    </button>
                                                    <button type="button" className="btn btn-ddd btn-sm" aria-label="Left Align">
                                                        <i className="fa fa-star"></i>
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-grey btn-sm" aria-label="Left Align">
                                                        <i className="fa fa-star"></i>
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-grey btn-sm" aria-label="Left Align">
                                                        <i className="fa fa-star"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-md-7 Reviewspg">
                                                <div className="Reviews_Ratings_text">
                                                    <h3 className="">Reviews & Ratings</h3>
                                                    <ul>
                                                        <li>5 <i className="fa fa-star"></i> <span className="line_rating span5"></span> 0</li>
                                                        <li>4 <i className="fa fa-star"></i> <span className="line_rating span4"></span> 18</li>
                                                        <li>3 <i className="fa fa-star"></i> <span className="line_rating span3"></span> 10</li>
                                                        <li>2 <i className="fa fa-star"></i> <span className="line_rating span2"></span> 0</li>
                                                        <li>1 <i className="fa fa-star"></i> <span className="line_rating span1"></span> 0</li>
                                                        <li onClick={props.open}><a href="" data-toggle="modal" data-target="#myModal_review" onClick={(e)=>{e.preventDefault()}}><i className="fa fa-pencil"></i> WRITE YOUR REVIEW</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="user_icon1_bg">
                                                    <div className="user_icon1_text text-center">
                                                        <ul>
                                                            <li><span className="img"><img src="/images/user_icon1.png" className="img-fluid" alt=""/></span></li>
                                                            <li><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></li>
                                                            <li>Rated <span>4.5/5</span></li>
                                                        </ul>
                                                    </div>
                                                    <div className="Dre_Brandell">
                                                        <p className="font-16"><strong>Dre Brandell</strong></p>
                                                        <p>
                                                            MyMathLab for Bittinger Algebra Foundations MyMathLab for Bittinger Algebra Foundations Solutions Manual is an interesting book. My concepts were clear after reading this book. All fundamentals are deeply explained with examples. I highly recommend this book to all students for step by step textbook solutions. 
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="user_icon1_bg">
                                                    <div className="user_icon1_text text-center">
                                                        <ul>
                                                            <li><span className="img"><img src="/images/user_icon1.png" className="img-fluid" alt=""/></span></li>
                                                            <li><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></li>
                                                            <li>Rated <span>4.5/5</span></li>
                                                        </ul>
                                                    </div>
                                                    <div className="Dre_Brandell">
                                                        <p className="font-16"><strong>Dre Brandell</strong></p>
                                                        <p>
                                                            MyMathLab for Bittinger Algebra Foundations MyMathLab for Bittinger Algebra Foundations Solutions Manual is an interesting book. My concepts were clear after reading this book. All fundamentals are deeply explained with examples. I highly recommend this book to all students for step by step textbook solutions. 
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="user_icon1_bg">
                                                    <div className="user_icon1_text text-center">
                                                        <ul>
                                                            <li><span className="img"><img src="/images/user_icon1.png" className="img-fluid" alt=""/></span></li>
                                                            <li><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></li>
                                                            <li>Rated <span>4.5/5</span></li>
                                                        </ul>
                                                    </div>
                                                    <div className="Dre_Brandell">
                                                        <p className="font-16"><strong>Dre Brandell</strong></p>
                                                        <p>
                                                            MyMathLab for Bittinger Algebra Foundations MyMathLab for Bittinger Algebra Foundations Solutions Manual is an interesting book. My concepts were clear after reading this book. All fundamentals are deeply explained with examples. I highly recommend this book to all students for step by step textbook solutions. 
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="prod_img_review">
                                            <span className="img"> <img src="/images/books/accounting.jpg" className="img-fluid" alt=""/></span>
                                            <div className="mt-1">
                                                <h3><a href="#">Bundle: Foundations of Business, Loose-leaf</a></h3>
                                            </div>
                                            <div className="reviews">
                                                <h4>
                                                <span className="review1">4.4 <i className="fa fa-star"></i></span> 
                                                <div className="rating_review">1,194 Ratings <span>&amp;</span>  175 Reviews </div>
                                                </h4>
                                            </div>
                                            <div className="price_prdct">
                                                <div className="price_prdct1">₹1,344</div>
                                                <div className="price_prdct2">₹1,999</div>
                                                <div className="price_prdct3"><span>32% off</span></div>
                                            </div>
                                        </div>
                                        <div className="User_Images mt-3">
                                            <h3>User Images</h3>
                                            <ul>
                                                <li><a href="#"><img src="/images/books/economics.jpg" className="img-fluid"/></a></li>
                                                <li><a href="#"><img src="/images/books/economics1.jpg" className="img-fluid"/></a></li>
                                                <li><a href="#"><img src="/images/books/finance.jpg" className="img-fluid"/></a></li>
                                                <li><a href="#"><img src="/images/books/leadership.jpg" className="img-fluid"/></a></li>
                                                <li><a href="#"><img src="/images/books/management.jpg" className="img-fluid"/></a></li>
                                                <li><a href="#"><img src="/images/books/marketing.jpg" className="img-fluid"/></a></li>
                                                <li><a href="#"><img src="/images/books/operation_management.jpg" className="img-fluid"/></a></li>
                                                <li><a href="#"><img src="/images/books/other_business.jpg" className="img-fluid"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}