import React, { Component, Suspense } from "react";
import HomePage from "../pages/home/HomePage";
import HomeTwoHeader from "../common/HomeTwoHeader";
import i18n from "../../configs/i18n";
import LayoutFooter from "../common/LayoutFooter";
import HomePageTwo from "../pages/HomeTwo/HomePageTwo";

class MainLayout extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      textDirection: 'rtl', 
    };
  }

  componentDidMount() {
    this.checkDirection();
  }
  
  checkDirection = () => {
    if (process.env.REACT_APP_DEFAULT_LANGUAGE === "en") {
      this.setState({ textDirection: "ltr" });
    }
  };

  render() {
    return (
      <>
      {/* main layout  */}
        <div style={{ direction: this.state.textDirection }}>
          <Suspense fallback={<div>Loading translations...</div>}>
            <HomeTwoHeader />
            {/* <HomeTwoHeader /> */}
              <HomePageTwo />
            {/* <HomeOneFooter /> */}
            <LayoutFooter />
          </Suspense>
        </div>
      </>
    );
  }
}

export default MainLayout;
