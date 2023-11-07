import React, { Component } from "react";
import BreadCrumb from "./BreadCrumb";
import EventDetailsWrapper from "./EventDetailsWrapper";
import RecentEvent from "./RecentEvent";
class EventDetails extends Component {
  render() {
    return (
      <>
        <BreadCrumb />
        <EventDetailsWrapper />
        <RecentEvent />
      </>
    );
  }
}

export default EventDetails;
