import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

import DataContext from "../../../context/DataContext";
import Error from "../../common/Error";
// import Loading from "../../common/Loading";
import { makeRoute } from "../../../utils/apiRoutes";

import BreadcrumbComponent from "../../common/breadcrumb.js";
import HelmetComponent from "../../common/helmet.js";

class FAQ extends Component {
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

    static contextType = DataContext;

    componentDidMount() {
        window.addEventListener("languageChanged", this.handleLanguageChange);
        const queryParams = {
            fields: "-__v",
        };
        this.context.fetchData(makeRoute("questions"), "faqData", queryParams);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.language !== this.state.language) {
            const queryParams = {
                fields: "-__v",
            };
            this.context.fetchData(
                makeRoute("questions"),
                "faqData",
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

        if (!data["faqData"]) return null;

        // if (loading["faqData"]) {
        //     return <Loading />;
        // }

        if (error["faqData"]) {
            return <Error message={error["faqData"].message} />;
        }

        const questions = data["faqData"] || [];
        const hamayeshDetail = this.context.data["hamayeshDetail"];
        return (
            <>
                <HelmetComponent
                    title="FAQ"
                    description="FAQ_meta_desc"
                    imageUrl={
                        process.env.REACT_APP_SERVER_IP +
                        hamayeshDetail?.data?.headerImage
                    }
                />
                <BreadcrumbComponent
                    translate="FAQ"
                    headerImageUrl={hamayeshDetail?.data?.headerImage}
                />

                <div className="faq-wrapper " key={language}>
                    <div className="container position-relative pt-110">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="background-title text-style-one">
                                    <h2>{t("FAQ")}</h2>
                                </div>
                                <div className="section-head">
                                    <h3>{t("FAQ")}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="event-category-buttons d-flex justify-content-center">
                                    <ul
                                        className="nav nav-pills mb-3"
                                        id="pills-tab"
                                        role="tablist"
                                    >
                                        {questions?.data?.data.map(
                                            (question, index) => (
                                                <li
                                                    className="nav-item"
                                                    role="presentation"
                                                    key={index}
                                                >
                                                    <button
                                                        className={`nav-link ${
                                                            index === 0
                                                                ? "active"
                                                                : ""
                                                        }`} // Only the first tab should be active initially
                                                        id={`pills-tab${index}`}
                                                        data-bs-toggle="pill"
                                                        data-bs-target={`#pills-event${index}`} // This should match the 'id' of the corresponding tab content
                                                        type="button"
                                                        role="tab"
                                                        aria-controls={`pills-event${index}`}
                                                        aria-selected={
                                                            index === 0
                                                                ? "true"
                                                                : "false"
                                                        } // Only the active tab should have 'true'
                                                    >
                                                        {question?.title}{" "}
                                                        <span>{index + 1}</span>
                                                    </button>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div
                                    className="tab-content"
                                    id="pills-tabContent"
                                >
                                    {questions?.data?.data.map(
                                        (question, qIndex) => (
                                            <div
                                                key={qIndex}
                                                className={`tab-pane fade ${
                                                    qIndex === 0
                                                        ? "show active"
                                                        : ""
                                                }`} // Only the first tab should be active initially
                                                id={`pills-event${qIndex}`}
                                                role="tabpanel"
                                                aria-labelledby={`pills-tab${qIndex}`}
                                            >
                                                <div className="faq-wrap">
                                                    <h3 className="faq-type">
                                                        {question?.description}
                                                    </h3>
                                                    <div
                                                        className="accordion"
                                                        id={`FaqTab${qIndex}`}
                                                    >
                                                        {question?.items.map(
                                                            (
                                                                item,
                                                                itemIndex
                                                            ) => (
                                                                <div
                                                                    className="accordion-item"
                                                                    key={
                                                                        itemIndex
                                                                    }
                                                                >
                                                                    <h2
                                                                        className="accordion-header"
                                                                        id={`faqHeading${qIndex}_${itemIndex}`}
                                                                    >
                                                                        <button
                                                                            className="accordion-button"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target={`#faqCollapse${qIndex}_${itemIndex}`}
                                                                            aria-expanded={
                                                                                itemIndex ===
                                                                                0
                                                                                    ? "true"
                                                                                    : "false"
                                                                            } // Only the first item should be expanded
                                                                            aria-controls={`faqCollapse${qIndex}_${itemIndex}`}
                                                                        >
                                                                            {
                                                                                item?.question
                                                                            }
                                                                        </button>
                                                                    </h2>
                                                                    <div
                                                                        id={`faqCollapse${qIndex}_${itemIndex}`}
                                                                        className={`accordion-collapse collapse ${
                                                                            itemIndex ===
                                                                            0
                                                                                ? "show"
                                                                                : ""
                                                                        }`} // Only the first item should be expanded
                                                                        aria-labelledby={`faqHeading${qIndex}_${itemIndex}`}
                                                                        data-bs-parent={`#FaqTab${qIndex}`}
                                                                    >
                                                                        <div className="accordion-body">
                                                                            {
                                                                                item?.response
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  FAQ wrapper end =============== */}
            </>
        );
    }
}

export default withTranslation()(FAQ);
