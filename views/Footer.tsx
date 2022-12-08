const classes = {
  footerWrapper: `
    relative h-32
    flex items-center justify-center 
    bg-zinc-900 border-t-[1px] border-zinc-800
  `,
  footerContent: `
    font-thin text-slate-300 transition ease-in-out hover:scale-110
  `,
};

const Footer = () => {
  return (
    <footer>
      <div className={classes.footerWrapper}>
        <div className={classes.footerContent}>
          <a href="https://github.com/DamnStraight/website">
            <span className="text-slate-700">&lt;</span>
            View Source on GitHub
            <span className="text-slate-700">/&gt;</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
