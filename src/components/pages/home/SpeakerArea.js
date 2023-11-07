import React, { Component } from "react";
import { Link } from "react-router-dom";
// Swiper slider imported
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination
} from "swiper";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import SpeakerIMG1 from "../../../assets/images/speaker/speaker-1.png";
import SpeakerIMG2 from "../../../assets/images/speaker/speaker-2.png";
import SpeakerIMG3 from "../../../assets/images/speaker/speaker-3.png";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
class SpeakerArea extends Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    const speakerSlider={
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      autoplay: {
        delay: 15000
      },
      pagination: {
        el: ".speaker-two-pagination",
      },
      breakpoints: {
        300:{
          slidesPerView: 1,
        },
        480:{
          slidesPerView: 1
        },
        768:{
          slidesPerView: 2
        },
        992:{ 
          slidesPerView: 2
        },
        1200:{
          slidesPerView: 3
        },
       
      }
    }
    return (
      <>
        {/* ===============  Speakers area starts  =============== */}
        <div className="speakers-area gray-300">
          <div className="container position-relative pt-110">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="background-title text-style-one">
                  <h2>Speaker</h2>
                </div>
                <div className="section-head">
                  <h5>Speaker</h5>
                  <h3>Talented Speaker</h3>
                </div>
              </div>
            </div>
            <div className="swiper speaker-slider-two">
              <Swiper
                {...speakerSlider}
                className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="speaker-card">
                    <div className="speaker-image">
                      <img src={SpeakerIMG1} alt="SpeakerIMG" />
                      <ul className="speaker-social-icons">
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
                    <div className="speaker-info">
                      <h5 className="speaker-name">
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/speaker-details`}>
                          Santiago Axel
                        </Link>
                      </h5>
                      <p>Senio Visual Designer</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="speaker-card">
                    <div className="speaker-image">
                      <img src={SpeakerIMG2} alt="SpeakerIMG" />
                      <ul className="speaker-social-icons">
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
                    <div className="speaker-info">
                      <h5 className="speaker-name">
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/speaker-details`}>
                          Scarlett Eleanor
                        </Link>
                      </h5>
                      <p>Marketing</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="speaker-card">
                    <div className="speaker-image">
                      <img src={SpeakerIMG3} alt="SpeakerIMG" />
                      <ul className="speaker-social-icons">
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
                    <div className="speaker-info">
                      <h5 className="speaker-name">
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/speaker-details`}>
                          Jacob Logan
                        </Link>
                      </h5>
                      <p>Business Manager</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="speaker-two-pagination d-lg-flex d-none" />
            </div>
          </div>
        </div>
        {/* ===============  Speakers area end  =============== */}
      </>
    );
  }
}

export default SpeakerArea;
