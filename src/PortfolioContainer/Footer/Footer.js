import React from "react";
import "./Footer.css";
import ScrollService from "../../utilities/ScrollService";
export default function Footer() {
  return (
    <div className="main-footer-container">
      <div className="main-footer-content">
        <div className="main-footer-message">
          <span> All rights reserved © Nathon Chavez 2022 </span>
        </div>
        <div className="scroll-container">
          <button
            className="btn-scroll"
            onClick={() => ScrollService.scrollHandler.scrollToHome()}
          >
            {" "}
            <i className="fa fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

//export default Footer;

