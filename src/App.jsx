import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      {/* Background */}
      <div className="background">
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>

        <div className="grid-background"></div>

        <div className="stars"></div>
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <GitHub />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;