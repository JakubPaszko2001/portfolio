import React from "react";

const About = () => {
  return (
    <div>
      <div
        id="section"
        className="relative h-screen w-screen bg-light dark:bg-dark"
      >
        <h1
          id="text"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 text-5xl"
        >
          hello
        </h1>
      </div>
      <div className="h-screen w-screen bg-black"></div>
    </div>
  );
};

export default About;
