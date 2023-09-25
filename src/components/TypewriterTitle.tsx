"use client";

import React from "react";
import TypeWriter from "typewriter-effect";

type Props = {};

const TypewriterTitle = (props: Props) => {
  return (
    <TypeWriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Capture, Organize.")
          .pauseFor(1000)
          .deleteAll()
          .typeString("AI-Powered Insights.")
          .start();
      }}
    />
  );
};

export default TypewriterTitle;
