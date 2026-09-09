import {
  SiBootstrap,
  SiFlutter,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPostman,
  SiReact,
  SiSass,
  SiSocketdotio,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiWebrtc,
} from "react-icons/si";

import { FaPaypal } from "react-icons/fa";
import React from "react";
import { Row } from "react-bootstrap";

function Techstack() {
  const skills = [
    { name: "Vue.js", icon: <SiVuedotjs />, color: "#4FC08D" },
    { name: "Nuxt.js", icon: <SiNuxtdotjs />, color: "#00DC82" },
    { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
    { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
    { name: "Material UI", icon: <SiMui />, color: "#007FFF" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#5FA04E" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Vite", icon: <SiVite />, color: "#646CFF" },
    { name: "HTML5 / CSS3", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "SASS / SCSS", icon: <SiSass />, color: "#CC6699" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
    { name: "Socket.io", icon: <SiSocketdotio />, color: "#FFFFFF" },
    { name: "WebRTC", icon: <SiWebrtc />, color: "#339933" },
    { name: "GraphQL", icon: <SiGraphql />, color: "#E10098" },
    { name: "PayPal SDK", icon: <FaPaypal />, color: "#00457C" },
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
  ];

  return (
    <Row
      className="tech-stack-container"
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
        paddingTop: "10px",
      }}
    >
      {skills.map((skill, index) => (
        <div key={index} className="skill-pill">
          <span className="skill-icon" style={{ color: skill.color }}>
            {skill.icon}
          </span>
          <span className="skill-name">{skill.name}</span>
        </div>
      ))}
    </Row>
  );
}

export default Techstack;