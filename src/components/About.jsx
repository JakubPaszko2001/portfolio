import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import column from "../Image/column.webp";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".first",
          scrub: 2,
          pin: true,
          start: "top top",
          end: "+=2000",
        },
      });
      tl.from(".texttt", { y: 50, opacity: 0, duration: 5000 });
      tl.to(".texttt", { opacity: 0, duration: 5000 });
      tl.fromTo(
        ".firstRowLeftCol",
        { x: "-190%" },
        { x: -20, duration: 10000 }
      );
      tl.fromTo(
        ".firstRowRightCol",
        { x: "190%" },
        { x: 20, duration: 10000 },
        "-=10000"
      );
      tl.fromTo(
        ".firstRowText",
        { opacity: 0 },
        { opacity: 1, duration: 10000 },
        "-=10000"
      );
      tl.fromTo(
        ".secondRowLeftCol",
        { x: "-190%" },
        { x: -20, duration: 10000 }
      );
      tl.fromTo(
        ".secondRowRightCol",
        { x: "190%" },
        { x: 20, duration: 10000 },
        "-=10000"
      );
      tl.fromTo(
        ".secondRowText",
        { opacity: 0 },
        { opacity: 1, duration: 10000 },
        "-=10000"
      );
      tl.fromTo(
        ".thirdRowLeftCol",
        { x: "-190%" },
        { x: -20, duration: 10000 }
      );
      tl.fromTo(
        ".thirdRowRightCol",
        { x: "190%" },
        { x: 20, duration: 10000 },
        "-=10000"
      );
      tl.fromTo(
        ".thirdRowText",
        { opacity: 0 },
        { opacity: 1, duration: 10000 },
        "-=10000"
      );
      tl.fromTo(
        ".fourthRowLeftCol",
        { x: "-190%" },
        { x: -20, duration: 10000 }
      );
      tl.fromTo(
        ".fourthRowRightCol",
        { x: "190%" },
        { x: 20, duration: 10000 },
        "-=10000"
      );
      tl.fromTo(
        ".fourthRowText",
        { opacity: 0 },
        { opacity: 1, duration: 10000 },
        "-=10000"
      );
      tl.to(".kontener", { opacity: 0, duration: 10000, delay: 10000 });
      tl.to(".zolty", { opacity: 1, duration: 10000 });
      tl.from(".yellow", { y: "-100%", duration: 10000 });
      tl.from(".red", { y: "100%", duration: 10000 }, "-=10000");
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-light dark:bg-dark overflow-hidden">
      <div className="first relative h-screen w-screen font-main bg-light dark:text-light dark:bg-dark">
        <h1 className="texttt absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
          About me
        </h1>
        <div className="grid grid-rows-6 grid-cols-4 h-screen w-screen dark:text-light text-black lg:grid-cols-6 kontener">
          {/* First Row */}
          <div className="flex justify-start col-start-1 row-start-2 lg:col-start-2 lg:row-start-1 lg:rotate-90 lg:row-span-2">
            <img
              className="firstRowLeftCol object-contain h-full rotate-90"
              alt="column"
              src={column}
            />
          </div>
          <div className="flex justify-center items-center col-start-2 row-start-2 col-span-2 lg:col-start-2 lg:row-start-3 lg:col-span-1 lg:row-span-2">
            <h1 className="firstRowText text-2xl lg:hidden">Creative</h1>
            <div className="firstRowText text-2xl hidden lg:flex lg:flex-col lg:justify-center lg:items-center">
              <h1>C</h1>
              <h1>R</h1>
              <h1>E</h1>
              <h1>A</h1>
              <h1>T</h1>
              <h1>I</h1>
              <h1>V</h1>
              <h1>E</h1>
            </div>
          </div>
          <div className="flex justify-end col-start-4 row-start-2 lg:col-start-2 lg:row-start-5 lg:rotate-90 lg:row-span-2">
            <img
              className="firstRowRightCol object-contain h-full rotate-[270deg]"
              src={column}
              alt="column"
            />
          </div>
          {/* Second Row */}
          <div className="flex justify-start col-start-1 row-start-3 lg:col-start-3 lg:row-start-1 lg:rotate-90 lg:row-span-2">
            <img
              className="secondRowLeftCol object-contain h-full rotate-90"
              alt="column"
              src={column}
            />
          </div>
          <div className="flex justify-center items-center col-start-2 row-start-3 col-span-2 lg:col-start-3 lg:row-start-3 lg:col-span-1 lg:row-span-2">
            <h1 className="secondRowText text-2xl lg:hidden">Creative</h1>
            <div className="secondRowText text-2xl hidden lg:flex lg:flex-col lg:justify-center lg:items-center">
              <h1>C</h1>
              <h1>R</h1>
              <h1>E</h1>
              <h1>A</h1>
              <h1>T</h1>
              <h1>I</h1>
              <h1>V</h1>
              <h1>E</h1>
            </div>
          </div>
          <div className="flex justify-end col-start-4 row-start-3 lg:col-start-3 lg:row-start-5 lg:rotate-90 lg:row-span-2">
            <img
              className="secondRowRightCol object-contain h-full rotate-[270deg]"
              src={column}
              alt="column"
            />
          </div>
          {/* Third Row */}
          <div className="flex justify-start col-start-1 row-start-4 lg:col-start-4 lg:row-start-1 lg:rotate-90 lg:row-span-2">
            <img
              className="thirdRowLeftCol object-contain h-full rotate-90"
              alt="column"
              src={column}
            />
          </div>
          <div className="flex justify-center items-center col-start-2 row-start-4 col-span-2 lg:col-start-4 lg:row-start-3 lg:col-span-1 lg:row-span-2">
            <h1 className="thirdRowText text-2xl lg:hidden">Creative</h1>
            <div className="thirdRowText text-2xl hidden lg:flex lg:flex-col lg:justify-center lg:items-center">
              <h1>C</h1>
              <h1>R</h1>
              <h1>E</h1>
              <h1>A</h1>
              <h1>T</h1>
              <h1>I</h1>
              <h1>V</h1>
              <h1>E</h1>
            </div>
          </div>
          <div className="flex justify-end col-start-4 row-start-4 lg:col-start-4 lg:row-start-5 lg:rotate-90 lg:row-span-2">
            <img
              className="thirdRowRightCol object-contain h-full rotate-[270deg]"
              src={column}
              alt="column"
            />
          </div>
          {/* Fourth Row */}
          <div className="flex justify-start col-start-1 row-start-5 lg:col-start-5 lg:row-start-1 lg:rotate-90 lg:row-span-2">
            <img
              className="fourthRowLeftCol object-contain h-full rotate-90"
              alt="column"
              src={column}
            />
          </div>
          <div className="flex justify-center items-center col-start-2 row-start-5 col-span-2 lg:col-start-5 lg:row-start-3 lg:col-span-1 lg:row-span-2">
            <h1 className="fourthRowText text-2xl lg:hidden">Creative</h1>
            <div className="fourthRowText text-2xl hidden lg:flex lg:flex-col lg:justify-center lg:items-center">
              <h1>C</h1>
              <h1>R</h1>
              <h1>E</h1>
              <h1>A</h1>
              <h1>T</h1>
              <h1>I</h1>
              <h1>V</h1>
              <h1>E</h1>
            </div>
          </div>
          <div className="flex justify-end col-start-4 row-start-5 lg:col-start-5 lg:row-start-5 lg:rotate-90 lg:row-span-2">
            <img
              className="fourthRowRightCol object-contain h-full rotate-[270deg]"
              src={column}
              alt="column"
            />
          </div>
        </div>
        <div className="zolty absolute top-0 left-0 w-screen h-screen grid grid-col-1 grid-rows-3 opacity-0">
          <div className="red row-start-1 bg-[red] -z-10 lg:h-full"></div>
          <div className="row-start-2 bg-[green] lg:h-full"></div>
          <div className="yellow row-start-3 bg-[yellow] -z-10 lg:h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
