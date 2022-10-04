import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// Data for skills { category : [{ name: '', url: '' }] }
import skillsData from "./skillsData.json";

const Skills = () => {
  const [skillsIndex, setSkillsIndex] = useState({
    index: 0,
    name: "",
  });
  const [skillsSelect, setSkillsSelect] = useState([]);

  useEffect(() => {
    setSkillsIndex({
      index: 0,
      name: Object.keys(skillsData)[0],
    });
  }, []);

  useEffect(() => {
    setSkillsSelect(skillsData[skillsIndex.name]);
  }, [skillsIndex]);

  const handleNext = () => {
    if (skillsIndex.index < Object.keys(skillsData).length - 1) {
      setSkillsIndex({
        index: skillsIndex.index + 1,
        name: Object.keys(skillsData)[skillsIndex.index + 1],
      });
    } else {
      setSkillsIndex({
        index: 0,
        name: Object.keys(skillsData)[0],
      });
    }
  };

  const handlePrevius = () => {
    if (skillsIndex.index > 0) {
      setSkillsIndex({
        index: skillsIndex.index - 1,
        name: Object.keys(skillsData)[skillsIndex.index - 1],
      });
    } else {
      setSkillsIndex({
        index: Object.keys(skillsData).length - 1,
        name: Object.keys(skillsData)[Object.keys(skillsData).length - 1],
      });
    }
  };

  return (
    <div id="skills" className="container px-5 sm:px-0 mx-auto flex flex-col items-center">
      <h4 className="text-center text-xl sm:text-2xl text-slate-800 dark:text-slate-100 font-serif ">
        Mis skills
      </h4>

      {/* Controles y titulo < -----  > */}
      <div className="flex w-full justify-around max-w-md text-slate-700 dark:text-slate-300">
        <button
          className="w-5 h-5 active:text-slate-400 transition-all ease-in-out"
          onClick={handlePrevius}
        >
          <ChevronLeftIcon />
        </button>
        <h6 className="capitalize text-center"> {skillsIndex.name} </h6>
        <button
          className="w-5 h-5 active:text-slate-400 transition-all ease-in-out"
          onClick={handleNext}
        >
          <ChevronRightIcon />
        </button>
      </div>

      {/* Container skills x=3 y=4 maxSkills */}
      <div className="mt-4 rounded p-4">
        <div className="grid grid-cols-3 grid-rows-4 gap-2">
          {skillsSelect?.map((e) => {
            return (
              <div
                key={e.name}
                className="bg-slate-200 dark:bg-slate-800 p-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-start hover:bg-slate-300 hover:dark:bg-slate-700 hover:cursor-pointer transition-colors ease-linear animate-fade"
              >
                <img
                  className="w-full sm:w-16 aspect-square object-contain"
                  src={e.url}
                  alt={`icon for ${e.name}`}
                />
                <p className="text-slate-500 dark:text-slate-400 font-semibold">
                  {" "}
                  {e.name}{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
