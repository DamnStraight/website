const Footer = () => {
  return (
    <footer>
      <div className="h-32 bg-gray-900 flex justify-center items-center">
        <div className="text-slate-300 transition hover:scale-110 ease-in-out">
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
