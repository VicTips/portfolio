import React from "react";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div>
      <NavBar />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
