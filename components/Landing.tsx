import clsx from "clsx";
import Image from "next/image";

import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <section
      className={clsx(
        // styles["animated-background"],
        styles["landing-background"],
        "bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-lg"
      )}
    >
      <div className="container mx-auto h-screen flex flex-col justify-center items-center">
        <div
          className={clsx("pt-16 px-12 drop-shadow-lg")}
          // className={clsx("pt-16 px-12 drop-shadow-lg", styles.glass)}
        >
          <p
            className="text-9xl font-bold"
            style={{ textShadow: "-1px 2px 12px rgba(0,0,0,0.6)" }}
          >
            Steven Labelle
          </p>
          <p
            className="text-4xl uppercase font-bold text-end"
            style={{ textShadow: "-1px 2px 6px rgba(0,0,0,0.6)" }}
          >
            Software / Full-Stack Developer
          </p>
          <div className="flex flex-row justify-end items-stretch mt-4">
            <span
              onClick={() =>
                window.open("https://github.com/DamnStraight", "_blank")
              }
              className="transition hover:bg-gray-300/10 rounded-lg px-4 mr-2 cursor-pointer"
            >
              <Image
                style={{ filter: "drop-shadow(-1px 2px 6px rgba(0,0,0,0.6))" }}
                src="/github.svg"
                alt="GitHub Logo"
                width={74}
                height={"100%"}
              />
            </span>
            <span
              onClick={() => window.open("linkedin", "_blank")}
              className="transition hover:bg-gray-300/10 rounded-lg px-4 cursor-pointer"
            >
              <Image
                style={{ filter: "drop-shadow(-1px 2px 6px rgba(0,0,0,0.6))" }}
                src="/linkedin.svg"
                alt="LinkedIn Logo"
                width={74}
                height="100%"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
