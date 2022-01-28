import React from "react";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap";
import { Github } from "./Github";
import { TechStack } from "./Techstack";
import { AboutCard } from "./AboutCard";
import { Particle } from "../Home/Particle";
import laptopImg from "../Assets/laptop.png";

export const About = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px"
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I Am</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset & Languages </strong>
        </h1>
        <TechStack/>
        <Github/>
      </Container>
    </Container>
  );
};
