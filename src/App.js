import React from "react";
import Header from "./component/Header";
import About from "./component/About";
import Nav from "./component/Nav";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
