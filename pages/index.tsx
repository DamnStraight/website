import type { NextPage } from "next";
import Footer from "./views/Footer";
import Landing from "./views/Landing";

const Home: NextPage = () => {
  return (
    <div>
      <Landing />
      <Footer />
    </div>
  );
};

export default Home;
