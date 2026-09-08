import { Col, Container, Row } from "react-bootstrap";
import { MdEmail, MdPhone } from "react-icons/md";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import React from "react";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed & Developed by Prince Tiwari</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} PT</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="mailto:princevuejs@gmail.com"
                style={{ color: "white" }}
                aria-label="email"
              >
                <MdEmail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="tel:+919340824001"
                style={{ color: "white" }}
                aria-label="phone"
              >
                <MdPhone />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://linkedin.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;