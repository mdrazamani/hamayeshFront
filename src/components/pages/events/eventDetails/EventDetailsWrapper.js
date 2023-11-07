import React, { Component } from "react";
import EventDetailsLeftArea from "./EventDetailsLeftArea";
import EventRightArea from "./EventRightArea";
class EventDetailsWrapper extends Component {
  render() {
    return (
      <>
        <div className="event-details-wrapper ">
          <div className="container pt-120 position-relative">
            <div className="background-title text-style-one">
              <h2>Event Details</h2>
            </div>
            <div className="row">
                {/* event detils child componet */}
                <EventDetailsLeftArea/>
                <EventRightArea/>
                
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EventDetailsWrapper;
