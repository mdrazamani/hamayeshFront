import React, { Component } from "react";
import { Link } from "react-router-dom";
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
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";

import DataContext from "../../../context/DataContext";
import Error from "../../common/Error";
import Loading from "../../common/Loading";
import urlM from "../../../utils/urlManager.js";
import { makeRoute } from "../../../utils/apiRoutes";

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

class SpeakersDetails extends Component {
    static contextType = DataContext; // Using the contextType to access the DataContext

    componentDidMount() {
        const queryParams = {
            fields: "description,title,user,-_id", // example: retrieving only specific fields
        };
        // Assuming 'speaker' is the endpoint and the key you want to use for the fetched data
        this.context.fetchData(
            makeRoute("speakers", urlM(window.location.pathname).slug),
            "speakerData",
            queryParams
        );
    }

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    render() {
        const { t } = this.props;
        const { data, loading, error } = this.context;

        if (!data["speakerData"]) return null;

        // Check if the data is being fetched
        if (loading["speakerData"]) {
            return <Loading />;
        }

        // Check for errors
        if (error["speakerData"]) {
            return <Error message={error["speakerData"].message} />;
        }

        // Assuming data['speakerData'] is an array of speakers. Adjust depending on your actual data structure
        const speaker = data["speakerData"] || [];

        return (
            <>
                {/* ===============  breadcrumb area start =============== */}
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="breadcrumb-content">
                                    <div className="page-outlined-text">
                                        <h1> {t("Speaker_Details")} </h1>
                                    </div>
                                    <h2 className="page-title">
                                        {t("Speaker_Details")}
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
                                        <li>{t("Speaker_Details")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  breadcrumb area end =============== */}
                {/* ===============  Speaker details wrapper start =============== */}
                <div className="speaker-details-wrapper ">
                    <div className="container pt-120 position-relative">
                        <div className="background-title text-style-one">
                            <h2>
                                {speaker?.data?.user?.firstName}{" "}
                                {speaker?.data?.user?.lastName}
                            </h2>
                        </div>
                        <div className="speaker-details-intro">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-5">
                                    <div className="speker-thumb">
                                        <img
                                            style={{ borderRadius: "10px" }}
                                            src={
                                                process.env
                                                    .REACT_APP_SERVER_IP +
                                                speaker?.data?.user
                                                    ?.profileImage
                                            }
                                            alt={
                                                speaker?.data?.user?.firstName +
                                                " " +
                                                speaker?.data?.user?.lastName
                                            }
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-7 ">
                                    <div className="single-speaker-info">
                                        <h3 className="speaker-name">
                                            {speaker?.data?.user?.firstName}{" "}
                                            {speaker?.data?.user?.lastName}
                                        </h3>
                                        <h6>{speaker?.data?.title}</h6>
                                        <p>{speaker?.data?.description}</p>
                                        <ul className="single-speaker-social">
                                            {speaker?.data?.user?.socials
                                                ?.facebook && (
                                                <li>
                                                    <Link
                                                        onClick={this.scrollTop}
                                                        to={
                                                            speaker.data.user
                                                                .socials
                                                                .facebook
                                                        }
                                                    >
                                                        <i className="fab fa-facebook-f" />
                                                    </Link>
                                                </li>
                                            )}
                                            {speaker?.data?.user?.socials
                                                ?.instagram && (
                                                <li>
                                                    <Link
                                                        onClick={this.scrollTop}
                                                        to={
                                                            speaker.data.user
                                                                .socials
                                                                .instagram
                                                        }
                                                    >
                                                        <i className="fab fa-instagram" />
                                                    </Link>
                                                </li>
                                            )}
                                            {speaker?.data?.user?.socials
                                                ?.linkedIn && (
                                                <li>
                                                    <Link
                                                        onClick={this.scrollTop}
                                                        to={
                                                            speaker.data.user
                                                                .socials
                                                                .linkedIn
                                                        }
                                                    >
                                                        <i className="fab fa-linkedin-in" />
                                                    </Link>
                                                </li>
                                            )}
                                            {speaker?.data?.user?.socials
                                                ?.twitter && (
                                                <li>
                                                    <Link
                                                        onClick={this.scrollTop}
                                                        to={
                                                            speaker.data.user
                                                                .socials.twitter
                                                        }
                                                    >
                                                        <i className="fab fa-twitter" />
                                                    </Link>
                                                </li>
                                            )}
                                            {speaker?.data?.user?.socials
                                                ?.whatsapp && (
                                                <li>
                                                    <Link
                                                        onClick={this.scrollTop}
                                                        to={
                                                            speaker.data.user
                                                                .socials
                                                                .whatsapp
                                                        }
                                                    >
                                                        <i className="fab fa-whatsapp" />
                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  Speaker details wrapper start =============== */}
            </>
        );
    }
}

export default withTranslation()(SpeakersDetails);
