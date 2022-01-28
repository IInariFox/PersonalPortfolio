import React from "react";
import { Row } from "react-bootstrap";
import "./Footer.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GrResume } from "react-icons/gr";
export const Footer = () => {
  return (
    <Row md={12} className="home-about-social">
      <h1>FIND ME ON</h1>
      <p>
        Feel free to <span className="purple">connect </span>with me
      </p>
      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://github.com/IInariFox"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/nathon-chavez-b8a958211/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://drive.google.com/file/d/12DQq5gpaQPrGRn3LmcMabdW44ay3qT6q/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
            id="resumelink"
          >
            <GrResume />
          </a>
        </li>
      </ul>
    </Row>
  );
};
