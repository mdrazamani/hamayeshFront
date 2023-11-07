import React, { Component } from "react";
import HomeTwoFooter from "../common/HomeTwoFooter";
import HomeTwoHeader from "../common/HomeTwoHeader";
import HomePageTwo from "../pages/HomeTwo/HomePageTwo";
import HomeOneHeader from "../common/HomeOneHeader";

class MainTwoLayout extends Component {
  render() {
    return (
      <>
      {/* secound layout */}
        <HomeOneHeader />
        <HomePageTwo />
        <HomeTwoFooter />
      </>
    );
  }
}

export default MainTwoLayout;
