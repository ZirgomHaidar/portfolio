import React from "react";
import "./Projects.css";
import { Proj1 } from "../../assets/Proj1";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="text-6xl">Projects</h1>
      <div className="pro1 flex flex-col md:flex-row gap-20 md:gap-32 mx-10 md:mx-40">
        <div className="p1-left">
          <h1 className="text-4xl mb-10 mt-10 text-amber-200 ">
            Droidx-UI Website
          </h1>
          <h3 className="text-2xl mb-10">
            DroidX-UI is a custom rom based on Pure AOSP which aims to provide a
            stable and user friendly experience with touch of customisations.
          </h3>
          <h3 className="text-2xl mb-10 text-amber-300">Tools Used:</h3>
          <ul className="list-disc">
            <li>React JS</li>
            <li>Tailwind CSS</li>
            <li>Framer-motion</li>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
          </ul>
          <div className="flex justify-center md:justify-start">
            <button className="shadow-[inset_0_0_0_2px_#616467] text-white px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 mt-10">
              <a
                href="https://github.com/ZirgomHaidar/DxWeb"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project Source
              </a>
            </button>
          </div>
        </div>
        <div className="p1-right">
          <div className="p1-left">
            <div
              id="bento-div"
              className="grid grid-cols-10 auto-rows-[20rem] gap-4 p-1"
            >
              <div className="col-span-10 lg:col-span-4 group overflow-hidden rounded-md">
                <img
                  src={Proj1[0].s_pic}
                  className="h-full w-full object-cover
        group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="col-span-10 lg:col-span-6 group overflow-hidden rounded-md">
                <img
                  src={Proj1[1].s_pic}
                  className="h-full w-full object-cover
      group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="col-span-10 lg:col-span-6 group overflow-hidden rounded-md">
                <img
                  src={Proj1[2].s_pic}
                  className="h-full w-full object-cover
        group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="col-span-10 lg:col-span-4 group overflow-hidden rounded-md">
                <img
                  src={Proj1[3].s_pic}
                  className="h-full w-full object-cover
        group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
