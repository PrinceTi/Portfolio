import { Col, Container, Row } from "react-bootstrap";

import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import React from "react";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Experience & Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Production web applications, cloud healthcare platforms, and automated toolsets.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Lymphomap (Senior Frontend Developer | Jan 2020 - Present)"
              description="An AI and ML-powered cloud digital health ecosystem and virtual hospital platform dedicated to advanced cancer research. Led the technical migration from Vue 2 to Vue 3 leveraging Vite to accelerate build efficiency. Integrated WebRTC and WebSockets for real-time virtual communication and data streaming, while ensuring UI stability across desktop and mobile viewports."
              ghLink="https://github.com"
              demoLink=""
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Oddvega (Frontend Developer | Sept 2021 - Dec 2022)"
              description="An AI-driven social learning ecosystem combining e-learning, gamification, and e-commerce. Engineered modular dashboard components for user balance tracking and reward cards. Developed and optimized centralized state management using Vuex for gamification logic and minimized layout shifts."
              ghLink="https://github.com"
              demoLink=""
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Quizzort (Frontend Developer | Nov 2019 - Jan 2020)"
              description="An innovative interactive education platform featuring dynamic quiz builders, online test assessments, and mini-games. Engineered customizable exam generation interfaces and maintained reactive UI states for real-time scoring accuracy."
              ghLink="https://github.com"
              demoLink=""
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Wallmikki (Frontend Developer | Sept 2018 - Oct 2019)"
              description="An automated AI-powered image editing web application engineered to instantly isolate and remove backgrounds. Developed smooth asynchronous file-uploading interfaces with real-time processing indicators and clean ES6 JavaScript."
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