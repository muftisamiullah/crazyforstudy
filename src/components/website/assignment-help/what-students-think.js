
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { isMemo } from "react-is";
const S3_IMG_URL = "https://crazyforstudy.s3.ap-south-1.amazonaws.com/uploads/";

const ImgCircle = ({ item }) => {
  
  return (
    <div className="item">
      <span className="img_testimonial">
        <img
          src={
            item && item.img_path
              ? S3_IMG_URL + item.img_path
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
            ? item.reiew
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

const Stars = () => {
  return <i className="fa fa-star"></i>;
};

export default function WhatStudentsThink() {
  const { selectedCon } = useContext(AuthContext);
  let data = selectedCon;
  let length =
    data && data.reviews && data.reviews.length ? data.reviews.length : 5;
  let id = data && data._id ? data._id : "";

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
            key={id}
            items={length}
            className="testimonial owl-theme"
            loop
            autoplay={false}
            nav
            margin={10}
            dots={false}
            center={true}
          >
            {data && data.reviews && data.reviews.length > 0
              ? data.reviews.map((item, index) => {
                  return <ImgCircle key={index} item={item} />;
                })
              : [...Array(6)].map((item, index) => {
                  return <ImgCircle key={index} item={item} />;
                })}
            {/* <div className="item">
              <span className="img_testimonial">
                <img
                  src="/images/testimonial-img/mary-thunders.png"
                  className=""
                  alt=""
                />
              </span>
              <div className="text-center testimonial_text">
                <h3>Mary Thunders</h3>
                <p>
                  I love the CFS textbook solution manuals. They have helped me
                  a lot in solving the difficult calculus questions. They make
                  the solutions look so easy!{" "}
                </p>
                <ul>
                  <li>
                    <span className="unsty_cam">UNIVERSITY OF CAMBRIDGE</span>{" "}
                    <span>27 March 2021</span>
                  </li>
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

            <div className="item">
              <span className="img_testimonial">
                <img
                  src="/images/testimonial-img/robert-taylor.png"
                  className=""
                  alt=""
                />
              </span>
              <div className="text-center testimonial_text">
                <h3>Robert Taylor</h3>
                <p>
                  They are really fast! They sent me my Computed Science
                  textbook solutions even before two hours of my order!{" "}
                </p>
                <ul>
                  <li>
                    <span className="unsty_cam">Duke University</span>{" "}
                    <span>19 December 2020</span>
                  </li>
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

            <div className="item">
              <span className="img_testimonial">
                <img
                  src="/images/testimonial-img/willie-brown.png"
                  className=""
                  alt=""
                />
              </span>
              <div className="text-center testimonial_text">
                <h3>Willie Brown</h3>
                <p>
                  The CFS Textbook Solution Manuals are really good. I always
                  recommend them over any other website for getting textbook
                  solutions.
                </p>
                <ul>
                  <li>
                    <span className="unsty_cam">Cornell University</span>{" "}
                    <span>17 September 2020</span>
                  </li>
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

            <div className="item">
              <span className="img_testimonial">
                <img
                  src="/images/testimonial-img/maraya-smith.png"
                  className=""
                  alt=""
                />
              </span>
              <div className="text-center testimonial_text">
                <h3>Maraya Smith</h3>
                <p>
                  They give every detail about the answer and explain them so
                  well! I love using CFS textbook Solution Manuals.{" "}
                </p>
                <ul>
                  <li>
                    <span className="unsty_cam">Saint Peter’s University</span>{" "}
                    <span>30 June 2020</span>
                  </li>
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

            <div className="item">
              <span className="img_testimonial">
                <img
                  src="/images/testimonial-img/harrish-williamson.png"
                  className=""
                  alt=""
                />
              </span>
              <div className="text-center testimonial_text">
                <h3>Harrish Williamson</h3>
                <p>
                  I requested the solutions for my college textbooks. I was
                  stunned to get the solutions in two hours! And they were so
                  nicely written!
                </p>
                <ul>
                  <li>
                    <span className="unsty_cam">University of Michigan</span>{" "}
                    <span>15 January, 2021</span>
                  </li>
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

            <div className="item">
              <span className="img_testimonial">
                <img
                  src="/images/testimonial-img/david-jones.png"
                  className=""
                  alt=""
                />
              </span>
              <div className="text-center testimonial_text">
                <h3>David Jones</h3>
                <p>
                  Thank you team CFS for on-time delivery of my college textbook
                  solutions. They helped me a lot in preparing for my exams.
                </p>
                <ul>
                  <li>
                    <span className="unsty_cam">Johns Hopkins University</span>{" "}
                    <span>22 August 2021</span>
                  </li>
                  <li className="float-right star_icons">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
              </div>
            </div> */}
          </OwlCarousel>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
