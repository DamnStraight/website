import type { NextPage } from "next";

import About from "../views/About/About";
import Footer from "../views/Footer";
import Hero from "../views/Hero/Hero";
import Projects from "../views/Projects/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
