import React, { Component } from "react";
import { Link } from "react-router-dom";
// page animation
import WOW from "wowjs";
import "../../../assets/css/animate.css";
// image import
import BlogThumb1 from "../../../assets/images/blog/b-md1.png";
import BlogThumb2 from "../../../assets/images/blog/b-md2.png";
class BlogArea extends Component {
  componentDidMount(){
    new WOW.WOW().init()
  }
  render() {
    return (
      <>
        {/* ===============  Blog area start  =============== */}
        <div className="blog-area gray-300">
          <div className="container position-relative pt-110">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="background-title text-style-one">
                  <h2>LATEST Blog</h2>
                </div>
                <div className="section-head">
                  <h5>Blog</h5>
                  <h3>Latest News</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 pt-24">
                <div
                  className="blog-category-wrap wow fadeInLeft  animated "
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms">
                  <ul className="categoryes">
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/blog`}>
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/blog`}>
                        Tecnology
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/blog`}>Sport</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/blog`}>Sport</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/blog`}>
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/blog`}>
                        Tecnology
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/blog`}>
                        photography
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/blog`}>Website</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/blog`}>
                        Corporate
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/blog`}>
                        Web Design
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/blog`}>
                        Development
                      </Link>
                    </li>
                  </ul>
                  <div className="view-blog-btn">
                    {" "}
                    <Link to={`${process.env.PUBLIC_URL}/blog`}>
                      View All Blog
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms">
                <div className="blog-card-md">
                  <div className="blog-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/blog-details`}>
                      <img src={BlogThumb1}  alt="Imgs" />
                    </Link>
                    <div className="blog-tags">
                      <Link to={`${process.env.PUBLIC_URL}/blog`}>
                        Business
                      </Link>
                    </div>
                  </div>
                  <div className="blog-content">
                    <h4 className="blog-title">
                      <Link to={`${process.env.PUBLIC_URL}/blog-details`}>
                        Vestibulum nec porta erat. In in lobo turpis Suspendisse
                        rtis.
                      </Link>
                    </h4>
                    <div className="blog-bottom">
                      <div className="blog-date">
                        <p>
                          {" "}
                          <i className="bi bi-calendar2-week" />{" "}
                          <span>02 Septembar, 2021</span>
                        </p>
                      </div>
                      <div className="readme-btn">
                        <Link to={`${process.env.PUBLIC_URL}/blog-details`}>
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6  wow fadeInUp animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms">
                <div className="blog-card-md">
                  <div className="blog-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/blog-details`}>
                      <img src={BlogThumb2}  alt="Imgs" />
                    </Link>
                    <div className="blog-tags">
                      <Link to={`${process.env.PUBLIC_URL}/blog`}>
                        Business
                      </Link>
                    </div>
                  </div>
                  <div className="blog-content">
                    <h4 className="blog-title">
                      <Link to={`${process.env.PUBLIC_URL}/blog-details`}>
                        Duis tincidunt ultrices nibh non ullamcorper Sed nibh
                        leo.
                      </Link>
                    </h4>
                    <div className="blog-bottom">
                      <div className="blog-date">
                        <p>
                          {" "}
                          <i className="bi bi-calendar2-week" />{" "}
                          <span>02 Septembar, 2021</span>
                        </p>
                      </div>
                      <div className="readme-btn">
                        <Link to={`${process.env.PUBLIC_URL}/blog-details`}>
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  Blog area end  =============== */}
      </>
    );
  }
}

export default BlogArea;
