import React from "react";
import "./Intro.css"

// Reuseble Component for Skills Icons
const SkillsIcon = ({ src, alt }) => {
  return (
    <>
      <li className="skill-item w-14 h-14">
        <img loading="lazy" src={src} alt={alt} className="w-full h-full object-contain" />
      </li>
    </>
  );
};

export default SkillsIcon;
