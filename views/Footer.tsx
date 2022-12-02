const classes = {
  "footer-wrapper": `flex h-32 items-center justify-center bg-zinc-900 border-t-[1px] border-zinc-800`,
  "footer-content": `
    font-thin text-slate-300 transition ease-in-out hover:scale-110
  `,
};

const Footer = () => {
  return (
    <footer>
      <div className={classes["footer-wrapper"]}>
        <div className={classes["footer-content"]}>
          <a href={process.env.NEXT_PUBLIC_REPOSITORY_URL}>
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
