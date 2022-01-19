import React from "react";
import "./Footer.css";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  /* SOCIALS STATIC DATA */
  let socialDetails = [
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/nathon-chavez-b8a958211/",
    },
    { icon: faGithub, link: 'https://github.com/IInariFox' },
  ];

  let currentYear = new Date().getFullYear();

  const getSocials = () => {
    return socialDetails.map((social, index) => (
      <a
        rel="noopener noreferrer"
        key={index}
        href={social.link}
        target="_blank"
      >
        <FontAwesomeIcon className="social-icon" icon={social.icon} />
      </a>
    ));
  };

  return (
    <div className="main-footer-container">
      <div className="main-footer-content">
        <div className="main-footer-message">
          <span> All rights reserved © Nathon Chavez {currentYear} </span>
        </div>
        <div className="main-footer-socials">{getSocials()}</div>
      </div>
    </div>
  );
};

export default Footer;
