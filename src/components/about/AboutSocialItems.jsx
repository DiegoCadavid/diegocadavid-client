import React from "react";

const AboutSocialItems = ({ name = "", url = "" }) => {
  return (
    <div className=" h-12 rounded-md overflow-hidden">
      <a  href={url} className="dark:text-slate-200 bg-slate-50  hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-700 hover:cursor-pointer transition-colors ease-linear h-full w-full flex justify-center items-center " target='_blank'>
        {" "}
        {name}{" "}
      </a>
    </div>
  );
};

export default AboutSocialItems;
