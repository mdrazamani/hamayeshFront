import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

import DataContext from "../../context/DataContext";
import Error from "../common/Error";
import Loading from "../common/Loading";
import { makeRoute } from "../../utils/apiRoutes";

class LayoutFooter extends Component {
  static contextType = DataContext; // Using the contextType to access the DataContext

  componentDidMount() {
    // const queryParams = {
    //   isMain: "true"
    // };
    // // Assuming 'speaker' is the endpoint and the key you want to use for the fetched data
    // this.context.fetchData(
    //     makeRoute("organizers"),
    //     "OrganizerData",
    //     queryParams
    // );
}


dataMaker() {
  const currentData = this.context.data["OrganizerDataHeader"];
 
  if (currentData) {
      return currentData.data.data.find(item => item.isMain === true);
  }
}

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    const organizer = this.dataMaker();
    const {t} = this.props;

    // const { data, loading, error } = this.context;

    // if (!data["OrganizerData"]) return null;

    // // Check if the data is being fetched
    // if (loading["OrganizerData"]) {
    //     return <Loading />;
    // }

    // // Check for errors
    // if (error["OrganizerData"]) {
    //     return <Error message={error["OrganizerData"].message} />;
    // }

    // Assuming data['speakerData'] is an array of speakers. Adjust depending on your actual data structure
    // const organizer = data["OrganizerData"].data.items[0] || [];

    return (
      <>
        {/* ===============  footer area start  =============== */}
        <div className="footer-outer pt-120 " style={{direction: "ltr"}}>
          <div className="footer-area">
            <div className="container">
              <div className="footer-wrapper">
                <div className="footer-watermark">
                  <h1>{t("hamayesh")}</h1>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-5 order-1">
                    <div className="footer-widget mt-0">
                      <h5 className="footer-widget-title">{t("Quick_Link")}</h5>
                      <div className="footer-links">
                        <ul className="link-list">
                          <li>
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/about`}
                              className="footer-link">
                              {t("About_Us")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/`}
                              className="footer-link">
                              {t("Event")}
                            </Link>{" "}
                          </li>
                          <li>
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/schedule`}
                              className="footer-link">
                              {t("Schedule")}
                            </Link>
                          </li>
                          
                          <li>
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/speaker`}
                              className="footer-link">
                              {t("Speakers")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/`}
                              className="footer-link">
                              {t("Sponsors")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/blog-sidebar`}
                              className="footer-link">
                              {t("Blog")}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 order-lg-2 order-3">
                    <div className="footer-newslatter-wrapper text-center">
                      <h3>{t("SUBSCRIBE_OUR_NEWSLETTER")}</h3>
                      <form
                        className="newslatter-form"
                        action="#"
                        id="newslatter-form">
                        <div className="newslatter-input-group d-flex">
                          <input style={{direction: "rtl"}} type="email" placeholder={t("Enter_Your_Email")} />
                          <button type="submit">{t("send")}</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-7 order-lg-3 order-2 ">
                    <div className="footer-widget">
                      <h5 className="footer-widget-title">{t("Contact_Us")}</h5>
                      <div className="footer-links">
                        <ul className="link-list">
                          <li className="contact-box">
                            <div className="contact-icon">
                              <i className="bi bi-telephone-plus" />
                            </div>
                            <div className="contact-links">

                              {organizer?.details?.phoneNumbers?.map((number, index) => (
                              <Link key={index}
                                onClick={this.scrollTop}
                                to={"tel:+"+number}>
                                {number}
                              </Link>
                              ))}
                            
                            </div>
                          </li>
                          <li className="contact-box">
                            <div className="contact-icon">
                              <i className="bi bi-envelope-open" />
                            </div>
                            <div className="contact-links">
                            {organizer?.details?.emails?.map((email, index) => (
                              <Link key={index}
                                onClick={this.scrollTop}
                                to={"mailto:"+email}>
                                {email}
                              </Link>
                              ))}
                              
                            </div>
                          </li>
                          <li className="contact-box">
                            <div className="contact-icon">
                              <i className="bi bi-geo-alt" />
                            </div>
                            <div className="contact-links">
                              <Link onClick={this.scrollTop} to={"#"}>
                              {organizer?.details?.address?.state + " ," + organizer?.details?.address?.city + " ," + organizer?.details?.address?.address}
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="row align-items-center">
                  <div className="col-lg-5  order-3 order-lg-1">
                    <div className="footer-copyright">
                      <p>
                        {t("Copyright_2021_by_powerfull_Team")}{" "}
                        <Link onClick={this.scrollTop} to={"#"}>
                          {t("ariaFarman")}
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 order-1 order-lg-2">
                    <div className="footer-logo">
                      <Link onClick={this.scrollTop} to={"#"}>
                        <img src="assets/images/logo-v2.png" alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 order-2 order-lg-3">
                    <ul className="d-flex footer-social-links justify-content-lg-end justify-content-center">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  footer area end  =============== */}
      </>
    );
  }
}

export default withTranslation()(LayoutFooter);
