import React from "react";
import Typical from "react-typical";
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/IInariFox">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/nathon-chavez-b8a958211/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="nathonchavez01@gmail.com">
                <i className="fa fa-envelope-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hi, I'm <span className="highlighted-text">Nathon</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Invested Programmer🖥️",
                    1000,
                    "Determined Learner📖",
                    1000,
                    "Fullstack developer⌨️",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                An enthusiatic full stack developer ready to traverse the
                everexpanding world of big tech.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="myResumeJan.pdf" download="Nathons Resume">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
