import React from "react";
import { Link } from "react-router-dom";
import FetchDataService from "../../utils/fetchDataFunc";

const changePage = (newPage, fetchDataFromContext, options) => {
    options.page = newPage;
    FetchDataService(fetchDataFromContext, options);
};

const goTopScroll = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

const RenderPagination = ({
    currentPage,
    totalPages,
    fetchDataFromContext,
    options,
}) => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(
            <li key={i}>
                <Link
                    onClick={() => {
                        changePage(i, fetchDataFromContext, options);
                        goTopScroll();
                    }}
                    to={"#"}
                    className={currentPage === i ? "active-page" : ""}
                >
                    {i}
                </Link>
            </li>
        );
    }

    if (totalPages == 1) {
        return null;
    }

    return (
        <div className="custom-pagination text-center">
            <ul className="page-list" style={{ direction: "ltr" }}>
                {currentPage > 1 ? (
                    <li className="has-arrow">
                        <Link
                            onClick={() => {
                                changePage(
                                    currentPage - 1,
                                    fetchDataFromContext,
                                    options
                                );
                                goTopScroll();
                            }}
                            to={"#"}
                        >
                            <i className="bi bi-chevron-left" />
                        </Link>
                    </li>
                ) : null}

                {pages}

                {currentPage < totalPages ? (
                    <li className="has-arrow">
                        <Link
                            onClick={() => {
                                changePage(
                                    currentPage + 1,
                                    fetchDataFromContext,
                                    options
                                );
                                goTopScroll();
                            }}
                            to={"#"}
                        >
                            <i className="bi bi-chevron-right" />
                        </Link>
                    </li>
                ) : null}
            </ul>
        </div>
    );
};

// RenderPagination.propTypes = {
//     currentPage: PropTypes.number.isRequired,
//     totalPages: PropTypes.number.isRequired,
//     options: PropTypes.object,
//     onPageChange: PropTypes.func.isRequired,
// };

export default RenderPagination;
