import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";

export default function HomeSection() {
  return (
    <div className="">
       <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer/>
    </div>
  )
}

