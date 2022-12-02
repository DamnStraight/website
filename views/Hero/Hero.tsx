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
  "grid-container": `
    h-[70%] w-full overflow-hidden opacity-[0.03] 
    grid grid-cols-6 gap-4 md:grid-cols-9 lg:grid-cols-10 
    [&>*]:rounded-md [&>*:not:has(span)]:bg-slate-600
  `,
  "title-container": clsx(
    styles["linear-bg"],
    "flex h-screen w-full items-center justify-center"
  ),
  "title-wrapper": `z-20 text-white`,
  "name-header": clsx(
    styles["text-shadow-hero"],
    "text-center text-6xl md:text-8xl lg:text-9xl"
  ),
  subtitle: `text-center text-4xl font-thin`,
};

const Hero = () => {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes["content-wrapper"]}>
          <div className={classes["grid-container"]}>
            <div className="opacity-5"></div>
            <div className="opacity-10"></div>
            <div className="opacity-30"></div>
            <div className="opacity-30"></div>
            <div className="opacity-30 md:hidden lg:block"></div>
            <div className="opacity-30"></div>
            <div className="opacity-30"></div>
            <div className="opacity-30"></div>
            <div className="opacity-10"></div>
            <div className="opacity-5"></div>
            {/*  */}
            <div className="relative opacity-20">
              <Image
                src={BASE_PATH + "/CSS.svg"}
                alt="CSS3 Logo"
                layout="fill"
              />
            </div>
            <div className="bg-slate-600 opacity-30"></div>
            <div className="bg-slate-600 opacity-20"></div>
            <div className="relative opacity-70">
              <Image
                src={BASE_PATH + "/JavaScript.svg"}
                alt="CSS3 Logo"
                layout="fill"
              />
            </div>
            <div className="relative opacity-30">
              <Image
                src={BASE_PATH + "/HTML.svg"}
                alt="HTML Logo"
                layout="fill"
              />
            </div>
            <div className="bg-slate-600 opacity-50"></div>
            <div className="relative">
              <Image
                src={BASE_PATH + "/NodeJS.svg"}
                alt="CSS3 Logo"
                layout="fill"
              />
            </div>
            <div className="bg-slate-600 opacity-0"></div>
            <div className="bg-slate-600 opacity-50"></div>
            <div className="bg-slate-600 opacity-20"></div>
            {/*  */}
            <div className="bg-slate-600 opacity-50"></div>
            <div className="relative opacity-60">
              <Image
                src={BASE_PATH + "/TypeScript.svg"}
                alt="CSS3 Logo"
                layout="fill"
              />
            </div>
            <div className="bg-slate-600 opacity-50"></div>
            <div className="bg-slate-600 opacity-30"></div>
            <div className=""></div>
            <div className="relative">
              <Image
                src={BASE_PATH + "/React.svg"}
                alt="CSS3 Logo"
                layout="fill"
              />
            </div>
            <div className="bg-slate-600 opacity-50"></div>
            <div className="bg-slate-600 opacity-50"></div>
            <div className="bg-slate-600 opacity-50"></div>
            <div className="relative">
              <Image
                src={BASE_PATH + "/PostgreSQL.svg"}
                alt="CSS3 Logo"
                layout="fill"
              />
            </div>
            {/*  */}
            <div className="bg-slate-600 opacity-0"></div>
            <div className="bg-slate-600 opacity-50"></div>
            <div className="bg-slate-600 opacity-30"></div>
            <div className="bg-slate-600 opacity-20"></div>
            <div className="relative">
              <Image
                src={BASE_PATH + "/git.svg"}
                alt="CSS3 Logo"
                layout="fill"
              />
            </div>
            <div className="bg-slate-600 opacity-50"></div>
            <div className="bg-slate-600 opacity-40"></div>
            <div className="relative">
              <Image
                src={BASE_PATH + "/Java.svg"}
                alt="CSS3 Logo"
                layout="fill"
              />
            </div>
            <div className="relative opacity-50 md:hidden lg:block">
              <Image
                src={BASE_PATH + "/Spring.svg"}
                alt="CSS3 Logo"
                layout="fill"
              />
            </div>
            <div className="bg-slate-600 opacity-0"></div>
            {/*  */}
            <div className="relative">
              <Image
                src={BASE_PATH + "/Sass.svg"}
                alt="CSS3 Logo"
                layout="fill"
              />
            </div>
            <div className="relative opacity-40 md:hidden lg:block">
              <Image
                src={BASE_PATH + "/Docker.svg"}
                alt="CSS3 Logo"
                layout="fill"
              />
            </div>
            <div className="bg-slate-600 opacity-50"></div>
            <div className="bg-slate-600 opacity-0"></div>
            <div className="bg-slate-600 opacity-50"></div>
            <div className="bg-slate-600 opacity-50"></div>
            <div className="relative opacity-30">
              <Image
                src={BASE_PATH + "/Tailwindcss.svg"}
                alt="CSS3 Logo"
                layout="fill"
              />
            </div>
            <div className="bg-slate-600 opacity-40"></div>
            <div className="bg-slate-600 opacity-20"></div>
            <div className="bg-slate-600 opacity-10"></div>
            {/*  */}
            <div className="bg-slate-600 opacity-5"></div>
            <div className="bg-slate-600 opacity-10"></div>
            <div className="bg-slate-600 opacity-20"></div>
            <div className="bg-slate-600 opacity-20"></div>
            <div className="bg-slate-600 opacity-20 md:hidden lg:block"></div>
            <div className="bg-slate-600 opacity-20"></div>
            <div className="bg-slate-600 opacity-20"></div>
            <div className="bg-slate-600 opacity-20"></div>
            <div className="bg-slate-600 opacity-10"></div>
            <div className="bg-slate-600 opacity-5"></div>
          </div>
        </div>
      </section>
      <main>
        <div className={classes["title-container"]}>
          <div className={classes["title-wrapper"]}>
            <h1 className={classes["name-header"]}>Steven Labelle</h1>
            <p className={classes.subtitle}>Software Developer</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
