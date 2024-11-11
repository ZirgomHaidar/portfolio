import "./Intro.css"
import pfp from "../../assets/myimage.png"
import { BackgroundGradient } from "../ui/background-gradient"
import { FlipWords } from "../ui/flip-words"

const words = [
  "ZirgomHaidar",
  "Adaptable",
  "Team-Player",
  "Problem-Solver",
  "Active-Listener",
  "Creative",
]

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="my-Info">
        <BackgroundGradient className="rounded-full md:h-96 md:w-96">
          <img src={pfp} alt="pfp" className="object-contain" />
        </BackgroundGradient>
      </div>
      <div className="desc">
        I`M <br />
        <FlipWords
          className="text-nowrap text-[2.5rem] leading-10 md:text-5xl lg:text-7xl"
          words={words}
        />
        <br />
        <br />
        <h1 className="pb-6 pt-3 text-[2rem] leading-10 text-amber-200 md:pt-8 md:text-3xl lg:text-4xl">
          Full-Stack Developer
        </h1>
        <h2>
          I fondly anticipate working in a challenging yet rewarding
          <br /> organisation to attain its vision for personal growth.
        </h2>
      </div>
    </div>
  )
}

export default Intro
