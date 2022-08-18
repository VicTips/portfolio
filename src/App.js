import React, { useRef } from "react";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import { useSelector } from "react-redux/es/exports";

const App = () => {
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const bgColor = useSelector(state => state.styles.bgColor);
  return (
    <div className={bgColor}>
      <NavBar about={about} projects={projects} contact={contact} />
      <About about={about} />
      <Projects projects={projects} />
      <Footer contact={contact} />
    </div>
  );
};

export default App;
