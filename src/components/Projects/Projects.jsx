import "./Projects.css"
import { Proj1 } from "../../assets/Proj1"

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="text-6xl">Projects</h1>
      <div className="proj1 mx-10 flex flex-col gap-20 md:mx-40 md:flex-row md:gap-32">
        <div className="p1-left">
          <h1 className="mb-10 mt-10 text-4xl text-amber-200">
            Droidx-UI Website
          </h1>
          <h3 className="mb-10 text-2xl">
            DroidX-UI is a custom rom based on Pure AOSP which aims to provide a
            stable and user friendly experience with touch of customisations.
          </h3>
          <h3 className="mb-10 text-2xl text-amber-300">Tools Used:</h3>
          <ul className="mb-10 list-disc">
            <li>React JS</li>
            <li>Tailwind CSS</li>
            <li>Framer-motion</li>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
          </ul>
          <div className="flex flex-col justify-center gap-2 text-center md:justify-start lg:flex-row lg:gap-3">
            <a
              className="project_Button"
              href="https://github.com/ZirgomHaidar/DxWeb"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
            </a>
            <a
              href="https://droidxui.tech/"
              className="project_Button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className="p1-right">
          <div className="p1-left">
            <div
              id="bento-div"
              className="grid auto-rows-[20rem] grid-cols-10 gap-4 p-1"
            >
              <div className="group col-span-10 overflow-hidden rounded-md lg:col-span-4">
                <img
                  src={Proj1[0].s_pic}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="group col-span-10 overflow-hidden rounded-md lg:col-span-6">
                <img
                  src={Proj1[1].s_pic}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="group col-span-10 overflow-hidden rounded-md lg:col-span-6">
                <img
                  src={Proj1[2].s_pic}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="group col-span-10 overflow-hidden rounded-md lg:col-span-4">
                <img
                  src={Proj1[3].s_pic}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
