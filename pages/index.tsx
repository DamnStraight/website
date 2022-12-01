import type { NextPage } from "next";

import Footer from "../views/Footer";
import Hero from "../views/Hero/Hero";
import Navbar from "../views/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
