import Image from "next/image";

import clsx from "clsx";

import styles from "./Hero.module.scss";
import { BASE_PATH } from "../../util/constants";

const classes = {
  hero: "absolute h-screen w-full",
  "content-wrapper": `
    relative z-10 h-full w-full 
    flex flex-col content-center items-center justify-center shadow-sm
  `,
  "grid-container": clsx(
    `
    h-[70%] w-full overflow-hidden opacity-[0.03] 
    grid grid-cols-6 gap-4 md:grid-cols-9 lg:grid-cols-10 
    [&>*]:rounded-md [&>*:has(span)]:bg-none
  `,
    styles.glassgrid
  ),
  // [&>*:not(&:has(span))]:bg-slate-600
  "title-container": clsx(
    styles["linear-bg"],
    "flex h-screen w-full items-center justify-center"
  ),
  "title-wrapper": `z-20 text-white relative`,
  "name-header": clsx(
    styles["text-shadow-hero"],
    "relative text-center text-6xl md:text-8xl lg:text-9xl font-thin"
  ),
  subtitle: `relative text-center text-4xl font-thin text-slate-400`,
};

const Hero = () => {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes["content-wrapper"]}>
          <div className={classes["grid-container"]}>
            <div className="opacity-10"></div>
            <div className="opacity-20"></div>
            <div className="opacity-30"></div>
            <div className="opacity-30"></div>
            <div className="opacity-30 md:hidden lg:block"></div>
            <div className="opacity-30"></div>
            <div className="opacity-30"></div>
            <div className="opacity-30"></div>
            <div className="opacity-20"></div>
            <div className="opacity-10"></div>
            {/*  */}
            <div className="p-2 opacity-20">
              <div className="relative h-full w-full">
                <Image
                  src={BASE_PATH + "/CSS.svg"}
                  alt="CSS3 Logo"
                  layout="fill"
                />
              </div>
            </div>
            <div className="opacity-30"></div>
            <div className="opacity-70"></div>
            <div className="-rotate-2 scale-110 p-2 opacity-70">
              <div className="relative h-full w-full">
                <Image
                  src={BASE_PATH + "/React.svg"}
                  alt="CSS3 Logo"
                  layout="fill"
                />
              </div>
            </div>
            <div className="relative opacity-30">
              <Image
                src={BASE_PATH + "/HTML.svg"}
                alt="HTML Logo"
                layout="fill"
              />
            </div>
            <div className="opacity-50"></div>
            <div className="rotate-2 scale-125 p-2">
              <div className="relative h-full w-full">
                <Image
                  src={BASE_PATH + "/NodeJS.svg"}
                  alt="CSS3 Logo"
                  layout="fill"
                />
              </div>
            </div>
            <div className="opacity-0"></div>
            <div className="opacity-50"></div>
            <div className="opacity-20"></div>
            {/*  */}
            <div className="opacity-50"></div>
            <div className="-rotate-12 p-2 opacity-90">
              <div className="relative h-full w-full">
                <Image
                  src={BASE_PATH + "/Java.svg"}
                  alt="CSS3 Logo"
                  layout="fill"
                />
              </div>
            </div>
            <div className="opacity-50"></div>
            <div className="opacity-30"></div>
            <div className=""></div>
            <div className="scale-90 px-4">
              <div className="relative h-full w-full">
                <Image
                  src={BASE_PATH + "/Redux.svg"}
                  alt="CSS3 Logo"
                  layout="fill"
                />
              </div>
            </div>
            <div className="opacity-50"></div>
            <div className="opacity-50"></div>
            <div className="opacity-50"></div>
            <div className="p-2">
              <div className="relative h-full w-full">
                <Image
                  src={BASE_PATH + "/PostgreSQL.svg"}
                  alt="CSS3 Logo"
                  layout="fill"
                />
              </div>
            </div>
            {/*  */}
            <div className="opacity-0"></div>
            <div className="opacity-50"></div>
            <div className="opacity-30"></div>
            <div className="opacity-20"></div>
            <div className="p-2">
              <div className="relative h-full w-full">
                <Image
                  src={BASE_PATH + "/git.svg"}
                  alt="CSS3 Logo"
                  layout="fill"
                />
              </div>
            </div>
            <div className="opacity-50"></div>
            <div className="opacity-40"></div>
            <div></div>
            <div className="p-2 opacity-50 md:hidden lg:block">
              <div className="relative h-full w-full">
                <Image
                  src={BASE_PATH + "/Spring.svg"}
                  alt="CSS3 Logo"
                  layout="fill"
                />
              </div>
            </div>
            <div className="opacity-0"></div>
            {/*  */}
            <div className="-rotate-6 scale-125 p-2">
              <div className="relative h-full w-full">
                <Image
                  src={BASE_PATH + "/Sass.svg"}
                  alt="CSS3 Logo"
                  layout="fill"
                />
              </div>
            </div>
            <div className="scale-90 p-2 opacity-70 md:hidden lg:block">
              <div className="relative h-full w-full">
                <Image
                  src={BASE_PATH + "/Docker.svg"}
                  alt="CSS3 Logo"
                  layout="fill"
                />
              </div>
            </div>
            <div className="opacity-50"></div>
            <div className="opacity-10"></div>
            <div className="opacity-60"></div>
            <div className="opacity-70"></div>
            <div className="p-2 opacity-80">
              <div className="relative h-full w-full">
                <Image
                  src={BASE_PATH + "/Tailwindcss.svg"}
                  alt="CSS3 Logo"
                  layout="fill"
                />
              </div>
            </div>
            <div className="opacity-40"></div>
            <div className="opacity-20"></div>
            <div className="opacity-10"></div>
            {/*  */}
            <div className="opacity-10"></div>
            <div className="opacity-20"></div>
            <div className="opacity-30"></div>
            <div className="opacity-30"></div>
            <div className="opacity-30 md:hidden lg:block"></div>
            <div className="opacity-30"></div>
            <div className="opacity-30"></div>
            <div className="opacity-30"></div>
            <div className="opacity-20"></div>
            <div className="opacity-10"></div>
          </div>
        </div>
      </section>
      <div className={styles["dotted-overlay"]}></div>
      <main>
        <div className={classes["title-container"]}>
          <div className={classes["title-wrapper"]}>
            <div
              className={clsx(
                "absolute top-4 h-full w-full rounded-md bg-slate-200",
                "scale-y-[1.8] scale-x-[1.20]",
                styles.glass
              )}
            />
            <h1 className={classes["name-header"]}>Steven Labelle</h1>
            <p className={classes.subtitle}>Software Developer</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;