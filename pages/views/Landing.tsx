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
      <div className="container mx-auto h-screen flex flex-col justify-center items-center">
        <div className={"pt-16 px-12 drop-shadow-2xl"}>
          <p
            className="text-9xl font-bold"
            style={{ textShadow: "-1px 2px 12px rgba(0,0,0,0.6)" }}
          >
            Steven Labelle
          </p>
          <p
            className="text-4xl text-slate-300/70 uppercase font-bold text-end"
            style={{ textShadow: "-1px 2px 6px rgba(0,0,0,0.6)" }}
          >
            Software / Full-Stack Developer
          </p>
          <div className="flex flex-row justify-end items-stretch mt-4">
            <span
              onClick={() =>
                window.open(
                  process.env.NEXT_PUBLIC_GITHUB_URL as string,
                  "_blank"
                )
              }
              className="transition hover:bg-gray-300/10 rounded-lg px-4 mr-2 cursor-pointer"
            >
              <Image
                style={{ filter: "drop-shadow(-1px 2px 6px rgba(0,0,0,0.6))" }}
                src={BASE_PATH + "/github.svg"}
                alt="GitHub Logo"
                width={74}
                height={"100%"}
              />
            </span>
            <span
              onClick={() =>
                window.open(
                  process.env.NEXT_PUBLIC_LINKEDIN_URL as string,
                  "_blank"
                )
              }
              className="transition hover:bg-gray-300/10 rounded-lg px-4 cursor-pointer"
            >
              <Image
                style={{ filter: "drop-shadow(-1px 2px 6px rgba(0,0,0,0.6))" }}
                src={BASE_PATH + "/linkedin.svg"}
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
