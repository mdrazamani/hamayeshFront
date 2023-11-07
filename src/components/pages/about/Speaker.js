import React, { Component } from "react";
import { Link } from "react-router-dom";
// image import
import Seaker1 from "../../../assets/images/speaker/speaker-1.png";
import Seaker2 from "../../../assets/images/speaker/speaker-2.png";
import Seaker3 from "../../../assets/images/speaker/speaker-3.png";
class Speaker extends Component {
    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    render() {
        return (
            <>
                {/* ===============  Speakers area starts  =============== */}
                <div className="speakers-area">
                    <div className="container position-relative pt-120">
                        <div className="row">
                            <div className="col-lg-12 ">
                                <div className="background-title text-style-one">
                                    <h2>speakers</h2>
                                </div>
                                <div className="section-head">
                                    <h5>Speaker</h5>
                                    <h3>Talented Speaker</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="speaker-card">
                                    <div className="speaker-image">
                                        <img src={Seaker1} alt="" />
                                        <ul className="speaker-social-icons">
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    <i className="fab fa-linkedin-in" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
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
                                                to={`${process.env.PUBLIC_URL}/speaker-details`}
                                            >
                                                Santiago Axel
                                            </Link>
                                        </h5>
                                        <p>Senio Visual Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="speaker-card">
                                    <div className="speaker-image">
                                        <img src={Seaker2} alt="" />
                                        <ul className="speaker-social-icons">
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    <i className="fab fa-linkedin-in" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
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
                                                to={`${process.env.PUBLIC_URL}/speaker-details`}
                                            >
                                                Scarlett Eleanor
                                            </Link>
                                        </h5>
                                        <p>Marketing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="speaker-card">
                                    <div className="speaker-image">
                                        <img src={Seaker3} alt="" />
                                        <ul className="speaker-social-icons">
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    <i className="fab fa-linkedin-in" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
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
                                                to={`${process.env.PUBLIC_URL}/speaker-details`}
                                            >
                                                Jacob Logan
                                            </Link>
                                        </h5>
                                        <p>Business Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  Speakers area end  =============== */}
            </>
        );
    }
}

export default Speaker;
