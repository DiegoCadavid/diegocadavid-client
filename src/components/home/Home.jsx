import React from "react";
import Typewriter from "typewriter-effect";
import diegoAnimate from "../../assets/DiegoPortafolioAnimate.svg";

const Home = () => {
  return (
    <div className="container mt-8 sm:mt-0 px-5 min-h-[calc(100vh-(220px))] sm:min-h-[calc(100vh-(165px))] mx-auto flex justify-start sm:justify-center flex-col gap-12">
      <div className="w-full text-center ">
        <p className="text-slate-500 text-xl mb-1 dark:text-slate-300">
          Hola, soy
        </p>
        <p className="text-5xl font-serif text-slate-600 font-bold dark:text-slate-50">
          Diego Cadavid
        </p>
        <div className="mt-5 text-base sm:text-xl font-normal text-slate-800 dark:text-slate-100">
          <Typewriter
          options={{
            cursorClassName: '-z-10',
            autoStart: true,
            loop: true
          }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Desarrollador ")
                .typeString("Frontend")
                .pauseFor(800)
                .deleteChars(8)
                .pauseFor(300)
                .typeString("Backend")
                .pauseFor(700)
                .deleteChars(7)
                .pauseFor(200)
                .typeString("<b> FullStack </b> 💻.")
                .pauseFor(5000)
                .deleteAll()
                .start();
            }}
          />
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <img
          className="w-full sm:w-1/2"
          src={diegoAnimate}
          alt="Diego animado (inicio)"
        />
      </div>
    </div>
  );
};

export default Home;
