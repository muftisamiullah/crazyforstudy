import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../../assets/images/bg_img1.jpg";
import img2 from "../../assets/images/bg_img2.jpg";
import img3 from "../../assets/images/bg_img3.jpg";

const BlogCarousel = () => {
  return (
    <section class="section blog mt-4 mb-4 pb-2">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-3 hding_title1 blog_title">
            <h2>Blog</h2>
          </div>
          <div class="col-md-12">
            {/* <div class="owl-carousel owl-theme slider_blog1"> */}

            <OwlCarousel
              key={Math.random()}
              // items={}
              className="owl-carousel owl-theme slider_blog1"
              loop
              autoplay={false}
              autoWidth={false}
              nav
              margin={10}
              dots={false}
              // dotsData={true}
              center={true}
            >
              <div class="item slider_w1" data-dot="<button>Jan</button>">
                <div class="view_blog_ghg">
                  <div class="blog_imgviw">
                    <a href="blog-details.php">
                      <img src={img1} class="img-fluid" alt="" />
                      <div class="blg_text_bnr">
                        Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
                      </div>
                      <div class="view_blog1">
                        <i class="fa fa-eye"></i> 382
                      </div>
                    </a>
                  </div>
                  <div class="bg_ghgd5j7">
                    <div class="text_blg1">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div class="text-right">
                      <a href="blog-details.php">Read more</a>
                    </div>
                    <ul>
                      <li>SYD HOWELL SEPTEMBER 23, 2021</li>
                    </ul>
                  </div>
                </div>
                <div class="view_blog_ghg">
                  <div class="blog_imgviw">
                    <a href="blog-details.php">
                      <img src={img2} class="img-fluid" alt="" />
                      <div class="blg_text_bnr">
                        Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
                      </div>
                      <div class="view_blog1">
                        <i class="fa fa-eye"></i> 382
                      </div>
                    </a>
                  </div>
                  <div class="bg_ghgd5j7">
                    <div class="text_blg1">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div class="text-right">
                      <a href="blog-details.php">Read more</a>
                    </div>
                    <ul>
                      <li>SYD HOWELL SEPTEMBER 23, 2021</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="item slider_w2" data-dot="<button>Feb</button>">
                <div class="view_blog_ghg">
                  <div class="blog_imgviw blog_imgviw2">
                    <a href="blog-details.php">
                      <img src={img3} class="img-fluid" alt="" />
                      <div class="blg_text_bnr blg_text_bnr2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor incididunt.
                      </div>
                      <div class="view_blog1">
                        <i class="fa fa-eye"></i> 382
                      </div>
                    </a>
                  </div>
                  <div class="bg_ghgd5j7">
                    <div class="text_blg1">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.
                      </p>
                    </div>
                    <div class="text-right">
                      <a href="blog-details.php">Read more</a>
                    </div>
                    <ul>
                      <li>SYD HOWELL SEPTEMBER 23, 2021</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="item slider_w1" data-dot="<button>Mar</button>">
                <div class="view_blog_ghg">
                  <div class="blog_imgviw">
                    <a href="blog-details.php">
                      <img src={img1} class="img-fluid" alt="" />
                      <div class="blg_text_bnr">
                        Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
                      </div>
                      <div class="view_blog1">
                        <i class="fa fa-eye"></i> 382
                      </div>
                    </a>
                  </div>
                  <div class="bg_ghgd5j7">
                    <div class="text_blg1">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div class="text-right">
                      <a href="blog-details.php">Read more</a>
                    </div>
                    <ul>
                      <li>SYD HOWELL SEPTEMBER 23, 2021</li>
                    </ul>
                  </div>
                </div>
                <div class="view_blog_ghg">
                  <div class="blog_imgviw">
                    <a href="blog-details.php">
                      <img src={img2} class="img-fluid" alt="" />
                      <div class="blg_text_bnr">
                        Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
                      </div>
                      <div class="view_blog1">
                        <i class="fa fa-eye"></i> 382
                      </div>
                    </a>
                  </div>
                  <div class="bg_ghgd5j7">
                    <div class="text_blg1">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div class="text-right">
                      <a href="blog-details.php">Read more</a>
                    </div>
                    <ul>
                      <li>SYD HOWELL SEPTEMBER 23, 2021</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="item slider_w2" data-dot="<button>Apr</button>">
                <div class="view_blog_ghg">
                  <div class="blog_imgviw blog_imgviw2">
                    <a href="blog-details.php">
                      <img src={img3} class="img-fluid" alt="" />
                      <div class="blg_text_bnr blg_text_bnr2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor incididunt.
                      </div>
                      <div class="view_blog1">
                        <i class="fa fa-eye"></i> 382
                      </div>
                    </a>
                  </div>
                  <div class="bg_ghgd5j7">
                    <div class="text_blg1">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.
                      </p>
                    </div>
                    <div class="text-right">
                      <a href="blog-details.php">Read more</a>
                    </div>
                    <ul>
                      <li>SYD HOWELL SEPTEMBER 23, 2021</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="item slider_w1" data-dot="<button>May</button>">
                <div class="view_blog_ghg">
                  <div class="blog_imgviw">
                    <a href="blog-details.php">
                      <img src={img1} class="img-fluid" alt="" />
                      <div class="blg_text_bnr">
                        Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
                      </div>
                      <div class="view_blog1">
                        <i class="fa fa-eye"></i> 382
                      </div>
                    </a>
                  </div>
                  <div class="bg_ghgd5j7">
                    <div class="text_blg1">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div class="text-right">
                      <a href="blog-details.php">Read more</a>
                    </div>
                    <ul>
                      <li>SYD HOWELL SEPTEMBER 23, 2021</li>
                    </ul>
                  </div>
                </div>
                <div class="view_blog_ghg">
                  <div class="blog_imgviw">
                    <a href="blog-details.php">
                      <img src={img2} class="img-fluid" alt="" />
                      <div class="blg_text_bnr">
                        Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
                      </div>
                      <div class="view_blog1">
                        <i class="fa fa-eye"></i> 382
                      </div>
                    </a>
                  </div>
                  <div class="bg_ghgd5j7">
                    <div class="text_blg1">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div class="text-right">
                      <a href="blog-details.php">Read more</a>
                    </div>
                    <ul>
                      <li>SYD HOWELL SEPTEMBER 23, 2021</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="item slider_w2" data-dot="<button>Jun</button>">
                <div class="view_blog_ghg">
                  <div class="blog_imgviw blog_imgviw2">
                    <a href="blog-details.php">
                      <img src={img3} class="img-fluid" alt="" />
                      <div class="blg_text_bnr blg_text_bnr2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor incididunt.
                      </div>
                      <div class="view_blog1">
                        <i class="fa fa-eye"></i> 382
                      </div>
                    </a>
                  </div>
                  <div class="bg_ghgd5j7">
                    <div class="text_blg1">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.
                      </p>
                    </div>
                    <div class="text-right">
                      <a href="blog-details.php">Read more</a>
                    </div>
                    <ul>
                      <li>SYD HOWELL SEPTEMBER 23, 2021</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="item slider_w1" data-dot="<button>July</button>">
                <div class="view_blog_ghg">
                  <div class="blog_imgviw">
                    <a href="blog-details.php">
                      <img src={img1} class="img-fluid" alt="" />
                      <div class="blg_text_bnr">
                        Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
                      </div>
                      <div class="view_blog1">
                        <i class="fa fa-eye"></i> 382
                      </div>
                    </a>
                  </div>
                  <div class="bg_ghgd5j7">
                    <div class="text_blg1">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div class="text-right">
                      <a href="blog-details.php">Read more</a>
                    </div>
                    <ul>
                      <li>SYD HOWELL SEPTEMBER 23, 2021</li>
                    </ul>
                  </div>
                </div>
                <div class="view_blog_ghg">
                  <div class="blog_imgviw">
                    <a href="blog-details.php">
                      <img src={img2} class="img-fluid" alt="" />
                      <div class="blg_text_bnr">
                        Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
                      </div>
                      <div class="view_blog1">
                        <i class="fa fa-eye"></i> 382
                      </div>
                    </a>
                  </div>
                  <div class="bg_ghgd5j7">
                    <div class="text_blg1">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div class="text-right">
                      <a href="blog-details.php">Read more</a>
                    </div>
                    <ul>
                      <li>SYD HOWELL SEPTEMBER 23, 2021</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="item slider_w2" data-dot="<button>Aug</button>">
                <div class="view_blog_ghg">
                  <div class="blog_imgviw blog_imgviw2">
                    <a href="blog-details.php">
                      <img src={img3} class="img-fluid" alt="" />
                      <div class="blg_text_bnr blg_text_bnr2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor incididunt.
                      </div>
                      <div class="view_blog1">
                        <i class="fa fa-eye"></i> 382
                      </div>
                    </a>
                  </div>
                  <div class="bg_ghgd5j7">
                    <div class="text_blg1">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.
                      </p>
                    </div>
                    <div class="text-right">
                      <a href="blog-details.php">Read more</a>
                    </div>
                    <ul>
                      <li>SYD HOWELL SEPTEMBER 23, 2021</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="item slider_w1" data-dot="<button>Sep</button>">
                <div class="view_blog_ghg">
                  <div class="blog_imgviw">
                    <a href="blog-details.php">
                      <img src={img1} class="img-fluid" alt="" />
                      <div class="blg_text_bnr">
                        Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
                      </div>
                      <div class="view_blog1">
                        <i class="fa fa-eye"></i> 382
                      </div>
                    </a>
                  </div>
                  <div class="bg_ghgd5j7">
                    <div class="text_blg1">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div class="text-right">
                      <a href="blog-details.php">Read more</a>
                    </div>
                    <ul>
                      <li>SYD HOWELL SEPTEMBER 23, 2021</li>
                    </ul>
                  </div>
                </div>
                <div class="view_blog_ghg">
                  <div class="blog_imgviw">
                    <a href="blog-details.php">
                      <img src={img2} class="img-fluid" alt="" />
                      <div class="blg_text_bnr">
                        Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
                      </div>
                      <div class="view_blog1">
                        <i class="fa fa-eye"></i> 382
                      </div>
                    </a>
                  </div>
                  <div class="bg_ghgd5j7">
                    <div class="text_blg1">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div class="text-right">
                      <a href="blog-details.php">Read more</a>
                    </div>
                    <ul>
                      <li>SYD HOWELL SEPTEMBER 23, 2021</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="item slider_w2" data-dot="<button>Oct</button>">
                <div class="view_blog_ghg">
                  <div class="blog_imgviw blog_imgviw2">
                    <a href="blog-details.php">
                      <img src={img3} class="img-fluid" alt="" />
                      <div class="blg_text_bnr blg_text_bnr2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor incididunt.
                      </div>
                      <div class="view_blog1">
                        <i class="fa fa-eye"></i> 382
                      </div>
                    </a>
                  </div>
                  <div class="bg_ghgd5j7">
                    <div class="text_blg1">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.
                      </p>
                    </div>
                    <div class="text-right">
                      <a href="blog-details.php">Read more</a>
                    </div>
                    <ul>
                      <li>SYD HOWELL SEPTEMBER 23, 2021</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="item slider_w1" data-dot="<button>Nov</button>">
                <div class="view_blog_ghg">
                  <div class="blog_imgviw">
                    <a href="blog-details.php">
                      <img src={img1} class="img-fluid" alt="" />
                      <div class="blg_text_bnr">
                        Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
                      </div>
                      <div class="view_blog1">
                        <i class="fa fa-eye"></i> 382
                      </div>
                    </a>
                  </div>
                  <div class="bg_ghgd5j7">
                    <div class="text_blg1">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div class="text-right">
                      <a href="blog-details.php">Read more</a>
                    </div>
                    <ul>
                      <li>SYD HOWELL SEPTEMBER 23, 2021</li>
                    </ul>
                  </div>
                </div>
                <div class="view_blog_ghg">
                  <div class="blog_imgviw">
                    <a href="blog-details.php">
                      <img src={img2} class="img-fluid" alt="" />
                      <div class="blg_text_bnr">
                        Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
                      </div>
                      <div class="view_blog1">
                        <i class="fa fa-eye"></i> 382
                      </div>
                    </a>
                  </div>
                  <div class="bg_ghgd5j7">
                    <div class="text_blg1">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div class="text-right">
                      <a href="blog-details.php">Read more</a>
                    </div>
                    <ul>
                      <li>SYD HOWELL SEPTEMBER 23, 2021</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="item slider_w2" data-dot="<button>Dec</button>">
                <div class="view_blog_ghg">
                  <div class="blog_imgviw blog_imgviw2">
                    <a href="blog-details.php">
                      <img src={img3} class="img-fluid" alt="" />
                      <div class="blg_text_bnr blg_text_bnr2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor incididunt.
                      </div>
                      <div class="view_blog1">
                        <i class="fa fa-eye"></i> 382
                      </div>
                    </a>
                  </div>
                  <div class="bg_ghgd5j7">
                    <div class="text_blg1">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.
                      </p>
                    </div>
                    <div class="text-right">
                      <a href="blog-details.php">Read more</a>
                    </div>
                    <ul>
                      <li>SYD HOWELL SEPTEMBER 23, 2021</li>
                    </ul>
                  </div>
                </div>
              </div>
            </OwlCarousel>
            {/* </div> */}
          </div>

          <div class="col-md-2 text-center slider_year_bg1">
            <OwlCarousel
              class="owl-carousel owl-theme slider_year mt-4"
              loop
              autoplay={false}
              autoWidth={false}
              nav
              margin={10}
              dots={false}
              // dotsData={true}
              center={true}
            >
              <div class="item">2017</div>
              <div class="item">2018</div>
              <div class="item">2019</div>
              <div class="item">2020</div>
              <div class="item">2021</div>
              <div class="item">2022</div>
              <div class="item">2023</div>
              <div class="item">2024</div>
              <div class="item">2025</div>
              <div class="item">2026</div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
