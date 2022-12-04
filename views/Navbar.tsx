import clsx from "clsx";

const classes = {
  "navbar-wrapper": `
    absolute z-20 py-6 w-full
    flex items-center justify-center space-x-16 
    text-2xl font-thin uppercase tracking-wide text-zinc-300 decoration-1 
    underline-offset-4
  `,
  "navbar-content": `
    flex items-center rounded-xl 
    [&>*]:p-6 [&>*]:transition [&>*]:ease-in hover:[&>*]:bg-slate-500/5 [&>*]:rounded-md 
  `,
};

const Navbar = () => {
  return (
    <div className={clsx(classes["navbar-wrapper"])}>
      <div className={classes["navbar-content"]}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
      </div>
    </div>
  );
};

export default Navbar;
