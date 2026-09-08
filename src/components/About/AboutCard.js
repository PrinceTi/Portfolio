import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import React from "react";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I am <span className="purple">Prince Tiwari</span> from{" "}
            <span className="purple">India</span>.
            <br />
            I am currently working as a{" "}
            <span className="purple">Senior Frontend Developer</span> with 5+ years of experience.
            <br />
            I hold a <span className="purple">Multimedia Diploma</span> from{" "}
            <span className="purple">Virtual Voyage, Indore</span>.
            <br />
            <br />
            Apart from building web apps, some key areas I am passionate about:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Architecting Reusable Component Libraries
            </li>
            <li className="about-activity">
              <ImPointRight /> Vue 2 to Vue 3 Modernization & Build Tooling
            </li>
            <li className="about-activity">
              <ImPointRight /> Real-time Streaming with WebSockets & WebRTC
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Prince Tiwari</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;