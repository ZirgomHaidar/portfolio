import { StaticImageData } from "next/image"
import pro1_s2 from "@/public/pro1_s2.png"
import pro1_s3 from "@/public/pro1_s3.png"
import pro1_s4 from "@/public/pro1_s4.png"
import pro2_s1 from "@/public/pro2_s1.png"
import pro2_s2 from "@/public/pro2_s2.png"
import pro2_s3 from "@/public/pro2_s3.png"
import pro2_s4 from "@/public/pro2_s4.png"
import pro2_s5 from "@/public/pro2_s5.png"
import pro2_s6 from "@/public/pro2_s6.png"
import pro2_s7 from "@/public/pro2_s7.png"
import pro3_s2 from "@/public/pro3_s2.png"
import pro3_s3 from "@/public/pro3_s3.png"
import pro3_s4 from "@/public/pro3_s4.png"
import pro3_v from "@/public/pro3_v.gif"
import pro4_s1 from "@/public/pro4_s1.png"

export interface SsType {
  url: StaticImageData
  title: string
  desc?: string
}

export interface ProjectType {
  title: string
  desc: string
  tools: Array<string>
  sourceLink: string
  viewLink?: string
  ss: Array<SsType>
}

export const ProjectList: ProjectType[] = [
  {
    title: "RisingOS Website",
    desc: "At Rising OS, we're constantly striving to improve your user experience. Our team is actively working on adding new features and enhancements every single day!",
    tools: ["React", "Next.js 14", "Tailwind CSS", "Framer-motion"],
    sourceLink: "https://github.com/ZirgomHaidar/RisingOsSite",
    viewLink: "https://rising-os-site.vercel.app/",
    ss: [
      {
        url: pro3_v,
        title: "Home Page",
      },
      {
        url: pro3_s2,
        title: "Team Page",
      },
      {
        url: pro3_s3,
        title: "Support Page",
      },
      {
        url: pro3_s4,
        title: "Contact Page",
      },
    ],
  },
  {
    title: "RisingOS API [v1.0.0]",
    desc: "A RESTful API made using FASTAPI written in Python service that provides OTA update information for RisingOS ROM. This API fetches and serves data from the RisingOTA repository, making it easy to access device-specific ROM information programmatically.",
    tools: [
      "Python",
      "fastapi[standard]>=0.112.0",
      "requests",
      "pydantic",
      "apscheduler",
    ],
    sourceLink: "https://github.com/ZirgomHaidar/ROS-API",
    ss: [
      {
        url: pro4_s1,
        title: "API Documentation",
        desc: "Showing Endpoints",
      },
    ],
  },
  {
    title: "EvolutionX Website",
    desc: "EvolutionX aims to provide users with a Pixel-like feel at first glance, with additional features at their disposal!",
    tools: ["React JS", "Tailwind CSS", "Framer-motion"],
    sourceLink: "https://github.com/Evolution-X/www",
    viewLink: "https://evolution-x.org/",
    ss: [
      {
        url: pro2_s1,
        title: "Home Page",
      },
      {
        url: pro2_s2,
        title: "About EvolutionX",
      },
      {
        url: pro2_s3,
        title: "Download Page",
        desc: "EvolutionX Download Page",
      },
      {
        url: pro2_s4,
        title: "Specific Device Download Page",
      },
      {
        url: pro2_s5,
        title: "Flashing Instruction Overlay",
      },
      {
        url: pro2_s6,
        title: "Blog Page",
      },
      {
        url: pro2_s7,
        title: "First Blog",
      },
    ],
  },
  {
    title: "Droidx-UI Website",
    desc: "DroidX-UI is a custom rom based on Pure AOSP which aims to provide a stable and user friendly experience with touch of customisations.",
    tools: ["React JS", "Tailwind CSS", "Framer-motion"],
    sourceLink: "https://github.com/ZirgomHaidar/DxWeb",
    viewLink: "https://droidxui.tech/",
    ss: [
      {
        url: pro1_s2,
        title: "Screenshot",
        desc: "various screens",
      },
      {
        url: pro1_s4,
        title: "Specific Device Download Page",
      },
      {
        url: pro1_s3,
        title: "Download Page",
        desc: "Droidx-UI Download Page",
      },
    ],
  },
]
