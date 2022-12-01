const Navbar = () => {
  return (
    <div className="absolute z-20 flex w-full items-center justify-center space-x-16 py-6 text-2xl font-thin uppercase tracking-wide text-zinc-300 underline decoration-1 underline-offset-4">
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
