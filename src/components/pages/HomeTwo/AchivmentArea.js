import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import CountUp from "react-countup";

import DataContext from "../../../context/DataContext";
import FetchDataService from "../../../utils/fetchDataFunc";
import Error from "../../common/Error";
import Loading from "../../common/Loading";
import { showDate } from "../../../utils/dateManager";

class AchivmentArea extends Component {
    static contextType = DataContext; // Using the contextType to access the DataContext

    fetchDataFunction = () => {
        // Options should be set according to the parameters your API needs
        const options = {
            page: 1,
            totalPages: 1, // this should probably be 'pageSize
            dataName: "axisData",
            api: {
                apiTitle: "axies",
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

    newsdataMaker() {
        const newsData = this.context.data["newsData"];

        if (newsData) {
            return newsData.data.payload.pagination.total;
        }
    }

    speakerdataMaker() {
        const speakersData = this.context.data["speakersData"];

        if (speakersData) {
            return speakersData.data.payload.pagination.total;
        }
    }

    render() {
        const { t } = this.props;
        const newsCount = this.newsdataMaker();
        const speakerCount = this.speakerdataMaker();

        const { data, loading, error } = this.context;
        if (!data["axisData"]) return null;
        const axisCount =
            data["axisData"]?.data?.payload?.pagination?.total || [];

        return (
            <>
                {/* ===============  achievement area start =============== */}
                <div
                    className="achievement-style-two mt-120"
                    style={{
                        background:
                            "linear-gradient(270deg, rgba(206, 20, 70, 0.8) 0%, rgba(45, 55, 60, 0.8) 100%)",
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="achievement-box-two">
                                    <h2>
                                        <CountUp
                                            start={0}
                                            end={speakerCount}
                                            className="number"
                                            duration={1.75}
                                        ></CountUp>
                                        +
                                    </h2>
                                    <h5>{t("speaker")}</h5>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="achievement-box-two">
                                    <h2>
                                        <CountUp
                                            start={0}
                                            end={newsCount}
                                            className="number"
                                            duration={2.0}
                                        ></CountUp>
                                        +
                                    </h2>
                                    <h5>{t("news")}</h5>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="achievement-box-two">
                                    <h2>
                                        <CountUp
                                            start={0}
                                            end={axisCount}
                                            className="number"
                                            duration={1.75}
                                        ></CountUp>
                                        +
                                    </h2>
                                    <h5>{t("conference_axes")}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  achievement area end =============== */}
            </>
        );
    }
}

export default withTranslation()(AchivmentArea);
