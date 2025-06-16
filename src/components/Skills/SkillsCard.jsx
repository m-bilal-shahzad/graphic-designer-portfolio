import React from "react";
import "./Skills.css";

// Reuseble Component for Skills Card
const SkillsCard = ({ src, alt, title, percent }) => {
  return (
    <>
      <li className="skill-card p-6 border border-[#77777d33] rounded-xl text-center transition-transform duration-300 ease-linear hover:scale-105 hover:border-[#448C74] hover:shadow-xl">
        <img
          loading="lazy"
          src={src}
          alt={alt}
          className="skill-img m-auto pb-3 w-[30%]"
        />
        <h2 className="skill-name font-medium pb-3">{title}</h2>
        <h4 className="skill-level font-semibold flex justify-center items-center text-lg text-white py-2 px-20 bg-[#448c74] rounded-2xl m-auto ">
          <span className="">{percent}%</span>
        </h4>
      </li>
    </>
  );
};

export default SkillsCard;
