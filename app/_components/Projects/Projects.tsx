import ProjectUI from "../ui/ProjectUI"
import { ProjectList } from "./ProjectList"

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 md:mx-10 md:gap-32">
      <h1 className="text-5xl md:text-6xl">Projects</h1>
      {ProjectList.map((project, index) => (
        <ProjectUI key={index} project={project} />
      ))}
    </div>
  )
}
