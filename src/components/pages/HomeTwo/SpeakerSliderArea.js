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
import BGtextIMG from "../../../assets/images/background-texts/speakar-watermark.png";
import SpeakerIMG1 from "../../../assets/images/speaker/speaker-s1.png";
import SpeakerIMG2 from "../../../assets/images/speaker/speaker-s2.png";
import SpeakerIMG3 from "../../../assets/images/speaker/speaker-s3.png";

import DataContext from "../../../context/DataContext";
import FetchDataService from "../../../utils/fetchDataFunc";
import Error from "../../common/Error";
// import Loading from "../../common/Loading";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
class SpeakerSliderArea extends Component {
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
            dataName: "speakersData",
            api: {
                apiTitle: "speakers",
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

        if (!data["speakersData"]) return null;

        // if (loading["speakersData"]) {
        //     return <Loading />;
        // }

        if (error["speakersData"]) {
            return <Error message={error["speakersData"].message} />;
        }

        const speakers = data["speakersData"] || [];

        const sliderInit = {
            slidesPerView: 1,
            speed: 1000,
            spaceBetween: 24,
            loop: true,
            roundLengths: true,
            autoplay: {
                delay: 15000,
            },

            pagination: {
                el: ".speaker-two-pagination",
                // type: "custom",
                clickable: true,
            },
            breakpoints: {
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
                {/* ===============  Speaker area start =============== */}
                <div
                    className="speaker-area pt-110 position-relative"
                    key={language + this.state.number}
                >
                    <div className="watermark-bg mt-110">
                        <img src={BGtextIMG} alt="Imgs" className="img-fluid" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="section-head-style-two">
                                <h3>{t("speaker")}</h3>
                            </div>
                        </div>
                        <div className="swiper speaker-slider-two">
                            <Swiper
                                {...sliderInit}
                                className="speaker-slider-two"
                            >
                                {speakers?.data?.data
                                    ?.filter((_, i) => i < 4)
                                    .map((speker, i) => (
                                        <SwiperSlide className="swiper-slide">
                                            <div className="speaker-card-two">
                                                <div className="speaker-image">
                                                    <img
                                                        src={
                                                            process.env
                                                                .REACT_APP_SERVER_IP +
                                                            speker?.user
                                                                ?.profileImage
                                                        }
                                                        alt={
                                                            speker?.user
                                                                ?.firstName
                                                        }
                                                    />
                                                </div>
                                                <div className="speaker-info">
                                                    <h4 className="speaker-name">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={`${process.env.PUBLIC_URL}/speaker-details/${speker?.id}`}
                                                        >
                                                            {speker?.user
                                                                ?.firstName +
                                                                " " +
                                                                speker?.user
                                                                    ?.lastName}
                                                        </Link>
                                                    </h4>
                                                    <h6
                                                        className="speaker-designation"
                                                        style={{
                                                            fontFamily:
                                                                "mikhak",
                                                        }}
                                                    >
                                                        {speker?.title}
                                                    </h6>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                            </Swiper>
                            <div className="speaker-two-pagination d-lg-flex d-none" />
                        </div>
                    </div>
                </div>
                {/* ===============  Speaker area end =============== */}
            </>
        );
    }
}

export default withTranslation()(SpeakerSliderArea);
