import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div id="about_us-widget-2" className="widget about_us">
                <div className="about-footer">
                  <div className="footer-widget address">
                    <div className="footer-logo">
                      <img
                        src="http://wp.dreamitsolution.net/payloan/wp-content/uploads/2021/09/payloan-logo.png"
                        alt=""
                      />

                      <p>
                        Lorem ipsum dolor sit amet, consetur acing elit, sed do
                        eiusmod ligal
                      </p>
                    </div>
                    <div className="footer-address">
                      <div className="footer_s_inner">
                        <div className="footer-sociala-icon">
                          <i className="fa fa-home"></i>
                        </div>
                        <div className="footer-sociala-info">
                          <p>
                            Address: 1245 Rang Raod,
                            <br />
                            medical, E152 95RB
                          </p>
                        </div>
                      </div>
                      <div className="footer_s_inner">
                        <div className="footer-sociala-icon">
                          <i className="fa fa-phone"></i>
                        </div>
                        <div className="footer-sociala-info">
                          <p>
                            Telephone : 88 694 895 684
                            <br />
                            88 487 983 576
                          </p>
                        </div>
                      </div>

                      <div className="footer_s_inner">
                        <div className="footer-sociala-icon">
                          <i className="fa fa-globe"></i>
                        </div>
                        <div className="footer-sociala-info">
                          <p>Email: example@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4">
              <div id="nav_menu-2" className="widget widget_nav_menu">
                <h2 className="widget-title">Important Links</h2>
                <div className="menu-help-link-container">
                  <ul id="menu-help-link" className="menu">
                    <li
                      id="menu-item-1198"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1198"
                    >
                      <Link to="/">Home</Link>
                    </li>
                    <li
                      id="menu-item-1198"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1198"
                    >
                      <Link to="/about">About Us</Link>
                    </li>
                    <li
                      id="menu-item-1195"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1195"
                    >
                      <Link to="/services">Our Service</Link>
                    </li>
                    <li
                      id="menu-item-1196"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1196"
                    >
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 last">
              <div
                id="mc4wp_form_widget-2"
                className="widget widget_mc4wp_form_widget"
              >
                <h2 className="widget-title">Newsletter</h2>
                <form
                  id="mc4wp-form-1"
                  className="mc4wp-form mc4wp-form-1201"
                  method="post"
                  data-id="1201"
                  data-name="Mail-chimp Form"
                >
                  <div className="mc4wp-form-fields">
                    <p className="mailchimp-form">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email...."
                        required=""
                      />
                      <input
                        type="text"
                        name="email"
                        placeholder="Phone Number...."
                        required=""
                      />
                      <button type="submit">Subscribe</button>
                    </p>
                  </div>
                  <input type="hidden" name="_mc4wp_form_id" value="1201" />
                  <input
                    type="hidden"
                    name="_mc4wp_form_element_id"
                    value="mc4wp-form-1"
                  />
                  <div className="mc4wp-response"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 footer_style_1">
              <div className="copy-right-text text-center">
                <p>Copyright © payloan all rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
