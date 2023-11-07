import React, { Component } from "react";
import { Link } from "react-router-dom";
// image import
import Speaker1 from "../../../assets/images/speaker/speaker-1.png";
import Speaker2 from "../../../assets/images/speaker/speaker-2.png";
import Speaker3 from "../../../assets/images/speaker/speaker-3.png";
import Speaker4 from "../../../assets/images/speaker/speaker-4.png";
import Speaker5 from "../../../assets/images/speaker/speaker-5.png";
import Speaker6 from "../../../assets/images/speaker/speaker-6.png";
import Speaker7 from "../../../assets/images/speaker/speaker-7.png";
import Speaker8 from "../../../assets/images/speaker/speaker-8.png";
import Speaker9 from "../../../assets/images/speaker/speaker-9.png";

class SpeakerTopBar extends Component {
    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
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
                                        <h1>Speaker Topbar</h1>
                                    </div>
                                    <h2 className="page-title">
                                        Speaker Topbar
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
                                        <li>Speaker Topbar</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  breadcrumb area end =============== */}
                {/* ===============  spekersTopbar area start =============== */}
                <div className="speakers-wrapper ">
                    <div className="container position-relative pt-110">
                        <div className="row">
                            <div className="col-lg-12 ">
                                <div className="background-title text-style-one">
                                    <h2>valuable person</h2>
                                </div>
                                <div className="section-head">
                                    <h3>Talented Speaker</h3>
                                </div>
                            </div>
                        </div>
                        <div className="speaker-topbar">
                            <div className="row justify-content-between">
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-8">
                                            <div className="speaker-select-box speaker-select">
                                                <div className="custom-select filter-options">
                                                    <select>
                                                        <option value={0}>
                                                            All Speaker
                                                        </option>
                                                        <option value={1}>
                                                            {" "}
                                                            Marketing Speaker
                                                        </option>
                                                        <option value={1}>
                                                            Corporate Speaker
                                                        </option>
                                                        <option value={2}>
                                                            Creative Speaker
                                                        </option>
                                                        <option value={3}>
                                                            Graphic Speaker
                                                        </option>
                                                        <option value={3}>
                                                            Web Developing
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-4">
                                            <div className="speaker-tag-box speaker-select">
                                                <div className="custom-select filter-options">
                                                    <select>
                                                        <option value={0}>
                                                            Speaker Tag
                                                        </option>
                                                        <option value={1}>
                                                            {" "}
                                                            Marketing
                                                        </option>
                                                        <option value={1}>
                                                            Corporate
                                                        </option>
                                                        <option value={2}>
                                                            Creative{" "}
                                                        </option>
                                                        <option value={3}>
                                                            Codeing
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="speaker-searchbox">
                                        <form action="#" id="speaker-searchbox">
                                            <div className="sb-searchbar-input">
                                                <input
                                                    type="text"
                                                    placeholder="Search here"
                                                />
                                                <button type="submit">
                                                    <i className="bi bi-search" />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="speaker-card">
                                    <div className="speaker-image">
                                        <img src={Speaker1} alt="Imgs" />
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
                                        <img src={Speaker2} alt="Imgs" />
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
                                        <img src={Speaker3} alt="Imgs" />
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
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="speaker-card">
                                    <div className="speaker-image">
                                        <img src={Speaker4} alt="Imgs" />
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
                                                John Smith
                                            </Link>
                                        </h5>
                                        <p>Senio Visual Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="speaker-card">
                                    <div className="speaker-image">
                                        <img src={Speaker5} alt="Imgs" />
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
                                        <img src={Speaker6} alt="Imgs" />
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
                                                Alex Logan
                                            </Link>
                                        </h5>
                                        <p>Business Manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="speaker-card">
                                    <div className="speaker-image">
                                        <img src={Speaker7} alt="Imgs" />
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
                                                Sebastian Mateo
                                            </Link>
                                        </h5>
                                        <p>Business Manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="speaker-card">
                                    <div className="speaker-image">
                                        <img src={Speaker8} alt="Imgs" />
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
                                                Willow Lucy
                                            </Link>
                                        </h5>
                                        <p>Business Manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="speaker-card">
                                    <div className="speaker-image">
                                        <img src={Speaker9} alt="Imgs" />
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
                                                Hannah Emilia
                                            </Link>
                                        </h5>
                                        <p>Business Manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-pagination text-center">
                                <ul className="page-list">
                                    <li className="has-arrow">
                                        <Link onClick={this.scrollTop} to={"#"}>
                                            <i className="bi bi-chevron-left" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={this.scrollTop}
                                            to={"#"}
                                            className="active-page"
                                        >
                                            1
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={this.scrollTop} to={"#"}>
                                            2
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={this.scrollTop} to={"#"}>
                                            3
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={this.scrollTop} to={"#"}>
                                            4
                                        </Link>
                                    </li>
                                    <li className="has-arrow">
                                        <Link onClick={this.scrollTop} to={"#"}>
                                            <i className="bi bi-chevron-right" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  spekersTopbar area end =============== */}
            </>
        );
    }
}

export default SpeakerTopBar;
