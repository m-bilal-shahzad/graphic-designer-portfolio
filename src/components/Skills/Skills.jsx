import React, { useState, useEffect, useMemo } from "react";
import "./Skills.css";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  // useLocation to Detect Route Change
  const location = useLocation();

  // useState for Heading Transition
  const [textShown, setTextShown] = useState(false);

  // useState for Section Visibility for Transition Effect
  const [skillsVisible, setSkillsVisible] = useState(false);

  // Using Intersection Observer for Transition Effect for Skills Section
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // useEffect to Run Transition When State Changes
  useEffect(() => {
    setSkillsVisible(inView);
  }, [inView]);

  // useEffect to Run Transition on Headings When Location Changes
  useEffect(() => {
    let timer;
    location.pathname === "/Skills"
      ? (timer = setTimeout(() => {
          setTextShown(true);
        }, 50))
      : setTextShown(false);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Skills Card Data with useMemo for Dynamic Rendering
  const skillsData = useMemo(
    () => [
      {
        id: 1,
        title: "Figma",
        icon: "Figma.webp",
        percent: 95,
      },
      {
        id: 2,
        title: "Adobe Photoshop",
        icon: "PhotoShop.webp",
        percent: 80,
      },
      {
        id: 3,
        title: "Adobe Illustrator",
        icon: "Illustrator.webp",
        percent: 90,
      },
      {
        id: 4,
        title: "Adobe InDesign",
        icon: "InDesign.webp",
        percent: 92,
      },
      {
        id: 5,
        title: "Adobe XD",
        icon: "AdobeXD.webp",
        percent: 85,
      },
      {
        id: 6,
        title: "Canva",
        icon: "Canva.webp",
        percent: 82,
      },
      {
        id: 7,
        title: "Corel Draw",
        icon: "CorelDraw.webp",
        percent: 85,
      },
      {
        id: 8,
        title: "Affinity Designer",
        icon: "AffinityDesigner.webp",
        percent: 80,
      },
    ],
    []
  );

  return (
    <>
      <section className="skills-section bg-[#ECF3F1] pt-32 pb-4">
        <div className="fixed-container">
          <div className="skills-container">
            {/* Skills Headings */}
            <div className="skills-headings text-center capitalize overflow-hidden">
              <h5
                className={`text-[#444] leading-[28px] mb-2 transition-all duration-1000  ease-in-out ${
                  textShown
                    ? "translate-y-0  scale-105"
                    : "translate-y-8  scale-90"
                }`}
              >
                Pro Skills
              </h5>
              <h2
                className={`text-[50px] font-medium leading-[60px] mb-6 transition-all duration-1000 ease-in-out ${
                  textShown
                    ? "translate-y-0  scale-105"
                    : "translate-y-8  scale-90"
                }`}
              >
                Let's explore my skills
              </h2>
            </div>

            {/* Skills Showcasing Section */}
            <div
              ref={ref}
              className={`skills-main bg-white p-10 rounded-3xl ${
                skillsVisible ? "section-transform" : ""
              }`}
            >
              {/* Skills Cards */}
              <ul className="grid grid-cols-4 gap-8">
                {skillsData.map((card) => (
                  <SkillsCard
                    key={card.id}
                    src={`assets/images/skills/${card.icon}`}
                    alt={card.icon.split(".")[0]}
                    title={card.title}
                    percent={card.percent}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
