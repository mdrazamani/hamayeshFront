import React, { Component } from "react";
import { Link } from "react-router-dom";
// page animation
import WOW from "wowjs";
import "../../../assets/css/animate.css";
// image import
import EventIMFG1 from "../../../assets/images/event/ev-md1.png";
import EventIMFG10 from "../../../assets/images/event/ev-md10.png";
import EventIMFG11 from "../../../assets/images/event/ev-md11.png";
import EventIMFG12 from "../../../assets/images/event/ev-md12.png";
import EventIMFG2 from "../../../assets/images/event/ev-md2.png";
import EventIMFG3 from "../../../assets/images/event/ev-md3.png";
import EventIMFG4 from "../../../assets/images/event/ev-md4.png";
import EventIMFG5 from "../../../assets/images/event/ev-md5.png";
import EventIMFG6 from "../../../assets/images/event/ev-md6.png";
import EventIMFG7 from "../../../assets/images/event/ev-md7.png";
import EventIMFG8 from "../../../assets/images/event/ev-md8.png";
import EventIMFG9 from "../../../assets/images/event/ev-md9.png";
class PopularEventArea extends Component {
  componentDidMount(){
    new WOW.WOW().init()
  }
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <>
        {/* ===============  Event Area start  =============== */}
        <div className="event-area">
          <div className="container position-relative pt-110">
            <div className="row">
              <div className="col-lg-12">
                <div className="background-title text-style-one">
                  <h2>Event</h2>
                </div>
                <div className="section-head">
                  <h3>Popular Event</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="event-category-buttons">
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-tab1"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-event1"
                        type="button"
                        role="tab"
                        aria-controls="pills-event1"
                        aria-selected="true">
                        Business <span>10</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-tab2"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-event2"
                        type="button"
                        role="tab"
                        aria-controls="pills-event2"
                        aria-selected="false">
                        Fire Wall <span>10</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-tab3"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-event3"
                        type="button"
                        role="tab"
                        aria-controls="pills-event3"
                        aria-selected="false">
                        Sport <span>10</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-tab4"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-event4"
                        type="button"
                        role="tab"
                        aria-controls="pills-event4"
                        aria-selected="false">
                        Web Development <span>10</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-tab5"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-event5"
                        type="button"
                        role="tab"
                        aria-controls="pills-event5"
                        aria-selected="false">
                        Marketing <span>10</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-tab6"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-event6"
                        type="button"
                        role="tab"
                        aria-controls="pills-event6"
                        aria-selected="false">
                        Technology<span>10</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="all-event-cards">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-event1"
                      role="tabpanel"
                      aria-labelledby="pills-tab1">
                      <div className="row">
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG1}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  Media companies need to better one then
                                  educate advertisers.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG2}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  companies share strategies to Then capture
                                  audiences on mobile.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG3}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  Proactive transformation requires embrace of
                                  technology.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="400ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG4}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  Proactive transformation requires embrace of
                                  technology.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="400ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG5}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  Proactive transformation requires embrace of
                                  technology.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="400ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG6}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  Proactive transformation requires embrace of
                                  technology.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG7}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  Media companies need to better one then
                                  educate advertisers.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG8}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  companies share strategies to Then capture
                                  audiences on mobile.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG9}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  Proactive transformation requires embrace of
                                  technology.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="400ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG11}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  Proactive transformation requires embrace of
                                  technology.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="400ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG10}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  Proactive transformation requires embrace of
                                  technology.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="400ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG12}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  Proactive transformation requires embrace of
                                  technology.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-event2"
                      role="tabpanel"
                      aria-labelledby="pills-tab2">
                      <div className="row">
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG1}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  Media companies need to better one then
                                  educate advertisers.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG2}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  companies share strategies to Then capture
                                  audiences on mobile.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG3}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  Proactive transformation requires embrace of
                                  technology.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="400ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG4}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  Proactive transformation requires embrace of
                                  technology.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-event3"
                      role="tabpanel"
                      aria-labelledby="pills-tab3">
                      <div className="row">
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG1}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  Media companies need to better one then
                                  educate advertisers.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG2}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  companies share strategies to Then capture
                                  audiences on mobile.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG3}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  Proactive transformation requires embrace of
                                  technology.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="400ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG4}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  Proactive transformation requires embrace of
                                  technology.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="400ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG5}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  Proactive transformation requires embrace of
                                  technology.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-event4"
                      role="tabpanel"
                      aria-labelledby="pills-tab4">
                      <div className="row">
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG1}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  Media companies need to better one then
                                  educate advertisers.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG2}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  companies share strategies to Then capture
                                  audiences on mobile.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG3}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  Proactive transformation requires embrace of
                                  technology.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-event5"
                      role="tabpanel"
                      aria-labelledby="pills-tab5">
                      <div className="row">
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG1}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  Media companies need to better one then
                                  educate advertisers.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG2}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  companies share strategies to Then capture
                                  audiences on mobile.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-event6"
                      role="tabpanel"
                      aria-labelledby="pills-tab6">
                      <div className="row">
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={EventIMFG2}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2021
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title">
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
                                  companies share strategies to Then capture
                                  audiences on mobile.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  Event Area end  =============== */}
      </>
    );
  }
}

export default PopularEventArea;
