import React, { useRef, useEffect, useState } from "react";
import bg from "../Image/bg.webp";
import bgDark from "../Image/bgDark.webp";
import Loading from "../Image/loading.gif";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { ImSun } from "react-icons/im";
import { TbMoon } from "react-icons/tb";
import SplitType from "split-type";
import gsap from "gsap";
const Main = () => {
  const wrapper = useRef();
  const [theme, setTheme] = useState("light");
  const [backgroundImage, setBackgroundImage] = useState(true);

  // Preload
  window.addEventListener("load", function () {
    var loader = document.querySelector(".preload");
    loader.classList.add("hidden");
  });

  useEffect(() => {
    // Funkcja zmiany background i trybu dark
    if (theme === "dark") {
      setBackgroundImage(false);
      document.documentElement.classList.add("dark");
    } else {
      setBackgroundImage(true);
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    // Funkcja navbaru
    const nav = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add("-translate-y-40");
      } else {
        nav.classList.remove("-translate-y-40");
      }

      lastScrollY = window.scrollY;
    });

    // Animacje
    const nameSplit = new SplitType("#name");
    const jobSplit = new SplitType("#job");
    const tl = gsap.timeline();

    tl.to(".char", { y: 0, stagger: 0.05, delay: 0.2, duration: 0.1 })
      .fromTo(
        ".hamburger",
        { y: "20", opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2 }
      )
      .fromTo(
        ".darkModeIconPhone",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2 }
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
      )
      .fromTo(
        ".email",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2 }
      )
      .fromTo(
        ".darkModeIcon",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2 }
      );
  });

  return (
    <div
      className="w-screen h-screen font-main"
      style={{
        backgroundImage: `url(${backgroundImage ? bg : bgDark})`,
      }}
    >
      {/* Preaload */}
      <div className="preload fixed w-screen h-screen flex justify-center items-center bg-[#F8F8F8] z-[100]">
        <img src={Loading} />
      </div>
      {/* Site */}
      <div
        ref={wrapper}
        className="w-full h-full flex flex-col justify-center items-center"
      >
        <nav
          id="navbar"
          className="navbar fixed top-0 left-0 items-center justify-between w-screen transition-transform duration-700 h-40 px-6 lg:px-20 hidden md:flex"
        >
          <div className="flex text-5xl dark:text-light">
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
          <div className="flex text-3xl xl:text-4xl dark:text-light">
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
        </nav>
        <header
          id="name"
          className="text-5xl clippath dark:text-light lg:text-7xl"
        >
          Jakub Paszko
        </header>
        <header
          id="job"
          className="text-2xl clippath dark:text-light lg:text-4xl"
        >
          Frontend Developer
        </header>
      </div>
      <footer className="absolute bottom-0 w-full h-40 px-4 hidden md:flex md:justify-center md:items-center lg:px-20">
        <h1 className="email font-main text-2xl dark:text-light xl:text-4xl">
          jakubpaszko01@gmail.com
        </h1>
        <div
          onClick={handleThemeSwitch}
          className="darkModeIcon absolute right-4 cursor-pointer lg:right-20"
        >
          {backgroundImage ? (
            <TbMoon className="p-2 rounded-md text-5xl text-light bg-dark hover:text-yellow-500" />
          ) : (
            <ImSun className="p-2 rounded-md text-5xl text-dark bg-light hover:text-yellow-500" />
          )}
        </div>
      </footer>
      <div
        onClick={() => {
          const hamburgerTl = gsap.timeline();
          hamburgerTl.to(".hamburgerMenu", { x: 0, duration: 0.6 });
          hamburgerTl.from(".hamburgerIcons", { opacity: 0, duration: 0.2 });
          hamburgerTl.from(".hamburgerEl1", { opacity: 0, duration: 0.2 });
          hamburgerTl.from(".hamburgerEl2", { opacity: 0, duration: 0.2 });
          hamburgerTl.from(".hamburgerEl3", { opacity: 0, duration: 0.2 });
          hamburgerTl.from(".hamburgerEl4", { opacity: 0, duration: 0.2 });
        }}
        className="hamburger absolute bottom-10 left-10 text-5xl dark:text-light md:hidden"
      >
        <GiHamburgerMenu />
      </div>
      <div
        onClick={handleThemeSwitch}
        className="darkModeIconPhone absolute right-10 bottom-10 cursor-pointer md:hidden"
      >
        {backgroundImage ? (
          <TbMoon className="p-2 rounded-md text-5xl text-light bg-dark" />
        ) : (
          <ImSun className="p-2 rounded-md text-5xl text-dark bg-light" />
        )}
      </div>
      <nav className="hamburgerMenu absolute top-0 left-0 translate-x-[-100%] h-full w-1/2 flex justify-center items-center bg-light dark:bg-dark">
        <div className="hamburgerIcons absolute top-10 w-full flex justify-center text-5xl dark:text-light">
          <div className="cursor-pointer iconAnimation">
            <AiFillLinkedin />
          </div>
          <div className="cursor-pointer iconAnimation">
            <AiFillGithub />
          </div>
          <div className="cursor-pointer iconAnimation">
            <AiFillFacebook />
          </div>
        </div>
        <div className="h-1/3 flex flex-col justify-between text-3xl dark:text-light">
          <h1 className="hamburgerEl1">About</h1>
          <h1 className="hamburgerEl2">Skills</h1>
          <h1 className="hamburgerEl3">Projects</h1>
          <h1 className="hamburgerEl4">Contact</h1>
        </div>
        <div
          onClick={() => {
            gsap.to(".hamburgerMenu", { x: "-100%", duration: 0.6 });
          }}
          className="absolute bottom-10 left-10 text-5xl dark:text-light"
        >
          <CgClose />
        </div>
      </nav>
    </div>
  );
};

export default Main;
