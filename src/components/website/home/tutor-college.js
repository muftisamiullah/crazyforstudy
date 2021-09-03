// import  OwlCarousel  from "../../common/owl-carousel";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function TutorCollege(){
    return(
        <section className="section brand_icons_bg pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mb-5">
                        <div className="Content_Covered_title pb-3">
                            <h2>Some of our tutors studied at these colleges:  </h2> 
                        </div>
                    </div>
                    <OwlCarousel items={4} className="owl-carousel" loop autoplay={true} nav margin={10}>
                        <div className="item">
                            <div className="brand_icons">
                                <ul>
                                    <li><img src="../images/brand-icons/icon1.png" className="img-fluid" alt=""/></li>
                                    <li><img src="../images/brand-icons/icon5.png" className="img-fluid" alt=""/></li>
                                </ul>
                            </div> 
                        </div>
                        <div className="item">
                            <div className="brand_icons">
                                <ul>
                                    <li><img src="../images/brand-icons/icon2.png" className="img-fluid" alt=""/></li>
                                    <li><img src="../images/brand-icons/icon6.png" className="img-fluid" alt=""/></li>
                                </ul>
                            </div> 
                        </div>
                        <div className="item">
                            <div className="brand_icons">
                                <ul>
                                    <li><img src="../images/brand-icons/icon3.png" className="img-fluid" alt=""/></li>
                                    <li><img src="../images/brand-icons/icon7.png" className="img-fluid" alt=""/></li>
                                </ul>
                            </div> 
                        </div>
                        <div className="item">
                            <div className="brand_icons">
                                <ul>
                                <li><img src="../images/brand-icons/icon4.png" className="img-fluid" alt=""/></li>
                                <li><img src="../images/brand-icons/icon8.png" className="img-fluid" alt=""/></li>
                                </ul>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}