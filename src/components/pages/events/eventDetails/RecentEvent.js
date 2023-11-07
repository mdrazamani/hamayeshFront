import React, { Component } from "react";
import { Link } from "react-router-dom";
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
import EventThum1 from "../../../../assets/images/event/ev-md1.png";
import EventThum2 from "../../../../assets/images/event/ev-md2.png";
import EventThum3 from "../../../../assets/images/event/ev-md3.png";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
class RecentEvent extends Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    const recentEventSlider = {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      autoplay: {
        delay: 12000,
      },
      navigation: {
        nextEl: ".blog-next",
        prevEl: ".blog-prev",
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    };
    return (
      <>
        {/* ===============  recent event start =============== */}

        <div className="recent-event-wrap mt-110">
          <div className="container">
            <h3>Related Event</h3>
            <div className="recent-event-slider swiper">
              <Swiper {...recentEventSlider} className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="event-card-md">
                    <div className="event-thumb">
                      <img src={EventThum1} alt="Imgs" />
                      <div className="event-lavel">
                        <i className="bi bi-diagram-3" /> <span>500 Seat</span>
                      </div>
                    </div>
                    <div className="event-content">
                      <div className="event-info">
                        <div className="event-date">
                          <Link onClick={this.scrollTop} to={"#"}>
                            {" "}
                            <i className="bi bi-calendar2-week" /> January 21,
                            2021
                          </Link>
                        </div>
                        <div className="event-location">
                          <Link onClick={this.scrollTop} to={"#"}>
                            {" "}
                            <i className="bi bi-geo-alt" /> Broadw, New York
                          </Link>
                        </div>
                      </div>
                      <h5 className="event-title">
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/event-details`}
                        >
                          Media companies need to better one then educate
                          advertisers.
                        </Link>
                      </h5>
                      <div className="event-bottom">
                        <div className="event-readme">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/event-details`}
                          >
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
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="event-card-md">
                    <div className="event-thumb">
                      <img src={EventThum2} alt="Imgs" />
                      <div className="event-lavel">
                        <i className="bi bi-diagram-3" /> <span>500 Seat</span>
                      </div>
                    </div>
                    <div className="event-content">
                      <div className="event-info">
                        <div className="event-date">
                          <Link onClick={this.scrollTop} to={"#"}>
                            {" "}
                            <i className="bi bi-calendar2-week" /> January 21,
                            2021
                          </Link>
                        </div>
                        <div className="event-location">
                          <Link onClick={this.scrollTop} to={"#"}>
                            {" "}
                            <i className="bi bi-geo-alt" /> Broadw, New York
                          </Link>
                        </div>
                      </div>
                      <h5 className="event-title">
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/event-details`}
                        >
                          companies share strategies to Then capture audiences
                          on mobile.
                        </Link>
                      </h5>
                      <div className="event-bottom">
                        <div className="event-readme">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/event-details`}
                          >
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
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="event-card-md">
                    <div className="event-thumb">
                      <img src={EventThum3} alt="Imgs" />
                      <div className="event-lavel">
                        <i className="bi bi-diagram-3" /> <span>500 Seat</span>
                      </div>
                    </div>
                    <div className="event-content">
                      <div className="event-info">
                        <div className="event-date">
                          <Link onClick={this.scrollTop} to={"#"}>
                            {" "}
                            <i className="bi bi-calendar2-week" /> January 21,
                            2021
                          </Link>
                        </div>
                        <div className="event-location">
                          <Link onClick={this.scrollTop} to={"#"}>
                            {" "}
                            <i className="bi bi-geo-alt" /> Broadw, New York
                          </Link>
                        </div>
                      </div>
                      <h5 className="event-title">
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/event-details`}
                        >
                          Proactive transformation requires embrace of
                          technology.
                        </Link>
                      </h5>
                      <div className="event-bottom">
                        <div className="event-readme">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/event-details`}
                          >
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
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="event-card-md">
                    <div className="event-thumb">
                      <img src={EventThum2} alt="Imgs" />
                      <div className="event-lavel">
                        <i className="bi bi-diagram-3" /> <span>500 Seat</span>
                      </div>
                    </div>
                    <div className="event-content">
                      <div className="event-info">
                        <div className="event-date">
                          <Link onClick={this.scrollTop} to={"#"}>
                            {" "}
                            <i className="bi bi-calendar2-week" /> January 21,
                            2021
                          </Link>
                        </div>
                        <div className="event-location">
                          <Link onClick={this.scrollTop} to={"#"}>
                            {" "}
                            <i className="bi bi-geo-alt" /> Broadw, New York
                          </Link>
                        </div>
                      </div>
                      <h5 className="event-title">
                        <Link
                          onClick={this.scrollTop}
                          to={`${process.env.PUBLIC_URL}/event-details`}
                        >
                          companies share strategies to Then capture audiences
                          on mobile.
                        </Link>
                      </h5>
                      <div className="event-bottom">
                        <div className="event-readme">
                          <Link
                            onClick={this.scrollTop}
                            to={`${process.env.PUBLIC_URL}/event-details`}
                          >
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
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        {/* ===============  recent event end =============== */}
      </>
    );
  }
}

export default RecentEvent;
