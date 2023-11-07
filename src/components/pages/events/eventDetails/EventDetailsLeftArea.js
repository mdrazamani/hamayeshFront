import React, { Component } from "react";
import { Link } from "react-router-dom";
// page animation
import WOW from "wowjs";
import "../../../../assets/css/animate.css";
import BlogThumb from "../../../../assets/images/event/ed-thumb.png";
import GallaryIem3 from "../../../../assets/images/gallary/e-gallary-l1.png";
import GallaryIem4 from "../../../../assets/images/gallary/e-gallary-l2.png";
import GallaryIem2 from "../../../../assets/images/gallary/e-gallary-sm1.png";
import GallaryIem1 from "../../../../assets/images/gallary/e-gallary1.png";
// Gallary View image import
import GallaryView1 from "../../../../assets/images/gallary/view1.png";
import GallaryView2 from "../../../../assets/images/gallary/view2.png";
// reply button icon
import ReplyBtnIcon from "../../../../assets/images/icons/reply-icon.png";
// commentor image import
import Commentor1 from "../../../../assets/images/speaker/commentor-1.png";
import Commentor2 from "../../../../assets/images/speaker/commentor-2.png";
import Commentor3 from "../../../../assets/images/speaker/commentor-3.png";
// main speaker image import
import MainSeaker1 from "../../../../assets/images/speaker/event-sm1.png";
import MainSeaker2 from "../../../../assets/images/speaker/event-sm2.png";
import MainSeaker3 from "../../../../assets/images/speaker/event-sm3.png";
import MainSeaker4 from "../../../../assets/images/speaker/event-sm4.png";
import MainSeaker5 from "../../../../assets/images/speaker/event-sm5.png";
import MainSeaker6 from "../../../../assets/images/speaker/event-sm6.png";
// speaker image import
import speaker1 from "../../../../assets/images/speaker/speaker-sm1.png";
import speaker2 from "../../../../assets/images/speaker/speaker-sm2.png";
import { SRLWrapper } from "simple-react-lightbox";
import speaker3 from "../../../../assets/images/speaker/speaker-sm3.png";
import speaker4 from "../../../../assets/images/speaker/speaker-sm4.png";
// main sponser logo image import
import sponsorLogo1 from "../../../../assets/images/sponsor/ed-sponsor1.png";
import sponsorLogo2 from "../../../../assets/images/sponsor/ed-sponsor2.png";
import sponsorLogo3 from "../../../../assets/images/sponsor/ed-sponsor3.png";
import sponsorLogo4 from "../../../../assets/images/sponsor/ed-sponsor4.png";
class EventDetailsLeftArea extends Component {
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
        <div className="col-xl-8">
          <div className="ed-main-wrap">
            <div className="ed-top">
              <div className="ed-thumb">
                <img src={BlogThumb} alt="Blog details" />
              </div>
              <ul className="ed-status">
                <li>
                  <i className="bi bi-calendar2-week" /> January 21, 2021
                </li>
                <li className="active">
                  <i className="bi bi-diagram-3" /> <span>500</span> Seat
                </li>
                <li>
                  <i className="bi bi-pin-map" />
                  Broadw, New York
                </li>
              </ul>
              <div className="event-info row align-items-center">
                <div className="col-lg-3 col-md-4">
                  <div className="single-event-info">
                    <div className="info-icon">
                      <i className="bi bi-blockquote-left" />
                    </div>
                    <div className="info-content">
                      <h5>Event Type</h5>
                      <p>Web Development</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="single-event-info">
                    <div className="info-icon">
                      <i className="bi bi-megaphone" />
                    </div>
                    <div className="info-content">
                      <h5>Speaker</h5>
                      <p>10 Best Speaker</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="single-event-info">
                    <div className="info-icon">
                      <i className="bi bi-lightning" />
                    </div>
                    <div className="info-content">
                      <h5>Sponsor</h5>
                      <p>Event Lab</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="event-rating text-center">
                    <ul className="d-flex justify-content-center">
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-half" />
                      </li>
                    </ul>
                    <h6>(500)</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="ed-tabs-wrapper">
              <div className="tabs-pill">
                <ul
                  className="nav nav-pills justify-content-center"
                  id="pills-tab2"
                  role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-details-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-details"
                      type="button"
                      role="tab"
                      aria-controls="pills-details"
                      aria-selected="true">
                      {" "}
                      <i className="bi bi-info-circle" /> <span>Details</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-schedule-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-schedule"
                      type="button"
                      role="tab"
                      aria-controls="pills-schedule"
                      aria-selected="false">
                      <i className="bi bi-calendar3" /> <span>Schedule</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-gallary-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-gallary"
                      type="button"
                      role="tab"
                      aria-controls="pills-gallary"
                      aria-selected="false">
                      <i className="bi bi-images" /> <span>Gallery</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="pills-tabContent2">
                <div
                  className="tab-pane fade show active"
                  id="pills-details"
                  role="tabpanel"
                  aria-labelledby="pills-details-tab">
                  <div className="details-tab-content">
                    <h3 className="ed-title">
                      Media companies need to better one then educate
                      advertisers. better one then educate.
                    </h3>
                    <p>
                      Cras semper, massa vel aliquam luctus, eros odio tempor
                      turpis, ac placerat metus tortor eget magna. Donec mattis
                      posuere pharetra. Donec vestibulum ornare velit ut
                      sollicitudin. Pellentesque in faucibus purus.Nulla nisl
                      tellus, hendrerit nec dignissim pellentesque, posuere in
                      est. Suspendisse bibendum vestibulum elit eu placerat. In
                      ut ipsum in odio euismod tincidunt non lacinia nunc. Donec
                      ligula augue, mattis eu varius ac.
                    </p>
                    <div className="row ed-overview">
                      <div className="col-lg-6">
                        <h5 className="ed-subtitle">Over View</h5>
                        <ul className="overview-list">
                          <li>
                            <i className="bi bi-check2" /> You Got Full Free
                            Certificate.
                          </li>
                          <li>
                            <i className="bi bi-check2" /> Unlimited Coffe &amp;
                            Tea When U Boring.
                          </li>
                          <li>
                            <i className="bi bi-check2" /> Etiam dictum, dui sit
                            amet venenatis.
                          </li>
                          <li>
                            <i className="bi bi-check2" /> Class aptent taciti
                            sociosqu ad litora.
                          </li>
                          <li>
                            <i className="bi bi-check2" /> Lunch Suspendisse in
                            commodo feli.
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <div className="overview-images d-grid">
                          <div className="overview-img1">
                            <img
                              src={GallaryView1}
                              alt="Blog details"
                              className="img-fluid"
                            />
                          </div>
                          <div className="overview-img2">
                            <img
                              src={GallaryView2}
                              alt="Blog details"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p>
                      Cras semper, massa vel aliquam luctus, eros odio tempor
                      turpis, ac placerat metus tortor eget magna. Donec mattis
                      posuere pharetra. Donec vestibulum ornare velit ut
                      sollicitudin. Pellentesque in faucibus purus.Nulla nisl
                      tellus, hendrerit nec dignissim pellentesque.
                    </p>
                    <div className="speakers-list">
                      <h5 className="ed-subtitle">Main Speaker</h5>
                      <div className="row ">
                        <div className="col-md-6">
                          <div className="single-speaker">
                            <div className="speaker-image">
                              <img src={MainSeaker1} alt="Blog details" />
                            </div>
                            <div className="speaker-info">
                              <h6>John Loganin</h6>
                              <strong>Digital Marketing</strong>
                              <ul className="speaker-social-links">
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
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-speaker">
                            <div className="speaker-image">
                              <img src={MainSeaker2} alt="Blog details" />
                            </div>
                            <div className="speaker-info">
                              <h6>Jackson Levi</h6>
                              <strong>CTO</strong>
                              <ul className="speaker-social-links">
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
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-speaker">
                            <div className="speaker-image">
                              <img src={MainSeaker3} alt="Blog details" />
                            </div>
                            <div className="speaker-info">
                              <h6>Victoria Lily</h6>
                              <strong>Marketing</strong>
                              <ul className="speaker-social-links">
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
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-speaker">
                            <div className="speaker-image">
                              <img src={MainSeaker4} alt="Blog details" />
                            </div>
                            <div className="speaker-info">
                              <h6>Hannah Emilia</h6>
                              <strong>Marketing</strong>
                              <ul className="speaker-social-links">
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
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-speaker">
                            <div className="speaker-image">
                              <img src={MainSeaker5} alt="Blog details" />
                            </div>
                            <div className="speaker-info">
                              <h6>Sebastian Mateo</h6>
                              <strong>Founder</strong>
                              <ul className="speaker-social-links">
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
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-speaker">
                            <div className="speaker-image">
                              <img src={MainSeaker6} alt="Blog details" />
                            </div>
                            <div className="speaker-info">
                              <h6>Willow Lucy</h6>
                              <strong>Co Founder</strong>
                              <ul className="speaker-social-links">
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="event-sponsor-tabs">
                      <h5 className="ed-subtitle">This Event Sponsor</h5>
                      <ul
                        className="nav nav-pills justify-content-between"
                        id="pills-tab1"
                        role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="pills-sponsor-tab1"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-sponsor1"
                            type="button"
                            role="tab"
                            aria-controls="pills-sponsor1"
                            aria-selected="true">
                            <img src={sponsorLogo1} alt="Blog details" />
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-sponsor-tab2"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-sponsor2"
                            type="button"
                            role="tab"
                            aria-controls="pills-sponsor2"
                            aria-selected="false">
                            <img src={sponsorLogo2} alt="Blog details" />
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-sponsor-tab3"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-sponsor3"
                            type="button"
                            role="tab"
                            aria-controls="pills-sponsor3"
                            aria-selected="false">
                            <img src={sponsorLogo4} alt="Blog details" />
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-sponsor-tab4"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-sponsor4"
                            type="button"
                            role="tab"
                            aria-controls="pills-sponsor4"
                            aria-selected="false">
                            <img src={sponsorLogo3} alt="Blog details" />
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content" id="pills-tabContent1">
                        <div
                          className="tab-pane fade show active"
                          id="pills-sponsor1"
                          role="tabpanel"
                          aria-labelledby="pills-sponsor-tab1">
                          <p>
                            Cras semper, massa vel aliquam luctus, eros odio
                            tempor turpis, ac placerat metus tortor eget magna.
                            Donec mattis posuere pharetra. Donec vestibulum
                            ornare velit ut sollicitudin. tempor Pellentesque in
                            faucibus purus.Nulla nisl tellus, hendrerit nec
                            dignissim pellentesque.
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-sponsor2"
                          role="tabpanel"
                          aria-labelledby="pills-sponsor-tab2">
                          <p>
                            Cras semper, massa vel aliquam luctus, eros odio
                            tempor turpis, ac placerat metus tortor eget magna.
                            Donec mattis posuere pharetra. Donec vestibulum
                            ornare velit ut sollicitudin. tempor Pellentesque in
                            faucibus purus.Nulla nisl tellus, hendrerit nec
                            dignissim pellentesque.
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-sponsor3"
                          role="tabpanel"
                          aria-labelledby="pills-sponsor-tab3">
                          <p>
                            Cras semper, massa vel aliquam luctus, eros odio
                            tempor turpis, ac placerat metus tortor eget magna.
                            Donec mattis posuere pharetra. Donec vestibulum
                            ornare velit ut sollicitudin. tempor Pellentesque in
                            faucibus purus.Nulla nisl tellus, hendrerit nec
                            dignissim pellentesque.
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-sponsor4"
                          role="tabpanel"
                          aria-labelledby="pills-sponsor-tab4">
                          <p>
                            Cras semper, massa vel aliquam luctus, eros odio
                            tempor turpis, ac placerat metus tortor eget magna.
                            Donec mattis posuere pharetra. Donec vestibulum
                            ornare velit ut sollicitudin. tempor Pellentesque in
                            faucibus purus.Nulla nisl tellus, hendrerit nec
                            dignissim pellentesque.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="comment-section">
                      <div className="comment-section-header">
                        <div className=" comment-arrow prev-comment ">
                          <Link onClick={this.scrollTop} to={"#"}>
                            <i className="bi bi-chevron-left" /> Previous
                          </Link>
                        </div>
                        <div className="comment-counter">
                          <h5>
                            Comment <span>(20)</span>{" "}
                          </h5>
                        </div>
                        <div className=" comment-arrow next-comment ">
                          <Link onClick={this.scrollTop} to={"#"}>
                            Next <i className="bi bi-chevron-right" />
                          </Link>
                        </div>
                      </div>
                      <ul className="comments-list">
                        <li className="single-comment">
                          <div className="commentor-img">
                            <img src={Commentor3} alt="Blog details" />
                          </div>
                          <div className="comment-info">
                            <p>
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac bibend placerat metus tortor
                              eget magna. Donec mattis posuere pharetra. Donec
                              an vestibulum ornare velit ut sollicitudin.
                              Pellentesque in faucibus purus.
                            </p>
                            <div className="commentor-info">
                              <div className="commentor-bio">
                                <h6 className="commentor-name">
                                  Asher Car ter
                                </h6>
                                <div className="comment-timing">
                                  <span className="comment-date">
                                    Decembar 10, 2021
                                  </span>{" "}
                                  <span className="comment-time">12.34 PM</span>
                                </div>
                              </div>
                              <div className="reply-btn">
                                <img
                                  src={ReplyBtnIcon}
                                  alt="Blog details"
                                  className="reply-icon"
                                />
                                <Link onClick={this.scrollTop} to={"#"}>
                                  Reply
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="single-comment">
                          <div className="commentor-img">
                            <img src={Commentor2} alt="Blog details" />
                          </div>
                          <div className="comment-info">
                            <p>
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac bibend placerat metus tortor
                              eget magna. Donec mattis posuere pharetra. Donec
                              an vestibulum ornare velit ut sollicitudin.
                              Pellentesque in faucibus purus.
                            </p>
                            <div className="commentor-info">
                              <div className="commentor-bio">
                                <h6 className="commentor-name">
                                  Paisley Natalie
                                </h6>
                                <div className="comment-timing">
                                  <span className="comment-date">
                                    Decembar 10, 2021
                                  </span>{" "}
                                  <span className="comment-time">12.34 PM</span>
                                </div>
                              </div>
                              <div className="reply-btn">
                                <img
                                  src={ReplyBtnIcon}
                                  alt="Blog details"
                                  className="reply-icon"
                                />
                                <Link onClick={this.scrollTop} to={"#"}>
                                  Reply
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="single-comment">
                          <div className="commentor-img">
                            <img src={Commentor1} alt="Blog details" />
                          </div>
                          <div className="comment-info">
                            <p>
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac bibend placerat metus tortor
                              eget magna. Donec mattis posuere pharetra. Donec
                              an vestibulum ornare velit ut sollicitudin.
                              Pellentesque in faucibus purus.
                            </p>
                            <div className="commentor-info">
                              <div className="commentor-bio">
                                <h6 className="commentor-name">
                                  Julian Grayson
                                </h6>
                                <div className="comment-timing">
                                  <span className="comment-date">
                                    Decembar 10, 2021
                                  </span>{" "}
                                  <span className="comment-time">12.34 PM</span>
                                </div>
                              </div>
                              <div className="reply-btn">
                                <img
                                  src={ReplyBtnIcon}
                                  alt="Blog details"
                                  className="reply-icon"
                                />
                                <Link onClick={this.scrollTop} to={"#"}>
                                  Reply
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="comment-form">
                      <h5 className="ed-subtitle">Leave Your Comment</h5>
                      <form action="#" id="comment-form">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="primary-input-group">
                              <input
                                type="text"
                                id="name"
                                placeholder="Your Full Name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="primary-input-group">
                              <input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="primary-input-group">
                              <input
                                type="text"
                                id="subject"
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="primary-input-group">
                              <textarea
                                name="massege"
                                id="massege"
                                cols={30}
                                rows={7}
                                placeholder="Message"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="submit-btn">
                              <button type="submit" className="primary-submit">
                                Submit Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-schedule"
                  role="tabpanel"
                  aria-labelledby="pills-schedule-tab">
                  <div className="schedule-tab-content">
                    <div className="schedule-wrapper">
                      <div className="event-date">
                        <h3>30 Sep 2021</h3>
                      </div>
                      <div className="single-schedule-card row">
                        <div className="col-xl-5 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>10.00 AM - 11.30 PM</h4>
                              <h5>
                                Room No - <span>01</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={speaker1} alt="Blog details" />
                              </div>
                              <div className="speaker-info">
                                <h4>John Loganin</h4>
                                <p>Marketing</p>
                                <ul className="speaker-social-links">
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
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              Nulla nisl tellus hendrerit nec dignissim
                              pellentesqu.
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="single-schedule-card row wow fadeInRight animated"
                        data-wow-delay="300ms"
                        data-wow-duration="1500ms">
                        <div className="col-xl-5 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>11.30 AM - 12.30 PM</h4>
                              <h5>
                                Room No - <span>02</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={speaker2} alt="Blog details" />
                              </div>
                              <div className="speaker-info">
                                <h4>Joseph John</h4>
                                <p>Management</p>
                                <ul className="speaker-social-links">
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
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              Nulla nisl tellus hendrerit nec dignissim
                              pellentesqu.
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="single-schedule-card row wow fadeInLeft animated"
                        data-wow-delay="400ms"
                        data-wow-duration="1500ms">
                        <div className="col-xl-5 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>01.00 AM - 01.30 PM</h4>
                              <h5>
                                Room No - <span>05</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 p-0">
                          <div className="single-schedule-right has-break">
                            <h3 className="break-type">Lunch Time</h3>
                          </div>
                        </div>
                      </div>
                      <div
                        className="single-schedule-card row fadeInRight animated"
                        data-wow-delay="500ms"
                        data-wow-duration="1500ms">
                        <div className="col-xl-5 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>02.00 PM - 03.00 PM</h4>
                              <h5>
                                Room No - <span>07</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={speaker3} alt="Blog details" />
                              </div>
                              <div className="speaker-info">
                                <h4>Gianna Abiga</h4>
                                <p>Developing</p>
                                <ul className="speaker-social-links">
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
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              Nulla nisl tellus hendrerit nec dignissim
                              pellentesqu.
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="single-schedule-card row wow fadeInLeft animated"
                        data-wow-delay="600ms"
                        data-wow-duration="1500ms">
                        <div className="col-xl-5 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>03.00 PM - 04.00 PM</h4>
                              <h5>
                                Room No - <span>01</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={speaker4} alt="Blog details" />
                              </div>
                              <div className="speaker-info">
                                <h4>Michael Etha</h4>
                                <p>Marketing</p>
                                <ul className="speaker-social-links">
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
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              Nulla nisl tellus hendrerit nec dignissim
                              pellentesqu.
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ticket-progress-wrap">
                        <div className="ticket-progressbar" />
                        <h4>
                          Available Seat: <span>390-500</span>
                        </h4>
                        <div className="ticket-book-btn">
                          <Link
                            onClick={this.scrollTop}
                            to={"#"}
                            className="primary-btn-fill">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-gallary"
                  role="tabpanel"
                  aria-labelledby="pills-gallary-tab">
                  <div className="gallary-tab-content">
                  <SRLWrapper>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="gallary-item">
                          <img src={GallaryIem1} alt="Gallery" />
                          <Link to={GallaryIem1}>
                            <img
                              src={GallaryIem1}
                              className="gallary-item-overlay"
                              alt="GallaryIMAGE"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="gallary-item">
                          <img src={GallaryIem2} alt="Gallery" />
                          <Link to={GallaryIem2}>
                            <img
                              src={GallaryIem2}
                              className="gallary-item-overlay"
                              alt="GallaryIMAGE"
                            />
                          </Link>
                        </div>
                        <div className="gallary-item">
                          <img src={GallaryIem2} alt="Gallery" />
                          <Link to={GallaryIem2}>
                            <img
                              src={GallaryIem2}
                              className="gallary-item-overlay"
                              alt="GallaryIMAGE"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="gallary-item">
                          <img src={GallaryIem3} alt="Gallery" />
                          <Link to={GallaryIem3}>
                            <img
                              src={GallaryIem3}
                              className="gallary-item-overlay"
                              alt="GallaryIMAGE"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="gallary-item">
                          <img src={GallaryIem4} alt="Gallery" />
                          <Link to={GallaryIem4}>
                            <img
                              src={GallaryIem4}
                              className="gallary-item-overlay"
                              alt="GallaryIMAGE"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="gallary-item">
                          <img src={GallaryIem1} alt="Gallery" />
                          <Link to={GallaryIem1}>
                            <img
                              src={GallaryIem1}
                              className="gallary-item-overlay"
                              alt="GallaryIMAGE"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="gallary-item">
                          <img src={GallaryIem2} alt="Gallery" />
                          <Link to={GallaryIem2}>
                            <img
                              src={GallaryIem2}
                              className="gallary-item-overlay"
                              alt="GallaryIMAGE"
                            />
                          </Link>
                        </div>
                        <div className="gallary-item">
                          <img src={GallaryIem2} alt="Gallery" />
                          <Link to={GallaryIem2}>
                            <img
                              src={GallaryIem2}
                              className="gallary-item-overlay"
                              alt="GallaryIMAGE"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="gallary-item">
                          <img src={GallaryIem3} alt="Gallery" />
                          <Link to={GallaryIem3}>
                            <img
                              src={GallaryIem3}
                              className="gallary-item-overlay"
                              alt="GallaryIMAGE"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="gallary-item">
                          <img src={GallaryIem4} alt="Gallery" />
                          <Link to={GallaryIem3}>
                            <img
                              src={GallaryIem3}
                              className="gallary-item-overlay"
                              alt="GallaryIMAGE"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  
                    </SRLWrapper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EventDetailsLeftArea;
