import $ from "jquery";
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../assets/css/animate.css";
// image import
import NavLogo from "../../assets/images/logo-v2.png";
import Logo from "../../assets/images/logo.png";
class LayoutHeader extends Component {
  // Inheritaed Parenty Options
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Init JS Script
  componentDidMount() {
    this.inItScripts();
  }
  inItScripts() {
    $(document).ready(function () {
      // header active class
      $(".main-nav ul li a").click(function () {
        $("li a").removeClass("active");
        $(this).addClass("active");
      });
      $(".main-nav ul li.has-child-menu ul.sub-menu li a").click(function () {
        $(this)
          .parent()
          .parent()
          .parent()
          .find("a.has-child-menu-item")
          .addClass("active");
      });
      // header active class end
  
  

      /****** custom cursor Js ******/
      var cursor = document.querySelector(".cursor");
      var cursorinner = document.querySelector(".cursor2");
      var a = document.querySelectorAll("a");

      document.addEventListener("mousemove", function (e) {
        // var x = e.clientX;
        //  var y = e.clientY;
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      });

      document.addEventListener("mousemove", function (e) {
        var x = e.clientX;
        var y = e.clientY;
        cursorinner.style.left = x + "px";
        cursorinner.style.top = y + "px";
      });

      document.addEventListener("mousedown", function () {
        cursor.classList.add("click");
        cursorinner.classList.add("cursorinnerhover");
      });

      document.addEventListener("mouseup", function () {
        cursor.classList.remove("click");
        cursorinner.classList.remove("cursorinnerhover");
      });

      a.forEach((item) => {
        item.addEventListener("mouseover", () => {
          cursor.classList.add("hover");
        });
        item.addEventListener("mouseleave", () => {
          cursor.classList.remove("hover");
        });
      });

      /***** Mobile Menu Js *****/
      $(".hamburger").on("click", function (event) {
        $(this).toggleClass("h-active");
        $(".main-nav").toggleClass("slidenav");
      });

      $(".header-home .main-nav ul li  a").on("click", function (event) {
        $(".hamburger").removeClass("h-active");
        $(".main-nav").removeClass("slidenav");
      });

      $(".main-nav .fl").on("click", function (event) {
        var $fl = $(this);
        $(this).parent().siblings().find(".sub-menu").slideUp();
        $(this)
          .parent()
          .siblings()
          .find(".fl")
          .addClass("flaticon-plus")
          .text("+");
        if ($fl.hasClass("flaticon-plus")) {
          $fl.removeClass("flaticon-plus").addClass("flaticon-minus").text("-");
        } else {
          $fl.removeClass("flaticon-minus").addClass("flaticon-plus").text("+");
        }
        $fl.next(".sub-menu").slideToggle();
      });

      /****** Sticky Navber Js ******/
      $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 20) {
          $(".header-area").addClass("sticky");
        } else {
          $(".header-area").removeClass("sticky");
        }
      });
      // preloader
      $(".preloader").delay(1000).fadeOut("slow");

      /****** Custom Select Input JS ******/

      var x, i, j, l, ll, selElmnt, b, c;
      x = document.getElementsByClassName("custom-select");
      l = x.length;
      for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
          c = document.createElement("DIV");
          c.innerHTML = selElmnt.options[j].innerHTML;
          c.addEventListener("click", function (e) {
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
              if (s.options[i].innerHTML === this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                yl = y.length;
                for (k = 0; k < yl; k++) {
                  y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
              }
            }
            h.click();
          });
          b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
          e.stopPropagation();
          closeAllSelect(this);
          this.nextSibling.classList.toggle("select-hide");
          this.classList.toggle("select-arrow-active");
        });
      }
      function closeAllSelect(elmnt) {
        var x,
          y,
          i,
          xl,
          yl,
          arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
          if (elmnt === y[i]) {
            arrNo.push(i);
          } else {
            y[i].classList.remove("select-arrow-active");
          }
        }
        for (i = 0; i < xl; i++) {
          if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
          }
        }
      }
      document.addEventListener("click", closeAllSelect);

      /****** schedule-sidebar JS ******/
      document.querySelectorAll(".sidebar-style-two i").forEach((element) => {
        element.addEventListener("click", () => {
          document
            .querySelectorAll(".schedule-sidebar")
            .forEach((element) => element.classList.add("sb-active"));
        });
      });
      document.querySelectorAll(".sb-toggle-icon").forEach((element) => {
        element.addEventListener("click", () => {
          document
            .querySelectorAll(".schedule-sidebar")
            .forEach((element) => element.classList.remove("sb-active"));
        });
      });
    });
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
        {/* ===============  header area start =============== */}
        <header>
          <div className="header-area header-style-one header-light">
            <div className="container">
              <div className="row">
                <div className="col-xl-2 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-xl-flex align-items-center">
                  <div className="logo d-flex align-items-center justify-content-between">
                    <Link
                      onClick={this.scrollTop}
                      to={`${process.env.PUBLIC_URL}/`}
                      className="logo-dark"
                    >
                      <img src={Logo} alt="logo" />
                    </Link>
                    <Link
                      onClick={this.scrollTop}
                      to={`${process.env.PUBLIC_URL}/`}
                      className="logo-white"
                    >
                      <img src={NavLogo} alt="logo" />
                    </Link>
                    <div className="mobile-menu d-flex ">
                      <Link
                        to={"#"}
                        onClick={this.scrollTop}
                        className="hamburger d-block d-xl-none"
                      >
                        <span className="h-top" />
                        <span className="h-middle" />
                        <span className="h-bottom" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-xs-6">
                  <nav className="main-nav">
                    <div className="inner-logo d-xl-none">
                      <Link to={"#"} onClick={this.scrollTop}>
                        <img src={NavLogo} alt="NavLogo" />
                      </Link>
                    </div>
                    <ul>
                      <li className="has-child-menu">
                        <Link to={"#"}>
                          Home <span>02</span>
                        </Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              to={`${process.env.PUBLIC_URL}/`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Home One
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={`${process.env.PUBLIC_URL}/home-page-2`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Home Two
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink
                          to={`${process.env.PUBLIC_URL}/about`}
                          // className="sub-item"
                          className="has-child-menu-item"
                          onClick={this.scrollTop}
                          // id="home"
                        >
                          About <span>01</span>
                        </NavLink>
                      </li>
                      <li className="has-child-menu">
                        <Link
                          className="has-child-menu-item"
                          to={"#"}
                          onClick={this.scrollTop}
                        >
                          Events <span>03</span>
                        </Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className="sub-menu">
                          <li>
                            <Link to={`${process.env.PUBLIC_URL}/event`} onClick={this.scrollTop}>
                              Event Grid
                            </Link>
                          </li>
                          <li>
                            <Link to={`${process.env.PUBLIC_URL}/event-sidebar`} onClick={this.scrollTop}>
                              Event Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link to={`${process.env.PUBLIC_URL}/event-details`} onClick={this.scrollTop}>
                              Event Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-child-menu">
                        <Link
                          className="has-child-menu-item"
                          to={"#"}
                          onClick={this.scrollTop}
                        >
                          Spekars <span>03</span>
                        </Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              id="speaker"
                              to={`${process.env.PUBLIC_URL}/speaker`}
                              onClick={this.scrollTop}
                            >
                              Speaker Grid
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              id="speaker"
                              to={`${process.env.PUBLIC_URL}/speaker-topbar`}
                              onClick={this.scrollTop}
                            >
                              Speaker Topbar
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              id="speaker"
                              to={`${process.env.PUBLIC_URL}/speaker-details`}
                              onClick={this.scrollTop}
                            >
                              Speaker Details
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="has-child-menu">
                        <Link
                          className="has-child-menu-item"
                          to={"#"}
                          onClick={this.scrollTop}
                        >
                          Pages <span>05</span>
                        </Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/schedule`}
                              onClick={this.scrollTop}
                            >
                              Schedule
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/gallary`}
                              onClick={this.scrollTop}
                            >
                              Gallary
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/pricing`}
                              onClick={this.scrollTop}
                            >
                              Pricing
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/faq`}
                              onClick={this.scrollTop}
                            >
                              FAQ
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/error`}
                              onClick={this.scrollTop}
                            >
                              404
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-child-menu">
                        <Link to={"#"} className="has-child-menu-item" onClick={this.scrollTop}>
                          Blog Grid <span>04</span>
                        </Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/blog`}
                              onClick={this.scrollTop}
                            >
                              Blog Grid
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/blog-sidebar`}
                              onClick={this.scrollTop}
                            >
                              Blog Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/blog-standard`}
                              onClick={this.scrollTop}
                            >
                              Blog Standard
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/blog-details`}
                              onClick={this.scrollTop}
                            >
                              Blog Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/contact`}
                          onClick={this.scrollTop}
                        >
                          Contact <span>01</span>
                        </Link>
                      </li>
                    </ul>
                    <div className="inner-btn d-xl-none">
                      <Link
                        to={`${process.env.PUBLIC_URL}/event-details`}
                        onClick={this.scrollTop}
                        className="primary-btn-fill"
                      >
                        Get Ticket
                      </Link>
                    </div>
                  </nav>
                </div>
                <div className="col-xl-2 col-2 d-none d-xl-block p-0">
                  <div className="nav-right h-100 d-flex align-items-center justify-content-end">
                    <ul>
                      <li className="nav-btn">
                        <Link
                          className="primary-btn-fill"
                          to={`${process.env.PUBLIC_URL}/event-details`}
                          onClick={this.scrollTop}
                        >
                          Get Ticket
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* ===============  header area end =============== */}

        {/* <!-- Custom Cursor --> */}

        <div className="cursor"></div>
        <div className="cursor2"></div>

        {/* Custom Cursor End  */}
      </>
    );
  }
}

export default LayoutHeader;
