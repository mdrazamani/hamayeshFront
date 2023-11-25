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

import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
// page animation

import "../../../assets/css/animate.css";
// image import

import DataContext from "../../../context/DataContext";
import RecentEventSchedule from "../HomeTwo/RecentEventSchedule";

import BreadcrumbComponent from "../../common/breadcrumb.js";
import HelmetComponent from "../../common/helmet.js";

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
                <HelmetComponent
                    title="Schedule"
                    description="Schedule_meta_desc"
                    imageUrl={
                        process.env.REACT_APP_SERVER_IP +
                        hamayeshDetail?.data?.headerImage
                    }
                />
                <BreadcrumbComponent
                    translate="Schedule"
                    headerImageUrl={hamayeshDetail?.data?.headerImage}
                />

                <RecentEventSchedule />
            </>
        );
    }
}

export default withTranslation()(Schedule);
