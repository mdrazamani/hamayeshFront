import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// image import
import BGTextIMG from "../../../assets/images/background-texts/ticket-watermark.png";
import IconIMG1 from "../../../assets/images/icons/diamond-fa2.png";
import IconIMG2 from "../../../assets/images/icons/sliver-fa2.png";

import FetchDataService from "../../../utils/fetchDataFunc.js";
import RenderPagination from "../../common/pagination.js";
import DataContext from "../../../context/DataContext";
import Error from "../../common/Error";

class PricingArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            dataName: "pricings",
            api: {
                apiTitle: "billing/pricing",
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
    render() {
        const { language } = this.state;
        const { t } = this.props;

        const { data, loading, error } = this.context;

        if (!data["pricings"]) return null;

        if (error["pricings"]) {
            return <Error message={error["pricings"].message} />;
        }

        const pricings = data["pricings"] || [];
        const hamayeshDetail = this.context.data["hamayeshDetail"];

        return (
            <>
                {/* ===============  pricing area two start =============== */}
                <div className="pricing-style-two pt-110 position-relative">
                    <div className="watermark-bg mt-110">
                        <img
                            src={BGTextIMG}
                            alt="PrcingIMG"
                            className="img-fluid"
                        />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="section-head-style-two">
                                <h5>{t("Ticket_Plan")}</h5>
                                <h3>
                                    <span>{t("Conference_fees")}</span>
                                </h3>
                            </div>
                        </div>
                        <div className="row">
                            {pricings?.data?.data?.map((price) =>
                                price?.type === "article"
                                    ? price?.rules?.map((rule, i) => (
                                          <div
                                              className="col-lg-4 col-md-6 mb-4"
                                              key={i}
                                          >
                                              <div
                                                  className="pricing-card"
                                                  style={{
                                                      backgroundColor:
                                                          "#ffffff",
                                                      boxShadow:
                                                          "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                                      borderRadius: "7px",
                                                  }}
                                              >
                                                  <div
                                                      className="pricing-card-header"
                                                      style={{
                                                          backgroundColor:
                                                              "#ce1446",
                                                          color: "#ffffff",
                                                          borderTopLeftRadius:
                                                              "7px",
                                                          borderTopRightRadius:
                                                              "7px",
                                                          height: "75px",
                                                      }}
                                                  >
                                                      <h3
                                                          className="pricing-plan-title"
                                                          style={{
                                                              textAlign:
                                                                  "center",
                                                              padding: "20px",
                                                          }}
                                                      >
                                                          {t(
                                                              "Register_with_article"
                                                          )}
                                                      </h3>
                                                      <div className="plan-icon">
                                                          <img
                                                              src={IconIMG2}
                                                              alt="Pricing Icon"
                                                              className="img-fluid"
                                                              style={{
                                                                  borderRadius:
                                                                      "50%",
                                                              }}
                                                          />
                                                      </div>
                                                  </div>
                                                  <div
                                                      className="pricing-card-body"
                                                      style={{
                                                          color: "rgb(33, 37, 41)",
                                                          padding: "20px",
                                                          backgroundColor:
                                                              "#f8f9fa", // پس زمینه روشن برای تمایز بخشیدن
                                                          borderRadius: "10px", // گرد کردن گوشه ها برای ظاهری نرم‌تر
                                                          boxShadow:
                                                              "0px 4px 6px rgba(0, 0, 0, 0.1)", // اضافه کردن سایه برای عمق بیشتر
                                                          fontSize: "18px",
                                                      }}
                                                  >
                                                      <div
                                                          className="pricing-detail"
                                                          style={{
                                                              marginBottom:
                                                                  "15px",
                                                              display: "flex",
                                                              justifyContent:
                                                                  "space-between", // فاصله‌گذاری مناسب بین عناصر
                                                              alignItems:
                                                                  "center", // تراز کردن عناصر در مرکز
                                                              padding: "10px", // فاصله داخلی برای تأکید بیشتر
                                                              borderRadius:
                                                                  "5px", // گرد کردن گوشه‌های داخلی
                                                              backgroundColor:
                                                                  "rgb(248, 249, 250)", // پس زمینه سفید برای تمایز عناصر
                                                          }}
                                                      >
                                                          <span className="pricing-detail-title">
                                                              {t(
                                                                  "article_count"
                                                              )}
                                                          </span>
                                                          <span className="pricing-detail-value">
                                                              {rule?.name}
                                                          </span>
                                                      </div>
                                                      <div
                                                          className="pricing-detail"
                                                          style={{
                                                              display: "flex",
                                                              justifyContent:
                                                                  "space-between",
                                                              alignItems:
                                                                  "center",
                                                              padding: "10px",
                                                              borderRadius:
                                                                  "5px",
                                                              backgroundColor:
                                                                  "rgb(248, 249, 250)",
                                                          }}
                                                      >
                                                          <span className="pricing-detail-title">
                                                              {t("price")}
                                                          </span>
                                                          <span className="pricing-detail-value">
                                                              {
                                                                  rule?.description
                                                              }
                                                          </span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      ))
                                    : price?.type === "freeRegistration"
                                    ? price?.rules?.map((rule, i) => (
                                          <div
                                              className="col-lg-4 col-md-6 mb-4"
                                              key={i}
                                          >
                                              <div
                                                  className="pricing-card"
                                                  style={{
                                                      backgroundColor:
                                                          "#ffffff",
                                                      boxShadow:
                                                          "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                                      borderRadius: "7px",
                                                  }}
                                              >
                                                  <div
                                                      className="pricing-card-header"
                                                      style={{
                                                          backgroundColor:
                                                              "#ce1446",
                                                          color: "#ffffff",
                                                          borderTopLeftRadius:
                                                              "7px",
                                                          borderTopRightRadius:
                                                              "7px",
                                                          height: "75px",
                                                      }}
                                                  >
                                                      <h3
                                                          className="pricing-plan-title"
                                                          style={{
                                                              textAlign:
                                                                  "center",
                                                              padding: "20px",
                                                          }}
                                                      >
                                                          {t(
                                                              "Free_registration"
                                                          )}
                                                      </h3>
                                                      <div className="plan-icon">
                                                          <img
                                                              src={IconIMG2}
                                                              alt="Pricing Icon"
                                                              className="img-fluid"
                                                              style={{
                                                                  borderRadius:
                                                                      "50%",
                                                              }}
                                                          />
                                                      </div>
                                                  </div>
                                                  <div
                                                      className="pricing-card-body"
                                                      style={{
                                                          color: "rgb(33, 37, 41)",
                                                          padding: "20px",
                                                          backgroundColor:
                                                              "#f8f9fa", // پس زمینه روشن برای تمایز بخشیدن
                                                          borderRadius: "10px", // گرد کردن گوشه ها برای ظاهری نرم‌تر
                                                          boxShadow:
                                                              "0px 4px 6px rgba(0, 0, 0, 0.1)", // اضافه کردن سایه برای عمق بیشتر
                                                          fontSize: "18px",
                                                      }}
                                                  >
                                                      <div
                                                          className="pricing-detail"
                                                          style={{
                                                              marginBottom:
                                                                  "15px",
                                                              display: "flex",
                                                              justifyContent:
                                                                  "space-between", // فاصله‌گذاری مناسب بین عناصر
                                                              alignItems:
                                                                  "center", // تراز کردن عناصر در مرکز
                                                              padding: "10px", // فاصله داخلی برای تأکید بیشتر
                                                              borderRadius:
                                                                  "5px", // گرد کردن گوشه‌های داخلی
                                                              backgroundColor:
                                                                  "rgb(248, 249, 250)", // پس زمینه سفید برای تمایز عناصر
                                                          }}
                                                      ></div>
                                                      <div
                                                          className="pricing-detail"
                                                          style={{
                                                              display: "flex",
                                                              justifyContent:
                                                                  "space-between",
                                                              alignItems:
                                                                  "center",
                                                              padding: "10px",
                                                              borderRadius:
                                                                  "5px",
                                                              backgroundColor:
                                                                  "rgb(248, 249, 250)",
                                                          }}
                                                      >
                                                          <span className="pricing-detail-title">
                                                              {t("price")}
                                                          </span>
                                                          <span className="pricing-detail-value">
                                                              {
                                                                  rule?.description
                                                              }
                                                          </span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      ))
                                    : ""
                            )}
                        </div>
                    </div>
                </div>
                {/* ===============  pricing area two end =============== */}
            </>
        );
    }
}

export default withTranslation()(PricingArea);
