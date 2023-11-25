import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DataContext from "../../../context/DataContext";

import BreadcrumbComponent from "../../common/breadcrumb.js";
import HelmetComponent from "../../common/helmet.js";

class Breadcrumb extends Component {
    static contextType = DataContext; // Using the contextType to access the DataContext

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    render() {
        const { t } = this.props;
        const hamayeshDetail = this.context.data["hamayeshDetail"];

        return (
            <>
                <HelmetComponent
                    title="About_Us"
                    description="About_Us_meta_desc"
                    imageUrl={
                        process.env.REACT_APP_SERVER_IP +
                        hamayeshDetail?.data?.headerImage
                    }
                />
                <BreadcrumbComponent
                    translate="About_Us"
                    headerImageUrl={hamayeshDetail?.data?.headerImage}
                />
            </>
        );
    }
}

export default withTranslation()(Breadcrumb);
