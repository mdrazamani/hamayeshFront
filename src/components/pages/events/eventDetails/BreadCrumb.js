import React, { Component } from "react";
import { Link } from "react-router-dom";

class BreadCrumb extends Component {
    render() {
        return (
            <>
                {/* ===============  breadcrumb area start =============== */}
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="breadcrumb-content">
                                    <div className="page-outlined-text">
                                        <h1>Event Details</h1>
                                    </div>
                                    <h2 className="page-title">
                                        Event Details
                                    </h2>
                                    <ul className="page-switcher">
                                        <li>
                                            <Link
                                                to={`${process.env.PUBLIC_URL}/`}
                                            >
                                                Home{" "}
                                                <i className="bi bi-caret-left" />
                                            </Link>
                                        </li>
                                        <li>Event Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  breadcrumb area end =============== */}
            </>
        );
    }
}

export default BreadCrumb;
