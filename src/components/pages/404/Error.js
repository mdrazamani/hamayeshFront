import React, { Component } from "react";
import { Link } from "react-router-dom";
// image import
import errorIllustration from "../../../assets/images/shapes/error-illustration.png";
class Error extends Component {
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
                                        <h1>error</h1>
                                    </div>
                                    <h2 className="page-title">Error</h2>
                                    <ul className="page-switcher">
                                        <li>
                                            <Link
                                                to={`${process.env.PUBLIC_URL}/`}
                                            >
                                                Home{" "}
                                                <i className="bi bi-caret-left" />
                                            </Link>
                                        </li>
                                        <li>Error</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  breadcrumb area end =============== */}
                {/* ===============  error area start =============== */}
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
                                    <h3>That Page Are Not Found</h3>
                                    <div className="error-back-btn">
                                        <Link
                                            to={`${process.env.PUBLIC_URL}/`}
                                            className="primary-btn-fill"
                                        >
                                            GO TO HOME
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

export default Error;
