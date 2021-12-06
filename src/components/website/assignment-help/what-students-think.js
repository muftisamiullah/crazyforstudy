import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {isHTML, htmlDecode, stringToSlug} from "../../common/make-slug"

const S3_IMG_URL = "https://crazyforstudy.s3.ap-south-1.amazonaws.com/uploads/";

const initialData = [
  {
    created_at: "27 March 2021",
    img_path: "/images/testimonial-img/mary-thunders.png",
    institute: "UNIVERSITY OF CAMBRIDGE",
    name: "Mary Thunders",
    rating: 5,
    review: `I love the CFS textbook solution manuals. They have helped me
    a lot in solving the difficult calculus questions. They make
    the solutions look so easy!`,
    _id: "61a1eff85e77b83e90262895",
  },
  {
    created_at: "19 December 2020",
    img_path: "/images/testimonial-img/robert-taylor.png",
    institute: "Duke University",
    name: "Robert Taylor",
    rating: 5,
    review: `They are really fast! They sent me my Computed Science
    textbook solutions even before two hours of my order!`,
    _id: "61a1eff85e77b83e90262895",
  },
  {
    created_at: "17 September 2020",
    img_path: "/images/testimonial-img/willie-brown.png",
    institute: "Cornell University",
    name: "Willie Brown",
    rating: 5,
    review: `The CFS Textbook Solution Manuals are really good. I always
    recommend them over any other website for getting textbook
    solutions.`,
    _id: "61a1eff85e77b83e90262895",
  },
  {
    created_at: "30 June 2020",
    img_path: "/images/testimonial-img/maraya-smith.png",
    institute: "Saint Peter’s University",
    name: "Maraya Smith",
    rating: 5,
    review: `They give every detail about the answer and explain them so
    well! I love using CFS textbook Solution Manuals.`,
    _id: "61a1eff85e77b83e90262895",
  },
  {
    created_at: "15 January, 2021",
    img_path: "/images/testimonial-img/harrish-williamson.png",
    institute: "University of Michigan",
    name: "Harrish Williamson",
    rating: 5,
    review: `I requested the solutions for my college textbooks. I was
    stunned to get the solutions in two hours! And they were so
    nicely written!`,
    _id: "61a1eff85e77b83e90262895",
  },
  {
    created_at: "22 August 2021",
    img_path: "/images/testimonial-img/david-jones.png",
    institute: "Johns Hopkins University",
    name: "David Jones",
    rating: 5,
    review: `Thank you team CFS for on-time delivery of my college textbook
    solutions. They helped me a lot in preparing for my exams.`,
    _id: "61a1eff85e77b83e90262895",
  }
];

// Image Circle component
const ImgCircle = ({ item, url }) => {  
  
  return (
    <div className="item">
      <span className="img_testimonial">
        <img
          src={
            item && item.img_path
              ? url + item.img_path
              : "/images/testimonial-img/mary-thunders.png"
          }
          className=""
          alt={item && item.name ? item.name : "User Img"}
        />
      </span>
      <div className="text-center testimonial_text">
        <h3>{item && item.name ? item.name : "Mary Thunders"}</h3>
        <p>
          {item && item.review
            ? item.review
            : `I love the CFS textbook solution manuals. They have helped me a lot in
          solving the difficult calculus questions. They make the solutions look
          so easy!`}
        </p>
        <ul>
          <li>
            <span className="unsty_cam">
              {item && item.institute
                ? item.institute
                : "UNIVERSITY OF CAMBRIDGE"}
            </span>{" "}
            <span>
              {item && item.created_at ? Date(item.created_at) : Date.now()}
            </span>
          </li>
          <li className="float-right star_icons">
            {item && item.rating
              ? [...Array(parseInt(item.rating))].map((item, index) => {
                  return <Stars key={index} />;
                })
              : [...Array(5)].map((item, index) => {
                  return <Stars key={index} />;
                })}
          </li>
        </ul>
      </div>
    </div>
  );
};

// Rating Star Component
const Stars = () => {
  return <i className="fa fa-star"></i>;
};

export default function WhatStudentsThink({ reviews }) {
  let data = reviews && reviews.length > 0 ? reviews : {};  
  let length = data && data.length ? data.length  : initialData.length ;
  let id = data && data._id ? data[0]._id : "";

  return (
    <section className="section bg_colr2 mt-5 pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mb-4">
            <div className="Content_Covered_title pb-3">
              <h2>What Students Say About Us?</h2>
              <h3 className="w-100">
                Interested to know what students think about us? Have a look at
                what all they have to say!
              </h3>
            </div>
          </div>

          <OwlCarousel
             key={Math.random()}
            items={length == 1?1:length-1}
            className="testimonial owl-theme"
            loop
            autoplay={false}
            autoWidth={false}
            nav
            margin={10}
            dots={false}
            center={true}
          >
            {data && data.length > 0
              ? data.map((item, index) => {
                  return <ImgCircle key={index} url={S3_IMG_URL} item={item} />;
                })
              : initialData.map((item, index) => {
                  return <ImgCircle key={index} url={''} item={item} />;
                })}
     
          </OwlCarousel>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
