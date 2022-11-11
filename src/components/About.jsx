import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.to(".text", {
      scrollTrigger: {
        trigger: ".first",
        markers: true,
        start: "top top",
        end: "+=400",
        pin: ".first",
        scrub: 2,
      },
      opacity: 1,
    });
  });

  return (
    <div>
      <div className="first flex justify-center items-center h-screen w-screen bg-black dark:bg-dark">
        <h1 className="text">Hello Hello</h1>
      </div>
      <div className="second h-screen w-screen bg-black"></div>
    </div>
  );
};

export default About;
