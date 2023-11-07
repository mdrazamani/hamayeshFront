import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { makeRoute } from "../../../utils/apiRoutes";
import DataContext from "../../../context/DataContext";
import "./write.css";

class WritingGuide extends Component {
    static contextType = DataContext;

    componentDidMount() {}

    render() {
        const { t } = this.props;
        const hamayeshDetail = this.context.data["hamayeshDetail"];

        return (
            <>
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
                </div>

                <div className="description-container">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: hamayeshDetail?.data?.writingArticles
                                ?.description,
                        }}
                    />
                </div>
                <div
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
