import { useState } from "react";
import Navside from "./components/Navside";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navside />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;
