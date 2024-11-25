import { ProjectType } from "../Projects/ProjectList"
import SwipeCarousel from "../ui/SwipeCarousel"

export default function ProjectUI({ project }: { project: ProjectType }) {
  return (
    <div className="mx-10 flex w-full flex-col justify-between gap-10 md:mx-12 lg:flex-row">
      <div className="p1-left flex flex-col gap-10 text-xl md:text-2xl lg:max-w-[600px]">
        <h1 className="text-3xl text-amber-200 md:text-4xl">{project.title}</h1>
        <h3 className="">{project.desc}</h3>
        <h3 className="text-amber-300">Tools Used:</h3>
        <ul className="ml-8 list-disc">
          {project.tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
        <div className="flex flex-col justify-center gap-2 text-center text-base md:justify-start lg:flex-row lg:gap-3">
          <a
            className="project_Button"
            href={project.sourceLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source
          </a>
          {project.viewLink && (
            <a
              href={project.viewLink}
              className="project_Button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          )}
        </div>
      </div>
      <SwipeCarousel images={project.ss} />
    </div>
  )
}
