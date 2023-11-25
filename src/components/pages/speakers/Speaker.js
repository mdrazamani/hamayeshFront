import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
// image import

import RenderPagination from "../../common/pagination.js";

import DataContext from "../../../context/DataContext";
import Error from "../../common/Error";

import { makeRoute } from "../../../utils/apiRoutes";
import FetchDataService from "../../../utils/fetchDataFunc.js";
import BreadcrumbComponent from "../../common/breadcrumb.js";
import HelmetComponent from "../../common/helmet.js";

class Speaker extends Component {
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
        window.addEventListener("languageChanged", this.handleLanguageChange);
        this.fetchDataFunction();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.language !== this.state.language) {
            this.fetchDataFunction();
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

        if (!data["speakerData"]) return null;

        // Check if the data is being fetched
        // if (loading["speakerData"]) {
        //     return <Loading />;
        // }

        // Check for errors
        if (error["speakerData"]) {
            return <Error message={error["speakerData"].message} />;
        }

        // Assuming data['speakerData'] is an array of speakers. Adjust depending on your actual data structure
        const speakers = data["speakerData"] || [];
        const hamayeshDetail = this.context.data["hamayeshDetail"];

        return (
            <>
                <HelmetComponent
                    title="speaker"
                    description="speaker_meta_desc"
                    imageUrl={
                        process.env.REACT_APP_SERVER_IP +
                        hamayeshDetail?.data?.headerImage
                    }
                />
                <BreadcrumbComponent
                    translate="speaker"
                    headerImageUrl={hamayeshDetail?.data?.headerImage}
                />

                <div className="speakers-wrapper " key={language}>
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
