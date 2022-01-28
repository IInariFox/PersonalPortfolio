import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Type } from "./Type";
import homeLogo from "../Assets/home-main.svg";
import "./Home.css";
export const Home = () => {
  return (
    <>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                Howdy<span className="wave">👋🏻</span>
                </h1>
                <h1 className="heading-name">
                  I'm
                  <strong className="main-name">&nbsp; Nathon Chavez</strong>
                </h1>
                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
              <Col md={5} style={{ paddingBottom: 20 }}>
                <img src={homeLogo} alt="home pic" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </Container>
    </>
  );
};
