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
// page animation
import WOW from "wowjs";
import "../../../assets/css/animate.css";
// image import
import speaker1 from "../../../assets/images/speaker/speaker-sm1.png";
import speaker2 from "../../../assets/images/speaker/speaker-sm2.png";
import speaker3 from "../../../assets/images/speaker/speaker-sm3.png";
import speaker4 from "../../../assets/images/speaker/speaker-sm4.png";

import { showDate } from "../../../utils/dateManager";
import BGIconIMG from "../../../assets/images/background-texts/schedule-watermark.png";
import DataContext from "../../../context/DataContext";
import RecentEventSchedule from "../HomeTwo/RecentEventSchedule";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
class Schedule extends Component {
    static contextType = DataContext; // Using the contextType to access the DataContext

    render() {
        const { t } = this.props;
        const { data, loading, error } = this.context;
        const hamayeshDetail = data["hamayeshDetail"] || [];

        return (
            <>
                {/* ===============  breadcrumb area start =============== */}
                <div
                    className="breadcrumb-area"
                    style={{
                        backgroundImage: `linear-gradient(rgba(45, 55, 60, 0.7) 100%, rgba(45, 55, 60, 0.7) 100%), url('${
                            process.env.REACT_APP_SERVER_IP +
                            hamayeshDetail?.data?.headerImage
                        }')`,
                    }}
                >
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="breadcrumb-content">
                                    <div className="page-outlined-text">
                                        <h1>{t("Schedule")}</h1>
                                    </div>
                                    <h2 className="page-title">
                                        {t("Schedule")}
                                    </h2>
                                    <ul className="page-switcher">
                                        <li>
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/`}
                                            >
                                                Home{" "}
                                                <i className="bi bi-caret-left" />
                                            </Link>
                                        </li>
                                        <li>{t("Schedule")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <RecentEventSchedule />
            </>
        );
    }
}

export default withTranslation()(Schedule);
