import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
// image import

import RenderPagination from "../../common/pagination.js";

import DataContext from "../../../context/DataContext";
import Error from "../../common/Error";
import Loading from "../../common/Loading";
import { makeRoute } from "../../../utils/apiRoutes";
import FetchDataService from "../../../utils/fetchDataFunc.js";

class Speaker extends Component {
    static contextType = DataContext; // Using the contextType to access the DataContext

    fetchDataFunction = () => {
        // Options should be set according to the parameters your API needs
        const options = {
            page: 1,
            totalPages: 12, // this should probably be 'pageSize'
            fields: "description,title,user,_id",
            dataName: "speakerData",
            api: {
                apiTitle: "speakers",
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

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    render() {
        const { t } = this.props;
        const { data, loading, error } = this.context;

        if (!data["speakerData"]) return null;

        // Check if the data is being fetched
        if (loading["speakerData"]) {
            return <Loading />;
        }

        // Check for errors
        if (error["speakerData"]) {
            return <Error message={error["speakerData"].message} />;
        }

        // Assuming data['speakerData'] is an array of speakers. Adjust depending on your actual data structure
        const speakers = data["speakerData"] || [];
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
                                        <h1>{t("speaker")}</h1>
                                    </div>
                                    <h2 className="page-title">
                                        {t("speaker")}
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
                                        <li>{t("speaker")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  breadcrumb area end =============== */}
                {/* ===============  speakers area start =============== */}
                <div className="speakers-wrapper ">
                    <div className="container position-relative pt-110">
                        <div className="row">
                            <div className="col-lg-12 ">
                                <div className="section-head">
                                    <h3>{t("speaker")}</h3>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {speakers?.data?.data?.map((speaker, index) => (
                                <div
                                    className="col-lg-4 col-md-6 col-sm-6"
                                    key={index}
                                >
                                    <div className="speaker-card">
                                        <div className="speaker-image">
                                            <img
                                                src={
                                                    process.env
                                                        .REACT_APP_SERVER_IP +
                                                    speaker?.user.profileImage
                                                }
                                                alt={
                                                    speaker?.user.firstName +
                                                    " " +
                                                    speaker?.user.lastName
                                                }
                                            />
                                            <ul className="speaker-social-icons">
                                                <li>
                                                    <Link
                                                        onClick={this.scrollTop}
                                                        to={
                                                            speaker?.user
                                                                ?.socials
                                                                ?.facebook
                                                        }
                                                    >
                                                        <i className="fab fa-facebook-f" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        onClick={this.scrollTop}
                                                        to={
                                                            speaker?.user
                                                                ?.socials
                                                                ?.telegram
                                                        }
                                                    >
                                                        <i className="fab fa-instagram" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        onClick={this.scrollTop}
                                                        to={
                                                            speaker?.user
                                                                ?.socials
                                                                ?.linkedIn
                                                        }
                                                    >
                                                        <i className="fab fa-linkedin-in" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        onClick={this.scrollTop}
                                                        to={
                                                            speaker?.user
                                                                ?.socials
                                                                ?.twitter
                                                        }
                                                    >
                                                        <i className="fab fa-twitter" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        onClick={this.scrollTop}
                                                        to={
                                                            speaker?.user
                                                                ?.socials
                                                                ?.whatsapp
                                                        }
                                                    >
                                                        <i className="fab fa-whatsapp" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="speaker-info">
                                            <h5 className="speaker-name">
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={`${process.env.PUBLIC_URL}/speaker-details/${speaker?.id}`}
                                                >
                                                    {speaker?.user.firstName +
                                                        " " +
                                                        speaker?.user.lastName}
                                                </Link>
                                            </h5>
                                            <p style={{ fontFamily: "mikhak" }}>
                                                {speaker?.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <>
                                <RenderPagination
                                    currentPage={
                                        speakers?.data?.payload?.pagination
                                            ?.page
                                    }
                                    totalPages={
                                        speakers?.data?.payload?.pagination
                                            ?.last_page
                                    }
                                    fetchDataFromContext={
                                        this.context.fetchData
                                    }
                                    options={{
                                        page: 1,
                                        totalPages: 12, // this should probably be 'pageSize'
                                        fields: "description,title,user,_id",
                                        dataName: "speakerData",
                                        api: {
                                            apiTitle: "speakers",
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
                {/* ===============  speakers area end =============== */}
            </>
        );
    }
}

export default withTranslation()(Speaker);
