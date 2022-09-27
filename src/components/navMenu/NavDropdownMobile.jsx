import React from "react";

const NavDropdownMobile = ({ navRoutes = [], handleNavigate }) => {
  return (
    <ul className="absolute animate-pop top-12 bg-slate-50/60 dark:bg-slate-800/60 rounded shadow overflow-hidden z-50 backdrop-blur-md">
      {navRoutes.map(({ name, Icon, id}) => {
        return (
          <li
            className="p-3 w-44 text-sm sm:text-base flex items-center active:bg-slate-200/60 dark:active:bg-slate-700/70 transition-colors ease-linear dark:text-slate-50"
            key={id}
            onClick={handleNavigate(id)}
          >
            <Icon className="h-4 w-4 mr-2 dark:text-slate-200" />
            {name}
          </li>
        );
      })}
    </ul>
  );
};

export default NavDropdownMobile;
