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
// import Loading from "../../common/Loading";
import FetchDataService from "../../../utils/fetchDataFunc";
import RenderPagination from "../../common/pagination";

import BreadcrumbComponent from "../../common/breadcrumb.js";
import HelmetComponent from "../../common/helmet.js";

class Gallary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openNodes: {},
            language:
                localStorage.getItem("language") ||
                process.env.REACT_APP_DEFAULT_LANGUAGE,
            number: 0,
        };
    }

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
        window.addEventListener("languageChanged", this.handleLanguageChange);
        this.fetchDataFunction();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.language !== this.state.language) {
            this.fetchDataFunction();
        }
    }

    componentWillUnmount() {
        window.removeEventListener(
            "languageChanged",
            this.handleLanguageChange
        );
    }

    handleLanguageChange = (event) => {
        if (event.detail !== this.state.language) {
            this.setState({ language: event.detail });
        }
    };

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

        const { language } = this.state;
        // this.state.number += 1;
        const { t } = this.props;
        const { data, loading, error } = this.context;

        if (!data["galleryData"]) return null;
        // Check if the data is being fetched
        // if (loading["galleryData"]) {
        //     return <Loading />;
        // }

        // Check for errors
        if (error["galleryData"]) {
            return <Error message={error["galleryData"].message} />;
        }

        const galleries = data["galleryData"] || [];
        const hamayeshDetail = this.context.data["hamayeshDetail"];

        return (
            <>
                <HelmetComponent
                    title="Gallery"
                    description="Gallery_meta_desc"
                    imageUrl={
                        process.env.REACT_APP_SERVER_IP +
                        hamayeshDetail?.data?.headerImage
                    }
                />
                <BreadcrumbComponent
                    translate="Gallery"
                    headerImageUrl={hamayeshDetail?.data?.headerImage}
                />

                <div className="gallary-wrapper" key={language}>
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
                                    // direction: "ltr",
                                }}
                            >
                                <div className="gallary-group-header">
                                    <h4 className="gallary-group-title">
                                        {gallery?.category}
                                    </h4>
                                    <div
                                        className="gallary-arrows text-center d-lg-block d-none"
                                        style={{ direction: "ltr" }}
                                    >
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

                        {/* {galleries?.data?.data?.map((gallery, index) => (
                            <div
                                className="gallary-group"
                                key={"gallery-group-" + index}
                                style={{ marginBottom: "150px" }}
                            >
                                <div className="gallary-group-header">
                                    <h4 className="gallary-group-title">
                                        {gallery?.category}
                                    </h4>
                                    
                                </div>
                                <div className="row">
                                    <div className="swiper gallary-slider">
                                        <Gallery
                                            images={gallery?.images}
                                            galleryIndex={index}
                                            getSwiperConfig={getSwiperConfig}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))} */}
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
