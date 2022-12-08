import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";

import { BASE_PATH } from "../../util/constants";
import styles from "./Hero.module.scss";

const classes = {
  hero: "h-[50vh] w-full",
  heroContent: `
    z-0 h-full w-full relative
    flex flex-col content-center items-center justify-center shadow-sm
  `,
  gridContainer: clsx(
    `
    relative w-full opacity-[0.09] 
    grid grid-cols-5 gap-4 md:grid-cols-6 lg:grid-cols-8
    [&>*]:rounded-md [&>*:has(span)]:bg-none [&>*]:aspect-square
  `,
    styles["glass-grid"]
  ),
  titleContainer: `absolute flex h-full w-full items-center justify-center bg-zinc-900`,
  titleWrapper: `z-20 text-slate-200 relative`,
  nameHeader: clsx(
    styles["text-shadow-hero"],
    "relative text-center text-6xl md:text-8xl lg:text-9xl font-thin"
  ),
  subtitle: `relative text-center text-4xl font-thin text-slate-400`,
};

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.heroContent}>
        <div className={classes.titleContainer}>
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 50 }}
          >
            <div className={classes.titleWrapper}>
              <h1 className={classes.nameHeader}>Steven Labelle</h1>
              <p className={classes.subtitle}>Software Developer</p>
            </div>
          </motion.div>
        </div>
        <div className={classes.gridContainer}>
          <div className="opacity-10"></div>
          <div className="opacity-20"></div>
          <div className="opacity-30"></div>
          <div className="opacity-30"></div>
          <div className="opacity-30 md:hidden lg:block"></div>
          <div className="opacity-30"></div>
          <div className="opacity-30"></div>
          <div className="opacity-30"></div>
          {/* 8 Col */}
          <div className="opacity-20"></div>
          <div className="opacity-10"></div>
          <div className="p-2 opacity-20">
            <div className="relative h-full w-full">
              <Image
                src={BASE_PATH + "CSS.svg"}
                alt="CSS3 Logo"
                layout="fill"
              />
            </div>
          </div>
          <div className="opacity-30"></div>
          <div className="opacity-70"></div>
          <div className="p-2 opacity-70">
            <div className="relative h-full w-full">
              <Image
                src={BASE_PATH + "React.svg"}
                alt="CSS3 Logo"
                layout="fill"
              />
            </div>
          </div>
          <div className="p-2">
            <div className="relative h-full w-full opacity-30">
              <Image
                src={BASE_PATH + "HTML.svg"}
                alt="HTML Logo"
                layout="fill"
              />
            </div>
          </div>
          <div className="opacity-50"></div>
          {/* 8 Col */}
          <div className="p-2">
            <div className="relative h-full w-full">
              <Image
                src={BASE_PATH + "NodeJS.svg"}
                alt="CSS3 Logo"
                layout="fill"
              />
            </div>
          </div>
          <div className="opacity-0"></div>
          <div className="opacity-50"></div>
          <div className="opacity-20"></div>
          <div className="opacity-50"></div>
          <div className="p-2 opacity-90">
            <div className="relative h-full w-full">
              <Image
                src={BASE_PATH + "Java.svg"}
                alt="CSS3 Logo"
                layout="fill"
              />
            </div>
          </div>
          <div className="opacity-50"></div>
          <div className="opacity-30"></div>
          {/* 8 Col */}
          <div className=""></div>
          <div className="px-4 opacity-50">
            <div className="relative h-full w-full">
              <Image
                src={BASE_PATH + "Redux.svg"}
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
                src={BASE_PATH + "PostgreSQL.svg"}
                alt="CSS3 Logo"
                layout="fill"
              />
            </div>
          </div>
          <div className="opacity-0"></div>
          <div className="opacity-50"></div>
          {/* 8 Col */}
          <div className="opacity-30"></div>
          <div className="opacity-20"></div>
          <div className="p-2">
            <div className="relative h-full w-full">
              <Image
                src={BASE_PATH + "git.svg"}
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
                src={BASE_PATH + "Spring.svg"}
                alt="CSS3 Logo"
                layout="fill"
              />
            </div>
          </div>
          <div className="opacity-0"></div>
          {/* 8 Col */}
          <div className="p-2">
            <div className="relative h-full w-full">
              <Image
                src={BASE_PATH + "Sass.svg"}
                alt="CSS3 Logo"
                layout="fill"
              />
            </div>
          </div>
          <div className="p-2 opacity-70 md:hidden lg:block">
            <div className="relative h-full w-full">
              <Image
                src={BASE_PATH + "Docker.svg"}
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
                src={BASE_PATH + "Tailwindcss.svg"}
                alt="CSS3 Logo"
                layout="fill"
              />
            </div>
          </div>
          <div className="opacity-40"></div>
          {/* 8 Col */}
          <div className="opacity-20"></div>
          <div className="opacity-10"></div>
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
  );
};

export default Hero;
