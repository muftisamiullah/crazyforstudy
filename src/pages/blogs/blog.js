import React, { Fragment } from "react";
import "../../assets/styles/blog/style.css";
import BlogCarousel from "./blogCarousel";


const Blog = () => {
  return (
    <Fragment>
      {/* Banner Section */}
      <section class="banner banner_blog">
        <div class="shap_banner_bottom">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M0.00,49.98 C105.25,246.20 395.31,-56.73 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#fff" }}
            ></path>
          </svg>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="blogbanner_text">
                <ul>
                  <li>
                    <a href="#">Home</a> <span>/</span>
                  </li>
                  <li>Blog</li>
                </ul>
                <h1>Your Academic Search Engine</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </p>
                <a href="#" class="view_btn">
                  View All <i class="fal fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div class="col-md-5 pl-0">
              <div class="blogbanner_text">
                <form>
                  <input
                    type="text"
                    placeholder="Search Assignment Blogs"
                    class="form-control"
                  />
                  <button type="submit" class="search_btn">
                    <i class="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insight Section */}
      <section class="section blog_Insights mt-4 mb-4 pb-2">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-left">
              <div class="pb-3 Insights_title">
                <h2>Insights</h2>
              </div>
              <div class="bg_Insights">
                <div class="Insights_text">
                  <h2>Lorem Ipsum is simply dummy text</h2>
                  <p>
                    <span>
                      by admin I October 11, 2021 I Uncategorized I 0 Comments
                    </span>
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </p>
                </div>
                <div class="Insights_btn">
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlogCarousel />
   
    </Fragment>
  );
};

export default Blog;
