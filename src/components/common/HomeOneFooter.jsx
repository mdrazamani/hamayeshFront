import React, { Component } from "react";
import { Link } from "react-router-dom";


class HomeOneFooter extends Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <>
        {/* ===============  footer area start  =============== */}
        <div className="footer-outer pt-120 gray-300">
          <div className="footer-area">
            <div className="container">
              <div className="footer-wrapper">
                <div className="footer-watermark">
                  <h1>Footer</h1>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-5 order-1">
                    <div className="footer-widget mt-0">
                      <h5 className="footer-widget-title">Quick Link</h5>
                      <div className="footer-links">
                        <ul className="link-list">
                          <li>
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/about`}
                              className="footer-link"
                            >
                              About Us
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/event`}
                              className="footer-link"
                            >
                              Event
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/schedule`}
                              className="footer-link"
                            >
                              Schedule
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={this.scrollTop}
                              to={"#"}
                              className="footer-link"
                            >
                              Our Support
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/speaker`}
                              className="footer-link"
                            >
                              Speaker
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/sponsor-area`}
                              className="footer-link"
                            >
                              Sponsor
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/blog`}
                              className="footer-link"
                            >
                              Blog Grid
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 order-lg-2 order-3">
                    <div className="footer-newslatter-wrapper text-center">
                      <h3>Subscribe Our Newsletter</h3>
                      <h5>Don’t Miss Our Feature Update</h5>
                      <form
                        className="newslatter-form"
                        action="#"
                        id="newslatter-form"
                      >
                        <div className="newslatter-input-group d-flex">
                          <input type="email" placeholder="Enter Your Email" />
                          <button type="submit">Subscribe</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-7 order-lg-3 order-2 ">
                    <div className="footer-widget">
                      <h5 className="footer-widget-title">Contact</h5>
                      <div className="footer-links">
                        <ul className="link-list">
                          <li className="contact-box">
                            <div className="contact-icon">
                              <i className="bi bi-telephone-plus" />
                            </div>
                            <div className="contact-links">
                              <Link onClick={this.scrollTop} to={"#"}>
                                +1 763-227-5032
                              </Link>
                              <Link onClick={this.scrollTop} to={"#"}>
                                +1 763-227-5032
                              </Link>
                            </div>
                          </li>
                          <li className="contact-box">
                            <div className="contact-icon">
                              <i className="bi bi-envelope-open" />
                            </div>
                            <div className="contact-links">
                              <Link
                                onClick={this.scrollTop}
                                to={"mailto:info@example.com"}
                              >
                                info@example.com
                              </Link>
                              <Link onClick={this.scrollTop} to={"#"}>
                                support@example.com
                              </Link>
                            </div>
                          </li>
                          <li className="contact-box">
                            <div className="contact-icon">
                              <i className="bi bi-geo-alt" />
                            </div>
                            <div className="contact-links">
                              <Link onClick={this.scrollTop} to={"#"}>
                                2752 Willison Street Eagan, United State
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="row align-items-center">
                  <div className="col-lg-5  order-3 order-lg-1">
                    <div className="footer-copyright">
                      <p>
                        Copyright 2021 EventLab| Design By
                        <Link onClick={this.scrollTop} to={"#"}>
                          Egens Lab
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 order-1 order-lg-2">
                    <div className="footer-logo">
                      <Link onClick={this.scrollTop} to={"#"}>
                        <img src="assets/images/logo-v2.png" alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 order-2 order-lg-3">
                    <ul className="d-flex footer-social-links justify-content-lg-end justify-content-center">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  footer area end  =============== */}
      </>
    );
  }
}

export default HomeOneFooter;
