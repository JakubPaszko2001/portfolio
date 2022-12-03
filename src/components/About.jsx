import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import zdjecie from "../Image/zdjecie.jpg";
import pillars from "../Image/pillars.webp";
import column from "../Image/column.webp";
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
      <div className="first relative h-screen w-screen font-main bg-light dark:bg-dark">
        <h1 className="texttt absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
          About me
        </h1>
        <div className="filarLeft grid grid-rows-6 grid-cols-4 h-screen w-screen bg-black">
          {/* First Row */}
          <div className="flex justify-start col-start-1 row-start-2">
            <img
              className="object-contain h-full rotate-90"
              alt="column"
              src={column}
            />
          </div>
          <div className="flex justify-center items-center col-start-2 row-start-2 col-span-2 text-light">
            <h1>Creative</h1>
          </div>
          <div className="flex justify-end col-start-4 row-start-2">
            <img
              className="object-contain h-full rotate-[270deg]"
              src={column}
              alt="column"
            />
          </div>
          {/* Second Row */}
          <div className="flex justify-start col-start-1 row-start-3">
            <img
              className="object-contain h-full rotate-90"
              alt="column"
              src={column}
            />
          </div>
          <div className="flex justify-center items-center col-start-2 row-start-3 col-span-2 text-light">
            <h1>Creative</h1>
          </div>
          <div className="flex justify-end col-start-4 row-start-3">
            <img
              className="object-contain h-full rotate-[270deg]"
              src={column}
              alt="column"
            />
          </div>
          {/* Third Row */}
          <div className="flex justify-start col-start-1 row-start-4">
            <img
              className="object-contain h-full rotate-90"
              alt="column"
              src={column}
            />
          </div>
          <div className="flex justify-center items-center col-start-2 row-start-4 col-span-2 text-light">
            <h1>Creative</h1>
          </div>
          <div className="flex justify-end col-start-4 row-start-4">
            <img
              className="object-contain h-full rotate-[270deg]"
              src={column}
              alt="column"
            />
          </div>
          {/* Fourth Row */}
          <div className="flex justify-start col-start-1 row-start-5">
            <img
              className="object-contain h-full rotate-90"
              alt="column"
              src={column}
            />
          </div>
          <div className="flex justify-center items-center col-start-2 row-start-5 col-span-2 text-light">
            <h1>Creative</h1>
          </div>
          <div className="flex justify-end col-start-4 row-start-5">
            <img
              className="object-contain h-full rotate-[270deg]"
              src={column}
              alt="column"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
