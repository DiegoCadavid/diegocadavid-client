import React from "react";

const linksNav = [
  {
    name: "Instagram",
    url: "#",
  },
  {
    name: "Whatsapp",
    url: "#",
  },
  {
    name: "Youtube",
    url: "#",
  },
  {
    name: "Github",
    url: "#",
  },
];

const Footer = () => {
  return (
    <div className="bg-slate-800">
      <div className="container p-3 py-6 mx-auto flex flex-col items-center justify-center ">
        <p className="text-slate-300"> Hecho con 💟 por Diego Cadavid</p>
        <ul className="flex gap-3 justify-center text-slate-400">
          {linksNav.map((e) => {
            return (
              <li key={e.name}>
                <a href={e.url} className="underline text-sm underline-offset-4 hover:text-slate-300 transition-colors ease-linear">
                  {e.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
