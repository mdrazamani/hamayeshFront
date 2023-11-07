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
    // return (
    //   <>
    //     <div style={{ direction: this.state.textDirection }}>
    //       <Suspense fallback={<div>Loading translations...</div>}>
    //         <LayoutHeader />
    //         {this.props.children}
    //       </Suspense>
    //     </div>
    //     <LayoutFooter />
    //   </>
    // );


    return (
      <>
      <div style={{fontFamily: "mikhak"}}>
          <div style={{ direction: this.state.textDirection, }}>
            <Suspense fallback={<div>Loading translations...</div>}>
              {/* <LayoutHeader /> */}
              <HomeTwoHeader/>
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
