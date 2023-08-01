import React from "react";

const Breadcrumb = ({ current, previous }) => {
  return (
    <div className="breadcumb-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 txtc  text-left ccase">
            <div className="brpt">
              <h2>{current}</h2>
            </div>
            <div className="breadcumb-inner">
              <ul>
                <li>
                  <a href="https://wp.ditsolution.net/payloan/">{previous}</a>
                </li>
                <li>
                  <i className="fa fa-angle-right"></i>
                </li>
                <li>{current}</li>
              </ul>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
