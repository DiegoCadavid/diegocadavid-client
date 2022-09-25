import React from "react";

import diegoImg from "../../assets/aboutme.jpg";

export const About = () => {
  return (
    <div className="container mx-auto max-w-4xl p-5 mt-0 sm:mt-32 sm:p-0">
      <div className="bg-slate-50 dark:bg-slate-900 rounded overflow-hidden flex flex-col sm:flex-row items-center gap-1 py-8 sm:py-0 transition-colors ease-in">
        <img
          className="w-32 h-32 sm:w-64 sm:h-full object-cover rounded-full sm:rounded-none"
          src={diegoImg}
          alt="Foto de Diego"
        />
        <div className="p-5">
          <h3 className="text-xl sm:text-2xl text-slate-700 dark:text-slate-200 font-serif text-center sm:text-left">
            Sobre mi
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mt-2">
            Soy Diego Cadavid tengo 16 años y soy de Colombia, actualmente soy
            estudiante de secundaria 9° del Pestalozzi. Me apasiona el desarrollo
            web en todas sus areas desde el <b> Frontend </b> hasta el
            <b> Bakend</b>, Amo 💟 realmente la programacion porque me abre un
            mundo el cual yo mismo puedo crear ^^ y espero en un futuro entrar a
            un mundo laboral el cual me permita utilizar todas mis habilidades
            creativas y logicas.
          </p>

          <div className="mt-6 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-l-8 border-slate-300 dark:border-slate-700 p-2 rounded-r">
            <p className="italic">"La creatividad es la inteligencia divirtiéndose."</p>
            <p className="text-right text-sm text-slate-400 dark:text-slate-600"> - Albert Einstein </p>
          </div>
        </div>
      </div>
    </div>
  );
};
