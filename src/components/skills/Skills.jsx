import React from "react";

import skillsData from "./skillsData.json";

const Skills = () => {
  return (
    <div className="container px-5 mx-auto mt-8 sm:mt-32 flex flex-col items-center">
      <h4 className="text-center text-xl sm:text-2xl text-slate-700 dark:text-slate-100 font-serif ">
        Mis skills
      </h4>
      {/* CONTENEDOR  */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
        {/* SECCIONES */}
        {Object.keys(skillsData).map((i) => {
          return (
            <div key={i} className=" max-w-sm flex flex-col items-stretch">
              <h5 className="text-xl text-center text-slate dark:text-slate-200 -700 border-b pb-2 border-slate-600 dark:border-slate-400"> {i} </h5>
              {/* ITEMS SECCIONES */}
              <div className="w-full grid grid-cols-3 gap-3 mt-2">
                {skillsData[i].map((e) => {
                  return (
                    <div
                      className="text-center w-28 h-28 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800 rounded"
                      key={e.name}
                    >
                      <img
                        className="w-16 h-16 object-contain "
                        src={e.url}
                        alt={`icon for ${e.name}`}
                      />
                      <p className="text-sm mt-2 font-semibold text-slate-500">
                        {e.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
