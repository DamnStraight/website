import Image from "next/image";

import React, { useState } from "react";

export interface Project {
  title: string;
  description: string[];
  image: {
    name: string;
    alt: string;
  };
  stack: string[];
  source?: string;
  website?: string;
}

interface ProjectCardProps {
  project: Project;
}

const classes = {
  card: `
    relative h-[600px] w-full overflow-hidden rounded-2xl 
    border border-slate-500/30 shadow-lg 
    transition duration-200 ease-in hover:scale-[1.02] hover:border-slate-500
  `,
  fadeOverlay: `
    absolute h-full w-full 
    bg-gradient-to-t from-zinc-900 to-zinc-900/20 hover:to-zinc-900/30
  `,
  cardContent: `
    absolute h-full w-full p-6
    flex flex-1 flex-col space-y-8
    font-thin
  `,
  cardHoverContent: (isHovered: boolean) => `
    absolute h-full w-full p-10
    flex flex-col items-center justify-center
    bg-black/70 transition ease-in 
    ${isHovered ? "opacity-100" : "opacity-0"}
  `,
  techStackContainer: `
    flex w-full shrink flex-wrap justify-center gap-2 
    text-sm text-white
    child:rounded-full child:bg-slate-400/20 child:py-1 child:px-3
  `,
  externalLinkWrapper: `
    mb-auto pt-2
    flex items-center justify-center gap-4 
    font-bold text-white 
    hover:child:text-blue-500
  `,
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={classes.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={project.image.name}
        layout="fill"
        objectFit="cover"
        alt={project.image.alt}
      />
      <div className={classes.fadeOverlay}></div>
      <div className={classes.cardContent}>
        <h1 className="mt-auto text-center text-4xl text-slate-200">
          {project.title}
        </h1>
        <div className={classes.techStackContainer}>
          {project.stack.map((item: string, index) => (
            <span key={`${index}-${item}`}>{item}</span>
          ))}
        </div>
      </div>
      <div className={classes.cardHoverContent(isHovered)}>
        <div className="mt-auto text-xl font-thin text-white">
          {project.description.map((item, index) => (
            <React.Fragment key={index}>
              <p>{item}</p>
              <br />
            </React.Fragment>
          ))}
        </div>
        {(project.website || project.source) && (
          <div className={classes.externalLinkWrapper}>
            {project.source && (
              <a href={project.source} rel="noreferrer" target="_blank">
                Source
              </a>
            )}
            {project.website && (
              <a href={project.website} rel="noreferrer" target="_blank">
                Website
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
