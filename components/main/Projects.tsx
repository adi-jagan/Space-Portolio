import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Ventures
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/skywolf.png"
          title="Skywolf: Legislative Bill Tracking"
          description="A modern bill tracking application with cutting edge tools and technologies"
        />
        <ProjectCard
          src="/getseconds.png"
          title="Getseconds: Dynamic Education Curicula"
          description="A modern approach to tacking the problems of re-education and re-skilling in the age of AI."
        />

      </div>
    </div>
  );
};

export default Projects;
