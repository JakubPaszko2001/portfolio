import React, { useRef, useEffect } from "react";
import bg from "../Image/bg.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import SplitType from "split-type";
import gsap from "gsap";
const Main = () => {
  const wrapper = useRef();

  useEffect(() => {
    const nameSplit = new SplitType("#name");
    const jobSplit = new SplitType("#job");
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.4,
    });
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
      <div className="absolute bottom-10 right-10 text-5xl">
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Main;
