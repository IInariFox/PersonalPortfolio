import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <Typewriter
      options={{
        strings: ["Full Stack Developer", "Enthusiatic Learner", "Ambitious Programmer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  );
};
