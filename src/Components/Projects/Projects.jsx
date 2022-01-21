import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Particle } from "../Home/Particle";
import "./Projects.css";
import Clockifylogo from '../Assets/Clockify.png';
import sudokologo from "../Assets/S.png";
import { DiReact, DiJavascript, DiGithubBadge, DiHtml5 } from "react-icons/di";
import { SiStyledComponents, SiMaterialUi, SiClockify } from "react-icons/si";
import { FaLink, FaCss3 } from "react-icons/fa";
export const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={6} className="project-card">
            <Card className="project-card-view" style={{ textAlign: "center" }}>
              <Card.Img variant="top" src={sudokologo} alt="project_name" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "800" }}>
                  Title_goes
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  define_text
                </Card.Text>
                <div className="Techstacks">
                  <DiReact className="Techstacks-icons" />
                  <SiStyledComponents className="Techstacks-icons" />
                  <DiJavascript className="Techstacks-icons" />
                  <SiMaterialUi className="Techstacks-icons" />
                  <FaCss3 className="Techstacks-icons" />
                  <DiHtml5 className="Techstacks-icons" />
                </div>
                <Button
                  variant="primary"
                  style={{ marginTop: "5%" }}
                  href="Link_for_github_code"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
                <Button
                  variant="primary"
                  style={{ marginLeft: "5%", marginTop: "5%" }}
                  href="link_for_app_website"
                  target="_blank"
                >
                  {" "}
                  <FaLink /> Link
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="project-card">
            <Card className="project-card-view" style={{ textAlign: "center" }}>
              <Card.Img variant="top" src={Clockifylogo} alt="Project Alpha Supreme" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "800" }}>
                  Project Supremacy
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  define_text
                </Card.Text>
                <div className="Techstacks">
                  <DiReact className="Techstacks-icons" />
                  <SiStyledComponents className="Techstacks-icons" />
                  <DiJavascript className="Techstacks-icons" />
                  <SiMaterialUi className="Techstacks-icons" />
                  <FaCss3 className="Techstacks-icons" />
                  <DiHtml5 className="Techstacks-icons" />
                </div>
                <Button
                  variant="primary"
                  style={{ marginLeft: "1%", marginTop: "5%" }}
                  href="link_for_app_website"
                  target="_blank"
                >
                  {" "}
                  <FaLink /> Link
                </Button>
              </Card.Body>
            </Card>
          </Col>

          
          <Col md={6}></Col>
        </Row>
      </Container>
    </Container>
  );
};
