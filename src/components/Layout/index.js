import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div
        data-elementor-type="wp-page"
        data-elementor-id="8"
        className="elementor elementor-8"
        data-elementor-settings="[]"
      >
        <div className="elementor-section-wrap">
          <div className="wrapper">
            <div className="template-home-wrapper">
              <div className="page-content-home-page">
                <Header />
                <Outlet />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
