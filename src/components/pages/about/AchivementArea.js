import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import CountUp from "react-countup";
// images import
import icon2IMG from "../../../assets/images/icons/calander.png";
import icon4IMG from "../../../assets/images/icons/people.png";
import icon3IMG from "../../../assets/images/icons/schedule.png";
import icon1IMG from "../../../assets/images/icons/speaker.png";

import DataContext from "../../../context/DataContext";
import FetchDataService from "../../../utils/fetchDataFunc";
import Error from "../../common/Error";
// import Loading from "../../common/Loading";

class AchivementArea extends Component {
    static contextType = DataContext; // Using the contextType to access the DataContext

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

        return (
            <>
                {/* ===============  achievement area start  =============== */}
                <div className="achievement-area pt-120">
                    <div
                        className="achievement-overlay"
                        style={{
                            background:
                                "linear-gradient(270deg, rgba(206, 20, 70, 0.8) 0%, rgba(45, 55, 60, 0.8) 100%)",
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 com-sm-6">
                                    <div className="single-achievement">
                                        <div className="achievement-icon">
                                            <img
                                                src={icon1IMG}
                                                alt="about icon "
                                            />
                                        </div>
                                        <h2>
                                            <CountUp
                                                start={0}
                                                end={speakerCount}
                                                duration={5.75}
                                                className="number"
                                            ></CountUp>
                                            +
                                        </h2>
                                        <h5>{t("Speakers")}</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 com-sm-6">
                                    <div className="single-achievement">
                                        <div className="achievement-icon">
                                            <img
                                                src={icon2IMG}
                                                alt="about icon "
                                            />
                                        </div>
                                        <h2>
                                            <CountUp
                                                start={0}
                                                end={newsCount}
                                                duration={6.75}
                                                className="number"
                                            ></CountUp>
                                            +
                                        </h2>
                                        <h5>{t("news")}</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 com-sm-6">
                                    <div className="single-achievement">
                                        <div className="achievement-icon">
                                            <img
                                                src={icon3IMG}
                                                alt="about icon "
                                            />
                                        </div>
                                        <h2>
                                            <CountUp
                                                start={0}
                                                end={axisCount}
                                                duration={4.75}
                                                className="number"
                                            ></CountUp>
                                            +
                                        </h2>
                                        <h5>{t("conference_axes")}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  achievement area end  =============== */}
            </>
        );
    }
}

export default withTranslation()(AchivementArea);
