import React from "react";
import "./Intro.css";
import pfp from "../../assets/myimage.png";
import { BackgroundGradient } from "../ui/background-gradient";
import { FlipWords } from "../ui/flip-words";

const words = [
  "ZirgomHaidar",
  "Adaptable",
  "Team-Player",
  "Problem-Solver",
  "Active-Listener",
  "Creative",
];

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="my-Info">
        <BackgroundGradient className="md:w-96 md:h-96 rounded-full">
          <img src={pfp} alt="pfp" className="object-contain" />
        </BackgroundGradient>
      </div>
      <div className="desc">
        I`M <br />
        <FlipWords
          className="text-[2.5rem] leading-10 md:text-5xl lg:text-7xl text-nowrap"
          words={words}
        />
        <br />
        <br />
        <h1 className="text-[2rem] leading-10 md:text-3xl lg:text-4xl pt-3 md:pt-8 pb-6 text-amber-200">
          Frontend Developer
        </h1>
        <h2>
          I fondly anticipate working in a challenging yet rewarding
          <br /> organisation to attain its vision for personal growth.
        </h2>
      </div>
    </div>
  );
};

export default Intro;
