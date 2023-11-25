import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { makeRoute } from "../../../utils/apiRoutes";
import DataContext from "../../../context/DataContext";
import "./write.css";
import { decodeHtmlEntities } from "../../../utils/decodeHtmlEntities";
import "../../../assets/css/ckeditor.css";
import BreadcrumbComponent from "../../common/breadcrumb.js";
import HelmetComponent from "../../common/helmet.js";

class WritingGuide extends Component {
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

    render() {
        const { language } = this.state;
        // this.state.number += 1;
        const { t } = this.props;
        const hamayeshDetail = this.context.data["hamayeshDetail"];

        return (
            <>
                <HelmetComponent
                    title="Essay_writing_guide"
                    description="Essay_writing_guide_meta_desc"
                    imageUrl={
                        process.env.REACT_APP_SERVER_IP +
                        hamayeshDetail?.data?.headerImage
                    }
                />
                <BreadcrumbComponent
                    translate="Essay_writing_guide"
                    headerImageUrl={hamayeshDetail?.data?.headerImage}
                />

                {/* <div
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
                                        <h1>{t("Essay_writing_guide")}</h1>
                                    </div>
                                    <h2 className="page-title">
                                        {t("Essay_writing_guide")}
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
                                        <li>{t("Essay_writing_guide")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="description-container">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: decodeHtmlEntities(
                                hamayeshDetail?.data?.writingArticles
                                    ?.description
                            ),
                        }}
                    />
                </div>
                <div
                    key={language}
                    className="row"
                    style={{
                        textAlign: "center",
                        marginLeft: "50px",
                        marginRight: "50px",
                        marginTop: "50px",
                    }}
                >
                    {hamayeshDetail?.data?.writingArticles?.files?.map(
                        (file) => (
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="image-container">
                                        <img
                                            style={{
                                                width: "50%",
                                                height: "120px",
                                                objectFit: "cover",
                                            }}
                                            src={
                                                process.env
                                                    .REACT_APP_SERVER_IP +
                                                file?.image
                                            }
                                            alt={file?.title}
                                        />
                                    </div>
                                    <div className="title">{file?.title}</div>
                                    <div className="desc">
                                        {file?.description}
                                    </div>
                                    <a
                                        href={
                                            process.env.REACT_APP_SERVER_IP +
                                            file?.path
                                        }
                                        className="download-btn"
                                    >
                                        {t("Download")}
                                    </a>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </>
        );
    }
}

export default withTranslation()(WritingGuide);
