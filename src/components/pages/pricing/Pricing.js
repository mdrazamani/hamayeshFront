import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Icons1 from "../../../assets/images/icons/silverl-fa.png";
import Icons2 from "../../../assets/images/icons/gold-fa.png";
import Icons3 from "../../../assets/images/icons/diamond-fa.png";
import DataContext from "../../../context/DataContext";
import PricingArea from "../HomeTwo/PricingArea";

import BreadcrumbComponent from "../../common/breadcrumb.js";
import HelmetComponent from "../../common/helmet.js";

class Pricing extends Component {
    static contextType = DataContext; // Using the contextType to access the DataContext
    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    render() {
        const { t } = this.props;
        const { data, loading, error } = this.context;
        const hamayeshDetail = this.context.data["hamayeshDetail"];

        return (
            <>
                <HelmetComponent
                    title="Ticket_Plan"
                    description="Ticket_Plan_meta_desc"
                    imageUrl={
                        process.env.REACT_APP_SERVER_IP +
                        hamayeshDetail?.data?.headerImage
                    }
                />
                <BreadcrumbComponent
                    translate="Ticket_Plan"
                    headerImageUrl={hamayeshDetail?.data?.headerImage}
                />

                <PricingArea />
            </>
        );
    }
}

export default withTranslation()(Pricing);
