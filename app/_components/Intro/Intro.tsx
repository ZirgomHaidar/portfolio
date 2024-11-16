import pfp from "@/public/myimage.png"
import { BackgroundGradient } from "../ui/background-gradient"
import { FlipWords } from "../ui/flip-words"
import Image from "next/image"

const words: string[] = [
  "ZirgomHaidar",
  "Adaptable",
  "Team-Player",
  "Problem-Solver",
  "Active-Listener",
  "Creative",
]

export default function Intro() {
  return (
    <div className="mx-10 flex flex-col items-center justify-evenly gap-20 md:mx-20 md:my-14 md:flex-col lg:mx-32 lg:mb-44 lg:flex-row-reverse">
      <div className="size-80 sm:size-96">
        <BackgroundGradient className="rounded-full md:size-96">
          <Image src={pfp} alt="pfp" className="rounded-full object-contain" />
        </BackgroundGradient>
      </div>
      <div className="text-xl md:text-2xl lg:text-3xl">
        I`M <br />
        <FlipWords
          className="text-nowrap text-[2.5rem] leading-10 md:text-5xl lg:text-7xl"
          words={words}
        />
        <br />
        <br />
        <h1 className="text-nowrap pb-6 pt-3 text-[2rem] leading-10 text-amber-200 md:pt-8 md:text-3xl lg:text-4xl">
          Full-Stack Developer
        </h1>
        <h2>
          I fondly anticipate working in a challenging yet rewarding
          organisation to attain its vision for personal growth.
        </h2>
      </div>
    </div>
  )
}
