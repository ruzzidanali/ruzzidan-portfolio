
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import About from "./components/About";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <SelectedWork />

        <About />

        <Experience />

        <Technologies />

        <Contact />
      </main>
    </>
  );
}
