import React from "react";
import "./About.css";
import { Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
export const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am from<span className="purple"> San Diego, California</span> but I now reside in my permenant home of Austin, TX.
            <br />
            <br />
            <br />
            Apart from coding, some of my hobbies include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Creating miniature models of architecture, cars, trains, and boats 🚄
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about and creating robots 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing video games like Destiny, Forza Horizon and Sims🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music - pop, classical, and R&B 🎵
            </li>
            <li className="about-activity">
              <ImPointRight /> Going on group rides and modifying my e-bike!
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
};
