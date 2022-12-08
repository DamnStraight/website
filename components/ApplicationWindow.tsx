import clsx from "clsx";
import { ReactNode } from "react";

type ThemeVariant = "light" | "dark";

const classes = {
  container: (variant: ThemeVariant) => `
    relative w-full h-full
    flex flex-col 
    rounded-3xl shadow-lg 
    ${variant === "light" ? "bg-zinc-100" : "border border-slate-500/30 bg-zinc-900"}
  `,
  titleBar: (variant: ThemeVariant) => `
    z-20 w-full py-4
    flex justify-left items-center 
    border-b ${
      variant === "light"
        ? "border-zinc-400/50 bg-zinc-100"
        : "border-zinc-800/50"
    }
  `,
  titleContent: `
    absolute h-fit w-full 
    hidden md:flex items-center justify-center 
    font-bold text-zinc-400 opacity-50
  `,
};

interface ApplicationWindowProps {
  variant: ThemeVariant;
  title?: string;
  className?: string;
  children?: ReactNode;
}

/**
 * Container that wraps the content in a MacOS style window
 * @param {ApplicationWindowProps} 
 * @returns {JSX.Element}
 */
const ApplicationWindow = ({
  variant,
  title = "",
  className = "",
  children,
}: ApplicationWindowProps) => {
  return (
    <div className={clsx(classes.container(variant), className)}>
      <div className={classes.titleBar(variant)}>
        <div className="ml-4 mr-3 h-5 w-5 rounded-full bg-red-600" />
        <div className="mr-3 h-5 w-5 rounded-full bg-yellow-500" />
        <div className="h-5 w-5 rounded-full bg-green-500" />
        <div className={classes.titleContent}>{title}</div>
      </div>
      {children}
    </div>
  );
};

export default ApplicationWindow;