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
      textDirection: localStorage.getItem("language") === "en" ? "ltr" : "rtl",
    };
  }

  componentDidMount() {
    this.languageChangedListener = (event) => {
      const newDirection = event.detail === "en" ? "ltr" : "rtl";
      this.setState({ textDirection: newDirection });
    };

    window.addEventListener("languageChanged", this.languageChangedListener);
  }

  componentWillUnmount() {
    window.removeEventListener("languageChanged", this.languageChangedListener);
  }

  render() {
    return (
      <>
        <div style={{ direction: this.state.textDirection }}>
          <Suspense fallback={<div>Loading translations...</div>}>
            <HomeTwoHeader />
            <HomePageTwo />
            <LayoutFooter />
          </Suspense>
        </div>
      </>
    );
  }
}

export default MainLayout;
