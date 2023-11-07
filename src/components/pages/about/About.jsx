import React, { Component } from "react";
import AboutWrapper from "./AboutWrapper";
import AchivementArea from "./AchivementArea";
import BlogArea from "../HomeTwo/BlogArea";
import Breadcrumb from "./Breadcrumb";
import FetchDataService from "../../../utils/fetchDataFunc";
import DataContext from "../../../context/DataContext";
import SpeakerSliderArea from "../HomeTwo/SpeakerSliderArea";


class About extends Component {
  static contextType = DataContext; // Using the contextType to access the DataContext

  fetchDataFunction = () => {
    // Options should be set according to the parameters your API needs
    const options = {
        page: 1,
        totalPages: 1, // this should probably be 'pageSize
        dataName: "axisAboutData",
        api: {
            apiTitle: "axies",
            id: null, // If these values are unnecessary, you could remove them
            subTitle: null, // same as above
            options: null, // same as above
        },
    };

    // Here, we're passing the context's fetchData method to our service
    FetchDataService(this.context.fetchData, options);
};

fetchDataFunction2 = () => {
    // Options should be set according to the parameters your API needs
    const options = {
        page: 1,
        totalPages: 1, // this should probably be 'pageSize
        dataName: "speakersAboutData",
        api: {
            apiTitle: "speakers",
            id: null, // If these values are unnecessary, you could remove them
            subTitle: null, // same as above
            options: null, // same as above
        },
    };

    // Here, we're passing the context's fetchData method to our service
    FetchDataService(this.context.fetchData, options);
};

fetchDataFunction3 = () => {
    // Options should be set according to the parameters your API needs
    const options = {
        page: 1,
        totalPages: 1, // this should probably be 'pageSize
        dataName: "newsAboutData",
        api: {
            apiTitle: "news",
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
    this.fetchDataFunction2();
    this.fetchDataFunction3();
}

  render() {
    return (
      <>
        {/* all about section componet */}
        <Breadcrumb />
        <AboutWrapper />
        <AchivementArea/>
        {/* <Speaker /> */}
        <SpeakerSliderArea/>
        {/* <BreandLogo /> */}
        {/* <Testimonial /> */}
        <BlogArea />
      </>
    );
  }
}

export default About;
