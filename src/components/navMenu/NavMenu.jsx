import React, { useState } from "react";
import {
  HomeIcon,
  UserIcon,
  CodeBracketIcon,
  ChatBubbleBottomCenterIcon,
  AcademicCapIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

import NavDropdownMobile from "./NavDropdownMobile";

const navRoutes = [
  {
    name: "Inicio",
    Icon: HomeIcon,
    id: "home",
  },
  {
    name: "Sobre mi",
    Icon: UserIcon,
    id: "about",
  },
  {
    name: "Skills",
    Icon: AcademicCapIcon,
    id: "skills",
  },
  {
    name: "Proyectos",
    Icon: CodeBracketIcon,
    id: "projects",
  },
  {
    name: "Contacto",
    Icon: ChatBubbleBottomCenterIcon,
    id: "contact",
  },
];

const NavMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleShowDropdown = () => {
    setShowDropdown((d) => {
      return !d;
    });
  };

  const handleNavigate = ( section ) => {
    return () => {
      const element =  document.querySelector(`#${section}`);
      element.scrollIntoView({ behavior: 'smooth', block: 'center'});
    }
  } 

  return (
    <>
      <div className="container mx-auto hidden sm:flex  justify-end items-center sticky top-3 ">
        <ul className="h-12 bg-slate-50/60 dark:bg-slate-800/60  rounded overflow-hidden flex gap-2 items-center justify-center shadow transition-colors ease-in backdrop-blur-md">
          {navRoutes.map(({ name, Icon, id }) => {
            return (
              <li
                className="p-2 h-full text-slate-800 dark:text-slate-100  hover:bg-slate-300/60 dark:hover:bg-slate-700/60  hover:cursor-pointer transition-colors ease-linear flex items-center"
                key={id}
                onClick={handleNavigate(id)}
              >
                <Icon className="w-4 mr-1 text-slate-500 dark:text-slate-300" />
                {name}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="container px-5 sticky top-3 flex flex-col sm:hidden items-end">
        <button
          className="w-10 h-10 bg-slate-50 rounded shadow active:bg-slate-300 dark:bg-slate-800 dark:active:bg-slate-700 transition-colors ease-linear"
          onClick={toggleShowDropdown}
        >
          <Bars3Icon className="p-2 dark:text-slate-50" />
        </button>
        {showDropdown && <NavDropdownMobile navRoutes={navRoutes} handleNavigate={handleNavigate} />}
      </div>
    </>
  );
};

export default NavMenu;
