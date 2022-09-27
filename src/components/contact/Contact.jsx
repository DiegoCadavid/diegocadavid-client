import React from "react";
import diegoContact from "../../assets/Contacto.svg";

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto p-5 flex flex-col items-center justify-center min-h-screen">
      <h4 className="text-center text-xl sm:text-2xl text-slate-800 dark:text-slate-100 font-serif">
        Contacto
      </h4>
      <div className="w-full max-w-sm mx-auto flex flex-col items-stretch">
        <img
          className="w-48 h-48 sm:w-64 sm:h-64 object-contain object-center self-center"
          src={diegoContact}
          alt="Diego Contacto"
        />
        <form className="flex flex-col gap-2">
          {/* Cuando se validen errores agregar la clase "ring-2 ring-red-400" */}

          <input
            className=" rounded-md p-2 focus-visible:outline-none"
            placeholder="Correo electronico"
            type="text"
          />
          <input className=" rounded-md p-2 focus-visible:outline-none" placeholder="Asunto" type="text" />
          <textarea
            className="resize-y rounded-md p-2 focus-visible:outline-none"
            placeholder="Contenido"
          ></textarea>
          <button className="bg-slate-600 text-slate-100 font-semibold rounded-md p-2 hover:bg-slate-700 transition-colors ease-linear">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
