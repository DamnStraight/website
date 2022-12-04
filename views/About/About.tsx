const classes = {
  "about-wrapper": `
    relative bg-zinc-900 w-full
    flex justify-center items-center min-h-[600px] font-thin
  `,
  "about-content": ``,
};

const About = () => {
  return (
    <section id="about" className="relative">
      <div className={classes["about-wrapper"]}>
        <div className="w-[60%] rounded-lg p-8 text-2xl text-slate-300 decoration-1 underline-offset-4 shadow-sm">
          {/* <h1 className="relative -top-8 pb-8 text-center text-8xl font-thin uppercase opacity-20">
            About
          </h1> */}
          <p>
            I'm a software developer based in Canada 🇨🇦 and recent graduate of
            Computer Science from Concordia University.
          </p>
          &nbsp;
          <p>
            Currently specialize in <u>JavaScript</u>, <u>TypeScript</u> and the
            {" "}<u>NodeJS</u> ecosystem with some prior <u>Java</u> experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
