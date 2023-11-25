import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
// image import
import errorIllustration from "../../../assets/images/shapes/error-illustration.png";
import DataContext from "../../../context/DataContext";
import BreadcrumbComponent from "../../common/breadcrumb.js";
import HelmetComponent from "../../common/helmet.js";

class Error extends Component {
    static contextType = DataContext; // Using the contextType to access the DataContext

    render() {
        const { t } = this.props;
        const hamayeshDetail = this.context.data["hamayeshDetail"];

        return (
            <>
                <HelmetComponent
                    title="conference_404"
                    description="conference_404_meta_desc"
                    imageUrl={
                        process.env.REACT_APP_SERVER_IP +
                        hamayeshDetail?.data?.headerImage
                    }
                />
                <BreadcrumbComponent
                    translate="conference_404"
                    headerImageUrl={hamayeshDetail?.data?.headerImage}
                />
                <div className="error-wrapper mt-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="error-content text-center">
                                    <div className="error-illustration">
                                        <img
                                            src={errorIllustration}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <h3>{t("That_Page_Are_Not_Found")}</h3>
                                    <div className="error-back-btn">
                                        <Link
                                            to={`${process.env.PUBLIC_URL}/`}
                                            className="primary-btn-fill"
                                        >
                                            {t("GO_TO_HOME")}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  error area end =============== */}
            </>
        );
    }
}

export default withTranslation()(Error);
