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

import urlM from "../../../utils/urlManager.js";
import { makeRoute } from "../../../utils/apiRoutes";

import BreadcrumbComponent from "../../common/breadcrumb.js";
import HelmetComponent from "../../common/helmet.js";

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

class SpeakersDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openNodes: {},
            language:
                localStorage.getItem("language") ||
                process.env.REACT_APP_DEFAULT_LANGUAGE,
            number: 0,
        };
    }

    static contextType = DataContext; // Using the contextType to access the DataContext

    componentDidMount() {
        window.addEventListener("languageChanged", this.handleLanguageChange);
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

    componentDidUpdate(prevProps, prevState) {
        if (prevState.language !== this.state.language) {
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

        if (!data["speakerData"]) return null;

        // Check if the data is being fetched
        // if (loading["speakerData"]) {
        //     return <Loading />;
        // }

        // Check for errors
        if (error["speakerData"]) {
            return <Error message={error["speakerData"].message} />;
        }

        // Assuming data['speakerData'] is an array of speakers. Adjust depending on your actual data structure
        const speaker = data["speakerData"] || [];
        const hamayeshDetail = this.context.data["hamayeshDetail"];
        return (
            <>
                <HelmetComponent
                    title="Speaker_Details"
                    description="Speaker_Details_meta_desc"
                    imageUrl={
                        process.env.REACT_APP_SERVER_IP +
                        hamayeshDetail?.data?.headerImage
                    }
                />
                <BreadcrumbComponent
                    translate="Speaker_Details"
                    headerImageUrl={hamayeshDetail?.data?.headerImage}
                />

                <div className="speaker-details-wrapper " key={language}>
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
