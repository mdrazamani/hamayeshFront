import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Icons1 from "../../../assets/images/icons/silverl-fa.png";
import Icons2 from "../../../assets/images/icons/gold-fa.png";
import Icons3 from "../../../assets/images/icons/diamond-fa.png";
import DataContext from "../../../context/DataContext";
import PricingArea from "../HomeTwo/PricingArea";
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
                                        <h1>SPONSOR TICKET</h1>
                                    </div>
                                    <h2 className="page-title">
                                        {t("Ticket_Plan")}
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
                                        <li>{t("Ticket_Plan")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PricingArea />
            </>
        );
    }
}

export default withTranslation()(Pricing);
