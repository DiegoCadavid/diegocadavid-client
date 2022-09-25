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
  },
  {
    name: "Sobre mi",
    Icon: UserIcon,
  },
  {
    name: "Skills",
    Icon: AcademicCapIcon,
  },
  {
    name: "Proyectos",
    Icon: CodeBracketIcon,
  },
  {
    name: "Contacto",
    Icon: ChatBubbleBottomCenterIcon,
  },
];

const NavMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleShowDropdown = () => {
    setShowDropdown((d) => {
      return !d;
    });
  };

  return (
    <>
      <div className="container mx-auto hidden sm:flex  justify-end items-center sticky top-3">
        <ul className="h-12 bg-slate-50 dark:bg-slate-800  rounded overflow-hidden flex gap-2 items-center justify-center shadow transition-colors ease-in">
          {navRoutes.map(({ name, Icon }) => {
            return (
              <li
                className="p-2 h-full dark:text-slate-100  hover:bg-slate-200 dark:hover:bg-slate-700 hover:cursor-pointer transition-colors ease-linear flex items-center"
                key={name}
              >
                <Icon className="w-4 mr-1 text-slate-500 dark:text-slate-300" />
                {name}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="container px-5 sticky top-3 flex flex-col sm:hidden items-end">
        <button className="w-10 h-10 bg-slate-50 rounded shadow active:bg-slate-300 dark:bg-slate-800 dark:active:bg-slate-700 transition-colors ease-linear" onClick={toggleShowDropdown}>
          <Bars3Icon className="p-2 dark:text-slate-50" />
        </button>
        {showDropdown && <NavDropdownMobile navRoutes={navRoutes} />}
      </div>
    </>
  );
};

export default NavMenu;
