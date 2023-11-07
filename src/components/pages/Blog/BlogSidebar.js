import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
// page animation
import WOW from "wowjs";
import "../../../assets/css/animate.css";
// image import
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Paper from "@mui/material/Paper";

import DataContext from "../../../context/DataContext";
import Error from "../../common/Error";
import Loading from "../../common/Loading";
import { makeRoute } from "../../../utils/apiRoutes";
import FetchDataService from "../../../utils/fetchDataFunc";
import RenderPagination from "../../common/pagination";
import { showDate } from "../../../utils/dateManager";

class BlogSidebar extends Component {
    static contextType = DataContext; // Using the contextType to access the DataContext

    fetchDataFunction = () => {
        // Options should be set according to the parameters your API needs
        const options = {
            page: 1,
            totalPages: 12, // this should probably be 'pageSize'
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

    fetchDataFunctionTags = () => {
        // Options should be set according to the parameters your API needs
        const options = {
            page: 1,
            totalPages: 40, // this should probably be 'pageSize'
            dataName: "newsTagData",
            api: {
                apiTitle: "news-tags",
                id: null, // If these values are unnecessary, you could remove them
                subTitle: null, // same as above
                options: null, // same as above
            },
        };

        // Here, we're passing the context's fetchData method to our service
        FetchDataService(this.context.fetchData, options);
    };

    fetchDataFunctionGallery = () => {
        // Options should be set according to the parameters your API needs
        const options = {
            page: 1,
            totalPages: 1, // this should probably be 'pageSize'
            dataName: "galleryData",
            api: {
                apiTitle: "galleries",
                id: null, // If these values are unnecessary, you could remove them
                subTitle: null, // same as above
                options: null, // same as above
            },
        };

        // Here, we're passing the context's fetchData method to our service
        FetchDataService(this.context.fetchData, options);
    };

    fetchDataFunctionNewsCats = () => {
        // Options should be set according to the parameters your API needs
        const options = {
            page: 1,
            totalPages: 3, // this should probably be 'pageSize'
            dataName: "newsCatData",
            api: {
                apiTitle: "news-categories",
                id: null, // If these values are unnecessary, you could remove them
                subTitle: "ordered", // same as above
                options: null, // same as above
            },
        };

        // Here, we're passing the context's fetchData method to our service
        FetchDataService(this.context.fetchData, options);
    };

    dataMaker() {
        const currentData = this.context.data["OrganizerDataHeader"];

        if (currentData) {
            return currentData.data.data.find((item) => item.isMain === true);
        }
    }

    dataMakerCategory() {
        const categories = this.context.data["newsCatData"];

        if (categories) {
            return categories.data.filter((item) => item.level === 1);
        }

        return [];
    }

    componentDidMount() {
        this.fetchDataFunction();
        this.fetchDataFunctionTags();
        this.fetchDataFunctionGallery();
        this.fetchDataFunctionNewsCats();
    }

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    render() {
        const organizer = this.dataMaker();
        const { t } = this.props;
        const { data, loading, error } = this.context;

        if (!data["newsData"]) return null;
        if (!data["newsTagData"]) return null;
        if (!data["galleryData"]) return null;
        if (!data["newsCatData"]) return null;

        // Check if the data is being fetched
        if (loading["newsData"]) {
            return <Loading />;
        }

        // Check for errors
        if (error["newsData"]) {
            return <Error message={error["newsData"].message} />;
        }

        // Assuming data['newsData'] is an array of speakers. Adjust depending on your actual data structure
        const news = data["newsData"] || [];
        const newsTags = data["newsTagData"] || [];
        const galleries = data["galleryData"] || [];
        // const newsCats = data["newsCatData"] || [];
        const newsCats = this.dataMakerCategory() || [];

        const imagesArray = [];

        galleries?.data?.data[0]?.images?.map((gallery) => {
            if (imagesArray.length < 9) {
                imagesArray.push(gallery);
            }
        });

        const hamayeshDetail = this.context.data["hamayeshDetail"];

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
                                        <h1>{t("news")}</h1>
                                    </div>
                                    <h2 className="page-title">{t("news")}</h2>
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
                                        <li>{t("news")}</li>
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
                                    <h2>{t("Latest_News")}</h2>
                                </div>
                                <div className="section-head">
                                    <h3>{t("Latest_News")}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    {news?.data?.data?.map(
                                        (newsData, index) => (
                                            <div
                                                key={index}
                                                className="col-lg-6 col-md-6  wow fadeInUp animated"
                                                data-wow-delay="200ms"
                                                data-wow-duration="1500ms"
                                            >
                                                <div className="blog-card-md">
                                                    <div className="blog-thumb">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={`blog-details/${newsData?.slug}`}
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
                                                                to={`blog-details/${newsData?.slug}`}
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
                                                                    to={`${process.env.PUBLIC_URL}/blog-details`}
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
                            <div className="col-lg-4">
                                <div className="blog-sidebar">
                                    <div className="sb-category">
                                        <div className="category-title">
                                            <i className="bi bi-list-task" />{" "}
                                            <h4>{t("Category")}</h4>
                                        </div>
                                        <ul className="category-list">
                                            {newsCats?.map((cat, index) => (
                                                <li key={index}>
                                                    <Link
                                                        onClick={this.scrollTop}
                                                        to={
                                                            "news/category/" +
                                                            cat?.slug
                                                        }
                                                    >
                                                        {cat?.title}
                                                        <div className="category-lavel">
                                                            <span>
                                                                {
                                                                    cat
                                                                        ?.children
                                                                        ?.length
                                                                }
                                                            </span>
                                                            <i className="bi bi-box-arrow-right" />
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* <CategoryTree
                                            categories={newsCats?.data}
                                        /> */}

                                        {/* <CustomizedTreeView
                                            data={newsCats?.data}
                                        /> */}
                                    </div>
                                    <div className="sb-tags">
                                        <div className="category-title">
                                            <i className="bi bi-tags" />{" "}
                                            <h4>{t("Tags")}</h4>
                                        </div>
                                        <ul className="tag-list">
                                            {newsTags?.data?.data?.map(
                                                (tag, index) => (
                                                    <li key={index}>
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={
                                                                "news/tag/" +
                                                                tag?.slug
                                                            }
                                                        >
                                                            {tag?.title}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <div className="sb-gallary">
                                        <div className="category-title">
                                            <i className="bi bi-images" />{" "}
                                            <h4>{t("Gallery")}</h4>
                                        </div>
                                        <ul className="blog-gallary-grid">
                                            {imagesArray?.map(
                                                (gallery, index) => (
                                                    <li>
                                                        <img
                                                            src={
                                                                process.env
                                                                    .REACT_APP_SERVER_IP +
                                                                gallery?.path
                                                            }
                                                            alt={gallery?.title}
                                                        />
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={gallery?.path}
                                                            data-fancybox="gallery"
                                                            data-caption="Caption Here"
                                                            className="gallary-overlay"
                                                        >
                                                            <i className="bi bi-eye" />
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    {(organizer?.socials?.facebook ||
                                        organizer?.socials?.instagram ||
                                        organizer?.socials?.linkedIn ||
                                        organizer?.socials?.twitter ||
                                        organizer?.socials?.whatsapp) && (
                                        <div className="sb-social-icon">
                                            <div className="category-title">
                                                <i className="bi bi-plus-circle" />{" "}
                                                <h4>{t("Follow")}</h4>
                                            </div>

                                            <ul
                                                className="sb-social-icon-list"
                                                style={{ direction: "ltr" }}
                                            >
                                                {organizer?.socials
                                                    ?.facebook && (
                                                    <li>
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={
                                                                organizer
                                                                    ?.socials
                                                                    ?.facebook
                                                            }
                                                        >
                                                            <i className="fab fa-facebook-f" />
                                                        </Link>
                                                    </li>
                                                )}
                                                {organizer?.socials?.socials
                                                    ?.instagram && (
                                                    <li>
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={
                                                                organizer
                                                                    .socials
                                                                    .instagram
                                                            }
                                                        >
                                                            <i className="fab fa-instagram" />
                                                        </Link>
                                                    </li>
                                                )}
                                                {organizer?.socials?.socials
                                                    ?.linkedIn && (
                                                    <li>
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={
                                                                organizer
                                                                    .socials
                                                                    .linkedIn
                                                            }
                                                        >
                                                            <i className="fab fa-linkedin-in" />
                                                        </Link>
                                                    </li>
                                                )}
                                                {organizer?.socials?.socials
                                                    ?.twitter && (
                                                    <li>
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={
                                                                organizer
                                                                    .socials
                                                                    .twitter
                                                            }
                                                        >
                                                            <i className="fab fa-twitter" />
                                                        </Link>
                                                    </li>
                                                )}
                                                {organizer?.socials?.socials
                                                    ?.whatsapp && (
                                                    <li>
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={
                                                                organizer
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
                                    )}

                                    {/* <div className="sb-banner">
                                        <Link
                                            onClick={this.scrollTop}
                                            to={`${process.env.PUBLIC_URL}/event-details`}
                                        >
                                            <img
                                                src={SubBanner}
                                                alt="Imgs"
                                                className="img-fluid"
                                            />
                                        </Link>
                                    </div> */}
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

export default withTranslation()(BlogSidebar);
