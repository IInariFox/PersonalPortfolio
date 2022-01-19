import React from "react";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import "./Home.css";

function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header />
      <Profile />
      <Footer />
      <div className="icon">
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
  );
}

export default Home;
