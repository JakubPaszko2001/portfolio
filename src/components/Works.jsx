import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
const Works = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const components = document.querySelectorAll(".panel");
      const container = document.querySelector(".projects");
      gsap.to(container, {
        xPercent: -33.33 * (components.length - 1),
        // xPercent: -100,
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
    <div className="projects bg-black">
      {/* <div className="bg-red-500 h-1/2 w-[20vw]"></div> */}
      <div className="panel relative bg-red-500 dark:bg-dark">
        <div className="h-1/2 w-full translate-x-[50%] translate-y-1/2 bg-black"></div>
      </div>
      <div className="panel bg-green-500 flex justify-center items-center">
        {/* <div className="w-64 h-64 bg-black"></div> */}
      </div>
      <div className="panel bg-blue-500"></div>
    </div>
  );
};

export default Works;
