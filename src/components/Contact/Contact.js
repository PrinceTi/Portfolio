import { AiFillGithub, AiOutlineSend } from "react-icons/ai";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import React, { useState } from "react";

import { FaLinkedinIn } from "react-icons/fa";
import Particle from "../Particle";
import emailjs from "@emailjs/browser";

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_le8pu4u";
const EMAILJS_TEMPLATE_ID = "template_opdu9sc";
const EMAILJS_PUBLIC_KEY = "snUU2jh8ilQvq-Bua";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      title: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          setLoading(false);
          setSubmitted(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setSubmitted(false), 6000);
        },
        (error) => {
          console.error("EmailJS sending error:", error);
          setLoading(false);
          setErrorMsg("Failed to send message. Please verify credentials or try again later.");
        }
      );
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} className="text-center" style={{ marginBottom: "30px" }}>
            <h1 className="project-heading">
              Get in <strong className="purple">Touch</strong>
            </h1>
            <p style={{ color: "white" }}>
              Feel free to connect with me for opportunities, collaborations, or questions!
            </p>
          </Col>

          {/* Contact Details Card */}
          <Col md={5} className="contact-info-card">
            <h3 className="purple" style={{ marginBottom: "20px", fontWeight: "700" }}>
              Contact Information
            </h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.7" }}>
              I am open to discussing frontend architecture, Vue/Nuxt migrations, or full-time senior engineering roles.
            </p>

            <div className="contact-item">
              <MdEmail className="contact-icon" />
              <div>
                <span className="contact-label">Email:</span>
                <a href="mailto:princevuejs@gmail.com" className="contact-link">
                  princevuejs@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <MdPhone className="contact-icon" />
              <div>
                <span className="contact-label">Phone:</span>
                <a href="tel:+919340824001" className="contact-link">
                  +91 9340824001
                </a>
              </div>
            </div>

            <div className="contact-item">
              <MdLocationOn className="contact-icon" />
              <div>
                <span className="contact-label">Location:</span>
                <span style={{ color: "#f1f5f9" }}>Jabalpur, Madhya Pradesh, India</span>
              </div>
            </div>

            <div style={{ marginTop: "35px" }}>
              <h5 style={{ color: "white", marginBottom: "15px" }}>Social Profiles</h5>
              <div className="contact-social-icons">
                <a
                  href="https://github.com/PrinceTi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/prince1994/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </Col>

          {/* Interactive Contact Form */}
          <Col md={6} className="contact-form-card">
            <h3 className="purple" style={{ marginBottom: "20px", fontWeight: "700" }}>
              Send a Message
            </h3>

            {submitted && (
              <div
                className="alert alert-success"
                style={{
                  background: "rgba(79, 192, 141, 0.2)",
                  borderColor: "#4FC08D",
                  color: "#4FC08D",
                }}
              >
                Thank you! Your message has been sent directly to my inbox.
              </div>
            )}

            {errorMsg && (
              <div
                className="alert alert-danger"
                style={{
                  background: "rgba(239, 68, 68, 0.2)",
                  borderColor: "#ef4444",
                  color: "#f87171",
                }}
              >
                {errorMsg}
              </div>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label style={{ color: "#e2e8f0" }}>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="custom-input"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label style={{ color: "#e2e8f0" }}>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="custom-input"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label style={{ color: "#e2e8f0" }}>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="custom-input"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Label style={{ color: "#e2e8f0" }}>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="custom-input"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="submit-btn"
                disabled={loading}
              >
                <AiOutlineSend /> &nbsp; {loading ? "Sending..." : "Send Message"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;