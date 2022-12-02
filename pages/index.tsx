import type { NextPage } from "next";
import About from "../views/About/About";

import Footer from "../views/Footer";
import Hero from "../views/Hero/Hero";
import Navbar from "../views/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </>
  );
};

export default Home;
