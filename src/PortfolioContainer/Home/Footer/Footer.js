import React from "react";
import "./Footer.css";
//import bootstrap from "bootstrap";
//require ('bootstrap'); 

export default function footer() {
  return (
    <div className="footer-container col-xl-12">
      <div className="footer-parent ">
        <img
          src={require("../../../assets/Home/shape-bg.png").default}
          alt="you have problem with the file"
        />
      </div>
    </div>
  );
}
