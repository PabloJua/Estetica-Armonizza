import React from "react";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Video from "./components/Video";
import Turns from "./components/Turns";
import Services from "./components/Services"
import FrequentQuestions from "./components/FrequentQuestions";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
// import { EmblaCarousel } from "./components/EnableCarousel";


function App() {
  return (
    <div>
      <Home />
      <Skills />
      <Video/>
      <Services /> 
      <FrequentQuestions/>
      <Turns/>
      <Prices/>
      <Contact/>
    </div>
  );
}

export default App;
