import React, { Component, Suspense } from "react";
import LayoutFooter from "./common/LayoutFooter";
import LayoutHeader from "./common/LayoutHeader";
import HomeTwoHeader from "./common/HomeTwoHeader";
import i18n from "../configs/i18n";
import "../assets/css/font.css";
import { fontFamily } from "@mui/system";

class Layout extends Component {
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
        <div style={{ fontFamily: "mikhak" }}>
          <div style={{ direction: this.state.textDirection }}>
            <Suspense fallback={<div>Loading translations...</div>}>
              <HomeTwoHeader />
              {this.props.children}
              <LayoutFooter />
            </Suspense>
          </div>
        </div>
      </>
    );
  }
}

export default Layout;