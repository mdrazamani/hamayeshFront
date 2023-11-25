import React, { Component } from "react";
import { withTranslation } from "react-i18next";
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
import BlogIMG1 from "../../../assets/images/blog/b-md1.png";
import BlogIMG2 from "../../../assets/images/blog/b-md2.png";
import BlogIMG3 from "../../../assets/images/blog/b-md3.png";

import DataContext from "../../../context/DataContext";
import FetchDataService from "../../../utils/fetchDataFunc";
import Error from "../../common/Error";
// import Loading from "../../common/Loading";
import { showDate } from "../../../utils/dateManager";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
class BlogArea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            language:
                localStorage.getItem("language") ||
                process.env.REACT_APP_DEFAULT_LANGUAGE,
            number: 0,
        };
    }

    static contextType = DataContext; // Using the contextType to access the DataContext

    fetchDataFunction = () => {
        // Options should be set according to the parameters your API needs
        const options = {
            page: 1,
            totalPages: 12, // this should probably be 'pageSize
            dataName: "newsData",
            api: {
                apiTitle: "news",
                id: null, // If these values are unnecessary, you could remove them
                subTitle: null, // same as above
                options: null, // same as above
            },
        };

        // Here, we're passing the context's fetchData method to our service
        FetchDataService(this.context.fetchData, options);
    };

    componentDidMount() {
        window.addEventListener("languageChanged", this.handleLanguageChange);
        this.fetchDataFunction();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.language !== this.state.language) {
            this.fetchDataFunction();
        }
    }

    componentWillUnmount() {
        window.removeEventListener(
            "languageChanged",
            this.handleLanguageChange
        );
    }

    handleLanguageChange = (event) => {
        if (event.detail !== this.state.language) {
            this.setState({ language: event.detail });
        }
    };

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    render() {
        const { language } = this.state;
        // this.state.number += 1;
        const { t } = this.props;

        const { data, loading, error } = this.context;

        if (!data["newsData"]) return null;

        // if (loading["newsData"]) {
        //     return <Loading />;
        // }

        if (error["newsData"]) {
            return <Error message={error["newsData"].message} />;
        }

        const news = data["newsData"] || [];

        const sliderInit = {
            spaceBetween: 20,
            slidesPerView: 3,
            loop: true,
            speed: 2400,
            effect: "slide",
            nav: true,
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
                {/* ===============  Blog area start =============== */}
                <div
                    className="blog-style-two pt-110 position-relative overflow-hidden"
                    key={language + this.state.number}
                >
                    <div className="container">
                        <div className="row">
                            <div className="section-head-style-two">
                                <h3>{t("news")}</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 position-relative">
                                <div className="blog-slider swiper">
                                    <Swiper
                                        {...sliderInit}
                                        className="swiper-wrapper"
                                    >
                                        {news?.data?.data
                                            ?.filter((_, i) => i < 4)
                                            .map((newsData, i) => (
                                                <SwiperSlide className="swiper-slide">
                                                    <div className="blog-card-md">
                                                        <div className="blog-thumb">
                                                            <Link
                                                                onClick={
                                                                    this
                                                                        .scrollTop
                                                                }
                                                                to={`${process.env.PUBLIC_URL}/blog-details/${newsData?.slug}`}
                                                            >
                                                                <img
                                                                    style={{
                                                                        width: "100%",
                                                                        height: "200px",
                                                                        objectFit:
                                                                            "cover",
                                                                    }}
                                                                    src={
                                                                        process
                                                                            .env
                                                                            .REACT_APP_SERVER_IP +
                                                                        newsData?.image
                                                                    }
                                                                    alt={
                                                                        newsData?.title
                                                                    }
                                                                />
                                                            </Link>
                                                        </div>
                                                        <div className="blog-content">
                                                            <h4 className="blog-title">
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={`${process.env.PUBLIC_URL}/blog-details/${newsData?.slug}`}
                                                                >
                                                                    {
                                                                        newsData?.title
                                                                    }
                                                                </Link>
                                                            </h4>
                                                            <div className="blog-bottom">
                                                                <div className="blog-date">
                                                                    <p>
                                                                        <i className="bi bi-calendar2-week" />
                                                                        <span>
                                                                            {showDate(
                                                                                newsData?.publishDate
                                                                            )}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div className="readme-btn">
                                                                    <Link
                                                                        onClick={
                                                                            this
                                                                                .scrollTop
                                                                        }
                                                                        to={`${process.env.PUBLIC_URL}/blog-details/${newsData?.slug}`}
                                                                    >
                                                                        {t(
                                                                            "Read_More"
                                                                        )}
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                    </Swiper>
                                </div>
                                <div className="blog-arrows d-xl-block d-none">
                                    <div
                                        className="blog-prev swiper-arrow-prev"
                                        tabIndex={0}
                                        role="button"
                                        aria-label="Previous slide"
                                    >
                                        <i className="bi bi-chevron-left" />
                                    </div>
                                    <div
                                        className="blog-next swiper-arrow-prev"
                                        tabIndex={0}
                                        role="button"
                                        aria-label="Next slide"
                                    >
                                        <i className="bi bi-chevron-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  Blog area end =============== */}
            </>
        );
    }
}

export default withTranslation()(BlogArea);
