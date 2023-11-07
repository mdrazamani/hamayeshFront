import React, { Component } from "react";
import AchiveMentCounter from "./AchiveMentCounter";
import BlogArea from "./BlogArea";
import EventTimer from "./EventTimer";
import HeroArea from "./HeroArea";
import PopularEventArea from "./PopularEventArea";
import PricingArea from "./PricingArea";
import RecentSchedule from "./RecentSchedule";
import SpeakerArea from "./SpeakerArea";
import TestimonialArea from "./TestimonialArea";

class HomePage extends Component {
  render() {
    return (
      <>
      {/* <div className="homepage"> */}
        {/* <!-- Start Preloader Area --> */}
{/*        
        <div className="preloader">
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div> */}
        {/* <!-- End Preloader Area --> */}
        {/* all section component import start */}
        <HeroArea />
        <PopularEventArea />
        <RecentSchedule />
        <AchiveMentCounter />
        <SpeakerArea />
        <TestimonialArea />
        <PricingArea />
        <EventTimer />
        <BlogArea />
        {/* all section component import start */}

      {/* </div> */}
      </>
    );
  }
}

export default HomePage;
