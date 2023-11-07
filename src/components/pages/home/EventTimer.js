import $ from "jquery";
import React, { Component } from "react";
import CountdownShape from "../../../assets/images/shapes/countdown-vactor.png";
class EventTimer extends Component {
  componentDidMount() {
    this.eventTimer();
  }
  eventTimer() {
    $(document).ready(function () {
      /****** custom countdown Js ******/
      function makeTimer() {
        var endTimes = new Date("September 01, 2022 00:00:00");
        var endTime = Date.parse(endTimes) / 1000; //replace these two lines with the unix timestamp from the server

        var nowDate = new Date();
        var now = Date.parse(nowDate) / 1000;
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - days * 86400) / 3600);

        var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
        var seconds = Math.floor(
          timeLeft - days * 86400 - hours * 3600 - minutes * 60
        );

        if (hours < "10") {
          hours = "0" + hours;
        }
        if (minutes < "10") {
          minutes = "0" + minutes;
        }
        if (seconds < "10") {
          seconds = "0" + seconds;
        }

        $("#timer #days").html(days);
        $("#timer #hours").html(hours);
        $("#timer #minutes").html(minutes);
        $("#timer #seconds").html(seconds);

        $("#timer_h #days_h").html(days);
        $("#timer_h #hours_h").html(hours);
        $("#timer_h #minutes_h").html(minutes);
        $("#timer_h #seconds_h").html(seconds);

        $("#timer_h2 #days_h2").html(days);
        $("#timer_h2 #hours_h2").html(hours);
        $("#timer_h2 #minutes_h2").html(minutes);
        $("#timer_h2 #seconds_h2").html(seconds);
      }

      setInterval(function () {
        makeTimer();
      }, 1000);
    });
  }
  render() {
    return (
      <>
        {/* ===============  Event Countdown start  =============== */}
        <div className="event-countdown-outer pt-120 gray-300">
          <div className="event-countdown">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="event-countdown-head">
                    <h2>Next Event</h2>
                  </div>
                </div>
              </div>
              <div className="row" id="timer">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="countdown-box">
                    <div className="countdown-line-shape d-lg-block d-none">
                      <img src={CountdownShape} alt="countIMG" />
                    </div>
                    <h3 id="days">05</h3>
                    <h5>Days</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="countdown-box">
                    <div className="countdown-line-shape d-lg-block d-none">
                      <img src={CountdownShape} alt="countIMG" />
                    </div>
                    <h3 id="hours">05</h3>
                    <h5>Hour</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="countdown-box">
                    <div className="countdown-line-shape d-lg-block d-none">
                      <img src={CountdownShape} alt="countIMG" />
                    </div>
                    <h3 id="miniutes">05</h3>
                    <h5>Miniute</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="countdown-box">
                    <h3 id="seconds">05</h3>
                    <h5>Secoend</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  Event Countsdown end  =============== */}
      </>
    );
  }
}

export default EventTimer;
