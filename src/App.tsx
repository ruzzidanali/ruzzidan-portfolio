
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import About from "./components/About";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";

const ComponentPlayground = lazy(
  () => import("./components/ComponentPlayground")
);

function PortfolioHome() {
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

export default function App() {
  const isPlayground =
    import.meta.env.DEV &&
    window.location.pathname === "/ui-playground";

  if (isPlayground) {
    return (
      <Suspense fallback={<div className="p-8">Loading playground...</div>}>
        <ComponentPlayground />
      </Suspense>
    );
  }

  return <PortfolioHome />;
}
