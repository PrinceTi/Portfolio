import { Col, Container, Row } from "react-bootstrap";

import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import React from "react";
import lbilImg from "../../Assets/Projects/lbil.png";
// Project Screenshots
import lymphomapImg from "../../Assets/Projects/lymphomap.png";
import oddvegaImg from "../../Assets/Projects/oddvega.png";
import quizzortImg from "../../Assets/Projects/quizzort.png";
import wmImg from "../../Assets/Projects/wm.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Experience & Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Production web applications, cloud healthcare platforms, and automated toolsets.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Lymphomap */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={lymphomapImg}
              isBlog={false}
              title="Lymphomap"
              subtitle="AI-Driven Oncology Research & Virtual Hospital"
              category="Digital Health Ecosystem"
              description="An AI and ML-powered cloud digital health ecosystem and virtual hospital platform dedicated to advanced cancer research. Led the technical migration from Vue 2 to Vue 3 leveraging Vite to accelerate build efficiency. Integrated WebRTC and WebSockets for real-time virtual communication and data streaming, while ensuring UI stability across desktop and mobile viewports."
              ghLink=""
              demoLink="https://www.lymphomap.ai/"
            />
          </Col>

          {/* LBIL */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={lbilImg}
              isBlog={false}
              title="LBIL"
              subtitle="The Digital Front Door — Clinical Consult Portal"
              category="Healthcare Cloud Network"
              description="An AI and Machine Learning-powered cloud hospital network with comprehensive digital healthcare features: Electronic Medical Records (EMR) repository, hospital and specialist doctor aggregation, telemedicine consultation, and real-time telemetry streaming for Virtual OPD, Virtual ICU, and Virtual Operation Theatres."
              ghLink=""
              demoLink="https://www.lbil.ai/"
            />
          </Col>

          {/* Oddvega */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={oddvegaImg}
              isBlog={false}
              title="Oddvega"
              subtitle="Gamified Social Learning & Rewards Engine"
              category="E-Learning & FinTech Platform"
              description="An AI-driven social learning ecosystem combining e-learning, gamification, and e-commerce. Engineered modular dashboard components for user balance tracking and reward cards. Developed centralized state management using Vuex for gamification logic and minimized layout shifts."
              ghLink=""
              demoLink="https://www.oddvega.com/"
            />
          </Col>

          {/* Quizzort */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={quizzortImg}
              isBlog={false}
              title="Quizzort"
              subtitle="Interactive Exam Assessment & Dynamic Quiz Builder"
              category="EdTech Tooling"
              description="Interactive educational platform featuring a custom quiz builder interface allowing educators to generate customizable exams and assessments with real-time score state tracking."
              ghLink=""
              demoLink="https://www.quizzort.com/"
            />
          </Col>

          {/* Wallmikki */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={wmImg}
              isBlog={false}
              title="Wallmikki"
              subtitle="Automated Image Background Isolation Engine"
              category="AI Image Processing"
              description="Automated AI-powered image editing web application engineered to instantly isolate and remove backgrounds from images. Built responsive file-uploading interfaces with asynchronous progress states and clean ES6 JavaScript."
              ghLink=""
              demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;