import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
// image import
import iconsIMG2 from "../../../assets/images/icons/c-massege.png";
import iconsIMG from "../../../assets/images/icons/c-phone.png";
import cornarShape1 from "../../../assets/images/shapes/cornoer-shape1.png";
import cornarShape2 from "../../../assets/images/shapes/cornoer-shape2.png";


import DataContext from "../../../context/DataContext";
import Error from "../../common/Error";
import Loading from "../../common/Loading";
import urlM from "../../../utils/urlManager.js";
import { makeRoute } from "../../../utils/apiRoutes";


class ContactPage extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//         organizer: null, 
//     };
// }

  static contextType = DataContext; // Using the contextType to access the DataContext


  
  componentDidMount() {
    


    // const queryParams = {
    //     ...(isContactPage ? { isMain: "true" } : {})
    // };

    // this.context.fetchData(
    //     makeRoute("organizers", isContactPage ? '' : currentSlug),
    //     "OrganizerData",
    //     queryParams
    // );
}


  dataMaker() {
    const currentData = this.context.data["OrganizerDataHeader"];
    const currentSlug = urlM(window.location.pathname).slug;
    const isContactPage = currentSlug === "contact";

    
    if (currentData) {
        let organizerToSet = null;

        if (isContactPage) {
        
            organizerToSet = currentData.data.data.find(item => item.isMain === true);
        } else {
       
            organizerToSet = currentData.data.data.find(item => item._id === currentSlug);
        }

        if (organizerToSet) {
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
  render() {

    // if(this.state.organizer){
      // console.log("test: ", this.state.organizer);
      // console.log("hello")
      // console.log("ttttttttttttttttttt: ",this.dataMaker());

      const organizer = this.dataMaker();
      const hamayeshDetail = this.context.data["hamayeshDetail"];
    


    // }
    
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
        {/* ===============  breadcrumb area start =============== */}
        <div className="breadcrumb-area" style={{
        backgroundImage: `linear-gradient(rgba(45, 55, 60, 0.7) 100%, rgba(45, 55, 60, 0.7) 100%), url('${process.env.REACT_APP_SERVER_IP+hamayeshDetail?.data?.headerImage}')`
    }}>
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-12">
                <div className="breadcrumb-content">
                  <div className="page-outlined-text">
                    <h1>{t("Contact_Us")}</h1>
                  </div>
                  <h2 className="page-title">{organizer?.name}</h2>
                  <ul className="page-switcher">
                    <li>
                      <Link
                        onClick={this.scrollTop}
                        to={`${process.env.PUBLIC_URL}/`}>
                        Home <i className="bi bi-caret-left" />
                      </Link>
                    </li>
                    <li>{t("Contact_Us")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}
        {/* ===============  Contact wrapper start =============== */}
        <div className="contact-wrapper overflow-hidden">
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
                <form action="#" id="contact-form">
                  <div className="contact-form-wrapper">
                    <h4 className="contact-form-title">Write a Message</h4>
                    <div className="primary-input-group">
                      <input type="text" id="name" placeholder="Your Name" />
                    </div>
                    <div className="primary-input-group">
                      <input type="email" id="email" placeholder="Your Email" />
                    </div>
                    <div className="primary-input-group">
                      <input type="tel" id="phone" placeholder="Your Phone" />
                    </div>
                    <div className="primary-input-group">
                      <input type="text" id="subject" placeholder="Subject" />
                    </div>
                    <div className="primary-input-group">
                      <textarea
                        name="massege"
                        id="message"
                        cols={30}
                        rows={7}
                        placeholder="Write Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="submit-btn">
                      <button type="submit" className="primary-submit">
                        Submit Now
                      </button>
                    </div>
                  </div>
                </form>
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
