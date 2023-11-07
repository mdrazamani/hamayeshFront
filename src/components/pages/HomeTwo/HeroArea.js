import $ from "jquery";
import React, { Component } from "react";
import { withTranslation } from "react-i18next";
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

import { showDate } from "../../../utils/dateManager";

import DataContext from "../../../context/DataContext";
import TimerSlider from "../../common/timerSlider";
import FetchDataService from "../../../utils/fetchDataFunc";
import Error from "../../common/Error";
import Loading from "../../common/Loading";
import "../../../assets/css/mainStyle.css";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

class HeroArea extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static contextType = DataContext; // Using the contextType to access the DataContext

    fetchDataFunction = () => {
        // Options should be set according to the parameters your API needs
        const options = {
            page: 1,
            totalPages: 12, // this should probably be 'pageSize
            dataName: "sliderData",
            api: {
                apiTitle: "sliders",
                id: null, // If these values are unnecessary, you could remove them
                subTitle: null, // same as above
                options: null, // same as above
            },
        };

        // Here, we're passing the context's fetchData method to our service
        FetchDataService(this.context.fetchData, options);
    };

    componentDidMount() {
        this.fetchDataFunction();
    }

    render() {
        const { t } = this.props;

        const { data, loading, error } = this.context;

        if (!data["sliderData"]) return null;

        if (loading["sliderData"]) {
            return <Loading />;
        }

        if (error["sliderData"]) {
            return <Error message={error["sliderData"].message} />;
        }

        const sliders = data["sliderData"] || [];

        if (!data["hamayeshDetail"]) return null;
        const hamayeshDetail = data["hamayeshDetail"] || [];

        const sliderInit = {
            slidesPerView: 1,
            loop: true,
            speed: 2400,
            navigation: false,
            effect: "slide",
            nav: "true",
            autoplay: true,
        };

        return (
            <>
                {/* ===============  Hero style two start =============== */}
                <div className="hero-style-two position-relative">
                    <div className="swiper hero-two-slider">
                        <Swiper {...sliderInit} className="swiper-wrapper">
                            {sliders?.data?.data?.map((slider, index) => (
                                <SwiperSlide
                                    className="hero-two-item hero-two-item-1 swiper-slide sliderImages"
                                    key={index}
                                    style={{
                                        backgroundImage: `url(${
                                            process.env.REACT_APP_SERVER_IP +
                                            slider?.image.replace(/\\/g, "/")
                                        })`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        height: "700px",
                                        width: "100%",
                                    }}
                                >
                                    {/* <div
                                        className="hero-background-layer"
                                        style={{ backgroundColor: "#333" }}
                                    ></div> */}
                                    <div className="container">
                                        <div className="hero-content-layer">
                                            <h5>
                                                {showDate(
                                                    hamayeshDetail?.data?.dates
                                                        ?.start,
                                                    true
                                                )}
                                            </h5>
                                            {slider?.title ? (
                                                <h2>{slider?.title}</h2>
                                            ) : (
                                                ""
                                            )}
                                            {slider?.description ? (
                                                <p style={{ color: "white" }}>
                                                    {slider?.description}
                                                </p>
                                            ) : (
                                                ""
                                            )}

                                            <TimerSlider
                                                dates={{
                                                    start: hamayeshDetail?.data
                                                        ?.dates?.start,
                                                }}
                                            />

                                            {slider?.link ? (
                                                <div className="hero-btns">
                                                    <a
                                                        href={slider?.link}
                                                        className="primary-btn-fill-s2"
                                                    >
                                                        {t("view")}
                                                    </a>
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="hero-pagination d-lg-flex flex-column d-none position-absolute w-auto" />
                </div>
                {/* ===============  Hero style two end =============== */}
            </>
        );
    }
}

export default withTranslation()(HeroArea);
