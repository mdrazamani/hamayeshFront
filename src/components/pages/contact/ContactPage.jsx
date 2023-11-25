import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
// image import
import iconsIMG2 from "../../../assets/images/icons/c-massege.png";
import iconsIMG from "../../../assets/images/icons/c-phone.png";
import cornarShape1 from "../../../assets/images/shapes/cornoer-shape1.png";
import cornarShape2 from "../../../assets/images/shapes/cornoer-shape2.png";

import axios from "axios";
import DataContext from "../../../context/DataContext";
import urlM from "../../../utils/urlManager.js";

import BreadcrumbComponent from "../../common/breadcrumb.js";
import HelmetComponent from "../../common/helmet.js";

class ContactPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
        responseStatus: null,
        responseData: null,
        errors: null,
        organId: null,
        language:
                localStorage.getItem("language") ||
                process.env.REACT_APP_DEFAULT_LANGUAGE,
            number: 0,
    };
}

//   constructor(props) {
//     super(props);
//     this.state = {
//         organizer: null, 
//     };
// }

  static contextType = DataContext; // Using the contextType to access the DataContext


  
  componentDidMount() {
    window.addEventListener("languageChanged", this.handleLanguageChange);


    // const queryParams = {
    //     ...(isContactPage ? { isMain: "true" } : {})
    // };

    // this.context.fetchData(
    //     makeRoute("organizers", isContactPage ? '' : currentSlug),
    //     "OrganizerData",
    //     queryParams
    // );
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

  dataMaker() {
    const currentData = this.context.data["OrganizerDataHeader"];
    const currentSlug = urlM(window.location.pathname).slug;
    const isContactPage = currentSlug === "contact";

    
    if (currentData) {
        let organizerToSet = null;

        if (isContactPage) {
            organizerToSet = currentData.data.data.find(item => item.isMain === true);
        } else {
            organizerToSet = currentData.data.data.find(item => item.id === currentSlug);
        }


        // console.log("organizerToSet: ", organizerToSet?.id)

        if (organizerToSet) {
            // this.setState({
            //   organId: organizerToSet?.id,
            // });
            return organizerToSet;
        }
    }
  }


  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }




  handleSubmit = async (event) => {
    
    event.preventDefault();
    this.setState({ responseStatus: "loading" });

    const formData = new FormData(event.target);
    const formObject = {};
    let id = 0;
    formData.forEach((value, key) => {
        if (key == "id") id = value;
        else formObject[key] = value;
    });

    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/ticket/${id}`,
            formObject
        );

        if (response.status === 200) {
            this.setState({
                responseStatus: "success",
                responseData: response.data,
            });
        } else {
            this.setState({
                responseStatus: "failed",
                errors: response.data?.message || "An error occurred",
            });
        }
    } catch (error) {
        this.setState({
            responseStatus: "failed",
            errors: error.response?.data?.message || error.message,
        });
    }
};




  render() {
    const { language } = this.state;
    // this.state.number += 1;
    // if(this.state.organizer){
      // console.log("test: ", this.state.organizer);
      // console.log("hello")
      // console.log("ttttttttttttttttttt: ",this.dataMaker());

      const organizer = this.dataMaker();
      const hamayeshDetail = this.context.data["hamayeshDetail"];
    

      // this.setState({
      //   organId: organizer?.id,
      // });


    // }
    const { responseStatus, responseData, errors } = this.state;
        const { t } = this.props;
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

        // // Assuming data['speakerData'] is an array of speakers. Adjust depending on your actual data structure
        // const organizer = urlM(window.location.pathname).slug == "contact" ? data["OrganizerData"].data.items[0] || [] : data["OrganizerData"].data || []
        
        // console.log(organizer);

    return (
      <>

<HelmetComponent
                    title="Contact_Us"
                    description="Contact_Us_meta_desc"
                    imageUrl={
                        process.env.REACT_APP_SERVER_IP +
                        hamayeshDetail?.data?.headerImage
                    }
                />
                <BreadcrumbComponent
                    translate="Contact_Us"
                    headerImageUrl={hamayeshDetail?.data?.headerImage}
                />

        
        <div className="contact-wrapper overflow-hidden" key={language}>
          <div className="container pt-120 position-relative">
            <div className="background-title text-style-one">
              <h2>{organizer?.name}</h2>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-card mt-0">
                  <div className="contact-box-corner1">
                    <img src={cornarShape1}  alt="Imgs" />
                  </div>
                  <div className="contact-box-corner2">
                    <img src={cornarShape2}  alt="Imgs" />
                  </div>
                  <div className="contact-icon">
                    <img src={iconsIMG}  alt="Imgs" />
                  </div>
                  <div className="contact-info">
                    <h3 className="contact-title">{t("Location")}</h3>
                    
                     {organizer?.details?.address?.state + " ," + organizer?.details?.address?.city + " ," + organizer?.details?.address?.address}
                    
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-box-corner1">
                    <img src={cornarShape1}  alt="Imgs" />
                  </div>
                  <div className="contact-box-corner2">
                    <img src={cornarShape2}  alt="Imgs" />
                  </div>
                  <div className="contact-icon">
                    <img src={iconsIMG}  alt="Imgs" />
                  </div>
                  <div className="contact-info">
                    <h3 className="contact-title">{t("phone")}</h3>
                    {organizer?.details?.phoneNumbers.map((phoneNumber, index) => (
                    <div>
                      {phoneNumber}
                    </div>
                    ))}
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-box-corner1">
                    <img src={cornarShape1}  alt="Imgs" />
                  </div>
                  <div className="contact-box-corner2">
                    <img src={cornarShape2}  alt="Imgs" />
                  </div>
                  <div className="contact-icon">
                    <img src={iconsIMG2}  alt="Imgs" />
                  </div>
                  <div className="contact-info">
                    <h3 className="contact-title">{t("email")}</h3>
                    {organizer?.details?.emails.map((email, index) => (
                    <div>
                      {email}
                    </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <form onSubmit={this.handleSubmit} id="contact-form">
                  <div className="contact-form-wrapper">
                    <h4 className="contact-form-title">{t("WRITE_A_MESSAGE")}</h4>
                    <div className="primary-input-group">
                      <input type="text" id="name" name="name" placeholder={t("first_Name")} />
                    </div>
                    <div className="primary-input-group">
                      <input type="email" id="email" name="email" placeholder={t("email")} />
                    </div>
                    <div className="primary-input-group">
                      <input type="tel" id="phone" name="phone" placeholder={t("phoneNumber")} />
                    </div>
                    <div className="primary-input-group">
                      <input type="text" id="subject" name="subject" placeholder={t("Subject")} />
                    </div>
                    <div className="primary-input-group">
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={7}
                        placeholder={t("Message_m")}
                        defaultValue={""}
                      />
                    </div>

                    <input type="hidden" name="id" id="id" value={organizer?.id} />

                    <div className="submit-btn">
                      <button type="submit" className="primary-submit">
                        {t("send")}
                      </button>
                    </div>
                  </div>
                </form>

                <div style={{ marginTop: "20px" }}>
                                            {/* ... other parts of your component ... */}

                                            {/* Form submission result messages */}
                                            {responseStatus === "loading" && (
                                                <div
                                                    className="alert alert-info"
                                                    role="alert"
                                                >
                                                    {t("loading")}
                                                </div>
                                            )}
                                            {responseStatus === "success" && (
                                                <div
                                                    className="alert alert-success"
                                                    role="alert"
                                                >
                                                    {t("success")}:{" "}
                                                    {responseData.message}
                                                </div>
                                            )}
                                            {responseStatus === "failed" &&
                                                errors && (
                                                    <div
                                                        className="alert alert-danger"
                                                        role="alert"
                                                    >
                                                        {t("error")}:{" "}
                                                        {typeof errors ===
                                                        "string"
                                                            ? errors
                                                            : Object.entries(
                                                                  errors
                                                              ).map(
                                                                  ([
                                                                      key,
                                                                      value,
                                                                  ]) => (
                                                                      <p
                                                                          key={
                                                                              key
                                                                          }
                                                                      >
                                                                          {key}:{" "}
                                                                          {
                                                                              value
                                                                          }
                                                                      </p>
                                                                  )
                                                              )}
                                                    </div>
                                                )}

                                            {/* ... rest of your rendering ... */}
                                        </div>

              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-12">
              <div className="contact-map-wrap mt-120">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      title="Video"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=9&ie=UTF8&iwloc=&output=embed"
                    />
                    <Link
                      onClick={this.scrollTop}
                      to={"https://123movies-to.org"}
                    />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* ===============  Contact wrapper end =============== */}
      </>
    );
  }
}

export default withTranslation()(ContactPage);
