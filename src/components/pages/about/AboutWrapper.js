import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
// page animation
import WOW from "wowjs";
import "../../../assets/css/animate.css";
import AboutVideo from "../../../assets/images/about/a-mini-video.png";
// mini gallary
import MiniGallary1 from "../../../assets/images/about/a-mini1.png";
import MiniGallary2 from "../../../assets/images/about/a-mini2.png";
// icon image
import Icon2 from "../../../assets/images/icons/event-sm.png";
import QuoteIcon from "../../../assets/images/icons/qoute-icon.png";
import Icon3 from "../../../assets/images/icons/sed-sm.png";
import Icon1 from "../../../assets/images/icons/speaker-sm.png";
// feature icon image import
import FeatureIcon3 from "../../../assets/images/icons/gaust-md.png";
import FeatureIcon2 from "../../../assets/images/icons/sound-md.png";
import FeatureIcon1 from "../../../assets/images/icons/speaker-md.png";
import VideoShapeIcon from "../../../assets/images/shapes/play-btn.png";
import DataContext from "../../../context/DataContext";
import PosterModal from "../others/posterModal";
import { decodeHtmlEntities } from "../../../utils/decodeHtmlEntities";

class AboutWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    static contextType = DataContext; // Using the contextType to access the DataContext
    componentDidMount() {
        // animation script
        new WOW.WOW().init();
    }

    newsdataMaker() {
        const newsData = this.context.data["newsAboutData"];

        if (newsData) {
            return newsData.data.payload.pagination.total;
        }
    }

    speakerdataMaker() {
        const speakersData = this.context.data["speakersAboutData"];

        if (speakersData) {
            return speakersData.data.payload.pagination.total;
        }
    }

    axisDataMaker() {
        const axisData = this.context.data["axisAboutData"];

        if (axisData) {
            return axisData.data.payload.pagination.total;
        }
    }

    render() {
        const { t } = this.props;

        const newsCount = this.newsdataMaker();
        const speakerCount = this.speakerdataMaker();
        const axisCount = this.axisDataMaker();

        const hamayeshDetail = this.context.data["hamayeshDetail"];

        // modal video change state
        const { isOpen } = this.state;
        return (
            <>
                {/* =============== About wrapper start =============== */}
                <div className="about-wrapper mt-96">
                    <div className="container">
                        <div className="about-company">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="company-info">
                                        <h5>{t("Conference_about")}</h5>
                                        <h2 style={{ padding: "10px" }}>
                                            {hamayeshDetail?.data?.faTitle}
                                        </h2>
                                        <h2
                                            style={{
                                                borderTop: "2px solid #ce1446",
                                            }}
                                        >
                                            {hamayeshDetail?.data?.enTitle}
                                        </h2>
                                        <p>
                                            {hamayeshDetail?.data?.description}
                                        </p>
                                        <div className="row">
                                            <div className="col-sm-4 col-6">
                                                <div className="about-infobox">
                                                    <div className="info-icon">
                                                        <img
                                                            src={Icon1}
                                                            alt="Imgs"
                                                        />
                                                    </div>
                                                    <div className="info-content">
                                                        <h3>
                                                            <CountUp
                                                                start={0}
                                                                end={
                                                                    speakerCount
                                                                }
                                                                duration={4.75}
                                                            ></CountUp>
                                                            +
                                                        </h3>
                                                        <h6>{t("Speakers")}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4 col-6">
                                                <div className="about-infobox">
                                                    <div className="info-icon">
                                                        <img
                                                            src={Icon2}
                                                            alt="Imgs"
                                                        />
                                                    </div>
                                                    <div className="info-content">
                                                        <h3>
                                                            <CountUp
                                                                start={0}
                                                                end={newsCount}
                                                                duration={3.75}
                                                            ></CountUp>
                                                            +
                                                        </h3>
                                                        <h6>{t("news")}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4 col-6">
                                                <div className="about-infobox">
                                                    <div className="info-icon">
                                                        <img
                                                            src={Icon3}
                                                            alt="Imgs"
                                                        />
                                                    </div>
                                                    <div className="info-content">
                                                        <h3>
                                                            <CountUp
                                                                start={0}
                                                                end={axisCount}
                                                                duration={4.75}
                                                            ></CountUp>
                                                            +
                                                        </h3>
                                                        <h6>
                                                            {t(
                                                                "conference_axes"
                                                            )}
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="company-mini-gallary">
                                        {/* <div className="Gallary-item1 Gallary-item">
                                            <img
                                                src={MiniGallary1}
                                                alt="Imgs"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="Gallary-item2 Gallary-item">
                                            <img
                                                src={MiniGallary2}
                                                alt="Imgs"
                                                className="img-fluid"
                                            />
                                        </div> */}
                                        <div className="Gallary-item3 Gallary-item">
                                            {/* <img
                                                style={{
                                                    borderTopLeftRadius: "30px",
                                                }}
                                                src={
                                                    process.env
                                                        .REACT_APP_SERVER_IP +
                                                    hamayeshDetail?.data?.poster
                                                }
                                                alt={
                                                    hamayeshDetail?.data
                                                        ?.faTitle
                                                }
                                                className="img-fluid"
                                            /> */}

                                            <div
                                                style={{
                                                    textAlign: "center",
                                                    marginTop: "-150px",
                                                }}
                                            >
                                                <PosterModal
                                                    hamayeshDetail={
                                                        hamayeshDetail
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="company-feature mt-96">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="company-feature-box">
                                                <div className="feature-icon">
                                                    <img
                                                        src={FeatureIcon1}
                                                        alt="Imgs"
                                                    />
                                                </div>
                                                <h5>
                                                    {t(
                                                        "We_All_Time_Provide_Intelligent_Speaker"
                                                    )}
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="company-feature-box">
                                                <div className="feature-icon">
                                                    <img
                                                        src={FeatureIcon2}
                                                        alt="Imgs"
                                                    />
                                                </div>
                                                <h5>
                                                    {t(
                                                        "A_Good_Answer_Will_Best_Knowledge"
                                                    )}
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="company-feature-box">
                                                <div className="feature-icon">
                                                    <img
                                                        src={FeatureIcon3}
                                                        alt="Imgs"
                                                    />
                                                </div>
                                                <h5>
                                                    {t(
                                                        "We_Are_Always_Dedicated_Our_Guest"
                                                    )}
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="company-feature-box">
                                                <div className="feature-icon">
                                                    <img
                                                        src={FeatureIcon1}
                                                        alt="Imgs"
                                                    />
                                                </div>
                                                <h5>
                                                    {t(
                                                        "We_Are_Provide_Friendly_Environment"
                                                    )}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-history position-relative mt-120">
                            <h3 className="float-title position-absolute">
                                {t("EventLab_Story")}
                            </h3>
                            <div className="qoute-icon position-absolute">
                                <img src={QuoteIcon} alt="Imgs" />
                            </div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: decodeHtmlEntities(
                                        hamayeshDetail?.data?.aboutHtml
                                    ),
                                }}
                            />
                        </div>
                    </div>
                </div>
                {/* =============== About wrapper end =============== */}
                <React.Fragment>
                    <ModalVideo
                        channel="youtube"
                        autoplay
                        isOpen={isOpen}
                        videoId="-tJYN-eG1zk"
                        onClose={() => this.setState({ isOpen: false })}
                    />
                </React.Fragment>
            </>
        );
    }
}

export default withTranslation()(AboutWrapper);
