import type { NextPage } from "next";
import Footer from "../components/Footer";
import Landing from "../components/Landing";

const Home: NextPage = () => {
  return (
    <div>
      <Landing />
      <Footer />
    </div>
  );
};

export default Home;
