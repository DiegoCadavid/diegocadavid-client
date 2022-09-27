import React from "react";
import ProjectsItem from "./ProjectsItem";
import projectData from "./projectsData.json";

const Projects = () => {
  return (
    <div
      id="projects"
      className="container mx-auto flex flex-col items-center  "
    >
      <h4 className="text-center text-xl sm:text-2xl text-slate-800 dark:text-slate-100 font-serif ">
        Mis proyectos
      </h4>
      {/* PROJECTS CONTAINER */}
      <div className="p-5 grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 mt-1 justify-items-center gap-4">
        {/* Placeholder */}
        {projectData.data.map((project) => {
          return (
            <ProjectsItem
              key={project.name}
              name={project.name}
              technologies={project.techologies}
              urlImage={project.urlImage}
              description={project.description}
              buttons={project.buttons}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
