import { useState } from "react";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeNav, setActiveNav] = useState("Home");

  const handleNav = (section) => {
    setActiveNav(section);
    const id = section.toLowerCase();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Cursor />
      <Navbar activeNav={activeNav} onNav={handleNav} />
      <Hero onNav={handleNav} />
      <Services />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer onNav={handleNav} />
    </>
  );
}
