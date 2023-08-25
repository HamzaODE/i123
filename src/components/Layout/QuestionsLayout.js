import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import footerImage from "../../assets/images/footer.png";
const QuestionsLayout = () => {
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
                <img src={footerImage} alt="footer-bg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionsLayout;
