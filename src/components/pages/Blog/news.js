import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
// page animation

import "../../../assets/css/animate.css";
// image import

import DataContext from "../../../context/DataContext";
import Error from "../../common/Error";
import Loading from "../../common/Loading";

import FetchDataService from "../../../utils/fetchDataFunc";
import RenderPagination from "../../common/pagination";
import { showDate } from "../../../utils/dateManager";

import urlM from "../../../utils/urlManager";

class news extends Component {
    static contextType = DataContext; // Using the contextType to access the DataContext

    fetchDataFunctionTags = async () => {
        // Options should be set according to the parameters your API needs
        const options = {
            page: 1,
            totalPages: 12, // this should probably be 'pageSize'
            dataName: "oneNewsCatData",
            api: {
                apiTitle: "news-tags",
                id: urlM(window.location.pathname).slug, // If these values are unnecessary, you could remove them
                subTitle: null, // same as above
                options: null, // same as above
            },
        };

        // Here, we're passing the context's fetchData method to our service
        await FetchDataService(this.context.fetchData, options);

        const { data } = this.context;
        if (data["oneNewsCatData"]) {
            const options2 = {
                page: 1,
                totalPages: 12, // this should probably be 'pageSize'
                dataName: "newsData",
                api: {
                    apiTitle: "news",
                    id: null, // If these values are unnecessary, you could remove them
                    subTitle: null, // same as above
                    options: { tags: data["oneNewsCatData"]?.data?.id }, // same as above
                },
            };
            FetchDataService(this.context.fetchData, options2);
        }
    };

    fetchDataFunctionNewsCats = async () => {
        // Options should be set according to the parameters your API needs

        const options = {
            page: 1,
            totalPages: 12, // this should probably be 'pageSize'
            dataName: "oneNewsCatData",
            api: {
                apiTitle: "news-categories",
                id: urlM(window.location.pathname).slug, // If these values are unnecessary, you could remove them
                subTitle: null, // same as above
                options: null, // same as above
            },
        };
        await FetchDataService(this.context.fetchData, options);

        const { data } = this.context;
        if (data["oneNewsCatData"]) {
            const options2 = {
                page: 1,
                totalPages: 12, // this should probably be 'pageSize'
                dataName: "newsData",
                api: {
                    apiTitle: "news",
                    id: null, // If these values are unnecessary, you could remove them
                    subTitle: null, // same as above
                    options: { category: data["oneNewsCatData"]?.data?.id }, // same as above
                },
            };
            FetchDataService(this.context.fetchData, options2);
        }
    };

    componentDidMount() {
        if (urlM(window.location.pathname).slug1 === "category")
            this.fetchDataFunctionNewsCats();
        else this.fetchDataFunctionTags();
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

        if (!data["oneNewsCatData"]) return null;

        // Assuming data['newsData'] is an array of speakers. Adjust depending on your actual data structure
        const news = data["newsData"] || [];
        const newsParent = data["oneNewsCatData"] || [];
        const hamayeshDetail = this.context.data["hamayeshDetail"];
        // console.log("news: ", news);

        return (
            <>
                {/* ===============  breadcrumb area start =============== */}
                <div
                    className="breadcrumb-area"
                    style={{
                        backgroundImage: `linear-gradient(rgba(45, 55, 60, 0.7) 100%, rgba(45, 55, 60, 0.7) 100%), url('${
                            process.env.REACT_APP_SERVER_IP +
                            hamayeshDetail?.data?.headerImage
                        }')`,
                    }}
                >
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="breadcrumb-content">
                                    <div className="page-outlined-text">
                                        <h1>{newsParent?.data?.title}</h1>
                                    </div>
                                    <h2 className="page-title">
                                        {newsParent?.data?.title}
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
                                        <li>{newsParent?.data?.title}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  breadcrumb area end =============== */}
                {/* =============== Blog area start =============== */}
                <div className="blog-sidebar-wrapper ">
                    <div className="container position-relative pt-110">
                        <div className="row">
                            <div className="col-lg-12 ">
                                <div className="background-title text-style-one">
                                    <h2>{newsParent?.data?.title}</h2>
                                </div>
                                <div className="section-head">
                                    <h3>{newsParent?.data?.title}</h3>
                                    {newsParent?.data?.image ? (
                                        <img
                                            style={{
                                                width: "100%",
                                                objectFit: "cover",
                                                borderRadius: "10px",
                                            }}
                                            src={
                                                process.env
                                                    .REACT_APP_SERVER_IP +
                                                newsParent?.data?.image
                                            }
                                            alt={newsParent?.data?.title}
                                        />
                                    ) : (
                                        ""
                                    )}
                                    {newsParent?.data?.description ? (
                                        <div
                                            style={{
                                                marginTop: "50px",
                                                marginBottom: "50px",
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html: newsParent?.data
                                                    ?.description,
                                            }}
                                        />
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    {news?.data?.data?.map(
                                        (newsData, index) => (
                                            <div
                                                key={index}
                                                className="col-lg-4 col-md-4  wow fadeInUp animated"
                                                data-wow-delay="200ms"
                                                data-wow-duration="1500ms"
                                            >
                                                <div className="blog-card-md">
                                                    <div className="blog-thumb">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={`/blog-details/${newsData?.slug}`}
                                                            replace
                                                        >
                                                            <img
                                                                style={{
                                                                    width: "100%",
                                                                    height: "200px",
                                                                    objectFit:
                                                                        "cover",
                                                                }}
                                                                src={`${
                                                                    process.env
                                                                        .REACT_APP_SERVER_IP +
                                                                    newsData?.image
                                                                }`}
                                                                alt={
                                                                    newsData?.title
                                                                }
                                                            />
                                                        </Link>
                                                        {/* <div className="blog-tags">
                                                            <Link
                                                                onClick={
                                                                    this
                                                                        .scrollTop
                                                                }
                                                                to={`${process.env.PUBLIC_URL}/blog`}
                                                            >
                                                                Business
                                                            </Link>
                                                        </div> */}
                                                    </div>
                                                    <div className="blog-content">
                                                        <h4 className="blog-title">
                                                            <Link
                                                                onClick={
                                                                    this
                                                                        .scrollTop
                                                                }
                                                                to={`/blog-details/${newsData?.slug}`}
                                                                replace
                                                            >
                                                                {
                                                                    newsData?.title
                                                                }
                                                            </Link>
                                                        </h4>
                                                        <div className="blog-bottom">
                                                            <div className="blog-date">
                                                                <p>
                                                                    <i className="bi bi-calendar2-week" />
                                                                    <span>
                                                                        {showDate(
                                                                            newsData?.publishDate,
                                                                            true
                                                                        )}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                            <div className="readme-btn">
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={`/blog-details/${newsData?.slug}`}
                                                                    replace
                                                                >
                                                                    {t(
                                                                        "Read_More"
                                                                    )}
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )}

                                    <>
                                        <RenderPagination
                                            currentPage={
                                                news?.data?.payload?.pagination
                                                    ?.page
                                            }
                                            totalPages={
                                                news?.data?.payload?.pagination
                                                    ?.last_page
                                            }
                                            fetchDataFromContext={
                                                this.context.fetchData
                                            }
                                            options={{
                                                page: 1,
                                                totalPages: 12, // this should probably be 'pageSize'
                                                dataName: "newsData",
                                                api: {
                                                    apiTitle: "news",
                                                    id: null, // If these values are unnecessary, you could remove them
                                                    subTitle: null, // same as above
                                                    options: null, // same as above
                                                },
                                            }}
                                            // onPageChange={this.handlePageChange}
                                        />
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* =============== Blog area end =============== */}
            </>
        );
    }
}

export default withTranslation()(news);
