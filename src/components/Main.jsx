import React, { useRef, useEffect } from "react";
import bg from "../Image/bg.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import SplitType from "split-type";
import gsap from "gsap";
const Main = () => {
  const wrapper = useRef();

  useEffect(() => {
    const nameSplit = new SplitType("#name");
    const jobSplit = new SplitType("#job");
    const tl = gsap.timeline();
    const hamburgerTl = gsap.timeline();

    tl.to(".char", { y: 0, stagger: 0.05, delay: 0.2, duration: 0.4 }).fromTo(
      ".hamburger",
      { y: "20", opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
  });

  return (
    <div
      className="w-screen h-screen font-main"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        ref={wrapper}
        className="w-full h-full flex flex-col justify-center items-center"
      >
        <h1 id="name" className="text-5xl clippath">
          Jakub Paszko
        </h1>
        <h1 id="job" className="text-2xl clippath">
          Frontend Developer
        </h1>
      </div>
      <div className="hamburger absolute bottom-10 right-10 text-5xl">
        <GiHamburgerMenu />
      </div>
      <div className="absolute top-0 right-0 h-full w-1/2 flex justify-center items-center bg-[dimgray]">
        <div className="h-1/3 flex flex-col justify-between text-3xl">
          <h1>About</h1>
          <h1>Skills</h1>
          <h1>Projects</h1>
          <h1>Contact</h1>
        </div>
        <div className="absolute bottom-10 right-10 text-5xl">
          <CgClose />
        </div>
      </div>
    </div>
  );
};

export default Main;
