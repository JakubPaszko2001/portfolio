import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const x = useRef(null);
  useEffect(() => {
    const el = x.current;
    gsap.fromTo(
      el,
      { x: 0 },
      {
        x: 300,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          pin: true,
          markers: true,
        },
      }
    );
  });
  return (
    <div>
      <div className="abu relative h-screen w-screen bg-light dark:bg-dark">
        <div
          ref={x}
          className="box w-80 h-80 absolute top-0 left-0 bg-yellow-500"
        ></div>
      </div>
      <div className="h-screen w-screen bg-black"></div>
    </div>
  );
};

export default About;
