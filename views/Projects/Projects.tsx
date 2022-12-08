import ProjectCard, { Project } from "../../components/ProjectCard";

const displayProjects: Project[] = [
  {
    title: "ShuttleControl",
    description: [
      "A software as a service platform to help manage, streamline and automate tasks related to shuttle services.",
      `
        I joined my talented team of friends shortly after developement had started on the 
        initial version of ShuttleControl where I then helped add new features, fix bugs and ensured the
        proper release of the initial iOS application.
      `,
      "ShuttleControl has since grown into a robust platform used by various dealerships and valet services across North America.",
    ],
    image: {
      name: "ShuttleControl.png",
      alt: "Portfolio Thumbnail",
    },
    stack: [
      "JavaScript",
      "TypeScript",
      "Ant Design",
      "React",
      "React Native",
      "PostgreSQL",
    ],
    website: "https://shuttlecontrol.com/",
  },
  {
    title: "A Fly Problem",
    description: [
      "A project developed for Intro to Game Development at Concordia University.",
      "This project was a semester long team effort that required us to design and develop our own game from the ground up.",
      "The game was developed in Unity and is currently available to play at itch.io!",
    ],
    image: {
      name: "FlyProblem.png",
      alt: "A Fly Problem Logo Thumbnail",
    },
    stack: ["C#", "Unity"],
    source: "https://github.com/jim6610/A-Fly-Problem",
    website: "https://damnstraight.itch.io/a-fly-problem",
  },
  {
    title: "Portfolio",
    description: [
      "The page you are looking at right this very moment :^)",
      "My personal website used to display my projects and details about myself.",
      "Hosted with GitHub pages.",
    ],
    image: {
      name: "Portfolio.png",
      alt: "Portfolio Thumbnail",
    },
    stack: ["JavaScript", "TypeScript", "NextJS", "Sass", "TailwindCSS"],
    source: "https://github.com/DamnStraight/website",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container relative mx-auto bg-zinc-900">
      <div>
        <h1 className="pt-4 pb-8 text-center text-7xl font-thin text-slate-200/50 md:py-4">
          Projects
        </h1>
      </div>
      <div className="relative z-[0] grid w-full grid-cols-1 items-center gap-8 p-0 md:p-24 lg:grid-cols-2">
        {displayProjects.map((item, index) => (
          <ProjectCard key={`${index}-${item.title}`} project={item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
