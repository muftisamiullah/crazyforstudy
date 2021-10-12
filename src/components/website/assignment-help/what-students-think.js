// import  OwlCarousel  from "../../common/owl-carousel";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function WhatStudentsThink() {
    return(
        <section className="section bg_colr2 mt-5 pt-4 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mb-4">
                        <div className="Content_Covered_title pb-3">
                            <h2>What Students Think About us </h2>
                            <h3 className="w-100">You might be wondering why we are highly appreciated for our work and why we are highly recommended in the industry. You can have a look at some of the factors why we are the first choice of every student.  </h3>
                        </div>
                    </div>

                    {/* <div className=" testimonial"> */}
                <OwlCarousel items={5} className="testimonial owl-theme" loop autoplay={false} nav margin={10} dots={false} center={true} >
                    <div className="item"><span className="img_testimonial"><img src="/images/testimonial-img/img1.png" className="" alt=""/></span>
                    <div className="text-center testimonial_text">
                    <h3>JOHN MANSELL</h3>
                    <p>Online Assignment is surely a life saviour for me. This is amazing, how their experts delivered my assignment, just within 8 hours!</p>
                    <ul>
                    <li><span className="unsty_cam">UNIVERSITY OF CAMBRIDGE</span> <span>27 June 2020</span></li>
                    <li className="float-right star_icons">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    </li>
                    </ul>
                    </div>
                    </div>

                    <div className="item"><span className="img_testimonial"><img src="/images/testimonial-img/img2.png" className="" alt=""/></span>
                    <div className="text-center testimonial_text">
                    <h3>JOHN MANSELL</h3>
                    <p>Online Assignment is surely a life saviour for me. This is amazing, how their experts delivered my assignment, just within 8 hours!</p>
                    <ul>
                    <li><span className="unsty_cam">UNIVERSITY OF CAMBRIDGE</span> <span>27 June 2020</span></li>
                    <li className="float-right star_icons">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    </li>
                    </ul>
                    </div>
                    </div>

                    <div className="item"><span className="img_testimonial"><img src="/images/testimonial-img/img3.png" className="" alt=""/></span>
                    <div className="text-center testimonial_text">
                    <h3>JOHN MANSELL</h3>
                    <p>Online Assignment is surely a life saviour for me. This is amazing, how their experts delivered my assignment, just within 8 hours!</p>
                    <ul>
                    <li><span className="unsty_cam">UNIVERSITY OF CAMBRIDGE</span> <span>27 June 2020</span></li>
                    <li className="float-right star_icons">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    </li>
                    </ul>
                    </div>
                    </div>

                    <div className="item"><span className="img_testimonial"><img src="/images/testimonial-img/img4.png" className="" alt=""/></span>
                    <div className="text-center testimonial_text">
                    <h3>JOHN MANSELL</h3>
                    <p>Online Assignment is surely a life saviour for me. This is amazing, how their experts delivered my assignment, just within 8 hours!</p>
                    <ul>
                    <li><span className="unsty_cam">UNIVERSITY OF CAMBRIDGE</span> <span>27 June 2020</span></li>
                    <li className="float-right star_icons">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    </li>
                    </ul>
                    </div>
                    </div>

                    <div className="item"><span className="img_testimonial"><img src="/images/testimonial-img/img2.png" className="" alt=""/></span>
                    <div className="text-center testimonial_text">
                    <h3>JOHN MANSELL</h3>
                    <p>Online Assignment is surely a life saviour for me. This is amazing, how their experts delivered my assignment, just within 8 hours!</p>
                    <ul>
                    <li><span className="unsty_cam">UNIVERSITY OF CAMBRIDGE</span> <span>27 June 2020</span></li>
                    <li className="float-right star_icons">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    </li>
                    </ul>
                    </div>
                    </div>

                    <div className="item"><span className="img_testimonial"><img src="/images/testimonial-img/img3.png" className="" alt=""/></span>
                    <div className="text-center testimonial_text">
                    <h3>JOHN MANSELL</h3>
                    <p>Online Assignment is surely a life saviour for me. This is amazing, how their experts delivered my assignment, just within 8 hours!</p>
                    <ul>
                    <li><span className="unsty_cam">UNIVERSITY OF CAMBRIDGE</span> <span>27 June 2020</span></li>
                    <li className="float-right star_icons">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    </li>
                    </ul>
                    </div>
                    </div>

                    <div className="item"><span className="img_testimonial"><img src="/images/testimonial-img/img1.png" className="" alt=""/></span>
                        <div className="text-center testimonial_text">
                            <h3>JOHN MANSELL</h3>
                            <p>Online Assignment is surely a life saviour for me. This is amazing, how their experts delivered my assignment, just within 8 hours!</p>
                            <ul>
                                <li><span className="unsty_cam">UNIVERSITY OF CAMBRIDGE</span> <span>27 June 2020</span></li>
                                <li className="float-right star_icons">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </OwlCarousel>
                {/* </div> */}
            </div>
        </div>
    </section>
    )
}