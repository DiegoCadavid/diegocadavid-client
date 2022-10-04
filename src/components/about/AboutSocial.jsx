import React from "react";
import { data as dataLinks } from "../../socialLink.json";
import AboutSocialItems from "./AboutSocialItems";

const AboutSocial = () => {
  return (
    <div className="w-full items-center justify-between gap-3 max-w-4xl grid grid-cols-[repeat(auto-fit,minmax(100px,_1fr))]">
      {dataLinks.map((l) => {
        return <AboutSocialItems key={l.name} name={l.name} url={l.url} /> ;
      })}
    </div>
  );
};

export default AboutSocial;
