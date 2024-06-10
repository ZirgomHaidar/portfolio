import React from "react";
import "./Skills.css";
import { my_skills } from "../../assets/Skill_list";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Skills = () => {
  return (
    <div className="skill-container">
      <h1 className="text-6xl">My Skills</h1>
      <div className="flex flex-col antialiased items-center justify-center">
        <InfiniteMovingCards items={my_skills} direction="left" speed="slow" />
        <InfiniteMovingCards items={my_skills} direction="right" speed="slow" />
        <InfiniteMovingCards items={my_skills} direction="left" speed="slow" />
      </div>
    </div>
  );
};

export default Skills;
