import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// image import
import BlogIMG1 from "../../../assets/images/blog/b-md1.png";
import BlogIMG2 from "../../../assets/images/blog/b-md2.png";

import DataContext from "../../../context/DataContext";
import FetchDataService from "../../../utils/fetchDataFunc";
import Error from "../../common/Error";
import Loading from "../../common/Loading";

class BlogArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language:
                localStorage.getItem("language") ||
                process.env.REACT_APP_DEFAULT_LANGUAGE,
            number: 0,
        };
    }

    static contextType = DataContext; // Using the contextType to access the DataContext
    fetchDataFunction = () => {
        // Options should be set according to the parameters your API needs
        const options = {
            page: 1,
            totalPages: 12, // this should probably be 'pageSize
            dataName: "newsData",
            api: {
                apiTitle: "news",
                id: null, // If these values are unnecessary, you could remove them
                subTitle: null, // same as above
                options: null, // same as above
            },
        };

        // Here, we're passing the context's fetchData method to our service
        FetchDataService(this.context.fetchData, options);
    };

    componentDidMount() {
        window.addEventListener("languageChanged", this.handleLanguageChange);
        this.fetchDataFunction();
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
        const { t } = this.props;
        const { language } = this.state;
        // this.state.number += 1;

        const { data, loading, error } = this.context;

        if (!data["newsData"]) return null;

        if (loading["newsData"]) {
            return <Loading />;
        }

        if (error["newsData"]) {
            return <Error message={error["newsData"].message} />;
        }

        const news = data["newsData"] || [];

        return (
            <>
                {/* ===============  Blog area start  =============== */}
                <div className="blog-area" key={language + this.state.number}>
                    <div className="container position-relative pt-120">
                        <div className="row">
                            <div className="col-lg-12 ">
                                <div className="background-title text-style-one">
                                    <h2>{t("news")}</h2>
                                </div>
                                <div className="section-head">
                                    <h3>{t("news")}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 pt-24">
                                <div className="blog-category-wrap">
                                    <ul className="categoryes">
                                        <li>
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Business
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Tecnology
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Sport
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Sport
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Business
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Tecnology
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                photography
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Website
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Corporate
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Web Design
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Development
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="view-blog-btn">
                                        {" "}
                                        <Link onClick={this.scrollTop} to={"#"}>
                                            View All Blog
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-card-md">
                                    <div className="blog-thumb">
                                        <Link
                                            onClick={this.scrollTop}
                                            to={`${process.env.PUBLIC_URL}/blog-details`}
                                        >
                                            <img src={BlogIMG1} alt="" />
                                        </Link>
                                        <div className="blog-tags">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Business
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <h4 className="blog-title">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog-details`}
                                            >
                                                Vestibulum nec porta erat. In in
                                                lobo turpis Suspendisse rtis.
                                            </Link>
                                        </h4>
                                        <div className="blog-bottom">
                                            <div className="blog-date">
                                                <p>
                                                    {" "}
                                                    <i className="bi bi-calendar2-week" />{" "}
                                                    <span>
                                                        02 Septembar, 2021
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="readme-btn">
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={`${process.env.PUBLIC_URL}/blog-details`}
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-card-md">
                                    <div className="blog-thumb">
                                        <Link
                                            onClick={this.scrollTop}
                                            to={`${process.env.PUBLIC_URL}/blog-details`}
                                        >
                                            <img src={BlogIMG2} alt="" />
                                        </Link>
                                        <div className="blog-tags">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Business
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <h4 className="blog-title">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog-details`}
                                            >
                                                Vestibulum nec porta erat. In in
                                                lobo turpis Suspendisse rtis.
                                            </Link>
                                        </h4>
                                        <div className="blog-bottom">
                                            <div className="blog-date">
                                                <p>
                                                    {" "}
                                                    <i className="bi bi-calendar2-week" />{" "}
                                                    <span>
                                                        02 Septembar, 2021
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="readme-btn">
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={`${process.env.PUBLIC_URL}/blog-details`}
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  Blog area end  =============== */}
            </>
        );
    }
}

export default withTranslation()(BlogArea);
