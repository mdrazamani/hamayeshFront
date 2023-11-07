import React, { Component } from "react";
import { Link } from "react-router-dom";
// page animation
import WOW from "wowjs";
import "../../../assets/css/animate.css";
// image import
import BlogIMG1 from "../../../assets/images/blog/b-md1.png";
import BlogIMG2 from "../../../assets/images/blog/b-md2.png";
import BlogIMG3 from "../../../assets/images/blog/b-md3.png";
import BlogIMG4 from "../../../assets/images/blog/b-md4.png";
import BlogIMG5 from "../../../assets/images/blog/b-md5.png";
import BlogIMG6 from "../../../assets/images/blog/b-md6.png";
class Blog extends Component {
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
                                        <h1>blog</h1>
                                    </div>
                                    <h2 className="page-title">Blog</h2>
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
                                        <li>Blog</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  breadcrumb area end =============== */}
                {/* =============== Blog area start =============== */}
                <div className="blog-grid-wrapper ">
                    <div className="container position-relative pt-110">
                        <div className="row">
                            <div className="col-lg-12 ">
                                <div className="background-title text-style-one">
                                    <h2>Latest News</h2>
                                </div>
                                <div className="section-head">
                                    <h3>Latest News</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div
                                className="col-lg-4 col-md-6 wow fadeInUp animated"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="blog-card-md">
                                    <div className="blog-thumb">
                                        <Link
                                            onClick={this.scrollTop}
                                            to={`${process.env.PUBLIC_URL}/blog-details`}
                                        >
                                            <img src={BlogIMG1} alt="Imgs" />
                                        </Link>
                                        <div className="blog-tags">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Business
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <h4 className="blog-title">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog-details`}
                                            >
                                                Vestibulum nec porta erat. In in
                                                lobo turpis Suspendisse rtis.
                                            </Link>
                                        </h4>
                                        <div className="blog-bottom">
                                            <div className="blog-date">
                                                <p>
                                                    {" "}
                                                    <i className="bi bi-calendar2-week" />{" "}
                                                    <span>
                                                        02 Septembar, 2021
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="readme-btn">
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={`${process.env.PUBLIC_URL}/blog-details`}
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6  wow fadeInUp animated"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="blog-card-md">
                                    <div className="blog-thumb">
                                        <Link
                                            onClick={this.scrollTop}
                                            to={`${process.env.PUBLIC_URL}/blog-details`}
                                        >
                                            <img src={BlogIMG2} alt="Imgs" />
                                        </Link>
                                        <div className="blog-tags">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Business
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <h4 className="blog-title">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog-details`}
                                            >
                                                Duis tincidunt ultrices nibh non
                                                ullamcorper Sed nibh leo.
                                            </Link>
                                        </h4>
                                        <div className="blog-bottom">
                                            <div className="blog-date">
                                                <p>
                                                    {" "}
                                                    <i className="bi bi-calendar2-week" />{" "}
                                                    <span>
                                                        02 Septembar, 2021
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="readme-btn">
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={`${process.env.PUBLIC_URL}/blog-details`}
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6  wow fadeInUp animated"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="blog-card-md">
                                    <div className="blog-thumb">
                                        <Link
                                            onClick={this.scrollTop}
                                            to={`${process.env.PUBLIC_URL}/blog-details`}
                                        >
                                            <img src={BlogIMG3} alt="Imgs" />
                                        </Link>
                                        <div className="blog-tags">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Business
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <h4 className="blog-title">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog-details`}
                                            >
                                                Morbi vitae purus a felis
                                                molestie lobortis non non elit.
                                            </Link>
                                        </h4>
                                        <div className="blog-bottom">
                                            <div className="blog-date">
                                                <p>
                                                    {" "}
                                                    <i className="bi bi-calendar2-week" />{" "}
                                                    <span>
                                                        02 Septembar, 2021
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="readme-btn">
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={`${process.env.PUBLIC_URL}/blog-details`}
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 wow fadeInUp animated"
                                data-wow-delay="400ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="blog-card-md">
                                    <div className="blog-thumb">
                                        <Link
                                            onClick={this.scrollTop}
                                            to={`${process.env.PUBLIC_URL}/blog-details`}
                                        >
                                            <img src={BlogIMG4} alt="Imgs" />
                                        </Link>
                                        <div className="blog-tags">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Business
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <h4 className="blog-title">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog-details`}
                                            >
                                                {" "}
                                                Sed aliquet orci purus, et
                                                consectetur tortor bibendum ut.
                                            </Link>
                                        </h4>
                                        <div className="blog-bottom">
                                            <div className="blog-date">
                                                <p>
                                                    {" "}
                                                    <i className="bi bi-calendar2-week" />{" "}
                                                    <span>
                                                        02 Septembar, 2021
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="readme-btn">
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={`${process.env.PUBLIC_URL}/blog-details`}
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6  wow fadeInUp animated"
                                data-wow-delay="400ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="blog-card-md">
                                    <div className="blog-thumb">
                                        <Link
                                            onClick={this.scrollTop}
                                            to={`${process.env.PUBLIC_URL}/blog-details`}
                                        >
                                            <img src={BlogIMG5} alt="Imgs" />
                                        </Link>
                                        <div className="blog-tags">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Business
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <h4 className="blog-title">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog-details`}
                                            >
                                                Proin mi ex, hendrerit mollis mi
                                                non, viverra euismod tortor.
                                            </Link>
                                        </h4>
                                        <div className="blog-bottom">
                                            <div className="blog-date">
                                                <p>
                                                    {" "}
                                                    <i className="bi bi-calendar2-week" />{" "}
                                                    <span>
                                                        02 Septembar, 2021
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="readme-btn">
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={`${process.env.PUBLIC_URL}/blog-details`}
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6  wow fadeInUp animated"
                                data-wow-delay="400ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="blog-card-md">
                                    <div className="blog-thumb">
                                        <Link
                                            onClick={this.scrollTop}
                                            to={`${process.env.PUBLIC_URL}/blog-details`}
                                        >
                                            <img src={BlogIMG6} alt="Imgs" />
                                        </Link>
                                        <div className="blog-tags">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Business
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <h4 className="blog-title">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog-details`}
                                            >
                                                Curabitur a aliquam diam, eget
                                                tempor justo praesent .
                                            </Link>
                                        </h4>
                                        <div className="blog-bottom">
                                            <div className="blog-date">
                                                <p>
                                                    {" "}
                                                    <i className="bi bi-calendar2-week" />{" "}
                                                    <span>
                                                        02 Septembar, 2021
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="readme-btn">
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={`${process.env.PUBLIC_URL}/blog-details`}
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 wow fadeInUp animated"
                                data-wow-delay="500ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="blog-card-md">
                                    <div className="blog-thumb">
                                        <Link
                                            onClick={this.scrollTop}
                                            to={`${process.env.PUBLIC_URL}/blog-details`}
                                        >
                                            <img src={BlogIMG1} alt="Imgs" />
                                        </Link>
                                        <div className="blog-tags">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Business
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <h4 className="blog-title">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog-details`}
                                            >
                                                Fusce porta vulputate leo sit
                                                amet sodales inceptos himenaeos.
                                            </Link>
                                        </h4>
                                        <div className="blog-bottom">
                                            <div className="blog-date">
                                                <p>
                                                    {" "}
                                                    <i className="bi bi-calendar2-week" />{" "}
                                                    <span>
                                                        02 Septembar, 2021
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="readme-btn">
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={`${process.env.PUBLIC_URL}/blog-details`}
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6  wow fadeInUp animated"
                                data-wow-delay="500ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="blog-card-md">
                                    <div className="blog-thumb">
                                        <Link
                                            onClick={this.scrollTop}
                                            to={`${process.env.PUBLIC_URL}/blog-details`}
                                        >
                                            <img src={BlogIMG2} alt="Imgs" />
                                        </Link>
                                        <div className="blog-tags">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Business
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <h4 className="blog-title">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog-details`}
                                            >
                                                Praesent elementum, diam vel
                                                vestibulum vehicula, tellus elit
                                                .
                                            </Link>
                                        </h4>
                                        <div className="blog-bottom">
                                            <div className="blog-date">
                                                <p>
                                                    {" "}
                                                    <i className="bi bi-calendar2-week" />{" "}
                                                    <span>
                                                        02 Septembar, 2021
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="readme-btn">
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={`${process.env.PUBLIC_URL}/blog-details`}
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6  wow fadeInUp animated"
                                data-wow-delay="500ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="blog-card-md">
                                    <div className="blog-thumb">
                                        <Link
                                            onClick={this.scrollTop}
                                            to={`${process.env.PUBLIC_URL}/blog-details`}
                                        >
                                            <img src={BlogIMG3} alt="Imgs" />
                                        </Link>
                                        <div className="blog-tags">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Business
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <h4 className="blog-title">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog-details`}
                                            >
                                                Proin pretium nunc ut nulla
                                                congue, quis dictum ex
                                                tristique.
                                            </Link>
                                        </h4>
                                        <div className="blog-bottom">
                                            <div className="blog-date">
                                                <p>
                                                    {" "}
                                                    <i className="bi bi-calendar2-week" />{" "}
                                                    <span>
                                                        02 Septembar, 2021
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="readme-btn">
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={`${process.env.PUBLIC_URL}/blog-details`}
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 wow fadeInUp animated"
                                data-wow-delay="600ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="blog-card-md">
                                    <div className="blog-thumb">
                                        <Link
                                            onClick={this.scrollTop}
                                            to={`${process.env.PUBLIC_URL}/blog-details`}
                                        >
                                            <img src={BlogIMG4} alt="Imgs" />
                                        </Link>
                                        <div className="blog-tags">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Business
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <h4 className="blog-title">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog-details`}
                                            >
                                                Vestibulum nec porta erat. In in
                                                lobo turpis Suspendisse rtis.
                                            </Link>
                                        </h4>
                                        <div className="blog-bottom">
                                            <div className="blog-date">
                                                <p>
                                                    {" "}
                                                    <i className="bi bi-calendar2-week" />{" "}
                                                    <span>
                                                        02 Septembar, 2021
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="readme-btn">
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={`${process.env.PUBLIC_URL}/blog-details`}
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6  wow fadeInUp animated"
                                data-wow-delay="600ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="blog-card-md">
                                    <div className="blog-thumb">
                                        <Link
                                            onClick={this.scrollTop}
                                            to={`${process.env.PUBLIC_URL}/blog-details`}
                                        >
                                            <img src={BlogIMG5} alt="Imgs" />
                                        </Link>
                                        <div className="blog-tags">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Business
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <h4 className="blog-title">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog-details`}
                                            >
                                                Quisque sit amet tristique
                                                lorem, at blandit odio.
                                            </Link>
                                        </h4>
                                        <div className="blog-bottom">
                                            <div className="blog-date">
                                                <p>
                                                    {" "}
                                                    <i className="bi bi-calendar2-week" />{" "}
                                                    <span>
                                                        02 Septembar, 2021
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="readme-btn">
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={`${process.env.PUBLIC_URL}/blog-details`}
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6  wow fadeInUp animated"
                                data-wow-delay="600ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="blog-card-md">
                                    <div className="blog-thumb">
                                        <Link
                                            onClick={this.scrollTop}
                                            to={`${process.env.PUBLIC_URL}/blog-details`}
                                        >
                                            <img src={BlogIMG6} alt="Imgs" />
                                        </Link>
                                        <div className="blog-tags">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog`}
                                            >
                                                Business
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <h4 className="blog-title">
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/blog-details`}
                                            >
                                                Sed bibendum tellus et ultrices
                                                vehicula. Sed venenatis posuere
                                                mollis.
                                            </Link>
                                        </h4>
                                        <div className="blog-bottom">
                                            <div className="blog-date">
                                                <p>
                                                    {" "}
                                                    <i className="bi bi-calendar2-week" />{" "}
                                                    <span>
                                                        02 Septembar, 2021
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="readme-btn">
                                                <Link
                                                    onClick={this.scrollTop}
                                                    to={`${process.env.PUBLIC_URL}/blog-details`}
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
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
                {/* =============== Blog area end =============== */}
            </>
        );
    }
}

export default Blog;
