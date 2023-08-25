import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/insure-logo.png";
const Header = () => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newBackgroundColor = scrollY > 100 ? "white" : "transparent";

      setBackgroundColor(newBackgroundColor);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="em40_header_area_main">
        <div className="mobile_logo_area d-sm-block d-md-block d-lg-none">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="mobile_menu_logo text-center">
                  <Link to="/" title="Payloan">
                    <img src={logo} width={150} alt="Payloan" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="payloan-main-menu d-md-none d-lg-block d-sm-none d-none transprent-menu">
          <div
            className="trp_nav_area"
            style={{ backgroundColor: backgroundColor }}
          >
            <div className="container">
              <div className="row logo-left align-items-center">
                <div className="col-md-3 col-sm-3 col-xs-4">
                  <div className="logo">
                    <Link className="standard-logo" to="/" title="Payloan">
                      <img src={logo} width={150} alt="Payloan" />
                    </Link>
                    <a
                      className="retina-logo"
                      href="https://wp.ditsolution.net/payloan/"
                      title="Payloan"
                    >
                      <img
                        src="https://wp.ditsolution.net/payloan/wp-content/uploads/2021/09/payloan-logo.png"
                        alt="Payloan"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-9 col-sm-9 col-xs-8">
                  <nav className="payloan_menu main-search-menu">
                    <ul id="menu-main-menu" className="sub-menu">
                      <li
                        id="menu-item-1160"
                        className="menu-item menu-item-object-page menu-item-home current-menu-item page-item-8 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-1160"
                      >
                        <Link to="/" aria-current="page">
                          Home
                        </Link>
                      </li>
                      <li
                        id="menu-item-1161"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1161"
                      >
                        <Link to="/about">About</Link>
                      </li>
                      <li
                        id="menu-item-1184"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1184"
                      >
                        <Link to="/services">Services</Link>
                      </li>
                      <li
                        id="menu-item-1163"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1163"
                      >
                        <Link to="/contact-us">Contact</Link>
                      </li>
                      <li>
                        <button
                          className="bg-[#8180E0] text-[18px] text-white rounded-md px-[10px] py-[4px]"
                          onClick={() => navigate("/get-quote?question=1")}
                        >
                          Sign in
                        </button>
                      </li>
                    </ul>
                    {/* <div className="donate-btn-header">
                      <a className="dtbtn" href="">
                        Apply A Loan
                      </a>
                    </div> */}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-2 mbm d-sm-block d-md-block d-lg-none header_area main-menu-area">
          <div className="menu_area mobile-menu mean-container">
            <div className="mean-bar">
              <a
                href="#nav"
                className="meanmenu-reveal"
                style={{ background: "", color: "", right: 0, left: "auto" }}
              >
                <span></span>
                <span></span>
                <span></span>
              </a>
              <nav className="mean-nav">
                <ul
                  id="menu-main-menu-1"
                  className="main-menu clearfix"
                  style={{ display: "none" }}
                >
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-8 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-1160">
                    <Link to="/" aria-current="page">
                      Home
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1161">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1184">
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1163 mean-last">
                    <Link to="/contact-us">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="mean-push"></div>
            <nav style={{ display: "none" }}>
              <ul id="menu-main-menu-1" className="main-menu clearfix">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-8 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-1160">
                  <Link
                    href="https://wp.ditsolution.net/payloan/"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1161">
                  <Link to="https://wp.ditsolution.net/payloan/about-us/">
                    About
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1184">
                  <Link to="https://wp.ditsolution.net/payloan/our-service/">
                    Services
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1170">
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1171">
                      <Link to="https://wp.ditsolution.net/payloan/about-us/">
                        About Us
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1169">
                      <a href="https://wp.ditsolution.net/payloan/team-members/">
                        Team Members
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1162">
                      <a href="https://wp.ditsolution.net/payloan/application-form/">
                        Application Form
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1167">
                      <a href="https://wp.ditsolution.net/payloan/loan-calculator/">
                        Loan Calculator
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1164">
                      <a href="https://wp.ditsolution.net/payloan/faq/">FAQ</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1188">
                  <a href="https://wp.ditsolution.net/payloan/1185-2/">Blog</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1163">
                  <a href="https://wp.ditsolution.net/payloan/contact-us/">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
