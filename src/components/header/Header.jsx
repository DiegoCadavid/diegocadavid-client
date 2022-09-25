import React from "react";
import logo from "../../assets/Logo.svg";

// Icon theme
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

// Icon nav
const iconsNav = [
  {
    tag: "Github",
    url: "#",
  },
  {
    tag: "Instagram",
    url: "#",
  },
];

const Header = ({ theme, handleToggleTheme }) => {
  return (
    <div className="container mb-3 bg-slate-50 sm:rounded-b-lg mx-auto flex items-center justify-between p-5 dark:bg-slate-800 shadow transition-colors ease-in">
      {/* LOGO */}
      <div className="flex items-center justify-center">
        <img className="h-16 hidden sm:block " src={logo} alt="Logo" />
        <div className="sm:ml-3">
          <h1 className=" text-slate-600 m-0 font-serif font-semibold text-base sm:text-2xl dark:text-slate-100 ">
            {'<DiegoCadavid />'}
          </h1>
          <h2 className="hidden sm:block leading-4 font-sans text-slate-500 dark:text-slate-300">
            Desarrollador <b> FullStack </b>
          </h2>
        </div>
      </div>

      {/* Social icons */}
      <div className="flex gap-3 items-center">
        {iconsNav.map((icon) => {
          return (
            <a
              className="no-underline font-sans font-normal text-sm sm:text-base capitalize relative after:absolute after:h-0.5 after:bg-slate-500 after:-bottom-1 after:inset-x-1/2 hover:after:inset-x-2 after:transition-all after:ease-linear dark:text-slate-200 dark:after:bg-slate-300"
              key={icon.tag}
              href={icon.url}
            >
              {icon.tag}
            </a>
          );
        })}

        <button className="bg-slate-600 hover:bg-slate-800 dark:bg-slate-300 dark:hover:bg-slate-50 transition-colors ease-linear  rounded-full flex items-center justify-center ">
          {theme == "light" ? (
            <MoonIcon
              className="h-8 w-8 p-2 text-slate-50"
              onClick={handleToggleTheme}
            />
          ) : (
            <SunIcon
              className="h-8 w-8 p-2 text-slate-800"
              onClick={handleToggleTheme}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
