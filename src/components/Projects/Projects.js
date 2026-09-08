import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the key enterprise and commercial projects I've engineered.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Lymphomap (Virtual Hospital Platform)"
              description="An AI and Machine Learning-powered cloud digital health ecosystem and virtual hospital platform dedicated to advanced cancer research. Led the technical migration from Vue 2 to Vue 3 with Vite, integrated WebSockets/WebRTC for live data streaming, and ensured cross-browser UI stability."
              ghLink="https://github.com"
              demoLink=""
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Oddvega (Gamified Social Learning)"
              description="An AI-driven social learning ecosystem combining e-learning, gamification, and e-commerce. Built modular user dashboard components, balance trackers, and centralized state using Vuex for seamless reward logic and zero layout shifts."
              ghLink="https://github.com"
              demoLink=""
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Quizzort (Interactive Test Builder)"
              description="Interactive educational platform featuring a custom quiz builder interface allowing educators to generate exams dynamically with real-time score state tracking."
              ghLink="https://github.com"
              demoLink=""
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Wallmikki (AI Background Remover)"
              description="Automated AI-powered image editing web application engineered to isolate and remove backgrounds from photos. Developed smooth asynchronous file-upload workflows and real-time processing indicators."
              ghLink="https://github.com"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;