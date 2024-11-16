import css from "@/public/CSS3.svg"
import github from "@/public/github.svg"
import gitlab from "@/public/gitlab.svg"
import html from "@/public/HTML5.svg"
import js from "@/public/js.svg"
import mongodb from "@/public/mongodb.svg"
import MySQL from "@/public/MySQL_logo.svg"
import react from "@/public/React_Logo.svg"
import sql from "@/public/sql.svg"
import Tailwind from "@/public/Tailwind_CSS.svg"
import c from "@/public/C.svg"
import cpp from "@/public/C++.svg"
import java from "@/public/java.svg"
import python from "@/public/python.svg"

type skill = {
  s_name: string
  s_pic: string
}

export const my_skills: skill[]  = [
  {
    s_name: "C",
    s_pic: c,
  },
  {
    s_name: "C++",
    s_pic: cpp,
  },
  {
    s_name: "Java",
    s_pic: java,
  },
  {
    s_name: "Python",
    s_pic: python,
  },
  {
    s_name: "HTML",
    s_pic: html,
  },
  {
    s_name: "CSS",
    s_pic: css,
  },
  {
    s_name: "JavaScript",
    s_pic: js,
  },
  {
    s_name: "React JS",
    s_pic: react,
  },
  {
    s_name: "Tailwind CSS",
    s_pic: Tailwind,
  },
  {
    s_name: "Github",
    s_pic: github,
  },
  {
    s_name: "Gitlab",
    s_pic: gitlab,
  },
  {
    s_name: "SQL",
    s_pic: sql,
  },
  {
    s_name: "MySQL",
    s_pic: MySQL,
  },
  {
    s_name: "Mongo DB",
    s_pic: mongodb,
  },
]
