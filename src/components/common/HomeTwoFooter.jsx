import React, { Component } from "react";
import { Link } from "react-router-dom";
// image import
import BGIconTxt from "../../assets/images/background-texts/footer-watermark.png";
import LogoV2 from "../../assets/images/logo-v2.png";
class HomeTwoFooter extends Component {
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
        <div className="footer-outer ">
          <div className="footer-area position-relative">
            <div className="watermark-bg">
              <img src={BGIconTxt} alt="BGICON" className="img-fluid" />
            </div>
            <div className="container position-relative">
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
                              to={"#sponsor-area"}
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
                              Blog
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 order-lg-2 order-3">
                    <div className="footer-about">
                      <div className="footer-logo">
                        <img src={LogoV2} alt="logo v2" />
                      </div>
                      <p>
                        Cras semper, massa vel aliquam luctus, eros odio tempor
                        turpis, ac placerat metus tortor eget magna. Donec
                        mattis posuere pharetra Donec vestibulum.
                      </p>
                      <ul className="footer-social-icon d-flex">
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
                              <Link
                                onClick={this.scrollTop}
                                to={"tel:+17632275032"}
                              >
                                +1 763-227-5032
                              </Link>
                              <Link
                                onClick={this.scrollTop}
                                to={"tel:+17632275032"}
                              >
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
                              <Link
                                onClick={this.scrollTop}
                                to={"mailto:support@example.com"}
                              >
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
              <div className="footer-bottom footer-bottom-style-two">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="footer-copyright text-center">
                      <p>
                        Copyright 2021 Event Lab | Design By
                        <Link onClick={this.scrollTop} to={"#"}>
                          Egens Lab
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  footer area end  =============== */}.
      </>
    );
  }
}

export default HomeTwoFooter;
