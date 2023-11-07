import React, { Component } from "react";
import { Link } from "react-router-dom";
// image import
import BGtestIMG from "../../../assets/images/background-texts/event-bg2.png";
import EventIMG1 from "../../../assets/images/event/ev-md13.png";
import EventIMG2 from "../../../assets/images/event/ev-md14.png";
import EventIMG3 from "../../../assets/images/event/ev-md15.png";
import EventIMG4 from "../../../assets/images/event/ev-md16.png";
import EventIMG5 from "../../../assets/images/event/ev-md17.png";
class EventArea extends Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <>
        {/* ===============  Event area start  =============== */}
        <div className="event-style-two pt-110 position-relative">
          <div className="watermark-bg mt-110">
            <img src={BGtestIMG} alt="BG testIMG" className="img-fluid" />
          </div>
          <div className="container">
            <div className="row">
              <div className="section-head-style-two">
                <h5>Event</h5>
                <h3>
                  Popular <span>Event</span>
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="event-category-buttons ">
                  <ul
                    className="nav nav-pills mb-3"
                    id="events-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-tab1"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-event1"
                        type="button"
                        role="tab"
                        aria-controls="pills-event1"
                        aria-selected="true"
                      >
                        Business
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
                        aria-selected="false"
                      >
                        Fire Wall
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
                        aria-selected="false"
                      >
                        Sport
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
                        aria-selected="false"
                      >
                        Web Development
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
                        aria-selected="false"
                      >
                        Marketing
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
                        aria-selected="false"
                      >
                        Technology
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="all-event-cards">
                  <div className="tab-content" id="events-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-event1"
                      role="tabpanel"
                      aria-labelledby="pills-tab1"
                    >
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="event-card-style-two">
                            <div className="event-thumb">
                              <img src={EventIMG1} alt="EventIMG" />
                              <div className="event-date">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  <i className="bi bi-calendar2-week" /> January
                                  21, 2021
                                </Link>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-seat-lavbel">
                                <h6>
                                  <i className="bi bi-diagram-3" /> 100 seat
                                </h6>
                              </div>
                              <div className="event-card-main">
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                                <h5 className="event-title">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    Media companies need to better one then
                                    educate advertisers.
                                  </Link>
                                </h5>
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}
                                  >
                                    Book Now
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="event-card-style-two">
                            <div className="event-thumb">
                              <img src={EventIMG2} alt="EventIMG" />
                              <div className="event-date">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  <i className="bi bi-calendar2-week" /> January
                                  21, 2021
                                </Link>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-seat-lavbel">
                                <h6>
                                  <i className="bi bi-diagram-3" /> 150 seat
                                </h6>
                              </div>
                              <div className="event-card-main">
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                                <h5 className="event-title">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    Integer posuere dolor vitae ipsum habitant
                                    morbi tristique.
                                  </Link>
                                </h5>
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}
                                  >
                                    Book Now
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="event-card-style-two">
                            <div className="event-thumb">
                              <img src={EventIMG3} alt="EventIMG" />
                              <div className="event-date">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  <i className="bi bi-calendar2-week" /> January
                                  21, 2021
                                </Link>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-seat-lavbel">
                                <h6>
                                  <i className="bi bi-diagram-3" /> 100 seat
                                </h6>
                              </div>
                              <div className="event-card-main">
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                                <h5 className="event-title">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    interdum lectus nec viverra Pellentesque at
                                    neque a ligula.
                                  </Link>
                                </h5>
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}
                                  >
                                    Book Now
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="event-card-style-two">
                            <div className="event-thumb">
                              <img src={EventIMG4} alt="EventIMG" />
                              <div className="event-date">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  <i className="bi bi-calendar2-week" /> January
                                  21, 2021
                                </Link>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-seat-lavbel">
                                <h6>
                                  <i className="bi bi-diagram-3" /> 100 seat
                                </h6>
                              </div>
                              <div className="event-card-main">
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                                <h5 className="event-title">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    Media companies need to better one then
                                    educate advertisers.
                                  </Link>
                                </h5>
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}
                                  >
                                    Book Now
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="event-card-style-two">
                            <div className="event-thumb">
                              <img src={EventIMG5} alt="EventIMG" />
                              <div className="event-date">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  <i className="bi bi-calendar2-week" /> January
                                  21, 2021
                                </Link>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-seat-lavbel">
                                <h6>
                                  <i className="bi bi-diagram-3" /> 150 seat
                                </h6>
                              </div>
                              <div className="event-card-main">
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                                <h5 className="event-title">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    Integer posuere dolor vitae ipsum habitant
                                    morbi tristique.
                                  </Link>
                                </h5>
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}
                                  >
                                    Book Now
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="event-card-style-two">
                            <div className="event-thumb">
                              <img src={EventIMG2} alt="EventIMG" />
                              <div className="event-date">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  <i className="bi bi-calendar2-week" /> January
                                  21, 2021
                                </Link>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-seat-lavbel">
                                <h6>
                                  <i className="bi bi-diagram-3" /> 100 seat
                                </h6>
                              </div>
                              <div className="event-card-main">
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                                <h5 className="event-title">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    interdum lectus nec viverra Pellentesque at
                                    neque a ligula.
                                  </Link>
                                </h5>
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}
                                  >
                                    Book Now
                                  </Link>
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
                      aria-labelledby="pills-tab2"
                    >
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="event-card-style-two">
                            <div className="event-thumb">
                              <img src={EventIMG2} alt="EventIMG" />
                              <div className="event-date">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  <i className="bi bi-calendar2-week" /> January
                                  21, 2021
                                </Link>
                              </div>
                              <div className="event-date">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  <i className="bi bi-calendar2-week" /> January
                                  21, 2021
                                </Link>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-seat-lavbel">
                                <h6>
                                  <i className="bi bi-diagram-3" /> 150 seat
                                </h6>
                              </div>
                              <div className="event-card-main">
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                                <h5 className="event-title">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    Integer posuere dolor vitae ipsum habitant
                                    morbi tristique.
                                  </Link>
                                </h5>
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}
                                  >
                                    Book Now
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="event-card-style-two">
                            <div className="event-thumb">
                              <img src={EventIMG4} alt="EventIMG" />
                              <div className="event-date">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  <i className="bi bi-calendar2-week" /> January
                                  21, 2021
                                </Link>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-seat-lavbel">
                                <h6>
                                  <i className="bi bi-diagram-3" /> 100 seat
                                </h6>
                              </div>
                              <div className="event-card-main">
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                                <h5 className="event-title">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    Media companies need to better one then
                                    educate advertisers.
                                  </Link>
                                </h5>
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}
                                  >
                                    Book Now
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="event-card-style-two">
                            <div className="event-thumb">
                              <img src={EventIMG5} alt="EventIMG" />
                              <div className="event-date">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  <i className="bi bi-calendar2-week" /> January
                                  21, 2021
                                </Link>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-seat-lavbel">
                                <h6>
                                  <i className="bi bi-diagram-3" /> 150 seat
                                </h6>
                              </div>
                              <div className="event-card-main">
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                                <h5 className="event-title">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    Integer posuere dolor vitae ipsum habitant
                                    morbi tristique.
                                  </Link>
                                </h5>
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}
                                  >
                                    Book Now
                                  </Link>
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
                      aria-labelledby="pills-tab3"
                    >
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="event-card-style-two">
                            <div className="event-thumb">
                              <img src={EventIMG1} alt="EventIMG" />
                              <div className="event-date">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  <i className="bi bi-calendar2-week" /> January
                                  21, 2021
                                </Link>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-seat-lavbel">
                                <h6>
                                  <i className="bi bi-diagram-3" /> 100 seat
                                </h6>
                              </div>
                              <div className="event-card-main">
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                                <h5 className="event-title">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    Media companies need to better one then
                                    educate advertisers.
                                  </Link>
                                </h5>
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}
                                  >
                                    Book Now
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="event-card-style-two">
                            <div className="event-thumb">
                              <img src={EventIMG2} alt="EventIMG" />
                              <div className="event-date">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  <i className="bi bi-calendar2-week" /> January
                                  21, 2021
                                </Link>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-seat-lavbel">
                                <h6>
                                  <i className="bi bi-diagram-3" /> 150 seat
                                </h6>
                              </div>
                              <div className="event-card-main">
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                                <h5 className="event-title">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    Integer posuere dolor vitae ipsum habitant
                                    morbi tristique.
                                  </Link>
                                </h5>
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}
                                  >
                                    Book Now
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="event-card-style-two">
                            <div className="event-thumb">
                              <img src={EventIMG3} alt="EventIMG" />
                              <div className="event-date">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  <i className="bi bi-calendar2-week" /> January
                                  21, 2021
                                </Link>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-seat-lavbel">
                                <h6>
                                  <i className="bi bi-diagram-3" /> 100 seat
                                </h6>
                              </div>
                              <div className="event-card-main">
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                                <h5 className="event-title">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    interdum lectus nec viverra Pellentesque at
                                    neque a ligula.
                                  </Link>
                                </h5>
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}
                                  >
                                    Book Now
                                  </Link>
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
                      aria-labelledby="pills-tab4"
                    >
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="event-card-style-two">
                            <div className="event-thumb">
                              <img src={EventIMG4} alt="EventIMG" />
                              <div className="event-date">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  <i className="bi bi-calendar2-week" /> January
                                  21, 2021
                                </Link>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-seat-lavbel">
                                <h6>
                                  <i className="bi bi-diagram-3" /> 100 seat
                                </h6>
                              </div>
                              <div className="event-card-main">
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                                <h5 className="event-title">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    Media companies need to better one then
                                    educate advertisers.
                                  </Link>
                                </h5>
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}
                                  >
                                    Book Now
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="event-card-style-two">
                            <div className="event-thumb">
                              <img src={EventIMG2} alt="EventIMG" />
                              <div className="event-date">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  <i className="bi bi-calendar2-week" /> January
                                  21, 2021
                                </Link>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-seat-lavbel">
                                <h6>
                                  <i className="bi bi-diagram-3" /> 100 seat
                                </h6>
                              </div>
                              <div className="event-card-main">
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                                <h5 className="event-title">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    interdum lectus nec viverra Pellentesque at
                                    neque a ligula.
                                  </Link>
                                </h5>
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}
                                  >
                                    Book Now
                                  </Link>
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
                      aria-labelledby="pills-tab5"
                    >
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="event-card-style-two">
                            <div className="event-thumb">
                              <img src={EventIMG1} alt="EventIMG" />
                              <div className="event-date">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  <i className="bi bi-calendar2-week" /> January
                                  21, 2021
                                </Link>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-seat-lavbel">
                                <h6>
                                  <i className="bi bi-diagram-3" /> 100 seat
                                </h6>
                              </div>
                              <div className="event-card-main">
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                                <h5 className="event-title">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    Media companies need to better one then
                                    educate advertisers.
                                  </Link>
                                </h5>
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}
                                  >
                                    Book Now
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="event-card-style-two">
                            <div className="event-thumb">
                              <img src={EventIMG2} alt="EventIMG" />
                              <div className="event-date">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  <i className="bi bi-calendar2-week" /> January
                                  21, 2021
                                </Link>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-seat-lavbel">
                                <h6>
                                  <i className="bi bi-diagram-3" /> 150 seat
                                </h6>
                              </div>
                              <div className="event-card-main">
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                                <h5 className="event-title">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    Integer posuere dolor vitae ipsum habitant
                                    morbi tristique.
                                  </Link>
                                </h5>
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}
                                  >
                                    Book Now
                                  </Link>
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
                      aria-labelledby="pills-tab6"
                    >
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="event-card-style-two">
                            <div className="event-thumb">
                              <img src={EventIMG2} alt="EventIMG" />
                              <div className="event-date">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  <i className="bi bi-calendar2-week" /> January
                                  21, 2021
                                </Link>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-seat-lavbel">
                                <h6>
                                  <i className="bi bi-diagram-3" /> 150 seat
                                </h6>
                              </div>
                              <div className="event-card-main">
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                                <h5 className="event-title">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    Integer posuere dolor vitae ipsum habitant
                                    morbi tristique.
                                  </Link>
                                </h5>
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}
                                  >
                                    Book Now
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="event-card-style-two">
                            <div className="event-thumb">
                              <img src={EventIMG5} alt="EventIMG" />
                              <div className="event-date">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  <i className="bi bi-calendar2-week" /> January
                                  21, 2021
                                </Link>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-seat-lavbel">
                                <h6>
                                  <i className="bi bi-diagram-3" /> 150 seat
                                </h6>
                              </div>
                              <div className="event-card-main">
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                                <h5 className="event-title">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    Integer posuere dolor vitae ipsum habitant
                                    morbi tristique.
                                  </Link>
                                </h5>
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}
                                  >
                                    Book Now
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="event-card-style-two">
                            <div className="event-thumb">
                              <img src={EventIMG2} alt="EventIMG" />
                              <div className="event-date">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  <i className="bi bi-calendar2-week" /> January
                                  21, 2021
                                </Link>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-seat-lavbel">
                                <h6>
                                  <i className="bi bi-diagram-3" /> 100 seat
                                </h6>
                              </div>
                              <div className="event-card-main">
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Broadw, New
                                    York
                                  </Link>
                                </div>
                                <h5 className="event-title">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    interdum lectus nec viverra Pellentesque at
                                    neque a ligula.
                                  </Link>
                                </h5>
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}
                                  >
                                    Book Now
                                  </Link>
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
        {/* ===============  Event area end  =============== */}
      </>
    );
  }
}

export default EventArea;
