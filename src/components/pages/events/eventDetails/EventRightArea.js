import React, { Component } from "react";
import { Link } from "react-router-dom";
import EventBanner from "../../../../assets/images/banners/sb-banner.png";
import OrgabizerIMG from "../../../../assets/images/event/event-orgainizer.png";
// recent event images import
import eventThemnIMG1 from "../../../../assets/images/event/event-thumb-sm1.png";
import eventThemnIMG2 from "../../../../assets/images/event/event-thumb-sm2.png";
import eventThemnIMG3 from "../../../../assets/images/event/event-thumb-sm3.png";
import eventThemnIMG4 from "../../../../assets/images/event/event-thumb-sm4.png";
import SignatureImg from "../../../../assets/images/event/signature.png";
class EventRightArea extends Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <>
        <div className="col-xl-4">
          <div className="event-d-sidebar">
            <div className="event-book-form">
              <div className="category-title">
                <i className="bi bi-bookmark-check" /> <h4>Book This Event</h4>
              </div>
              <form action="#" id="event-book" className="event-book">
                <div className="primary-input-group">
                  <input type="text" id="e-name" placeholder="Your Full Name" />
                </div>
                <div className="primary-input-group">
                  <input type="email" id="e-email" placeholder="Your Email" />
                </div>
                <div className="primary-input-group">
                  <input type="tel" id="e-tel" placeholder="Phone" />
                </div>
                <div className="primary-input-group">
                  <select defaultValue="" className="primary-select">
                    <option >Select quantity</option>
                    <option value={0} >Quantity 1</option>
                    <option value={1}>Quantity 2</option>
                    <option value={2} >Quantity 3</option>
                  </select>
                </div>
                <div className="primary-input-group">
                  <input type="text" id="lname" placeholder="Your Full Name" />
                </div>
                <div className="submit-btn">
                  <button
                    type="submit"
                    className="primary-submit d-block w-100">
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
            <div className="event-d-sidebar-cards">
              <div className="category-title">
                <i className="bi bi-layout-text-sidebar-reverse" />{" "}
                <h4>Recent Event</h4>
              </div>
              <ul className="event-cards-list">
                <li className="event-card-sm">
                  <div className="event-thumb">
                    <Link
                      onClick={this.scrollTop}
                      to={`${process.env.PUBLIC_URL}/event-details`}>
                      <img src={eventThemnIMG1}  alt="Imgs" />
                    </Link>
                  </div>
                  <div className="event-sm-info">
                    <h5>
                      <Link
                        onClick={this.scrollTop}
                        to={`${process.env.PUBLIC_URL}/event-details`}>
                        Donec risus dui, suscipit iand tempor lacinia vehicula.
                      </Link>
                    </h5>
                    <div className="event-bottom">
                      <Link
                        onClick={this.scrollTop}
                        className="event-date"
                        to={"#"}>
                        <i className="bi bi-calendar2-week" /> January 21, 2021
                      </Link>
                      <div className="event-deat">
                        <i className="bi bi-diagram-3" /> <span>500</span>
                      </div>
                    </div>
                    <div className="event-d-btn">
                      <Link
                        onClick={this.scrollTop}
                        to={`${process.env.PUBLIC_URL}/event-details`}>
                        Book Now
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="event-card-sm">
                  <div className="event-thumb">
                    <Link
                      onClick={this.scrollTop}
                      to={`${process.env.PUBLIC_URL}/event-details`}>
                      <img src={eventThemnIMG2}  alt="Imgs" />
                    </Link>
                  </div>
                  <div className="event-sm-info">
                    <h5>
                      <Link
                        onClick={this.scrollTop}
                        to={`${process.env.PUBLIC_URL}/event-details`}>
                        Class aptent taciti sociosqu adness litora torquent per
                        conubia.
                      </Link>
                    </h5>
                    <div className="event-bottom">
                      <Link
                        onClick={this.scrollTop}
                        className="event-date"
                        to={"#"}>
                        <i className="bi bi-calendar2-week" /> January 21, 2021
                      </Link>
                      <div className="event-deat">
                        <i className="bi bi-diagram-3" /> <span>500</span>
                      </div>
                    </div>
                    <div className="event-d-btn">
                      <Link
                        onClick={this.scrollTop}
                        to={`${process.env.PUBLIC_URL}/event-details`}>
                        Book Now
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="event-card-sm">
                  <div className="event-thumb">
                    <Link
                      onClick={this.scrollTop}
                      to={`${process.env.PUBLIC_URL}/event-details`}>
                      <img src={eventThemnIMG3}  alt="Imgs" />
                    </Link>
                  </div>
                  <div className="event-sm-info">
                    <h5>
                      <Link
                        onClick={this.scrollTop}
                        to={`${process.env.PUBLIC_URL}/event-details`}>
                        Praesent ut cursus massa, nonfebriq tristique quam.
                      </Link>
                    </h5>
                    <div className="event-bottom">
                      <Link
                        onClick={this.scrollTop}
                        className="event-date"
                        to={"#"}>
                        <i className="bi bi-calendar2-week" /> January 21, 2021
                      </Link>
                      <div className="event-deat">
                        <i className="bi bi-diagram-3" /> <span>500</span>
                      </div>
                    </div>
                    <div className="event-d-btn">
                      <Link
                        onClick={this.scrollTop}
                        to={`${process.env.PUBLIC_URL}/event-details`}>
                        Book Now
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="event-card-sm">
                  <div className="event-thumb">
                    <Link
                      onClick={this.scrollTop}
                      to={`${process.env.PUBLIC_URL}/event-details`}>
                      <img src={eventThemnIMG4}  alt="Imgs" />
                    </Link>
                  </div>
                  <div className="event-sm-info">
                    <h5>
                      <Link
                        onClick={this.scrollTop}
                        to={`${process.env.PUBLIC_URL}/event-details`}>
                        Mauris consequat tempor lectusin nec rutrum metus
                        laoreet et.
                      </Link>
                    </h5>
                    <div className="event-bottom">
                      <Link
                        onClick={this.scrollTop}
                        className="event-date"
                        to={"#"}>
                        <i className="bi bi-calendar2-week" /> January 21, 2021
                      </Link>
                      <div className="event-deat">
                        <i className="bi bi-diagram-3" /> <span>500</span>
                      </div>
                    </div>
                    <div className="event-d-btn">
                      <Link
                        onClick={this.scrollTop}
                        to={`${process.env.PUBLIC_URL}/event-details`}>
                        Book Now
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="event-organizer-wrap">
              <div className="category-title">
                <i className="bi bi-person-plus" /> <h4>Event Organized By</h4>
              </div>
              <div className="organizer-info">
                <div className="organizer-image">
                  <img src={OrgabizerIMG}  alt="Imgs" />
                </div>
                <h4>Matthew Luke</h4>
                <h5>Event Lab</h5>
                <div className="organizer-signature">
                  <img src={SignatureImg}  alt="Imgs" />
                </div>
              </div>
            </div>
            <div className="event-sidebar-banner">
              <Link onClick={this.scrollTop} to={"#"}>
                <img src={EventBanner}  alt="Imgs" className="img-fluid" />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EventRightArea;
