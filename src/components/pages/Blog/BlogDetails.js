import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
// image import
import Slider from "react-slick";
import DataContext from "../../../context/DataContext";
import Error from "../../common/Error";
import Loading from "../../common/Loading";
import urlM from "../../../utils/urlManager.js";
import FetchDataService from "../../../utils/fetchDataFunc.js";
import { showDate } from "../../../utils/dateManager";
import axios from "axios";
import "../../../assets/css/mainStyle.css";
import { AspectRatio } from "@material-ui/icons";
import { decodeHtmlEntities } from "../../../utils/decodeHtmlEntities.js";

class BlogDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userIP: "",
            responseStatus: null,
            responseData: null,
            errors: null,
            newsNewsData: null,
            change: false,
        };
    }

    static contextType = DataContext; // Using the contextType to access the DataContext

    fetchDataFunction = async () => {
        // Options should be set according to the parameters your API needs
        const options = {
            page: 1,
            totalPages: 12, // this should probably be 'pageSize'
            dataName: "oneNewsData",
            api: {
                apiTitle: "news",
                id: urlM(window.location.pathname).slug, // If these values are unnecessary, you could remove them
                subTitle: null, // same as above
                options: null, // same as above
            },
        };

        // Here, we're passing the context's fetchData method to our service
        await FetchDataService(this.context.fetchData, options);

        const { data } = this.context;
        if (data["oneNewsData"]) {
            const options2 = {
                page: 1,
                totalPages: 12, // this should probably be 'pageSize'
                dataName: "newsNewsData",
                api: {
                    apiTitle: "news",
                    id: null, // If these values are unnecessary, you could remove them
                    subTitle: null, // same as above
                    options: {
                        category: data["oneNewsData"]?.data?.category?.id,
                    }, // same as above
                },
            };
            await FetchDataService(this.context.fetchData, options2);
        }
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

    dataMakerNewsNews() {
        const newsNewsData = this.context.data["newsNewsData"];

        if (newsNewsData) {
            const idToRemove = this.context.data["oneNewsData"]?.data?.id;
            const index = newsNewsData.data.data.findIndex(
                (item) => item.id === idToRemove
            );
            if (index !== -1) {
                newsNewsData.data.data.splice(index, 1);
            }
        }

        this.state.newsNewsData = newsNewsData;

        // return [];
    }

    componentDidMount() {
        this.fetchDataFunction();
        this.fetchDataFunctionTags();
        this.fetchDataFunctionGallery();
        this.fetchDataFunctionNewsCats();
        this.fetchIP();
    }

    fetchIP = async () => {
        try {
            const response = await fetch("https://api.ipify.org?format=json");
            const data = await response.json();

            this.setState({ userIP: data.ip });
        } catch (error) {
            console.error(
                "An error occurred while fetching the IP address:",
                error
            );
        }
    };

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    handleClickLink = async () => {
        window.scrollTo(0, 0);
        await this.fetchDataFunction();
        this.dataMakerNewsNews();
        this.state.change = true;
        setTimeout(async () => {
            await this.fetchDataFunction();
            this.dataMakerNewsNews();
        }, 150);
    };

    NewsCard(t, news) {
        return (
            <div className="news-card">
                <Link
                    onClick={this.scrollTop}
                    to={`/blog-details/${news?.slug}`}
                    replace
                >
                    {news.image && (
                        <img
                            src={process.env.REACT_APP_SERVER_IP + news.image}
                            alt={news.title}
                            className="news-image"
                        />
                    )}
                </Link>
                <Link
                    onClick={this.handleClickLink}
                    to={`/blog-details/${news?.slug}`}
                    replace
                    style={{ color: "#333" }}
                >
                    <h4>{news.title}</h4>
                </Link>
                {/* <p className="description">{company.details.description}</p> */}
                <Link
                    onClick={this.scrollTop}
                    to={`/blog-details/${news?.slug}`}
                    replace
                    className="company-link"
                >
                    {t("view")}
                </Link>
            </div>
        );
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({ responseStatus: "loading" });

        const formData = new FormData(event.target);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_BASE_URL}/news-comments`,
                formObject
            );

            if (response.status === 200) {
                this.setState({
                    responseStatus: "success",
                    responseData: response.data,
                });
            } else {
                this.setState({
                    responseStatus: "failed",
                    errors: response.data?.message || "An error occurred",
                });
            }
        } catch (error) {
            this.setState({
                responseStatus: "failed",
                errors: error.response?.data?.message || error.message,
            });
        }
    };

    render() {
        const { responseStatus, responseData, errors } = this.state;
        const organizer = this.dataMaker();
        const { t } = this.props;
        const { data, loading, error } = this.context;

        if (!data["oneNewsData"]) return null;
        if (!data["newsTagData"]) return null;
        if (!data["galleryData"]) return null;
        if (!data["newsCatData"]) return null;
        if (!data["newsNewsData"]) return null;

        // Check if the data is being fetched
        if (loading["oneNewsData"]) {
            return <Loading />;
        }

        // Check for errors
        if (error["oneNewsData"]) {
            return <Error message={error["oneNewsData"].message} />;
        }

        const news = data["oneNewsData"] || [];

        const newsTags = data["newsTagData"] || [];
        const galleries = data["galleryData"] || [];
        // const newsNewsData = this.dataMakerNewsNews() || [];
        this.dataMakerNewsNews();
        const newsNewsData = this.state.newsNewsData || [];
        // const newsNewsData = data["newsNewsData"] || [];

        // console.log("newsNewsData: ", newsNewsData);

        // const newsCats = data["newsCatData"] || [];
        const newsCats = this.dataMakerCategory() || [];

        const imagesArray = [];

        galleries?.data?.data[0]?.images?.map((gallery) => {
            if (imagesArray.length < 9) {
                imagesArray.push(gallery);
            }
        });

        const hamayeshDetail = this.context.data["hamayeshDetail"];

        const settings = {
            dots: true,
            infinite: true,
            speed: 1500,
            slidesToShow:
                newsNewsData?.data?.data.length >= 4
                    ? 4
                    : newsNewsData?.data?.data.length,
            slidesToScroll:
                newsNewsData?.data?.data.length >= 4
                    ? 4
                    : newsNewsData?.data?.data.length,
            autoplay: true,
            autoplaySpeed: 3000,
        };

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
                                        <h1>{t("Blog_Details")}</h1>
                                    </div>
                                    <h2 className="page-title">
                                        {t("Blog_Details")}
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
                                        <li>{t("Blog_Details")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  breadcrumb area end =============== */}
                {/* =============== Blog area start =============== */}
                <div className="blog-details-wrapper ">
                    <div className="container position-relative pt-110">
                        <div className="background-title">
                            <h2>{t("Blog_Details")}</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="blog-details">
                                    <div className="blog-d-top">
                                        <h2 className="blog-d-title">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={"#"}
                                            >
                                                {news?.data?.title}
                                            </Link>
                                        </h2>
                                        {/* <div
                                            style={{
                                                marginTop: "50px",
                                            }}
                                        >
                                            <img
                                                style={{
                                                    display: "block",
                                                    height: "auto",
                                                    maxHeight: "500px",
                                                    objectFit: "cover",
                                                    borderRadius: "10px",
                                                }}
                                                src={
                                                    process.env
                                                        .REACT_APP_SERVER_IP +
                                                    news?.data?.image
                                                }
                                                alt=""
                                            />
                                        </div> */}
                                        <div className="blog-top-info">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={"#"}
                                                className="writer"
                                            >
                                                <i className="bi bi-person" />{" "}
                                                {news?.data?.writer?.firstName +
                                                    " " +
                                                    news?.data?.writer
                                                        ?.lastName}
                                            </Link>
                                            <Link
                                                onClick={this.scrollTop}
                                                to={"#"}
                                                className="blog-date"
                                            >
                                                {" "}
                                                <i className="bi bi-calendar2-week" />{" "}
                                                <span>
                                                    {showDate(
                                                        news?.data?.publishDate,
                                                        true
                                                    )}
                                                </span>
                                            </Link>
                                            <Link
                                                onClick={this.scrollTop}
                                                to={"#"}
                                                className="blog-tag"
                                            >
                                                <i className="bi bi-list-task" />{" "}
                                                {news?.data?.category?.title}
                                            </Link>
                                        </div>
                                        <div className="blog-d-thumb">
                                            <img
                                                style={{ borderRadius: "10px" }}
                                                src={`${
                                                    process.env
                                                        .REACT_APP_SERVER_IP +
                                                    news?.data?.image
                                                }`}
                                                alt={news?.data?.title}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="blog-body"
                                        style={{ marginTop: "100px" }}
                                    >
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: decodeHtmlEntities(
                                                    news?.data?.description
                                                ),
                                            }}
                                        />

                                        <div>
                                            <ul className="tag-list">
                                                {news?.data?.tags?.map(
                                                    (tag, index) => (
                                                        <div
                                                            key={index}
                                                            style={{
                                                                padding: "5px",
                                                                margin: "5px",
                                                                marginTop:
                                                                    "20px",
                                                                display:
                                                                    "inline-block",
                                                            }}
                                                        >
                                                            <Link
                                                                style={{
                                                                    color: "#ce1446",
                                                                }}
                                                                onClick={
                                                                    this
                                                                        .scrollTop
                                                                }
                                                                to={`${process.env.REACT_APP_API_BASE_URL}/news-tags/${tag?.slug}`}
                                                            >
                                                                {tag?.title}
                                                            </Link>
                                                        </div>
                                                    )
                                                )}
                                            </ul>
                                        </div>

                                        {news?.data?.comments?.length > 0 ? (
                                            <div className="blog-bottom d-flex align-items-center justify-content-between flex-wrap">
                                                <h6
                                                    style={{
                                                        fontFamily: "mikhak",
                                                    }}
                                                >
                                                    {t("Share_On")}:{" "}
                                                </h6>
                                                <ul
                                                    className="blog-action-list d-flex"
                                                    style={{ direction: "ltr" }}
                                                >
                                                    <li>
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={"#"}
                                                        >
                                                            <i className="fab fa-facebook-f" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={"#"}
                                                        >
                                                            <i className="fab fa-instagram" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={"#"}
                                                        >
                                                            <i className="fab fa-linkedin-in" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={"#"}
                                                        >
                                                            <i className="fab fa-twitter" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={"#"}
                                                        >
                                                            <i className="fab fa-whatsapp" />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <div className="comment-section">
                                        <div className="comment-counter">
                                            <h4>
                                                {t("Comment")}{" "}
                                                <span>
                                                    (
                                                    {
                                                        news?.data?.comments
                                                            ?.length
                                                    }
                                                    )
                                                </span>{" "}
                                            </h4>
                                        </div>
                                        <ul className="comments-list">
                                            {news?.data?.comments?.map(
                                                (comment, index) => (
                                                    <li className="single-comment">
                                                        <div className="comment-info">
                                                            <p>
                                                                {
                                                                    comment?.comment
                                                                }
                                                            </p>
                                                            <div className="commentor-info">
                                                                <div className="commentor-bio">
                                                                    <h6 className="commentor-name">
                                                                        {comment?.userFirstName +
                                                                            " " +
                                                                            comment?.userLastName}
                                                                    </h6>
                                                                    <div className="comment-timing">
                                                                        <span className="comment-date">
                                                                            {showDate(
                                                                                comment?.createdAt,
                                                                                true
                                                                            )}
                                                                        </span>{" "}
                                                                        <span className="comment-time">
                                                                            12.34
                                                                            PM
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <div className="comment-form">
                                        <h5
                                            className="ed-subtitle"
                                            style={{ fontFamily: "mikhak" }}
                                        >
                                            {t("Leave_Your_Comment")}
                                        </h5>
                                        <form
                                            // action={`${process.env.REACT_APP_API_BASE_URL}/news-comments`}
                                            // method="POST"
                                            // id="comment-form"

                                            onSubmit={this.handleSubmit}
                                        >
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div
                                                        className="primary-input-group"
                                                        style={{
                                                            fontFamily:
                                                                "mikhak",
                                                        }}
                                                    >
                                                        <input
                                                            type="text"
                                                            id="userFirstName"
                                                            name="userFirstName"
                                                            placeholder={t(
                                                                "first_Name"
                                                            )}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="primary-input-group">
                                                        <input
                                                            type="text"
                                                            id="userLastName"
                                                            name="userLastName"
                                                            placeholder={t(
                                                                "last_Name"
                                                            )}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="primary-input-group">
                                                        <input
                                                            type="email"
                                                            id="userEmail"
                                                            name="userEmail"
                                                            placeholder={t(
                                                                "email"
                                                            )}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="primary-input-group">
                                                        <textarea
                                                            name="comment"
                                                            id="comment"
                                                            cols={30}
                                                            rows={7}
                                                            placeholder={t(
                                                                "Message"
                                                            )}
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                </div>
                                                <input
                                                    type="hidden"
                                                    id="userIp"
                                                    name="userIp"
                                                    value={this.state.userIP}
                                                />

                                                <input
                                                    type="hidden"
                                                    id="newsId"
                                                    name="newsId"
                                                    value={news?.data?.id}
                                                />

                                                <div className="col-lg-12">
                                                    <div className="submit-btn">
                                                        <button
                                                            type="submit"
                                                            className="primary-submit"
                                                        >
                                                            {t("Submit_Now")}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                        <div style={{ marginTop: "20px" }}>
                                            {/* ... other parts of your component ... */}

                                            {/* Form submission result messages */}
                                            {responseStatus === "loading" && (
                                                <div
                                                    className="alert alert-info"
                                                    role="alert"
                                                >
                                                    {t("loading")}
                                                </div>
                                            )}
                                            {responseStatus === "success" && (
                                                <div
                                                    className="alert alert-success"
                                                    role="alert"
                                                >
                                                    {t("success")}:{" "}
                                                    {responseData.message}
                                                </div>
                                            )}
                                            {responseStatus === "failed" &&
                                                errors && (
                                                    <div
                                                        className="alert alert-danger"
                                                        role="alert"
                                                    >
                                                        {t("error")}:{" "}
                                                        {typeof errors ===
                                                        "string"
                                                            ? errors
                                                            : Object.entries(
                                                                  errors
                                                              ).map(
                                                                  ([
                                                                      key,
                                                                      value,
                                                                  ]) => (
                                                                      <p
                                                                          key={
                                                                              key
                                                                          }
                                                                      >
                                                                          {key}:{" "}
                                                                          {
                                                                              value
                                                                          }
                                                                      </p>
                                                                  )
                                                              )}
                                                    </div>
                                                )}

                                            {/* ... rest of your rendering ... */}
                                        </div>
                                    </div>
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
                                                        to={
                                                            "/news/category/" +
                                                            cat?.slug
                                                        }
                                                        replace
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
                                                            to={
                                                                "/news/tag/" +
                                                                tag?.slug
                                                            }
                                                            replace
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

                            <div
                                className="container"
                                style={{
                                    textAlign: "center",
                                    marginTop: "150px",
                                }}
                            >
                                <div className="row">
                                    <div
                                        className="section-head-style-two"
                                        style={{ marginTop: "50px" }}
                                    >
                                        <h3>
                                            <span>{t("semilarNews")}</span>
                                        </h3>
                                    </div>
                                    <div className="news">
                                        <Slider {...settings}>
                                            {newsNewsData?.data?.data?.map(
                                                (news) => this.NewsCard(t, news)
                                            )}
                                        </Slider>
                                    </div>
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

export default withTranslation()(BlogDetails);
