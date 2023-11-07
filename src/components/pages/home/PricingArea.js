import React, { Component } from "react";
import { Link } from "react-router-dom";
// page animation
import WOW from "wowjs";
import "../../../assets/css/animate.css";
// image import
import TricktPlanIcon1 from "../../../assets/images/icons/diamond-fa.png";
import TricktPlanIcon3 from "../../../assets/images/icons/gold-fa.png";
import TricktPlanIcon2 from "../../../assets/images/icons/silverl-fa.png";
class PricingArea extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <>
        {/* ===============  Pricing area start =============== */}
        <div className="pricing-area gray-300">
          <div className="container pt-110 position-relative">
            <div className="row">
              <div className="col-lg-12">
                <div className="background-title text-style-one">
                  <h2>Ticket Plan</h2>
                </div>
                <div className="section-head">
                  <h5>Ticket Plan</h5>
                  <h3>Get Sponsor Ticket</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-4 col-md-6 wow fadeInLeft animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms">
                <div className="pricing-card">
                  <div className="pricing-card-top">
                    <h5 className="plan-status">Silver</h5>
                    <h3 className="plan-price">
                      {" "}
                      <span>$</span> 100
                    </h3>
                    <div className="plan-icon">
                      <img src={TricktPlanIcon2}  alt="Imgs" />
                    </div>
                  </div>
                  <div className="pricing-features">
                    <div className="ticket-availability">
                      <h5>Available Tickets</h5>
                      <h4>
                        270 / <span>500</span>
                      </h4>
                    </div>
                    <div className="feature-list">
                      <ul>
                        <li className="tick">
                          <i className="bi bi-check2" /> Conference Ticket
                        </li>
                        <li>
                          <i className="bi bi-x" /> Free Certificate
                        </li>
                        <li>
                          <i className="bi bi-x" /> Free Lunch &amp; Coffe
                        </li>
                      </ul>
                    </div>
                    <div className="purchase-btn">
                      <Link onClick={this.scrollTop} to={"#"}>
                        Buy Ticket
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="pricing-card active">
                  <div className="pricing-card-top">
                    <div className="pricing-card-lavel">
                      <span>10%</span> Off
                    </div>
                    <h5 className="plan-status">Gold</h5>
                    <h3 className="plan-price">
                      {" "}
                      <span>$</span> 120
                    </h3>
                    <div className="plan-icon">
                      <img src={TricktPlanIcon3}  alt="Imgs" />
                    </div>
                  </div>
                  <div className="pricing-features">
                    <div className="ticket-availability">
                      <h5>Available Tickets</h5>
                      <h4>
                        300 / <span>500</span>
                      </h4>
                    </div>
                    <div className="feature-list">
                      <ul>
                        <li className="tick">
                          <i className="bi bi-check2" /> Conference Ticket
                        </li>
                        <li className="tick">
                          <i className="bi bi-check2" /> Free Certificate
                        </li>
                        <li>
                          <i className="bi bi-x" /> Free Lunch &amp; Coffe
                        </li>
                      </ul>
                    </div>
                    <div className="purchase-btn">
                      <Link onClick={this.scrollTop} to={"#"}>
                        Buy Ticket
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInRight animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms">
                <div className="pricing-card">
                  <div className="pricing-card-top">
                    <h5 className="plan-status">Silver</h5>
                    <h3 className="plan-price">
                      {" "}
                      <span>$</span> 150
                    </h3>
                    <div className="plan-icon">
                      <img src={TricktPlanIcon1}  alt="Imgs" />
                    </div>
                  </div>
                  <div className="pricing-features">
                    <div className="ticket-availability">
                      <h5>Available Tickets</h5>
                      <h4>
                        270 / <span>500</span>
                      </h4>
                    </div>
                    <div className="feature-list">
                      <ul>
                        <li className="tick">
                          <i className="bi bi-check2" /> Conference Ticket
                        </li>
                        <li className="tick">
                          <i className="bi bi-check2" /> Free Certificate
                        </li>
                        <li className="tick">
                          <i className="bi bi-check2" /> Free Lunch &amp; Coffe
                        </li>
                      </ul>
                    </div>
                    <div className="purchase-btn">
                      <Link onClick={this.scrollTop} to={"#"}>
                        Buy Ticket
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  Pricing area end =============== */}
      </>
    );
  }
}

export default PricingArea;
