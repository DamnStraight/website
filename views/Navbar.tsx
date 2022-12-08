import clsx from "clsx";

import styles from "./Navbar.module.scss";

const classes = {
  navbarWrapper: `
    absolute z-20 py-4 w-full
    flex items-center justify-center space-x-16 
    text-2xl font-thin uppercase tracking-wide text-zinc-300 decoration-1 
    underline-offset-4
  `,
  navbarContent: clsx(
    styles.glass,
    `
    flex items-center rounded-xl overflow-hidden
    [&>*]:px-6 [&>*]:py-4 [&>*]:transition [&>*]:ease-in hover:[&>*]:bg-slate-500/5
  `
  ),
};

const Navbar = () => {
  return (
    <div className={clsx(classes.navbarWrapper)}>
      <div className={classes.navbarContent}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
      </div>
    </div>
  );
};

export default Navbar;
