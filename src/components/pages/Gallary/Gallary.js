import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
// Swiper slider imported

import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";

import DataContext from "../../../context/DataContext";
import Error from "../../common/Error";
import Loading from "../../common/Loading";
import FetchDataService from "../../../utils/fetchDataFunc";
import RenderPagination from "../../common/pagination";

class Gallary extends Component {
    static contextType = DataContext; // Using the contextType to access the DataContext

    fetchDataFunction = () => {
        // Options should be set according to the parameters your API needs
        const options = {
            page: 1,
            totalPages: 12, // this should probably be 'pageSize'
            dataName: "galleryData",
            api: {
                apiTitle: "galleries",
                id: null, // If these values are unnecessary, you could remove them
                subTitle: null, // same as above
                options: null, // same as above
            },
        };

        // Here, we're passing the context's fetchData method to our service
        FetchDataService(this.context.fetchData, options);
    };

    componentDidMount() {
        this.fetchDataFunction();
    }

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    slideShow(images, galleryIndex) {
        const chunk = (array, size) => {
            let chunked = [];
            for (let i = 0; i < array.length; i += size) {
                chunked.push(array.slice(i, i + size));
            }
            return chunked;
        };

        const imageGroups = chunk(images || [], 3);

        return imageGroups.map((imageGroup, groupIndex) => (
            <SwiperSlide
                className="swiper-slide"
                key={"gallery-" + galleryIndex + "-slide-" + groupIndex}
            >
                {imageGroup.map((image, iIndex) => (
                    <div
                        className="gallary-item"
                        key={
                            "gallery-" +
                            galleryIndex +
                            "-slide-" +
                            groupIndex +
                            "-img-" +
                            iIndex
                        }
                    >
                        <img
                            src={process.env.REACT_APP_SERVER_IP + image.path}
                            alt={image.title}
                        />
                        <a
                            key={
                                "gallery-" +
                                galleryIndex +
                                "-slide-" +
                                groupIndex +
                                "-img-" +
                                iIndex
                            }
                            className="gallary-item-overlay"
                            href={process.env.REACT_APP_SERVER_IP + image.path}
                        >
                            <img
                                src={
                                    process.env.REACT_APP_SERVER_IP + image.path
                                }
                                alt={image.title}
                            />
                        </a>
                        <span>{image.title}</span>
                    </div>
                ))}
            </SwiperSlide>
        ));
    }

    render() {
        const getSwiperConfig = (index) => ({
            slidesPerView: 1,
            speed: 1000,
            spaceBetween: 24,
            loop: true,
            centeredSlides: true,
            roundLengths: true,
            autoplay: {
                delay: 9000,
            },
            navigation: {
                nextEl: ".gallary-next-" + index,
                prevEl: ".gallary-prev-" + index,
            },

            breakpoints: {
                480: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 3,
                },
            },
        });

        const { t } = this.props;
        const { data, loading, error } = this.context;

        if (!data["galleryData"]) return null;
        // Check if the data is being fetched
        if (loading["galleryData"]) {
            return <Loading />;
        }

        // Check for errors
        if (error["galleryData"]) {
            return <Error message={error["galleryData"].message} />;
        }

        const galleries = data["galleryData"] || [];
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
                                        <h1>{t("Gallery")}</h1>
                                    </div>
                                    <h2 className="page-title">
                                        {t("Gallery")}
                                    </h2>
                                    <ul className="page-switcher">
                                        <li>
                                            <Link to={"/"}>
                                                Home{" "}
                                                <i className="bi bi-caret-left" />
                                            </Link>
                                        </li>
                                        <li>{t("Gallery")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  breadcrumb area end =============== */}
                {/* ===============  gallary wrapper start =============== */}
                <div className="gallary-wrapper">
                    <div className="container pt-110 position-relative">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="background-title text-style-one">
                                    <h2>{t("Gallery")}</h2>
                                </div>
                                <div className="section-head">
                                    <h3>{t("Gallery")}</h3>
                                </div>
                            </div>
                        </div>

                        {galleries?.data?.data?.map((gallery, index) => (
                            <div
                                className="gallary-group"
                                key={"gallery-group-" + index}
                                style={{
                                    marginBottom: "150px",
                                    direction: "ltr",
                                }}
                            >
                                <div className="gallary-group-header">
                                    <h4 className="gallary-group-title">
                                        {gallery?.category}
                                    </h4>
                                    <div className="gallary-arrows text-center d-lg-block d-none">
                                        <div
                                            className={`gallary-button-prev gallary-prev-${index}`}
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Previous slide"
                                        >
                                            <i className="bi bi-chevron-left" />
                                        </div>
                                        <div
                                            className={`gallary-button-next gallary-next-${index}`}
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Next slide"
                                        >
                                            <i className="bi bi-chevron-right" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="swiper gallary-slider">
                                        <SRLWrapper key={index}>
                                            <Swiper
                                                className="swiper-wrapper"
                                                {...getSwiperConfig(index)}
                                                key={"swiper-" + index}
                                            >
                                                {this.slideShow(
                                                    gallery?.images,
                                                    index
                                                )}
                                            </Swiper>
                                        </SRLWrapper>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <>
                    <RenderPagination
                        currentPage={galleries?.data?.payload?.pagination?.page}
                        totalPages={
                            galleries?.data?.payload?.pagination?.last_page
                        }
                        fetchDataFromContext={this.context.fetchData}
                        options={{
                            page: 1,
                            totalPages: 12, // this should probably be 'pageSize'
                            dataName: "galleryData",
                            api: {
                                apiTitle: "galleries",
                                id: null, // If these values are unnecessary, you could remove them
                                subTitle: null, // same as above
                                options: null, // same as above
                            },
                        }}
                        // onPageChange={this.handlePageChange}
                    />
                </>

                {/* ===============  gallary wrapper end =============== */}
            </>
        );
    }
}

export default withTranslation()(Gallary);
