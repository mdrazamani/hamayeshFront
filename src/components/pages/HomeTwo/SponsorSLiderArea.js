import React, { Component } from "react";
// Swiper slider imported
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
// image import
import BGIconIMG from "../../../assets/images/background-texts/sponsor-watermark.png";
import SponsorIMG1 from "../../../assets/images/sponsor/sponsor-1.svg";
import SponsorIMG10 from "../../../assets/images/sponsor/sponsor-10.svg";
import SponsorIMG3 from "../../../assets/images/sponsor/sponsor-3.svg";
import SponsorIMG4 from "../../../assets/images/sponsor/sponsor-4.svg";
import SponsorIMG5 from "../../../assets/images/sponsor/sponsor-5.svg";
import SponsorIMG6 from "../../../assets/images/sponsor/sponsor-6.svg";
import SponsorIMG7 from "../../../assets/images/sponsor/sponsor-7.svg";
import SponsorIMG8 from "../../../assets/images/sponsor/sponsor-8.svg";
import SponsorIMG9 from "../../../assets/images/sponsor/sponsor-9.svg";
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
class SponsorSLiderArea extends Component {
  render() {
    const sliderInit = {
      slidesPerView: 3,
      loop: true,
      speed: 2400,
      effect: "slide",
      nav: true,
      autoplay: true,
    };
    const sponsorOne = {
      navigation: {
        nextEl: ".sponsor-one-next",
        prevEl: ".sponsor-one-prev",
      },
      breakpoints: {
        300: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    };
    const sponsorTwo = {
      navigation: {
        nextEl: ".sponsor-two-next",
        prevEl: ".sponsor-two-prev",
      },
      breakpoints: {
        300: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    };
    const spondorThree = {
      navigation: {
        nextEl: ".sponsor-three-next",
        prevEl: ".sponsor-three-prev",
      },
      breakpoints: {
        300: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    };
    return (
      <>
        {/* ===============  Sponsor area start =============== */}
        <div className="sponsor-style-two pt-110 position-relative">
          <div className="watermark-bg mt-110">
            <img src={BGIconIMG} alt="SponsorIMG" className="img-fluid" />
          </div>
          <div className="container">
            <div className="row">
              <div className="section-head-style-two">
                <h5>Sponsor</h5>
                <h3>
                  Official <span>Sponsor</span>
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="single-sponsor-slider-wrap ">
                  <div className="sponsor-slider-topbar">
                    <div className="sponsor-arrows d-xl-flex justify-content-between align-items-center d-none">
                      <div
                        className="sponsor-one-prev swiper-arrow-prev"
                        tabIndex={0}
                        role="button"
                        aria-label="Previous slide"
                      >
                        <i className="bi bi-chevron-left" />
                      </div>
                      <div className="sponsor-type">Gold</div>
                      <div
                        className="sponsor-one-next swiper-arrow-prev"
                        tabIndex={0}
                        role="button"
                        aria-label="Next slide"
                      >
                        <i className="bi bi-chevron-right" />
                      </div>
                    </div>
                  </div>
                  <div className="swiper sponsor-slider-one ">
                    <Swiper
                      {...sliderInit}
                      {...sponsorOne}
                      className="swiper-wrapper align-items-center"
                    >
                      <SwiperSlide className="spondor-item-grid swiper-slide">
                        <div className="sponsor-item">
                          <img src={SponsorIMG1}  alt="Imgs" />
                        </div>
                        <div className="sponsor-item">
                          <img src={SponsorIMG4}  alt="Imgs" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="spondor-item-grid swiper-slide">
                        <div className="sponsor-item">
                          <img src={SponsorIMG3}  alt="Imgs" />
                        </div>
                        <div className="sponsor-item">
                          <img src={SponsorIMG5}  alt="Imgs" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="spondor-item-grid swiper-slide">
                        <div className="sponsor-item">
                          <img src={SponsorIMG6}  alt="Imgs" />
                        </div>
                        <div className="sponsor-item">
                          <img src={SponsorIMG7}  alt="Imgs" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="spondor-item-grid swiper-slide">
                        <div className="sponsor-item">
                          <img src={SponsorIMG8}  alt="Imgs" />
                        </div>
                        <div className="sponsor-item">
                          <img src={SponsorIMG9}  alt="Imgs" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="spondor-item-grid swiper-slide">
                        <div className="sponsor-item">
                          <img src={SponsorIMG10}  alt="Imgs" />
                        </div>
                        <div className="sponsor-item">
                          <img src={SponsorIMG7}  alt="Imgs" />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="single-sponsor-slider-wrap">
                  <div className="sponsor-slider-topbar">
                    <div className="sponsor-arrows d-xl-flex justify-content-between align-items-center d-none">
                      <div
                        className="sponsor-two-prev swiper-arrow-prev"
                        tabIndex={0}
                        role="button"
                        aria-label="Previous slide"
                      >
                        <i className="bi bi-chevron-left" />
                      </div>
                      <div className="sponsor-type">Silver</div>
                      <div
                        className="sponsor-two-next swiper-arrow-prev"
                        tabIndex={0}
                        role="button"
                        aria-label="Next slide"
                      >
                        <i className="bi bi-chevron-right" />
                      </div>
                    </div>
                  </div>
                  <div className="swiper sponsor-slider-two">
                    <Swiper
                      {...sliderInit}
                      {...sponsorTwo}
                      className="swiper-wrapper align-items-center"
                    >
                      <SwiperSlide className="spondor-item-grid swiper-slide">
                        <div className="sponsor-item">
                          <img src={SponsorIMG1}  alt="Imgs" />
                        </div>
                        <div className="sponsor-item">
                          <img src={SponsorIMG4}  alt="Imgs" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="spondor-item-grid swiper-slide">
                        <div className="sponsor-item">
                          <img src={SponsorIMG3}  alt="Imgs" />
                        </div>
                        <div className="sponsor-item">
                          <img src={SponsorIMG5}  alt="Imgs" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="spondor-item-grid swiper-slide">
                        <div className="sponsor-item">
                          <img src={SponsorIMG6}  alt="Imgs" />
                        </div>
                        <div className="sponsor-item">
                          <img src={SponsorIMG7}  alt="Imgs" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="spondor-item-grid swiper-slide">
                        <div className="sponsor-item">
                          <img src={SponsorIMG8}  alt="Imgs" />
                        </div>
                        <div className="sponsor-item">
                          <img src={SponsorIMG9}  alt="Imgs" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="spondor-item-grid swiper-slide">
                        <div className="sponsor-item">
                          <img src={SponsorIMG10}  alt="Imgs" />
                        </div>
                        <div className="sponsor-item">
                          <img src={SponsorIMG7}  alt="Imgs" />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="single-sponsor-slider-wrap">
                  <div className="sponsor-slider-topbar">
                    <div className="sponsor-arrows d-xl-flex justify-content-between align-items-center d-none">
                      <div
                        className="sponsor-three-prev swiper-arrow-prev"
                        tabIndex={0}
                        role="button"
                        aria-label="Previous slide"
                      >
                        <i className="bi bi-chevron-left" />
                      </div>
                      <div className="sponsor-type">Diamond</div>
                      <div
                        className="sponsor-three-next swiper-arrow-prev"
                        tabIndex={0}
                        role="button"
                        aria-label="Next slide"
                      >
                        <i className="bi bi-chevron-right" />
                      </div>
                    </div>
                  </div>
                  <div className="swiper sponsor-slider-three">
                    <Swiper
                      {...sliderInit}
                      {...spondorThree}
                      className="swiper-wrapper align-items-center"
                    >
                      <SwiperSlide className="spondor-item-grid swiper-slide">
                        <div className="sponsor-item">
                          <img src={SponsorIMG1}  alt="Imgs" />
                        </div>
                        <div className="sponsor-item">
                          <img src={SponsorIMG4}  alt="Imgs" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="spondor-item-grid swiper-slide">
                        <div className="sponsor-item">
                          <img src={SponsorIMG3}  alt="Imgs" />
                        </div>
                        <div className="sponsor-item">
                          <img src={SponsorIMG5}  alt="Imgs" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="spondor-item-grid swiper-slide">
                        <div className="sponsor-item">
                          <img src={SponsorIMG6}  alt="Imgs" />
                        </div>
                        <div className="sponsor-item">
                          <img src={SponsorIMG7}  alt="Imgs" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="spondor-item-grid swiper-slide">
                        <div className="sponsor-item">
                          <img src={SponsorIMG8}  alt="Imgs" />
                        </div>
                        <div className="sponsor-item">
                          <img src={SponsorIMG9}  alt="Imgs" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="spondor-item-grid swiper-slide">
                        <div className="sponsor-item">
                          <img src={SponsorIMG10}  alt="Imgs" />
                        </div>
                        <div className="sponsor-item">
                          <img src={SponsorIMG7}  alt="Imgs" />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  Sponsor area end =============== */}
      </>
    );
  }
}

export default SponsorSLiderArea;
