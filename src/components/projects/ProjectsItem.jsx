import React from "react";

const ProjectsItem = ({
  name = "",
  urlImage = "",
  type = "",
  technologies = [],
  description = "",
  buttons = [],
}) => {
  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded overflow-hidden shadow flex flex-row 2xl:flex-col gap-2 2xl:gap-3 ">
      <img
        className="w-32 h-full 2xl:w-full 2xl:h-36 object-cover object-center"
        src={urlImage}
        alt="DIEGO TEST"
      />
      <div className="p-2 ">
        {/* Name and type */}
        <div className="flex items-center justify-between">
          <h5 className="text-left text-slate-700 dark:text-slate-200 text-base font-serif font-semibold capitalize">
            {name}
          </h5>
          <p className="text-slate-400 dark:text-slate-500 p-1.5 text-sm capitalize">
            {type}
          </p>
        </div>

        {/* Tecnologias */}
        <div className="flex flex-wrap justify-start gap-2 mt-4 ">
          {technologies.map((e) => {
            return (
              <span
                key={e}
                className="bg-slate-500 text-slate-50 dark:bg-slate-700 dark:text-slate-300 rounded text-sm p-0.5 px-2"
              >
                {e}
              </span>
            );
          })}
        </div>

        {/* Descripcion */}
        <p className="mt-2 h-16 2xl:h-28 overflow-x-auto text-ellipsis text-slate-600 dark:text-slate-300">
          {description}
        </p>

        {/* Botones */}
        <div className="mt-3 flex gap-2 justify-between mb-2">
          {buttons.map((e) => {
            return (
              <a
                className="p-2 w-full text-center bg-slate-600 dark:bg-slate-800 text-slate-100 dark:text-slate-300 font-semibold rounded hover:bg-slate-700 dark:hover:bg-slate-700 transition-colors ease-linear"
                key={e.name}
                href={e.url}
                target="_blank"
              >
                {e.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsItem;
