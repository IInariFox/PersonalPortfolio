import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Particle } from "../Home/Particle";
import "./Projects.css";
import Clockifylogo from '../Assets/Clockify.png';
import sudokologo from "../Assets/S.png";
import AirBnB from "../Assets/AirBnB.png"
import { DiReact, DiJavascript, DiGithubBadge, DiHtml5, DiPython, DiRuby } from "react-icons/di";
import { SiStyledComponents, SiMaterialUi } from "react-icons/si"; //removed SiClockify
import { FaLink, FaCss3, FaCcStripe } from "react-icons/fa";
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
              <Card.Img className='project-img' variant="top" src={sudokologo} alt="project_name" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "800" }}>
                  Blog App
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  A simple CRUD blog app where users can sign in, write and upload an article, and connect with other users.
                </Card.Text>
                <div className="Techstacks">
                  <DiJavascript className="Techstacks-icons" />
                  <DiRuby className="Techstacks-icons" />
                  <FaCss3 className="Techstacks-icons" />
                  <DiHtml5 className="Techstacks-icons" />
                </div>
                <Button
                  variant="primary"
                  style={{ marginTop: "5%" }}
                  href="https://github.com/IInariFox/FullStackBlogApp/tree/master"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
                <Button
                  variant="primary"
                  style={{ marginLeft: "5%", marginTop: "5%" }}
                  href="https://fresh-blog-app.herokuapp.com/"
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
              <Card.Img className='project-img' variant="top" src={AirBnB} alt="project_name" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "800" }}>
                  Full Stack AirBnB Clone
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  A simple AirBnB clone that allows users to login, rent and upload properties as well as make payments.
                </Card.Text>
                <div className="Techstacks">
                  <DiJavascript className="Techstacks-icons" />
                  <DiRuby className="Techstacks-icons" />
                  <FaCss3 className="Techstacks-icons" />
                  <DiHtml5 className="Techstacks-icons" />
                  <FaCcStripe className="Techstacks-icons" />
                </div>
                <Button
                  variant="primary"
                  style={{ marginTop: "5%" }}
                  href="https://github.com/IInariFox/FullStackAirBnBClone/tree/master"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
                <Button
                  variant="primary"
                  style={{ marginLeft: "5%", marginTop: "5%" }}
                  href="https://fresh-airbnb-clone.herokuapp.com/"
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
              <Card.Img className='project-img'variant="top" src={Clockifylogo} alt="Project Alpha Supreme" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "800" }}>
                  Project Supremacy
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  A work in progress...
                </Card.Text>
                <div className="Techstacks">
                  <DiReact className="Techstacks-icons" />
                  <SiStyledComponents className="Techstacks-icons" />
                  <DiJavascript className="Techstacks-icons" />
                  <SiMaterialUi className="Techstacks-icons" />
                  <FaCss3 className="Techstacks-icons" />
                  <DiHtml5 className="Techstacks-icons" />
                  <DiPython className="Techstacks-icons" />
                </div>
              </Card.Body>
            </Card>
          </Col>

          
          <Col md={6}></Col>
        </Row>
      </Container>
    </Container>
  );
};
