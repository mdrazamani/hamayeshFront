import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// image import
import BGIconIMG from "../../../assets/images/background-texts/schedule-watermark.png";
import LunchIcon from "../../../assets/images/icons/dine.png";
import Speaker1 from "../../../assets/images/speaker/sp-1.png";
import Speaker2 from "../../../assets/images/speaker/sp-2.png";
import Speaker3 from "../../../assets/images/speaker/sp-3.png";
import Speaker4 from "../../../assets/images/speaker/sp-4.png";
import { showDate } from "../../../utils/dateManager";

import DataContext from "../../../context/DataContext";
import Error from "../../common/Error";
import Loading from "../../common/Loading";
import FetchDataService from "../../../utils/fetchDataFunc";

class RecentEventSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: {
                start: {
                    type: Date,
                    required: true,
                },
                end: {
                    type: Date,
                },
                startArticle: {
                    type: Date,
                },
                endArticle: {
                    type: Date,
                },
                refeeResult: {
                    type: Date,
                },
                editArticle: {
                    type: Date,
                },
                lastRegistration: {
                    type: Date,
                },
            },
            content: null,
            selectedTab: "start",
        };
    }

    static contextType = DataContext; // Using the contextType to access the DataContext

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    handleButtonClick = (key, value) => {
        const componentToRender = this.makeDateValue(key, value);
        this.setState({ content: componentToRender });
        this.setState({ selectedTab: key });
    };

    makeDateValue(key, value) {
        const { t } = this.props;

        let message = "";

        switch (key) {
            case "start":
                message = t("startDateDecs");
                break;
            case "end":
                message = t("endDateDecs");
                break;
            case "startArticle":
                message = t("startArticle");
                break;
            case "endArticle":
                message = t("endArticle");
                break;
            case "refeeResult":
                message = t("refeeResult");
                break;
            case "editArticle":
                message = t("editArticle");
                break;
            case "lastRegistration":
                message = t("lastRegistration");
                break;
            default:
                message = t("startDateDecs");
                break;
        }

        return (
            <div
                className="tab-pane fade show active"
                id="schedule-pill1"
                role="tabpanel"
                aria-labelledby="schedule-tab1"
            >
                <div className="schedule-wrapper-two">
                    <div className="single-schedule-card-style-two row">
                        <div className="col-xl-4 col-lg-5 p-0">
                            <div className="single-schedule-left">
                                <div className="schedule-top">
                                    <h4>{showDate(value)}</h4>
                                    <h5>
                                        {" "}
                                        <span
                                            style={{
                                                visibility: "hidden",
                                            }}
                                        >
                                            {"a"}
                                        </span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 p-0">
                            <div className="single-schedule-right">
                                <h3 className="schedule-title">{message}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { t } = this.props;
        const { data, loading, error } = this.context;
        const hamayeshDetail = data["hamayeshDetail"] || [];

        return (
            <>
                {/* ===============  Recent schedule start  =============== */}
                <div className="recent-schedule-style-one pt-110 position-relative">
                    <div className="watermark-bg mt-110">
                        <img
                            src={BGIconIMG}
                            alt="speakerIMG"
                            className="img-fluid"
                        />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="section-head-style-two">
                                <h3>
                                    <span>{t("Schedule")}</span>
                                </h3>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-6">
                                <div className="schedule-tab-buttons">
                                    <div
                                        className="nav flex-column nav-pills "
                                        id="v-pills-tab"
                                        role="tablist"
                                        aria-orientation="vertical"
                                    >
                                        {(hamayeshDetail?.data?.dates
                                            ? Object.entries(
                                                  hamayeshDetail.data.dates
                                              )
                                            : []
                                        ).map(([dateKey, dateValue], i) => (
                                            <div key={dateKey}>
                                                <button
                                                    onClick={() =>
                                                        this.handleButtonClick(
                                                            dateKey,
                                                            dateValue
                                                        )
                                                    }
                                                    className={`nav-link ${
                                                        this.state
                                                            .selectedTab ===
                                                        dateKey
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                    id={`schedule-tab${i}`}
                                                    data-bs-toggle="pill"
                                                    data-bs-target={`#schedule-pill${i}`}
                                                    type="button"
                                                    role="tab"
                                                    aria-controls={`schedule-pill${i}`}
                                                    aria-selected="true"
                                                >
                                                    {showDate(dateValue)}{" "}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9">
                                <div
                                    className="tab-content"
                                    id="v-pills-tabContent"
                                >
                                    {this.state.content ? (
                                        this.state.content
                                    ) : (
                                        <div
                                            className="tab-pane fade show active"
                                            id="schedule-pill1"
                                            role="tabpanel"
                                            aria-labelledby="schedule-tab1"
                                        >
                                            <div className="schedule-wrapper-two">
                                                <div className="single-schedule-card-style-two row">
                                                    <div className="col-xl-4 col-lg-5 p-0">
                                                        <div className="single-schedule-left">
                                                            <div className="schedule-top">
                                                                <h4>
                                                                    {showDate(
                                                                        hamayeshDetail
                                                                            ?.data
                                                                            ?.dates
                                                                            ?.start
                                                                    )}
                                                                </h4>
                                                                <h5>
                                                                    {" "}
                                                                    <span
                                                                        style={{
                                                                            visibility:
                                                                                "hidden",
                                                                        }}
                                                                    >
                                                                        {"a"}
                                                                    </span>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-8 col-lg-7 p-0">
                                                        <div className="single-schedule-right">
                                                            <h3 className="schedule-title">
                                                                {t(
                                                                    "startDateDecs"
                                                                )}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  Recent schedule end  =============== */}
            </>
        );
    }
}

export default withTranslation()(RecentEventSchedule);
