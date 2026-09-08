import { BsGithub } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";
import React from "react";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt={props.title}
        style={{ height: "230px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          {/* Main Title */}
          <Card.Title
            style={{
              fontSize: "1.45rem",
              fontWeight: "700",
              marginBottom: "4px",
              textAlign: "center",
            }}
          >
            {props.title}
          </Card.Title>

          {/* Subtitle & Small Category */}
          <div style={{ marginBottom: "14px", textAlign: "center" }}>
            {props.subtitle && (
              <div
                style={{
                  color: "#c770f0",
                  fontSize: "0.98rem",
                  fontWeight: "600",
                  marginBottom: "2px",
                }}
              >
                {props.subtitle}
              </div>
            )}
            {props.category && (
              <div
                style={{
                  color: "#94a3b8",
                  fontSize: "0.8rem",
                  fontWeight: "500",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                {props.category}
              </div>
            )}
          </div>

          {/* Description */}
          <Card.Text style={{ textAlign: "justify", fontSize: "0.92rem", lineHeight: "1.65" }}>
            {props.description}
          </Card.Text>
        </div>

        <div style={{ marginTop: "18px", textAlign: "center" }}>
          {/* GitHub link button (if provided) */}
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {/* Demo button */}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: props.ghLink ? "10px" : "0px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;