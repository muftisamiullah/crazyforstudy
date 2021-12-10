import React, { Fragment } from "react";
import "../../assets/styles/blog/style.css";
import BlogCarousel from "./blogCarousel";
import img4 from "../../assets/images/bg_img4.jpg";
import img5 from "../../assets/images/bg_img5.jpg";
import img6 from "../../assets/images/bg_img6.jpg";
import ass from "../../assets/images/ass.jpg";
import gen from "../../assets/images/gen.jpg";
import man from "../../assets/images/man.jpg";
import mar from "../../assets/images/mar.jpg";
import mar1 from "../../assets/images/mar1.jpg";
import eng from "../../assets/images/eng.jpg";

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

      {/* Carousel Section */}
      <BlogCarousel />

      {/* Recent Blog Section */}
      <section class="section blog mt-4 mb-4 pb-2">
         <div class="container">
            <div class="row">
               <div class="col-md-12 mb-3 hding_title1 blog_title">
                  <h2>Recent Blog</h2>
               </div>
               <div class="col-md-6 col-lg-4">
                  <div class="view_blog_ghg m-0">
                     <div class="hding_blog_recnt">
                        <span>Academic</span>
                        <h4> <a href="blog-details.php"> Lorem Ipsum is simply dummy text of the printing
                           text of the printing </a>
                        </h4>
                     </div>
                     <div class="blog_imgviw">
                      <a href="blog-details.php">
                        <img src={img4} class="img-fluid" alt="" />
                        <div class="blg_text_bnr text-center">
                           Lorem Ipsum is simply dummy text of the printing
                        </div>
                        </a>
                     </div>
                     <div class="bg_ghgd5j7">
                        <div class="text_blg1">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text...</p>
                        </div>
                        <div class="text-right"><a href="blog-details.php">Read more</a></div>
                        <ul>
                           <li>SYD HOWELL SEPTEMBER 23, 2021</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col-md-6 col-lg-4">
                  <div class="view_blog_ghg m-0">
                     <div class="hding_blog_recnt">
                        <span>Assignment Help</span>
                        <h4>  <a href="blog-details.php">Lorem Ipsum is simply dummy text of the printing
                           text of the printing</a> 
                        </h4>
                     </div>
                     <div class="blog_imgviw">
                      <a href="blog-details.php">
                        <img src={img5} class="img-fluid" alt="" />
                        <div class="blg_text_bnr text-center">
                           Lorem Ipsum is simply dummy text of the printing
                        </div>
                        </a>
                     </div>
                     <div class="bg_ghgd5j7">
                        <div class="text_blg1">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text...</p>
                        </div>
                        <div class="text-right"><a href="blog-details.php">Read more</a></div>
                        <ul>
                           <li>SYD HOWELL SEPTEMBER 23, 2021</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col-md-6 col-lg-4">
                  <div class="view_blog_ghg m-0">
                     <div class="hding_blog_recnt">
                        <span>Dissertation Writing</span>
                        <h4> <a href="blog-details.php"> Lorem Ipsum is simply dummy text of the printing
                           text of the printing </a>
                        </h4>
                     </div>
                     <div class="blog_imgviw">
                      <a href="blog-details.php">
                        <img src={img6} class="img-fluid" alt="" />
                        <div class="blg_text_bnr text-center">
                           Lorem Ipsum is simply dummy text of the printing
                        </div>
                        </a>
                     </div>
                     <div class="bg_ghgd5j7">
                        <div class="text_blg1">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text...</p>
                        </div>
                        <div class="text-right"><a href="blog-details.php">Read more</a></div>
                        <ul>
                           <li>SYD HOWELL SEPTEMBER 23, 2021</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section class="section blog mt-5 mb-4 pb-2">
         <div class="container">
            <div class="row">
               <div class="col-md-6 mb-3 hding_title1 Posts_hding Posts_hding1 blog_title border-0">
                  <h2>Popular Posts</h2>
                  <div class="post_main">
                     <div class="post_img">
                      <a href="blog-details.php">
                        <img src={ass} class="img-fluid" alt="" />
                        </a>
                     </div>
                     <div class="bg_ghgd5j7">
                        <div class="text_blg1">
                           <p> <a href="blog-details.php">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</a></p>
                        </div>
                        <ul>
                           <li>Tresh / OCTOBER 11, 2021</li>
                        </ul>
                     </div>
                  </div>
                  <div class="post_main">
                     <div class="post_img">
                        <a href="blog-details.php"> <img src={gen} class="img-fluid" alt="" /></a>
                     </div>
                     <div class="bg_ghgd5j7">
                        <div class="text_blg1">
                           <p> <a href="blog-details.php">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</a></p>
                        </div>
                        <ul>
                           <li>Tresh / OCTOBER 11, 2021</li>
                        </ul>
                     </div>
                  </div>
                  <div class="post_main">
                     <div class="post_img">
                        <a href="blog-details.php"> <img src={man} class="img-fluid" alt="" /></a>
                     </div>
                     <div class="bg_ghgd5j7">
                        <div class="text_blg1">
                           <p> <a href="blog-details.php">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</a></p>
                        </div>
                        <ul>
                           <li>Tresh / OCTOBER 11, 2021</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col-md-6 mb-3 hding_title1 Posts_hding Posts_hding2 blog_title">
                  <h2>Latest Posts</h2>
                  <div class="post_main">
                     <div class="post_img">
                         <a href="blog-details.php"><img src={mar} class="img-fluid" alt="" /></a>
                     </div>
                     <div class="bg_ghgd5j7">
                        <div class="text_blg1">
                           <p> <a href="blog-details.php">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</a></p>
                        </div>
                        <ul>
                           <li>Tresh / OCTOBER 11, 2021</li>
                        </ul>
                     </div>
                  </div>
                  <div class="post_main">
                     <div class="post_img">
                         <a href="blog-details.php"><img src={eng} class="img-fluid" alt="" /></a>
                     </div>
                     <div class="bg_ghgd5j7">
                        <div class="text_blg1">
                           <p> <a href="blog-details.php">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</a></p>
                        </div>
                        <ul>
                           <li>Tresh / OCTOBER 11, 2021</li>
                        </ul>
                     </div>
                  </div>
                  <div class="post_main">
                     <div class="post_img">
                         <a href="blog-details.php"><img src={mar1} class="img-fluid" alt="" /></a>
                     </div>
                     <div class="bg_ghgd5j7">
                        <div class="text_blg1">
                           <p> <a href="blog-details.php">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</a></p>
                        </div>
                        <ul>
                           <li>Tresh / OCTOBER 11, 2021</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </Fragment>
  );
};

export default Blog;
