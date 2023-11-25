import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LoadingComponent from "./loading";

class BreadcrumbComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language:
                localStorage.getItem("language") ||
                process.env.REACT_APP_DEFAULT_LANGUAGE,
            number: 0,
        };
    }

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
        this.state.number += 1;
        const { t } = this.props;
        const { translate, headerImageUrl } = this.props;
        const backgroundImageUrl =
            process.env.REACT_APP_SERVER_IP + headerImageUrl;
        const breadcrumbStyle = {
            backgroundImage: `linear-gradient(rgba(45, 55, 60, 0.7) 100%, rgba(45, 55, 60, 0.7) 100%), url('${backgroundImageUrl}')`,
        };

        const scrollTop = () => {
            window.scrollTo(0, 0);
        };

        const leftOrRight = `bi bi-caret-${
            language == "fa" ? "left" : "right"
        }`;

        return (
            <>
                <div key={this.state.number}>
                    <LoadingComponent />
                    <div className="breadcrumb-area" style={breadcrumbStyle}>
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-lg-12">
                                    <div className="breadcrumb-content">
                                        <div className="page-outlined-text">
                                            <h1>{t(translate)}</h1>
                                        </div>
                                        <h2 className="page-title">
                                            {t(translate)}
                                        </h2>
                                        <ul className="page-switcher">
                                            <li>
                                                <Link
                                                    onClick={scrollTop}
                                                    to={`${process.env.PUBLIC_URL}/`}
                                                >
                                                    {t("home")}{" "}
                                                    <i
                                                        className={leftOrRight}
                                                    />
                                                </Link>
                                            </li>
                                            <li>{t(translate)}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default withTranslation()(BreadcrumbComponent);
