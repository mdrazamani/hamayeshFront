import React, { Component } from "react";

class NewsLetter extends Component {
  render() {
    return (
      <>
        {/* ===============  Newslatter area start =============== */}
        <div className="newslatter-style-two mt-96">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 justify-content-center">
                <div className="newslatter-style-two-bg">
                  <div className="newslatter text-center">
                    <h3>Subscribe Our Newsletter</h3>
                    <h5>Don’t Miss Our Feature Update</h5>
                    <form
                      className="newslatter-form"
                      action="#"
                      id="newslatter-form"
                    >
                      <div className="newslatter-input-group d-flex">
                        <input type="email" placeholder="Enter Your Email" />
                        <button type="submit">Subscribe</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  Newslatter area end =============== */}
      </>
    );
  }
}

export default NewsLetter;
