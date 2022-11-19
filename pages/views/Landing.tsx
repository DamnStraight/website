import clsx from "clsx";
import Image from "next/image";

import { BASE_PATH } from "../../util/constants";
import styles from "./Landing.module.css";

const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL;
const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL;

const Landing = () => {
  const openLinkExternal = (url: string = "") => {
    url && window.open(url, "_blank");
  };

  return (
    <section className={styles.container}>
      <div className="container mx-auto flex h-screen flex-col items-center justify-center">
        <div className="px-12 pt-16 drop-shadow-2xl">
          <p
            className={clsx(
              styles["text-light-shadow"],
              "text-center text-7xl font-light md:text-8xl lg:text-9xl"
            )}
          >
            Steven Labelle
          </p>
          <p
            className={clsx(
              styles["text-thin-shadow"],
              "text-center text-3xl font-thin uppercase text-slate-400 lg:text-end lg:text-4xl"
            )}
          >
            Software Developer
          </p>
          <p
            className={clsx(
              styles["text-thin-shadow"],
              "mt-4 text-center text-xl font-thin text-slate-400 lg:text-end lg:text-3xl"
            )}
          >
            {'"Blablablablablablablabla"'}
          </p>
          <div className="relative mt-4 flex h-16 flex-row items-stretch justify-center lg:justify-end">
            <span
              onClick={() => openLinkExternal(GITHUB_URL)}
              className="relative mx-2 w-12 cursor-pointer rounded-lg opacity-50 transition hover:scale-110 hover:opacity-100"
            >
              <Image
                style={{ filter: "drop-shadow(-1px 2px 6px rgba(0,0,0,0.6))" }}
                src={BASE_PATH + "/github.svg"}
                alt="GitHub Logo"
                layout="fill"
              />
            </span>
            <span
              onClick={() => openLinkExternal(LINKEDIN_URL)}
              className="relative mx-2 w-12 cursor-pointer rounded-lg opacity-50 transition hover:scale-110 hover:opacity-100"
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
