import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
    </>
  );
};

export default App;
