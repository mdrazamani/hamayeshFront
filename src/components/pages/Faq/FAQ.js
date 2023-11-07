import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

import DataContext from "../../../context/DataContext";
import Error from "../../common/Error";
import Loading from "../../common/Loading";
import { makeRoute } from "../../../utils/apiRoutes";

class FAQ extends Component {
    static contextType = DataContext;

    componentDidMount() {
        const queryParams = {
            fields: "description,title,items,_id",
        };

        this.context.fetchData(makeRoute("questions"), "faqData", queryParams);
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

        if (!data["faqData"]) return null;

        if (loading["faqData"]) {
            return <Loading />;
        }

        if (error["faqData"]) {
            return <Error message={error["faqData"].message} />;
        }

        const questions = data["faqData"] || [];

        return (
            <>
                {/* ===============  breadcrumb area start =============== */}
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="breadcrumb-content">
                                    <div className="page-outlined-text">
                                        <h1>{t("FAQ")}</h1>
                                    </div>
                                    <h2 className="page-title">{t("FAQ")}</h2>
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
                                        <li>{t("FAQ")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  breadcrumb area end =============== */}
                {/* ===============  FAQ wrapper start =============== */}
                <div className="faq-wrapper ">
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
