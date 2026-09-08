import { Col, Container, Row } from "react-bootstrap";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import React from "react";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Accomplished Senior Frontend Developer with 5+ years of experience
              architecting highly responsive, intuitive, and high-performance web applications.
              <br />
              <br />I specialize in core modern frameworks like
              <i>
                <b className="purple"> Vue.js (Vue 2 & Vue 3 Composition API), Nuxt.js, and JavaScript (ES6+). </b>
              </i>
              <br />
              <br />
              My key focus areas include building scalable &nbsp;
              <i>
                <b className="purple">Single Page Applications (SPAs)</b> and
                integrating real-time communication systems using{" "}
                <b className="purple">WebSockets and WebRTC.</b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for developing robust component libraries
              using <b className="purple">Vite, SASS/SCSS,</b> and modern build pipelines.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;