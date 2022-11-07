import React, { useRef, useEffect } from "react";
import bg from "../Image/bg.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import SplitType from "split-type";
import gsap from "gsap";
const Main = () => {
  const wrapper = useRef();

  useEffect(() => {
    const nameSplit = new SplitType("#name");
    const jobSplit = new SplitType("#job");
    const tl = gsap.timeline();

    tl.to(".char", { y: 0, stagger: 0.05, delay: 0.2, duration: 0.1 })
      .fromTo(
        ".hamburger",
        { y: "20", opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
      .fromTo(
        ".icon1",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2 }
      )
      .fromTo(
        ".icon2",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2 }
      )
      .fromTo(
        ".icon3",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2 }
      )
      .fromTo(
        ".menuItem1",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2 }
      )
      .fromTo(
        ".menuItem2",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2 }
      )
      .fromTo(
        ".menuItem3",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2 }
      )
      .fromTo(
        ".menuItem4",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2 }
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
        <div className="fixed top-0 left-0 items-center justify-between w-screen h-40 px-4 lg:px-20 hidden md:flex">
          <div className="flex text-5xl">
            <div className="icon1 cursor-pointer iconAnimation">
              <AiFillLinkedin />
            </div>
            <div className="icon2 cursor-pointer iconAnimation">
              <AiFillGithub />
            </div>
            <div className="icon3 cursor-pointer iconAnimation">
              <AiFillFacebook />
            </div>
          </div>
          <div className="flex text-3xl xl:text-4xl">
            <h1 className="menuItem1 cursor-pointer mr-2 underlineText">
              About |
            </h1>
            <h1 className="menuItem2 cursor-pointer mr-2 underlineText">
              Skills |
            </h1>
            <h1 className="menuItem3 cursor-pointer mr-2 underlineText">
              Projects |
            </h1>
            <h1 className="menuItem4 cursor-pointer underlineText hover:after:w-full">
              Contact
            </h1>
          </div>
        </div>
        <h1 id="name" className="text-5xl clippath lg:text-7xl">
          Jakub Paszko
        </h1>
        <h1 id="job" className="text-2xl clippath lg:text-4xl">
          Frontend Developer
        </h1>
      </div>
      <div
        onClick={() => {
          const hamburgerTl = gsap.timeline();
          hamburgerTl.to(".hamburgerMenu", { x: 0, duration: 0.6 });
          hamburgerTl.from(".hamburgerEl1", { opacity: 0, duration: 0.2 });
          hamburgerTl.from(".hamburgerEl2", { opacity: 0, duration: 0.2 });
          hamburgerTl.from(".hamburgerEl3", { opacity: 0, duration: 0.2 });
          hamburgerTl.from(".hamburgerEl4", { opacity: 0, duration: 0.2 });
        }}
        className="hamburger absolute bottom-10 left-10 text-5xl md:hidden"
      >
        <GiHamburgerMenu />
      </div>
      <div className="hamburgerMenu absolute top-0 left-0 translate-x-[-100%] h-full w-1/2 flex justify-center items-center bg-[dimgray]">
        <div className="h-1/3 flex flex-col justify-between text-3xl">
          <h1 className="hamburgerEl1">About</h1>
          <h1 className="hamburgerEl2">Skills</h1>
          <h1 className="hamburgerEl3">Projects</h1>
          <h1 className="hamburgerEl4">Contact</h1>
        </div>
        <div
          onClick={() => {
            gsap.to(".hamburgerMenu", { x: "-100%", duration: 0.6 });
          }}
          className="absolute bottom-10 left-10 text-5xl"
        >
          <CgClose />
        </div>
      </div>
    </div>
  );
};

export default Main;
