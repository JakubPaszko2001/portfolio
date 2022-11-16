import React from "react";
import hacjenda from "../Image/hacjenda.webp";
const Projects = () => {
  return (
    <div className="w-screen font-main bg-light dark:bg-dark">
      <main>
        <header className="text-center text-5xl mb-12 xl:text-7xl">
          Projects
        </header>
        <section className="flex flex-col">
          <section className="p-8 flex flex-col lg:justify-center lg:items-center lg:flex-row">
            <img
              className="w-full rounded-3xl mb-4 lg:w-2/5"
              src={hacjenda}
              alt="hacjenda"
            />
            <div className="lg:w-2/5 lg:ml-4">
              <h1 className="text-3xl mb-2 2xl:text-5xl">Restaurant page</h1>
              <h1 className="text-xl mb-2 xl:text-2xl">
                Website created for the restaurant. My first order that I made.
                The design is not mine, I wrote the site and posted it by ftp.
              </h1>
              <h1 className="text-xl mb-2 xl:text-2xl">
                Created with: React, Tailwind
              </h1>
              <button className="bg-black text-white p-2 cursor-pointer rounded-3xl mr-2">
                Github
              </button>
              <button className="bg-black text-white p-2 cursor-pointer rounded-3xl">
                Live website
              </button>
            </div>
          </section>
          <section className="p-8 flex flex-col lg:justify-center lg:items-center lg:flex-row">
            <img
              className="w-full rounded-3xl mb-4 lg:w-2/5"
              src={hacjenda}
              alt="hacjenda"
            />
            <div className="lg:w-2/5 lg:ml-4">
              <h1 className="text-3xl mb-2 2xl:text-5xl">Restaurant page</h1>
              <h1 className="text-xl mb-2 xl:text-2xl">
                Website created for the restaurant. My first order that I made.
                The design is not mine, I wrote the site and posted it by ftp.
              </h1>
              <h1 className="text-xl mb-2 xl:text-2xl">
                Created with: React, Tailwind
              </h1>
              <button className="bg-black text-white p-2 cursor-pointer rounded-3xl mr-2">
                Github
              </button>
              <button className="bg-black text-white p-2 cursor-pointer rounded-3xl">
                Live website
              </button>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Projects;
