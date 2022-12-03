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

      tl.from(".texttt", { y: 50, opacity: 0, duration: 5000 });
      tl.to(".texttt", { opacity: 0, duration: 5000 });
      tl.fromTo(".firstRowLeftCol", { x: "-150%" }, { x: 0, duration: 10000 });
      tl.fromTo(
        ".firstRowRightCol",
        { x: "150%" },
        { x: 0, duration: 10000 },
        "-=10000"
      );
      tl.fromTo(
        ".firstRowText",
        { opacity: 0 },
        { opacity: 1, duration: 10000 },
        "-=10000"
      );
      tl.fromTo(".secondRowLeftCol", { x: "-150%" }, { x: 0, duration: 10000 });
      tl.fromTo(
        ".secondRowRightCol",
        { x: "150%" },
        { x: 0, duration: 10000 },
        "-=10000"
      );
      tl.fromTo(
        ".secondRowText",
        { opacity: 0 },
        { opacity: 1, duration: 10000 },
        "-=10000"
      );
      tl.fromTo(".thirdRowLeftCol", { x: "-150%" }, { x: 0, duration: 10000 });
      tl.fromTo(
        ".thirdRowRightCol",
        { x: "150%" },
        { x: 0, duration: 10000 },
        "-=10000"
      );
      tl.fromTo(
        ".thirdRowText",
        { opacity: 0 },
        { opacity: 1, duration: 10000 },
        "-=10000"
      );
      tl.fromTo(".fourthRowLeftCol", { x: "-150%" }, { x: 0, duration: 10000 });
      tl.fromTo(
        ".fourthRowRightCol",
        { x: "150%" },
        { x: 0, duration: 10000 },
        "-=10000"
      );
      tl.fromTo(
        ".fourthRowText",
        { opacity: 0 },
        { opacity: 1, duration: 10000 },
        "-=10000"
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
        <div className="grid grid-rows-6 grid-cols-4 h-screen w-screen text-black">
          {/* First Row */}
          <div className="flex justify-start col-start-1 row-start-2">
            <img
              className="firstRowLeftCol object-contain h-full rotate-90"
              alt="column"
              src={column}
            />
          </div>
          <div className="flex justify-center items-center col-start-2 row-start-2 col-span-2 ">
            <h1 className="firstRowText text-2xl">Creative</h1>
          </div>
          <div className="flex justify-end col-start-4 row-start-2">
            <img
              className="firstRowRightCol object-contain h-full rotate-[270deg]"
              src={column}
              alt="column"
            />
          </div>
          {/* Second Row */}
          <div className="flex justify-start col-start-1 row-start-3">
            <img
              className="secondRowLeftCol object-contain h-full rotate-90"
              alt="column"
              src={column}
            />
          </div>
          <div className="flex justify-center items-center col-start-2 row-start-3 col-span-2 ">
            <h1 className="secondRowText text-2xl">Creative</h1>
          </div>
          <div className="flex justify-end col-start-4 row-start-3">
            <img
              className="secondRowRightCol object-contain h-full rotate-[270deg]"
              src={column}
              alt="column"
            />
          </div>
          {/* Third Row */}
          <div className="flex justify-start col-start-1 row-start-4">
            <img
              className="thirdRowLeftCol object-contain h-full rotate-90"
              alt="column"
              src={column}
            />
          </div>
          <div className="flex justify-center items-center col-start-2 row-start-4 col-span-2 ">
            <h1 className="thirdRowText text-2xl">Creative</h1>
          </div>
          <div className="flex justify-end col-start-4 row-start-4">
            <img
              className="thirdRowRightCol object-contain h-full rotate-[270deg]"
              src={column}
              alt="column"
            />
          </div>
          {/* Fourth Row */}
          <div className="flex justify-start col-start-1 row-start-5">
            <img
              className="fourthRowLeftCol object-contain h-full rotate-90"
              alt="column"
              src={column}
            />
          </div>
          <div className="flex justify-center items-center col-start-2 row-start-5 col-span-2 ">
            <h1 className="fourthRowText text-2xl">Creative</h1>
          </div>
          <div className="flex justify-end col-start-4 row-start-5">
            <img
              className="fourthRowRightCol object-contain h-full rotate-[270deg]"
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
