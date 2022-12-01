import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import zdjecie from "../Image/zdjecie.jpg";
import pillars from "../Image/pillars.webp";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".first",
          scrub: 1,
          pin: true,
          start: "top top",
          // end: "+=400",
        },
      });

      tl.from(".texttt", { y: 50, opacity: 0 });
      tl.to(".texttt", { opacity: 0 });
      // tl.fromTo(".dalej", { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
      // tl.fromTo(".dalej", { opacity: 1 }, { opacity: 0 });
      // tl.fromTo(".filarLeft", { x: -50 }, { x: 0 });
      tl.fromTo(".filarLeft", { opacity: 0 }, { opacity: 1, duration: 0.4 });
      tl.fromTo(
        ".filarRight",
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        "-=0.4"
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* <div className="first flex justify-center items-center h-screen w-screen bg-light dark:bg-dark">
        <h1 className="texttt text-5xl">Hello Hello</h1>
      </div> */}
      <div className="first relative h-screen w-screen font-main bg-light dark:bg-dark">
        <h1 className="texttt absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
          About me
        </h1>
        <div className="next relative h-screen text-3xl">
          <img
            className="filarLeft absolute left-0 -translate-x-1/2 top-1/2 rotate-90 -translate-y-1/2"
            src={pillars}
          ></img>
          <img
            className="filarRight absolute right-0 translate-x-1/2 bottom-1/2 rotate-[-90deg] translate-y-1/2"
            src={pillars}
          ></img>
        </div>
        {/* <div className="next absolute flex justify-center items-center h-full text-3xl max-h-screen">
          <img src={zdjecie}></img>
        </div> */}
      </div>
    </div>
  );
};

export default About;
