import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Tilt from "react-parallax-tilt";
import myImg from "../Assets/avatar.jpg";
import "./Home.css";

export const Home2 = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Allow Me To<span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
              As cliche as it sounds, my love for technology and innovation started before I was eight years old with the introduction of video games in my life. 
              <br />
              <br />However, my journey into computer science did not start until my junior year of high school, where I was introduced to
              <i>
                <b className="purple"> robotics. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">Data Structure, Algorithms and Machine Learning</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js, TensorFlow</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid myImage" alt="Avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
