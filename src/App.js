import React from "react";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import { useSelector } from "react-redux/es/exports";

const App = () => {
  const bgColor = useSelector(state => state.styles.bgColor)
  return (
    <div className={bgColor}>
      <NavBar />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
