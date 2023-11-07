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
// image import
import BGIconIMG from "../../../assets/images/background-texts/testimonial-watermark.png";
import testimonialIMGRoundSghape from "../../../assets/images/shapes/testi-round.png";
import TestimonialReview1 from "../../../assets/images/speaker/testi-reviewer2.png";
import TestimonialReview2 from "../../../assets/images/speaker/testi-reviewer3.png";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
class Testimonial extends Component {
  render() {
    const TestimonailSlider = {
      spaceBetween: 30,
      slidesPerView: 3,
      loop: true,
      speed: 2400,
      effect: "slide",
      navigation: {
        nextEl: ".testi-next",
        prevEl: ".testi-prev",
      },
      pagination: {
        el: ".testi-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function (swiper, current, total) {
          function numberAppend(d) {
            return d < 10 ? "0" + d.toString() : d.toString();
          }
          return numberAppend(current);
        },
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
      },
    };
    return (
      <>
        {/* ===============  testimonial area start =============== */}
        <div className="testimonial-style-two mt-120 position-relative">
          <div className="watermark-bg">
            <img src={BGIconIMG}  alt="Imgs" className="img-fluid" />
          </div>
          <div className="testimonoal-shape-layer" />
          <div className="moving-shape">
            <img src={testimonialIMGRoundSghape}  alt="Imgs" />
          </div>
          <div className="container">
            <div className="row">
              <div className="section-head-style-two">
                <h5>Testimonial</h5>
                <h3>
                  What People <span>Say</span>
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="testimonial-slider-two swiper">
                  <Swiper {...TestimonailSlider} className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-card-style-two">
                        <div className="reviewer-image">
                          <img src={TestimonialReview1} alt=" " />
                        </div>
                        <div className="testimonial-content">
                          <h4 className="reviewer-name">Madison Layla</h4>
                          <h6 className="reviewer-designation">Marketing</h6>
                          <div className="review-text">
                            <p>
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra Donec
                              vestibulum.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-card-style-two">
                        <div className="reviewer-image">
                          <img src={TestimonialReview2}  alt="Imgs" />
                        </div>
                        <div className="testimonial-content">
                          <h4 className="reviewer-name">Roman Connor</h4>
                          <h6 className="reviewer-designation">Marketing</h6>
                          <div className="review-text">
                            <p>
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna. Donec mattis posuere pharetra Donec
                              vestibulum.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testimonial-style-two-bottom position-relative d-xl-block d-none">
                  <div className="testi-arrows d-xl-flex justify-content-between align-items-center d-none">
                    <div
                      className="testi-prev swiper-arrow-prev"
                      tabIndex={0}
                      role="button"
                      aria-label="Previous slide">
                      <i className="bi bi-chevron-left" />
                    </div>
                    <div className="testi-pagination d-block w-auto" />
                    <div
                      className="testi-next swiper-arrow-prev"
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
        {/* ===============  testimonial area end =============== */}
      </>
    );
  }
}

export default Testimonial;
