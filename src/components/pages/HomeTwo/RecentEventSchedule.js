import React, { Component } from "react";
import { withTranslation } from "react-i18next";
// image import
import BGIconIMG from "../../../assets/images/background-texts/schedule-watermark.png";
import { showDate } from "../../../utils/dateManager";
import DataContext from "../../../context/DataContext";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./schedule.css";

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
            language:
                localStorage.getItem("language") ||
                process.env.REACT_APP_DEFAULT_LANGUAGE,
            number: 0,
        };
    }

    static contextType = DataContext; // Using the contextType to access the DataContext

    componentDidMount() {
        window.addEventListener("languageChanged", this.handleLanguageChange);
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

    handleButtonClick = (key, value) => {
        const componentToRender = this.makeDateValue(key, value);
        this.setState({ content: componentToRender });
        this.setState({ selectedTab: key });
    };

    // makeDateValue(key, value) {
    //     const { t } = this.props;

    //     let message = "";

    //     switch (key) {
    //         case "start":
    //             message = t("startDateDecs");
    //             break;
    //         case "end":
    //             message = t("endDateDecs");
    //             break;
    //         case "startArticle":
    //             message = t("startArticle");
    //             break;
    //         case "endArticle":
    //             message = t("endArticle");
    //             break;
    //         case "refeeResult":
    //             message = t("refeeResult");
    //             break;
    //         case "editArticle":
    //             message = t("editArticle");
    //             break;
    //         case "lastRegistration":
    //             message = t("lastRegistration");
    //             break;
    //         default:
    //             message = t("startDateDecs");
    //             break;
    //     }

    //     return (
    //         <div
    //             className="tab-pane fade show active"
    //             id="schedule-pill1"
    //             role="tabpanel"
    //             aria-labelledby="schedule-tab1"
    //         >
    //             <div className="schedule-wrapper-two">
    //                 <div className="single-schedule-card-style-two row">
    //                     <div className="col-xl-4 col-lg-5 p-0">
    //                         <div className="single-schedule-left">
    //                             <div className="schedule-top">
    //                                 <h4>{showDate(value)}</h4>
    //                                 <h5>
    //                                     {" "}
    //                                     <span
    //                                         style={{
    //                                             visibility: "hidden",
    //                                         }}
    //                                     >
    //                                         {"a"}
    //                                     </span>
    //                                 </h5>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className="col-xl-8 col-lg-7 p-0">
    //                         <div className="single-schedule-right">
    //                             <h3 className="schedule-title">{message}</h3>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

    render() {
        const { language } = this.state;
        this.state.number += 1;
        const { t } = this.props;
        const { data, loading, error } = this.context;
        const hamayeshDetail = data["hamayeshDetail"] || [];

        return (
            <>
                <div
                    style={{
                        direction: "ltr",
                        marginTop: "100px",
                        overflowX: "hidden",
                        marginLeft: "1.4%",
                    }}
                >
                    <div className="row">
                        <div className="section-head-style-two">
                            <h3>
                                <span>{t("Schedule")}</span>
                            </h3>
                        </div>
                    </div>

                    <VerticalTimeline animate={true} lineColor="#ce1446">
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                boxShadow: "0px 2px 6px 4px rgba(0,0,0,0.1)",
                                background: "#fff",
                                color: "#333",
                                textAlign: "center",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid #ce1446",
                            }}
                            date={showDate(hamayeshDetail?.data?.dates?.start)}
                            dateClassName="date-schedule"
                            iconStyle={{
                                background: "#ce1446",
                                color: "#fff",
                            }}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {t("startDateDecs")}
                            </h3>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                boxShadow: "0px 2px 6px 4px rgba(0,0,0,0.1)",
                                background: "#fff",
                                color: "#333",
                                textAlign: "center",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid #ce1446",
                            }}
                            date={showDate(
                                hamayeshDetail?.data?.dates?.lastRegistration
                            )}
                            dateClassName="date-schedule"
                            iconStyle={{
                                background: "#ce1446",
                                color: "#fff",
                            }}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {t("lastRegistration")}
                            </h3>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                boxShadow: "0px 2px 6px 4px rgba(0,0,0,0.1)",
                                background: "#fff",
                                color: "#333",
                                textAlign: "center",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid #ce1446",
                            }}
                            date={showDate(
                                hamayeshDetail?.data?.dates?.startArticle
                            )}
                            dateClassName="date-schedule"
                            iconStyle={{
                                background: "#ce1446",
                                color: "#fff",
                            }}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {t("startArticle")}
                            </h3>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                boxShadow: "0px 2px 6px 4px rgba(0,0,0,0.1)",
                                background: "#fff",
                                color: "#333",
                                textAlign: "center",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid #ce1446",
                            }}
                            date={showDate(
                                hamayeshDetail?.data?.dates?.editArticle
                            )}
                            dateClassName="date-schedule"
                            iconStyle={{
                                background: "#ce1446",
                                color: "#fff",
                            }}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {t("editArticle")}
                            </h3>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                boxShadow: "0px 2px 6px 4px rgba(0,0,0,0.1)",
                                background: "#fff",
                                color: "#333",
                                textAlign: "center",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid #ce1446",
                            }}
                            date={showDate(
                                hamayeshDetail?.data?.dates?.endArticle
                            )}
                            dateClassName="date-schedule"
                            iconStyle={{
                                background: "#ce1446",
                                color: "#fff",
                            }}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {t("endArticle")}
                            </h3>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                boxShadow: "0px 2px 6px 4px rgba(0,0,0,0.1)",
                                background: "#fff",
                                color: "#333",
                                textAlign: "center",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid #ce1446",
                            }}
                            date={showDate(
                                hamayeshDetail?.data?.dates?.refeeResult
                            )}
                            dateClassName="date-schedule"
                            iconStyle={{
                                background: "#ce1446",
                                color: "#fff",
                            }}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {t("refeeResult")}
                            </h3>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                boxShadow: "0px 2px 6px 4px rgba(0,0,0,0.1)",
                                background: "#fff",
                                color: "#333",
                                textAlign: "center",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid #ce1446",
                            }}
                            date={showDate(
                                hamayeshDetail?.data?.dates?.endDateDecs
                            )}
                            dateClassName="date-schedule"
                            iconStyle={{
                                background: "#ce1446",
                                color: "#fff",
                            }}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {t("endDateDecs")}
                            </h3>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </>
        );
    }
}

export default withTranslation()(RecentEventSchedule);
