import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Frontend Developer",
          "Vue.js & Nuxt.js Specialist",
          "Single Page Application Architect",
          "UI/UX Implementation Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;