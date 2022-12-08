import clsx from "clsx";
import ApplicationWindow from "../../components/ApplicationWindow";
import Parallax from "../../components/Parallax";
import styles from "./About.module.scss";

const classes = {
  aboutWrapper: `
    relative w-full
    flex justify-center min-h-[600px] font-thin pb-24 pt-16
  `,
  aboutContent: `
    w-3/4 rounded-lg p-8 
    text-slate-300 decoration-1 underline-offset-4
    text-xl md:text-2xl lg:text-3xl 
  `,
  photoWindowWrapper: `
    z-20 absolute right-0 top-[-190px] lg:top-[-140px] h-[375px] w-1/3
    hidden lg:flex lg:flex-col
  `,
  skillContainer: `
    w-full pt-2 
    flex shrink flex-wrap gap-2 
    text-sm text-white 
    child:rounded-full child:bg-slate-400/20 child:py-2 child:px-4 hover:child:scale-110
  `,
};

const SKILLS = [
  "JavaScript",
  "NodeJS",
  "TypeScript",
  "React",
  "React Native",
  "PostgreSQL",
  "Java",
  "Spring",
];

const About = () => {
  return (
    <section id="about" className="pt-20">
      {/* <Parallax offset={50}>
        <div className="z-0 flex w-full items-center justify-center lg:hidden">
          <ApplicationWindow
            title="Selfie.png"
            variant="light"
            className="h-[375px] w-1/2"
          >
            <div className="grid h-full w-full grid-rows-1 place-items-center bg-gray-300">
              <div className="relative aspect-square h-full">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={"Me.png"}
                  alt="Test"
                />
              </div>
            </div>
          </ApplicationWindow>
        </div>
      </Parallax> */}
      <Parallax offset={150}>
        <div className="container relative mx-auto">
          <ApplicationWindow
            variant="dark"
            title="steven@dev: ~/projects/Portfolio"
          >
            {/* TODO Take a proper portait photo then uncomment this*/}
            {/* <div className={classes.photoWindowWrapper}>
              <ApplicationWindow title="Selfie.png" variant="light" className="overflow-hidden">
                <div className="grid h-full w-full grid-rows-1 place-items-center bg-gray-300">
                  <div className="relative aspect-square h-full">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={"Me.png"}
                      alt="Test"
                    />
                  </div>
                </div>
              </ApplicationWindow>
            </div> */}
            <div className={classes.aboutWrapper}>
              <div className={classes.aboutContent}>
                <br />
                <p className="pb-2 font-medium uppercase">Languages:</p>
                <p>English, French</p>
                <br />
                <p className="pb-2 font-medium uppercase">About:</p>
                <p>
                  I'm a software developer based in Montreal, Canada 🇨🇦 and
                  recent graduate of Computer Science from Concordia University.
                </p>
                <br />
                <p>
                  Former developer and founding member at{" "}
                  <a
                    className={clsx(styles["monokai-blue"], "underline")}
                    href="https://shuttlecontrol.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    ShuttleControl
                  </a>
                </p>
                &nbsp;
                <p className="pb-2 font-medium uppercase">Skills:</p>
                <div className={classes.skillContainer}>
                  {SKILLS.map((item: string, index) => (
                    <span key={`${index}-${item}`}>{item}</span>
                  ))}
                </div>
                <br />
                <p className="pb-2 font-medium uppercase">Socials:</p>
                <a
                  className={clsx(styles["monokai-blue"], "underline")}
                  href="https://github.com/DamnStraight/"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
                <br />
                <br />
                <p className="text-2xl opacity-30">
                  <span className={styles["monokai-green"]}>
                    steven@dev~/projects/Portfolio:
                  </span>{" "}
                  npm run dev
                  <span className={clsx("inline-block", styles.blink)}>|</span>
                </p>
              </div>
            </div>
          </ApplicationWindow>
        </div>
      </Parallax>
    </section>
  );
};

export default About;
