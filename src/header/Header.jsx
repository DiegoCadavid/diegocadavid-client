import React from "react";
import logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <div>
      <div className="container bg-white rounded-b-lg mx-auto flex items-center justify-between p-4">
        {/* LOGO */}
        <div className="flex items-center justify-center">
          <img className="h-16" src={logo} alt="Logo" />
          <div className="ml-3">
            <h1 className=" text-slate-600 m-0 font-mono text-2xl ">Diego Cadavid</h1>
            <h2 className="m-0 leading-3 text-slate-500" >Desarrollador <b> FullStack </b></h2>
          </div>
        </div>

        <div>
            <p>Icons</p>
        </div>

      </div>
    </div>
  );
};

export default Header;
