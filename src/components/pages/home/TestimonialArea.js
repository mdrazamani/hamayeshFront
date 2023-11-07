import React, { Component } from "react";
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
// import image
import QuoteIcon from "../../../assets/images/icons/qoute-icon.png";
import TestimonialShape from "../../../assets/images/shapes/testi-shape.png";
import Reviewer from "../../../assets/images/speaker/reviewer.png";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
class Testimonial extends Component {
  render() {
    const sliderInit = {
      slidesPerView: 1,
      loop: true,
      speed: 2400,
      effect: "slide",
      nav: true,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function (swiper, current, total) {
          function numberAppend(d) {
            return d < 10 ? "0" + d.toString() : d.toString();
          }
          return numberAppend(current) + `<span></span>` + numberAppend(total);
        },
      },
      navigation: {
        nextEl: ".testi-button-next",
        prevEl: ".testi-button-prev",
      },
    };
    return (
      <>
        {/* ===============  testimonial area start  =============== */}
        <div className="testimonial-area">
          <div className="container position-relative">
            <div className="testimonial-wrapper position-relative">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="testimonial-info">
                    <div className="background-title text-style-two">
                      <h2>testimonial</h2>
                    </div>
                    <h5>Testimonial</h5>
                    <h3>What People Say About Eventlab.</h3>
                    <p>
                      Cras semper, massa vel aliquam luctus, eros odio tempor
                      turpis, ac placerat metus tortor eget magna. Donec mattis
                      posuere pharetra. Donec vestibulum ornare velit ut
                      sollicitudin ut sollicitudin.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="testimonial-slider-wrapper">
                    <div className="swiper testimonial-slider">
                      <Swiper {...sliderInit} className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                          <div className="testimonial-card">
                            <div className="testimonial-shape">
                              <img src={TestimonialShape}  alt="Imgs" />
                            </div>
                            <div className="testimonial-top">
                              <div className="reviewer-image">
                                <img src={Reviewer}  alt="Imgs" />
                              </div>
                              <div className="reviewer-info">
                                <div className="quote-icon d-md-block d-none">
                                  <img src={QuoteIcon}  alt="Imgs" />
                                </div>
                                <h3 className="reviewer-name">
                                  Scarlett Eleanor
                                </h3>
                                <p>Marketing</p>
                              </div>
                            </div>
                            <div className="review-texts">
                              <p>
                                Cras semper, massa vel aliquam luctus, eros odio
                                tempor turpis, ac placerat metus tortor eget
                                magna. Donec mattis posuere pharetra. Donec
                                vestibulum ornare velit ut.
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="testimonial-card">
                            <div className="testimonial-shape">
                              <img src={TestimonialShape}  alt="Imgs" />
                            </div>
                            <div className="testimonial-top">
                              <div className="reviewer-image">
                                <img src={Reviewer}  alt="Imgs" />
                              </div>
                              <div className="reviewer-info">
                                <div className="quote-icon d-md-block d-none">
                                  <img src={QuoteIcon}  alt="Imgs" />
                                </div>
                                <h3 className="reviewer-name">
                                  Scarlett Eleanor
                                </h3>
                                <p>Marketing</p>
                              </div>
                            </div>
                            <div className="review-texts">
                              <p>
                                Cras semper, massa vel aliquam luctus, eros odio
                                tempor turpis, ac placerat metus tortor eget
                                magna. Donec mattis posuere pharetra. Donec
                                vestibulum ornare velit ut.
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="testimonial-card">
                            <div className="testimonial-shape">
                              <img src={TestimonialShape}  alt="Imgs" />
                            </div>
                            <div className="testimonial-top">
                              <div className="reviewer-image">
                                <img src={Reviewer}  alt="Imgs" />
                              </div>
                              <div className="reviewer-info">
                                <div className="quote-icon d-md-block d-none">
                                  <img src={QuoteIcon}  alt="Imgs" />
                                </div>
                                <h3 className="reviewer-name">
                                  Scarlett Eleanor
                                </h3>
                                <p>Marketing</p>
                              </div>
                            </div>
                            <div className="review-texts">
                              <p>
                                Cras semper, massa vel aliquam luctus, eros odio
                                tempor turpis, ac placerat metus tortor eget
                                magna. Donec mattis posuere pharetra. Donec
                                vestibulum ornare velit ut.
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="swiper-pagination" />
                    <div className="testi-arrows text-center d-lg-flex d-none">
                      <div
                        className="testi-button-prev"
                        tabIndex={0}
                        role="button"
                        aria-label="Previous slide">
                        <i className="bi bi-chevron-left" />
                      </div>
                      <div
                        className="testi-button-next"
                        tabIndex={0}
                        role="button"
                        aria-label="Next slide">
                        <i className="bi bi-chevron-right" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  testimonial area end  =============== */}
      </>
    );
  }
}

export default Testimonial;
