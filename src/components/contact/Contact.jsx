import React, { useState } from "react";
import diegoContact from "../../assets/Contacto.svg";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const [loadingSend, setLoadingSend] = useState(false);

  const onSubmit = (data) => {
    console.log(data);

    const emailPromise = emailjs.send(
      "service_8ybjowh",
      "contactTemplate",
      {
        email: data.email,
        subject: data.subject,
        message: data.content,
      },
      import.meta.env.VITE_EMAILJS__PUBLIC
    );

    toast.promise(emailPromise, {
      pending: "Enviando correo...",
      success: "correo enviado ✨",
      error: "Error al enviar el correo",
    });


    emailPromise
      .then((res) => {
        console.log("Correo enviado");
        resetField('email');
        resetField('subject');
        resetField('content');
        
      })
      .catch((err) => {
        console.log("Error al enviar el correo");
        console.log(err);
      })
      .finally(setLoadingSend(false));
  };

  return (
    <div
      id="contact"
      className="container mx-auto p-5 flex flex-col items-center justify-center min-h-screen"
    >
      <h4 className="text-center text-xl sm:text-2xl text-slate-800 dark:text-slate-100 font-serif">
        Contacto
      </h4>
      <div className="w-full max-w-sm mx-auto flex flex-col items-stretch">
        <img
          className="w-48 h-48 sm:w-64 sm:h-64 object-contain object-center self-center"
          src={diegoContact}
          alt="Diego Contacto"
        />
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          {/* Cuando se validen errores agregar la clase "ring-2 ring-red-400" */}
          <input
            className={`rounded-md p-2 focus-visible:outline-none ${
              errors.email && "ring-2 ring-red-400"
            }`}
            placeholder="Correo electronico"
            type="text"
            {...register("email", {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
          />
          <input
            className={` rounded-md p-2 focus-visible:outline-none ${
              errors.subject && "ring-2 ring-red-400"
            }`}
            placeholder="Asunto"
            type="text"
            {...register("subject", { required: true })}
          />
          <textarea
            className={`resize-y rounded-md p-2 focus-visible:outline-none ${
              errors.content && "ring-2 ring-red-400"
            }`}
            placeholder="Contenido"
            {...register("content", { required: true })}
          ></textarea>

          {!loadingSend && <button
            type="submit"
            className="bg-slate-600 text-slate-100 font-semibold rounded-md p-2 hover:bg-slate-700 transition-colors ease-linear"
          >
            Enviar
          </button>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
