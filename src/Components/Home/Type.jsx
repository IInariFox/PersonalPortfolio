import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <Typewriter
      options={{
        strings: ["Full Stack Developer", "Enthusiatic Learner", "Determined/Persistant/Ambitious"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  );
};
