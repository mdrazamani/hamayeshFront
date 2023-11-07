import React, { Component } from "react";
import CountUp from "react-countup";
// page animation
import WOW from "wowjs";
import "../../../assets/css/animate.css";
// image import
import IconCalander from "../../../assets/images/icons/calander.png";
import IconPeople from "../../../assets/images/icons/people.png";
import IconSchedule from "../../../assets/images/icons/schedule.png";
import Iconspeaker from "../../../assets/images/icons/speaker.png";
class AchiveMentCounter extends Component {
  componentDidMount(){
    new WOW.WOW().init()
}
  render() {
    return (
      <>
        {/* ===============  achievement area start  =============== */}
        <div className="achievement-area pt-120 wow fadeInLeft  animated"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms">
          <div className="achievement-overlay">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 com-sm-6">
                  <div className="single-achievement">
                    <div className="achievement-icon">
                      <img src={Iconspeaker} alt="IconsIMG" />
                    </div>
                    <h2>
                      {" "}
                      <CountUp
                        start={0}
                        end={100}
                        duration={5.75}
                        className="number"></CountUp>{" "}
                      +
                    </h2>
                    <h5>Best Speaker</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 com-sm-6">
                  <div className="single-achievement">
                    <div className="achievement-icon">
                      <img src={IconCalander} alt="IconsIMG" />
                    </div>
                    <h2>
                      {" "}
                      <CountUp
                        start={0}
                        end={600}
                        duration={6.75}
                        className="number">
                        600
                      </CountUp>{" "}
                      +
                    </h2>
                    <h5>Ideal Event</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 com-sm-6">
                  <div className="single-achievement">
                    <div className="achievement-icon">
                      <img src={IconSchedule} alt="IconsIMG" />
                    </div>
                    <h2>
                      <CountUp
                        start={0}
                        end={200}
                        duration={7.75}
                        className="number">
                        200
                      </CountUp>
                      +
                    </h2>
                    <h5>New Schedule</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 com-sm-6">
                  <div className="single-achievement">
                    <div className="achievement-icon">
                      <img src={IconPeople} alt="IconsIMG" />
                    </div>
                    <h2>
                      <CountUp
                        start={0}
                        end={300}
                        duration={8.75}
                        className="number">
                        300
                      </CountUp>
                      +
                    </h2>
                    <h5>Participants</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  achievement area end  =============== */}
      </>
    );
  }
}

export default AchiveMentCounter;
