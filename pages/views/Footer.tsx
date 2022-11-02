const Footer = () => {
  return (
    <footer>
      <div className="flex h-32 items-center justify-center bg-gray-900">
        <div className="font-thin text-slate-300 transition ease-in-out hover:scale-110">
          <a href={process.env.NEXT_PUBLIC_REPOSITORY_URL}>
            <span className="text-slate-700">&lt;</span>View Source on GitHub
            <span className="text-slate-700">/&gt;</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
