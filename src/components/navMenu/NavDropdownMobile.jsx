import React from "react";

const NavDropdownMobile = ({ navRoutes = [] }) => {
  return (
    <ul className="absolute animate-pop top-12 bg-slate-50 dark:bg-slate-800 rounded shadow overflow-hidden z-50">
      {navRoutes.map(({ name, Icon }) => {
        return (
          <li className="p-3 w-44 text-sm sm:text-base flex items-center active:bg-slate-200 dark:active:bg-slate-700 transition-colors ease-linear dark:text-slate-50" key={name}>
            <Icon className="h-4 w-4 mr-2 dark:text-slate-200" />
            {name}
          </li>
        );
      })}
    </ul>
  );
};

export default NavDropdownMobile;
