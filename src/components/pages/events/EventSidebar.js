import React, { Component } from "react";
import { Link } from "react-router-dom";
// page animation
import WOW from "wowjs";
import "../../../assets/css/animate.css";
// image import
import subBanner from "../../../assets/images/banners/sb-banner.png";
import EventThumb1 from "../../../assets/images/event/ev-md1.png";
import EventThumb2 from "../../../assets/images/event/ev-md2.png";
import EventThumb3 from "../../../assets/images/event/ev-md3.png";
import EventThumb4 from "../../../assets/images/event/ev-md4.png";
import EventThumb5 from "../../../assets/images/event/ev-md5.png";
import EventThumb6 from "../../../assets/images/event/ev-md6.png";
import EventThumb7 from "../../../assets/images/event/ev-md7.png";
import EventThumb8 from "../../../assets/images/event/ev-md8.png";
class EventSidebar extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
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
                                        <h1>Event</h1>
                                    </div>
                                    <h2 className="page-title">
                                        Event Sidebar
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
                                        <li>Event Sidebar</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  breadcrumb area end =============== */}
                {/* ===============  Event Area start  =============== */}
                <div className="event-sidebar-wrapper ">
                    <div className="container pt-96 position-relative">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="background-title text-style-one">
                                    <h2>Popular Event</h2>
                                </div>
                                <div className="event-sidebar">
                                    <form
                                        action="#"
                                        id="sb-searchbar-form"
                                        className="sb-searchbar-form"
                                    >
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
                                    <div className="sb-category">
                                        <div className="category-title">
                                            <i className="bi bi-list-task" />{" "}
                                            <h4>Category</h4>
                                        </div>
                                        <ul className="category-list">
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    Business
                                                    <div className="category-lavel">
                                                        <span>20</span>
                                                        <i className="bi bi-box-arrow-right" />
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    Marketing
                                                    <div className="category-lavel">
                                                        <span>10</span>
                                                        <i className="bi bi-box-arrow-right" />
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    Web Development
                                                    <div className="category-lavel">
                                                        <span>50</span>
                                                        <i className="bi bi-box-arrow-right" />
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    Accounting
                                                    <div className="category-lavel">
                                                        <span>07</span>
                                                        <i className="bi bi-box-arrow-right" />
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    Software
                                                    <div className="category-lavel">
                                                        <span>18</span>
                                                        <i className="bi bi-box-arrow-right" />
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    Graphic Design
                                                    <div className="category-lavel">
                                                        <span>12</span>
                                                        <i className="bi bi-box-arrow-right" />
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    Web Design
                                                    <div className="category-lavel">
                                                        <span>00</span>
                                                        <i className="bi bi-box-arrow-right" />
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sb-tags">
                                        <div className="category-title">
                                            <i className="bi bi-tags" />{" "}
                                            <h4>Tags</h4>
                                        </div>
                                        <ul className="tag-list">
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    Business
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    Marketing
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    Web
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    Marketing
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    Speaker
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    Design
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    Graphic
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    Software
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    Business
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sb-banner">
                                        <Link
                                            onClick={this.scrollTop}
                                            to={`${process.env.PUBLIC_URL}/event-details`}
                                        >
                                            <img
                                                src={subBanner}
                                                alt="Imgs"
                                                className="img-fluid"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div
                                        className="col-lg-6 col-md-6 wow fadeInUp animated"
                                        data-wow-delay="200ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="event-card-md">
                                            <div className="event-thumb">
                                                <img
                                                    src={EventThumb1}
                                                    alt="Imgs"
                                                />
                                                <div className="event-lavel">
                                                    <i className="bi bi-diagram-3" />
                                                    <span>500 Seat</span>
                                                </div>
                                            </div>
                                            <div className="event-content">
                                                <div className="event-info">
                                                    <div className="event-date">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={"#"}
                                                        >
                                                            <i className="bi bi-calendar2-week" />{" "}
                                                            January 21, 2021
                                                        </Link>
                                                    </div>
                                                    <div className="event-location">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={"#"}
                                                        >
                                                            <i className="bi bi-geo-alt" />{" "}
                                                            Broadw, New York
                                                        </Link>
                                                    </div>
                                                </div>
                                                <h5 className="event-title">
                                                    <Link
                                                        onClick={this.scrollTop}
                                                        to={`${process.env.PUBLIC_URL}/event-details`}
                                                    >
                                                        Media companies need to
                                                        better one then educate
                                                        advertisers.
                                                    </Link>
                                                </h5>
                                                <div className="event-bottom">
                                                    <div className="event-readme">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={`${process.env.PUBLIC_URL}/event-details`}
                                                        >
                                                            Book Now
                                                        </Link>
                                                    </div>
                                                    <div className="event-share-icons">
                                                        <ul className="share-options">
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-facebook-f" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-instagram" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-linkedin-in" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-twitter" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <div className="share-btn">
                                                            <i className="bi bi-share" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-6 col-md-6 wow fadeInUp animated"
                                        data-wow-delay="200ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="event-card-md">
                                            <div className="event-thumb">
                                                <img
                                                    src={EventThumb2}
                                                    alt="Imgs"
                                                />
                                                <div className="event-lavel">
                                                    <i className="bi bi-diagram-3" />
                                                    <span>500 Seat</span>
                                                </div>
                                            </div>
                                            <div className="event-content">
                                                <div className="event-info">
                                                    <div className="event-date">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={"#"}
                                                        >
                                                            <i className="bi bi-calendar2-week" />{" "}
                                                            January 21, 2021
                                                        </Link>
                                                    </div>
                                                    <div className="event-location">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={"#"}
                                                        >
                                                            <i className="bi bi-geo-alt" />{" "}
                                                            Broadw, New York
                                                        </Link>
                                                    </div>
                                                </div>
                                                <h5 className="event-title">
                                                    <Link
                                                        onClick={this.scrollTop}
                                                        to={`${process.env.PUBLIC_URL}/event-details`}
                                                    >
                                                        companies share
                                                        strategies to Then
                                                        capture audiences on
                                                        mobile.
                                                    </Link>
                                                </h5>
                                                <div className="event-bottom">
                                                    <div className="event-readme">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={`${process.env.PUBLIC_URL}/event-details`}
                                                        >
                                                            Book Now
                                                        </Link>
                                                    </div>
                                                    <div className="event-share-icons">
                                                        <ul className="share-options">
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-facebook-f" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-instagram" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-linkedin-in" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-twitter" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <div className="share-btn">
                                                            <i className="bi bi-share" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-6 col-md-6 wow fadeInUp animated"
                                        data-wow-delay="200ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="event-card-md">
                                            <div className="event-thumb">
                                                <img
                                                    src={EventThumb3}
                                                    alt="Imgs"
                                                />
                                                <div className="event-lavel">
                                                    <i className="bi bi-diagram-3" />
                                                    <span>500 Seat</span>
                                                </div>
                                            </div>
                                            <div className="event-content">
                                                <div className="event-info">
                                                    <div className="event-date">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={"#"}
                                                        >
                                                            <i className="bi bi-calendar2-week" />{" "}
                                                            January 21, 2021
                                                        </Link>
                                                    </div>
                                                    <div className="event-location">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={"#"}
                                                        >
                                                            <i className="bi bi-geo-alt" />{" "}
                                                            Broadw, New York
                                                        </Link>
                                                    </div>
                                                </div>
                                                <h5 className="event-title">
                                                    <Link
                                                        onClick={this.scrollTop}
                                                        to={`${process.env.PUBLIC_URL}/event-details`}
                                                    >
                                                        Proactive transformation
                                                        requires embrace of
                                                        technology.
                                                    </Link>
                                                </h5>
                                                <div className="event-bottom">
                                                    <div className="event-readme">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={`${process.env.PUBLIC_URL}/event-details`}
                                                        >
                                                            Book Now
                                                        </Link>
                                                    </div>
                                                    <div className="event-share-icons">
                                                        <ul className="share-options">
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-facebook-f" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-instagram" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-linkedin-in" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-twitter" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <div className="share-btn">
                                                            <i className="bi bi-share" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-6 col-md-6 wow fadeInUp animated"
                                        data-wow-delay="400ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="event-card-md">
                                            <div className="event-thumb">
                                                <img
                                                    src={EventThumb4}
                                                    alt="Imgs"
                                                />
                                                <div className="event-lavel">
                                                    <i className="bi bi-diagram-3" />
                                                    <span>500 Seat</span>
                                                </div>
                                            </div>
                                            <div className="event-content">
                                                <div className="event-info">
                                                    <div className="event-date">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={"#"}
                                                        >
                                                            <i className="bi bi-calendar2-week" />{" "}
                                                            January 21, 2021
                                                        </Link>
                                                    </div>
                                                    <div className="event-location">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={"#"}
                                                        >
                                                            <i className="bi bi-geo-alt" />{" "}
                                                            Broadw, New York
                                                        </Link>
                                                    </div>
                                                </div>
                                                <h5 className="event-title">
                                                    <Link
                                                        onClick={this.scrollTop}
                                                        to={`${process.env.PUBLIC_URL}/event-details`}
                                                    >
                                                        Proactive transformation
                                                        requires embrace of
                                                        technology.
                                                    </Link>
                                                </h5>
                                                <div className="event-bottom">
                                                    <div className="event-readme">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={`${process.env.PUBLIC_URL}/event-details`}
                                                        >
                                                            Book Now
                                                        </Link>
                                                    </div>
                                                    <div className="event-share-icons">
                                                        <ul className="share-options">
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-facebook-f" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-instagram" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-linkedin-in" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-twitter" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <div className="share-btn">
                                                            <i className="bi bi-share" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-6 col-md-6 wow fadeInUp animated"
                                        data-wow-delay="400ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="event-card-md">
                                            <div className="event-thumb">
                                                <img
                                                    src={EventThumb5}
                                                    alt="Imgs"
                                                />
                                                <div className="event-lavel">
                                                    <i className="bi bi-diagram-3" />
                                                    <span>500 Seat</span>
                                                </div>
                                            </div>
                                            <div className="event-content">
                                                <div className="event-info">
                                                    <div className="event-date">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={"#"}
                                                        >
                                                            <i className="bi bi-calendar2-week" />{" "}
                                                            January 21, 2021
                                                        </Link>
                                                    </div>
                                                    <div className="event-location">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={"#"}
                                                        >
                                                            <i className="bi bi-geo-alt" />{" "}
                                                            Broadw, New York
                                                        </Link>
                                                    </div>
                                                </div>
                                                <h5 className="event-title">
                                                    <Link
                                                        onClick={this.scrollTop}
                                                        to={`${process.env.PUBLIC_URL}/event-details`}
                                                    >
                                                        Proactive transformation
                                                        requires embrace of
                                                        technology.
                                                    </Link>
                                                </h5>
                                                <div className="event-bottom">
                                                    <div className="event-readme">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={`${process.env.PUBLIC_URL}/event-details`}
                                                        >
                                                            Book Now
                                                        </Link>
                                                    </div>
                                                    <div className="event-share-icons">
                                                        <ul className="share-options">
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-facebook-f" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-instagram" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-linkedin-in" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-twitter" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <div className="share-btn">
                                                            <i className="bi bi-share" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-6 col-md-6 wow fadeInUp animated"
                                        data-wow-delay="400ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="event-card-md">
                                            <div className="event-thumb">
                                                <img
                                                    src={EventThumb6}
                                                    alt="Imgs"
                                                />
                                                <div className="event-lavel">
                                                    <i className="bi bi-diagram-3" />
                                                    <span>500 Seat</span>
                                                </div>
                                            </div>
                                            <div className="event-content">
                                                <div className="event-info">
                                                    <div className="event-date">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={"#"}
                                                        >
                                                            <i className="bi bi-calendar2-week" />{" "}
                                                            January 21, 2021
                                                        </Link>
                                                    </div>
                                                    <div className="event-location">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={"#"}
                                                        >
                                                            <i className="bi bi-geo-alt" />{" "}
                                                            Broadw, New York
                                                        </Link>
                                                    </div>
                                                </div>
                                                <h5 className="event-title">
                                                    <Link
                                                        onClick={this.scrollTop}
                                                        to={`${process.env.PUBLIC_URL}/event-details`}
                                                    >
                                                        Proactive transformation
                                                        requires embrace of
                                                        technology.
                                                    </Link>
                                                </h5>
                                                <div className="event-bottom">
                                                    <div className="event-readme">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={`${process.env.PUBLIC_URL}/event-details`}
                                                        >
                                                            Book Now
                                                        </Link>
                                                    </div>
                                                    <div className="event-share-icons">
                                                        <ul className="share-options">
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-facebook-f" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-instagram" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-linkedin-in" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-twitter" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <div className="share-btn">
                                                            <i className="bi bi-share" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-6 col-md-6 wow fadeInUp animated"
                                        data-wow-delay="200ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="event-card-md">
                                            <div className="event-thumb">
                                                <img
                                                    src={EventThumb7}
                                                    alt="Imgs"
                                                />
                                                <div className="event-lavel">
                                                    <i className="bi bi-diagram-3" />
                                                    <span>500 Seat</span>
                                                </div>
                                            </div>
                                            <div className="event-content">
                                                <div className="event-info">
                                                    <div className="event-date">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={"#"}
                                                        >
                                                            <i className="bi bi-calendar2-week" />{" "}
                                                            January 21, 2021
                                                        </Link>
                                                    </div>
                                                    <div className="event-location">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={"#"}
                                                        >
                                                            <i className="bi bi-geo-alt" />{" "}
                                                            Broadw, New York
                                                        </Link>
                                                    </div>
                                                </div>
                                                <h5 className="event-title">
                                                    <Link
                                                        onClick={this.scrollTop}
                                                        to={`${process.env.PUBLIC_URL}/event-details`}
                                                    >
                                                        Media companies need to
                                                        better one then educate
                                                        advertisers.
                                                    </Link>
                                                </h5>
                                                <div className="event-bottom">
                                                    <div className="event-readme">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={`${process.env.PUBLIC_URL}/event-details`}
                                                        >
                                                            Book Now
                                                        </Link>
                                                    </div>
                                                    <div className="event-share-icons">
                                                        <ul className="share-options">
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-facebook-f" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-instagram" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-linkedin-in" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-twitter" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <div className="share-btn">
                                                            <i className="bi bi-share" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-6 col-md-6 wow fadeInUp animated"
                                        data-wow-delay="200ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="event-card-md">
                                            <div className="event-thumb">
                                                <img
                                                    src={EventThumb8}
                                                    alt="Imgs"
                                                />
                                                <div className="event-lavel">
                                                    <i className="bi bi-diagram-3" />
                                                    <span>500 Seat</span>
                                                </div>
                                            </div>
                                            <div className="event-content">
                                                <div className="event-info">
                                                    <div className="event-date">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={"#"}
                                                        >
                                                            <i className="bi bi-calendar2-week" />{" "}
                                                            January 21, 2021
                                                        </Link>
                                                    </div>
                                                    <div className="event-location">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={"#"}
                                                        >
                                                            <i className="bi bi-geo-alt" />{" "}
                                                            Broadw, New York
                                                        </Link>
                                                    </div>
                                                </div>
                                                <h5 className="event-title">
                                                    <Link
                                                        onClick={this.scrollTop}
                                                        to={`${process.env.PUBLIC_URL}/event-details`}
                                                    >
                                                        companies share
                                                        strategies to Then
                                                        capture audiences on
                                                        mobile.
                                                    </Link>
                                                </h5>
                                                <div className="event-bottom">
                                                    <div className="event-readme">
                                                        <Link
                                                            onClick={
                                                                this.scrollTop
                                                            }
                                                            to={`${process.env.PUBLIC_URL}/event-details`}
                                                        >
                                                            Book Now
                                                        </Link>
                                                    </div>
                                                    <div className="event-share-icons">
                                                        <ul className="share-options">
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-facebook-f" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-instagram" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-linkedin-in" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    onClick={
                                                                        this
                                                                            .scrollTop
                                                                    }
                                                                    to={"#"}
                                                                >
                                                                    <i className="fab fa-twitter" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <div className="share-btn">
                                                            <i className="bi bi-share" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-pagination text-center">
                                        <ul className="page-list">
                                            <li className="has-arrow">
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
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
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    3
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    4
                                                </Link>
                                            </li>
                                            <li className="has-arrow">
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={"#"}
                                                >
                                                    <i className="bi bi-chevron-right" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  Event Area end  =============== */}
            </>
        );
    }
}

export default EventSidebar;
