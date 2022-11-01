import clsx from "clsx";
import Image from "next/image";

import { BASE_PATH } from "../../util/constants";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <section
      className={clsx(
        styles["landing-background"],
        "bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-lg"
      )}
    >
      <div className="container mx-auto flex h-screen flex-col items-center justify-center">
        <div className={"px-12 pt-16 drop-shadow-2xl"}>
          <p
            className="text-center text-7xl font-bold md:text-8xl lg:text-9xl"
            style={{ textShadow: "-1px 2px 12px rgba(0,0,0,0.6)" }}
          >
            Steven Labelle
          </p>
          <p
            className="text-center text-3xl font-bold uppercase text-slate-300 lg:text-end lg:text-4xl"
            style={{ textShadow: "-1px 2px 6px rgba(0,0,0,0.6)" }}
          >
            Software / Full-Stack Developer
          </p>
          <div className="relative mt-4 flex h-16 flex-row items-stretch justify-center lg:justify-end">
            <span
              onClick={() =>
                window.open(
                  process.env.NEXT_PUBLIC_GITHUB_URL as string,
                  "_blank"
                )
              }
              className="relative mx-2 w-12 cursor-pointer rounded-lg transition hover:scale-110"
            >
              <Image
                style={{ filter: "drop-shadow(-1px 2px 6px rgba(0,0,0,0.6))" }}
                src={BASE_PATH + "/github.svg"}
                alt="GitHub Logo"
                layout="fill"
              />
            </span>
            <span
              onClick={() =>
                window.open(
                  process.env.NEXT_PUBLIC_LINKEDIN_URL as string,
                  "_blank"
                )
              }
              className="relative mx-2 w-12 cursor-pointer rounded-lg transition hover:scale-110"
            >
              <Image
                style={{ filter: "drop-shadow(-1px 2px 6px rgba(0,0,0,0.6))" }}
                src={BASE_PATH + "/linkedin.svg"}
                alt="LinkedIn Logo"
                layout="fill"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
