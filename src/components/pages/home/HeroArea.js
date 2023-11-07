import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
// Swiper slider imported
import SwiperCore, {
  Navigation,
} from "swiper";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import WOW from 'wowjs';
import '../../../assets/css/animate.css';
// image import
import HeroIMG1 from "../../../assets/images/hero/hero-figure1.png";
import HeroIMG2 from "../../../assets/images/shapes/hero-animi.png";
import ImageShape from "../../../assets/images/shapes/hero-shape.png";
import SpeakerThumb2 from "../../../assets/images/speaker/sb-speaker1.png";
import SpeakerThumb1 from "../../../assets/images/speaker/sb-speaker2.png";
import SpeakerThumb3 from "../../../assets/images/speaker/sb-speaker3.png";
import SpeakerThumb4 from "../../../assets/images/speaker/sb-speaker4.png";
import SpeakerThumb5 from "../../../assets/images/speaker/sb-speaker5.png";

// install Swiper modules
SwiperCore.use([ Navigation]);
class HeroArea extends Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }
  componentDidMount(){
      new WOW.WOW().init()
  }
  changeDatepickerHaldeller = (date) => {
    this.setState({ startDate: date });
  };
  render() {
    const startDate = this.state.startDate;
    const sliderInit = {
      slidesPerView: 1,
      loop: true,
      speed: 2400,
      effect: "slide",
      nav: "true",
      autoplay: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".hero-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function (swiper, current, total) {
          function numberAppend(d) {
            return d < 10 ? "0" + d.toString() : d.toString();
          }
          return numberAppend(current);
        },
      },
    };
    return (
      <>
        <div className="main-slider-wrapper">
          {/* ===============  hero area start  =============== */}
          <div className="hero-area">
            <div className="hero-shape">
              <img src={ImageShape} alt="HeroIMG" />
            </div>
            <div className="hero-sidebar-area d-lg-block d-none">
              <div className="sidebar-list">
                <div className="sb-single-speaker">
                  <div className="single-speaker-thumb">
                    <img src={SpeakerThumb2} alt="HeroIMG" />
                  </div>
                  <div className="sb-speaker-content">
                    <div className="sb-speaker-info">
                      <h6>
                        <Link
                          onClick={this.scrollTop}
                      
                          to={`${process.env.PUBLIC_URL}/speaker-details`}>
                          Rodrigo Ema
                        </Link>
                      </h6>
                      <span>Marketing Ex</span>
                    </div>
                    <ul className="sb-speaker-social-cion">
                      <li>
                        <Link
                          onClick={this.scrollTop}
                       
                          to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={this.scrollTop}
                          to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={this.scrollTop}
                          to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={this.scrollTop}
                          to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sb-single-speaker">
                  <div className="single-speaker-thumb">
                    <img src={SpeakerThumb1} alt="HeroIMG" />
                  </div>
                  <div className="sb-speaker-content">
                    <div className="sb-speaker-info">
                      <h6>
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/speaker-details`}>
                          Aderson Jr
                        </Link>
                      </h6>
                      <span>Marketing Ex</span>
                    </div>
                    <ul className="sb-speaker-social-cion">
                      <li>
                        <Link
                          onClick={this.scrollTop}
                          to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={this.scrollTop}
                          to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={this.scrollTop}
                          to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={this.scrollTop}
                          to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sb-single-speaker">
                  <div className="single-speaker-thumb">
                    <img src={SpeakerThumb3} alt="HeroIMG" />
                  </div>
                  <div className="sb-speaker-content">
                    <div className="sb-speaker-info">
                      <h6>
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/speaker-details`}>
                          Mr. Avater
                        </Link>
                      </h6>
                      <span>Marketing Ex</span>
                    </div>
                    <ul className="sb-speaker-social-cion">
                      <li>
                        <Link
                          onClick={this.scrollTop}
                          to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={this.scrollTop}
                          to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={this.scrollTop}
                          to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={this.scrollTop}
                          to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sb-single-speaker">
                  <div className="single-speaker-thumb">
                    <img src={SpeakerThumb4} alt="HeroIMG" />
                  </div>
                  <div className="sb-speaker-content">
                    <div className="sb-speaker-info">
                      <h6>
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/speaker-details`}>
                          J.J Walter
                        </Link>
                      </h6>
                      <span>Marketing Ex</span>
                    </div>
                    <ul className="sb-speaker-social-cion">
                      <li>
                        <Link
                          onClick={this.scrollTop}
                          to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={this.scrollTop}
                          to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={this.scrollTop}
                          to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={this.scrollTop}
                          to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sb-single-speaker">
                  <div className="single-speaker-thumb">
                    <img src={SpeakerThumb5} alt="HeroIMG" />
                  </div>
                  <div className="sb-speaker-content">
                    <div className="sb-speaker-info">
                      <h6>
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/speaker-details`}>
                          Camila Rido
                        </Link>
                      </h6>
                      <span>Marketing Ex</span>
                    </div>
                    <ul className="sb-speaker-social-cion">
                      <li>
                        <Link
                          onClick={this.scrollTop}
                          to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={this.scrollTop}
                          to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={this.scrollTop}
                          to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={this.scrollTop}
                          to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <h5>Meet Our Best Spekar:</h5>
              </div>
            </div>
            <div className="container">
              <div className="swiper-container hero-slider overflow-hidden">
                <Swiper {...sliderInit} className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="slide-content">
                          <h5>
                            <i className="bi bi-calendar2-week" /> January 21,
                            2021
                          </h5>
                          <h2>
                            EVENTS, MEETUPS &amp;
                            <span>CONFERENCES</span>
                          </h2>
                          <ul className="featured-event">
                            <li>
                              <i className="bi bi-diagram-3" /> <span>500</span>{" "}
                              Seat
                            </li>
                            <li>
                              <i className="bi bi-megaphone" /> <span>10</span>{" "}
                              Speaker
                            </li>
                            <li>
                              <i className="bi bi-pin-map" /> 1356 Broadway, New
                              York
                            </li>
                          </ul>
                          <div className="slider-btns">
                            <Link
                               onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/event-details`}
                              className="primary-btn-fill">
                              Book Now
                            </Link>
                            <Link
                               onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/event-details`}
                              className="primary-btn-outline">
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 text-center">
                        <div className="slide-figure  position-relative d-lg-flex justify-content-center">
                          <img
                            src={HeroIMG1}
                            alt="HeroIMG"
                            className="img-fluid"
                          />
                          <div className="animated-shape">
                            <img src={HeroIMG2} alt="HeroIMG" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="slide-content">
                          <h5>
                            <i className="bi bi-calendar2-week" /> January 21,
                            2021
                          </h5>
                          <h2>
                            EVENTS, MEETUPS &amp;
                            <span>CONFERENCES</span>
                          </h2>
                          <ul className="featured-event">
                            <li>
                              <i className="bi bi-diagram-3" /> <span>500</span>{" "}
                              Seat
                            </li>
                            <li>
                              <i className="bi bi-megaphone" /> <span>10</span>{" "}
                              Speaker
                            </li>
                            <li>
                              <i className="bi bi-pin-map" /> 1356 Broadway, New
                              York
                            </li>
                          </ul>
                          <div className="slider-btns">
                            <Link
                               onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/event-details`}
                              className="primary-btn-fill">
                              Book Now
                            </Link>
                            <Link
                               onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/event-details`}
                              className="primary-btn-outline">
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 text-center">
                        <div className="slide-figure  position-relative d-lg-flex justify-content-center">
                          <img
                            src={HeroIMG1}
                            alt="HeroIMG"
                            className="img-fluid"
                          />
                          <div className="animated-shape">
                            <img src={HeroIMG2} alt="HeroIMG" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="slider-arrows text-center d-lg-block d-none">
              <div
                className="swiper-button-next"
                tabIndex={0}
                role="button"
                aria-label="Next slide">
                <i className="bi bi-chevron-up" />
              </div>
              <div className="hero-pagination d-block w-auto" />
              <div
                className="swiper-button-prev"
                tabIndex={0}
                role="button"
                aria-label="Previous slide">
                <i className="bi bi-chevron-down" />
              </div>
            </div>
          </div>
          {/* ===============  hero area end  =============== */}
          {/* ===============  main searchbar area start  =============== */}
          <div className="main-searchbar-area">
            <div className="container">
              <form className="searchbar-wrapper" action="#">
                <div className="row">
                  <div className="col-lg-10">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="searchbar-input-group">
                          <input
                            type="text"
                            placeholder="Event Location....."
                            id="search-location"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="searchbar-input-group">
                          {/* <input
                            type="text"
                            id="datepicker"
                            placeholder="Date"
                          /> */}
                          <DatePicker
                            selected={startDate}
                            onChange={(date) =>
                              this.changeDatepickerHaldeller(date)
                            }
                            placeholderText="Date"
                          />
                          <i className="bi bi-calendar2-week" />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="searchbar-input-group">
                          <div className="custom-select filter-options">
                            <select>
                              <option value={0}>Category</option>
                              <option value={1}> Category 1</option>
                              <option value={1}>Category 2</option>
                              <option value={2}>Category 3</option>
                              <option value={3}>Category 4</option>
                              <option value={3}>Category 5</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="search-submit">
                      <input
                        type="submit"
                        value="Search Now"
                        placeholder="Search Now"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* ===============  main searchbar area end  =============== */}
        </div>
      </>
    );
  }
}

export default HeroArea;
