const classes = {
  "navbar-wrapper": `
    absolute z-20 w-full py-6 
    flex items-center justify-center space-x-16 
    text-2xl font-thin uppercase tracking-wide text-zinc-300 underline decoration-1 
    underline-offset-4
  `,
};

const Navbar = () => {
  return (
    <div className={classes["navbar-wrapper"]}>
      <a href="#about" className="transition ease-in hover:-translate-y-1">
        About
      </a>
      <a href="#projects" className="transition ease-in hover:-translate-y-1">
        Projects
      </a>
      <a href="#skills" className="transition ease-in hover:-translate-y-1">
        Skills
      </a>
    </div>
  );
};

export default Navbar;
