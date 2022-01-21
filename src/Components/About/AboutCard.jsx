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
            I am<span className="purple"> San Diego, California.</span>
            <br />I am a junior in college that is waiting to transfer to my dream school!
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
              <ImPointRight /> Playing video games like Destiny, Forza Horizon and Ark Survival 🎮 
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music - pop, classical, and R&B 🎵
            </li>
            <li className="about-activity">
              <ImPointRight /> Relax with a session of playing my alto sax or piano 🎷
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
};
