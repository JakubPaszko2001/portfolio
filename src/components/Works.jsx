import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
const Works = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const components = document.querySelectorAll(".panel");
      const container = document.querySelector(".works");
      gsap.to(components, {
        xPercent: -100 * (components.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          // snap: 1 / (components.length - 1),
          end: () => "+=" + container.offsetWidth,
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="works">
      <div className="panel bg-red-500"></div>
      <div className="panel bg-green-500"></div>
      <div className="panel bg-blue-500"></div>
    </div>
  );
};

export default Works;
