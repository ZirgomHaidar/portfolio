import Image from "next/image"
import { my_skills } from "./Skill_list"

export default function Skills() {
  return (
    <div className="mb-20 flex flex-col items-center justify-center gap-16 md:gap-32">
      <h1 className="text-5xl md:text-6xl">My Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-2 antialiased md:gap-10">
        {my_skills.map((skill, index) => (
          <div
            className="flex w-20 flex-col items-center justify-center gap-4 text-center md:w-40"
            key={index}
          >
            <span className="z-20 text-3xl">
              <Image
                className="size-[60px] md:size-[80px] lg:size-[110px]"
                src={skill.s_pic}
                alt=""
              />
            </span>
            <span className="text-base leading-[1.6] md:text-xl">
              {skill.s_name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
