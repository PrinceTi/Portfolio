import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Col, Container, Row } from "react-bootstrap";

import { BsBriefcaseFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import React from "react";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";

function Home2() {
  const experiences = [
    {
      role: "Sr. Frontend Software Engineer",
      company: "LYMPHOMAP Inc.",
      location: "Remote, India",
      duration: "Apr 2019 - Present",
      points: [
        "Architected scalable single-page applications (SPAs) using Vue.js, Nuxt.js, and modern build tooling.",
        "Built low-latency real-time communication channels and live virtual data streaming using WebSocket and WebRTC integrations.",
        "Spearheaded complete portal modernization and migration from Vue 2 to Vue 3 with Vite, accelerating build times by over 40%.",
        "Collaborated with backend developers and UI/UX designers to translate complex oncology workflows into reusable component libraries.",
        "Maintained clean, optimized codebase ensuring strict responsiveness and zero layout shift across viewports.",
      ],
    },
    {
      role: "Front End Developer",
      company: "Hiteshi Infotech Pvt. Ltd.",
      location: "Indore, Madhya Pradesh, India",
      duration: "Feb 2018 - Mar 2019",
      points: [
        "Transformed complex UI/UX wireframes into functional, responsive web applications using Vue.js, AngularJS, and WordPress.",
        "Engineered cross-platform client interfaces utilizing core JavaScript (ES6+), HTML5, and CSS3 with cross-browser fidelity.",
        "Integrated RESTful API services and ensured strict mobile-first viewport stability.",
      ],
    },
    {
      role: "Front End Developer",
      company: "Lemosys Infotech Pvt. Ltd.",
      location: "Indore, Madhya Pradesh, India",
      duration: "Mar 2015 - Jan 2018",
      points: [
        "Designed and developed responsive, high-performance web applications and custom WordPress themes.",
        "Built dynamic client components with HTML5, CSS3, JavaScript, jQuery, and Bootstrap.",
        "Gained early production experience applying Vue.js and Angular within modern frontend application pipelines.",
      ],
    },
  ];

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* Intro Section */}
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with frontend engineering and crafting intuitive user
              experiences... 🤷‍♂️
              <br />
              <br />I specialize in building scalable web architectures with
              <i>
                <b className="purple"> Vue.js (Vue 2 & 3), Nuxt.js, Vite, and JavaScript (ES6+). </b>
              </i>
              <br />
              <br />
              My field of interest includes building &nbsp;
              <i>
                <b className="purple">Real-Time Cloud Applications</b> and
                integrating protocols like{" "}
                <b className="purple">WebSockets and WebRTC.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* Work Experience Section */}
        <Row style={{ justifyContent: "center", marginTop: "70px" }}>
          <Col md={12} className="text-center">
            <h1 style={{ fontSize: "2.4em", Color: "white" }}>
              Work <span className="purple">Experience</span>
            </h1>
            <p style={{ color: "#cbd5e1" }}>
              My professional journey across engineering squads and enterprise platforms.
            </p>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={11}>
            <div className="home-timeline-container">
              {experiences.map((exp, index) => (
                <div className="home-timeline-card" key={index}>
                  <div className="home-timeline-icon">
                    <BsBriefcaseFill />
                  </div>
                  <div className="home-timeline-content">
                    <div className="home-timeline-header">
                      <div>
                        <h3 className="home-timeline-role purple">{exp.role}</h3>
                        <h5 className="home-timeline-company">{exp.company}</h5>
                      </div>
                      <div className="home-timeline-meta">
                        <span className="home-timeline-duration">{exp.duration}</span>
                        <span className="home-timeline-location">{exp.location}</span>
                      </div>
                    </div>
                    <ul className="home-timeline-points">
                      {exp.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;