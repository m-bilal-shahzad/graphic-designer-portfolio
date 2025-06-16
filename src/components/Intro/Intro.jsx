import React, { useState, useEffect } from "react";
import "./Intro.css";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import SkillsIcon from "./SkillsIcon";

const Intro = () => {
  //Managing States for Sections Visibility for Transition Effect
  const [visibility, setVisibility] = useState({
    image: false,
    info: false,
    skills: false,
  });

  //Using Intersection Observer for Transition Effect for Multiple Sections
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: infoRef, inView: infoInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // useEffect to Run Transition When State Changes
  useEffect(() => {
    setVisibility((prev) => ({
      image: imageInView || prev.image,
      info: infoInView || prev.info,
      skills: skillsInView || prev.skills,
    }));
  }, [imageInView, infoInView, skillsInView]);

  // Skills Icons for Dynamic Rendering
  const skillsIcons = [
    "Figma.webp",
    "PhotoShop.webp",
    "Illustrator.webp",
    "InDesign.webp",
    "AdobeXD.webp",
    "Canva.webp",
    "CorelDraw.webp",
    "AffinityDesigner.webp",
  ];

  return (
    <>
      <section className="home-section bg-[#ECF3F1] pt-32 pb-4 overflow-x-hidden">
        <div className="fixed-container">
          <div className="intro-container px-2 grid grid-cols-[1fr_2fr] gap-10 items-start">
            {/* Left Container */}
            <div
              ref={imageRef}
              className={`image-container bg-white p-10 rounded-3xl text-center ${
                visibility.image ? "section-transform" : ""
              }`}
            >
              {/* Freelancer Image */}
              <div className="image mb-10">
                <img
                  src="assets/images/profile/profile.jpg"
                  alt=""
                  className="m-auto rounded-[50%] border-2 border-dashed border-[#448c74] p-2"
                />
              </div>
              {/* Name */}
              <h2 className="name-heading text-3xl font-medium mb-2">
                Alex Carter
              </h2>
              {/* About Info */}
              <p className="info text-base text-[#444] leading-[28px] mb-4">
                I am a Graphic Designer.
              </p>
              {/* Social Icons */}
              <ul className="social-icons flex items-center justify-center gap-2 mt-8">
                <li className="social-icon border border-[#eee] p-3 rounded-lg text-[20px] hover:text-[#448c74]">
                  <FaFacebookF />
                </li>
                <li className="social-icon border border-[#eee] p-3 rounded-lg text-[20px] hover:text-[#448c74]">
                  <FaXTwitter />
                </li>
                <li className="social-icon border border-[#eee] p-3 rounded-lg text-[20px] hover:text-[#448c74]">
                  <FaLinkedinIn />
                </li>
                <li className="social-icon border border-[#eee] p-3 rounded-lg text-[20px] hover:text-[#448c74]">
                  <FaGithub />
                </li>
              </ul>
            </div>

            {/* Right Info Container */}
            <div
              className={`right-container flex flex-col gap-8 overflow-hidden`}
            >
              {/* Info Container */}
              <div
                ref={infoRef}
                className={`info-container bg-white p-10 rounded-3xl ${
                  visibility.info ? "section-transform" : ""
                }`}
              >
                <h2 className="text-[#444]">Hello There,</h2>

                <div className="main-info my-6 uppercase">
                  <h2 className="text-[42px] font-bold leading-[52px]">
                    I’m <span className="text-transparent">Alex Carter</span>, a
                    graphic designer crafting{" "}
                    <span className="text-transparent">
                      user-centric design{" "}
                    </span>
                    with pixel-perfect precision.
                  </h2>
                </div>

                <div className="freelance pt-2 flex items-center gap-3 pb-10">
                  <div className="bg-[#448c74] w-3 h-3 rounded-[50%]"></div>
                  <h2>Available for Freelancing</h2>
                </div>

                <Link
                  className="my-work-btn inline-block bg-[#448c74] text-white text-[14px] font-medium leading-[20px] px-6 py-3 border rounded-2xl transition-all duration-300 ease-linear hover:bg-black"
                  to="/Projects"
                >
                  <span>My Work</span>
                </Link>
              </div>

              {/* Skills Container */}
              <div
                ref={skillsRef}
                className={`skills-slider-wrapper overflow-hidden bg-white py-8 rounded-3xl ${
                  visibility.skills ? "section-transform" : ""
                }`}
              >
                <ul className="skills-slider-items flex gap-6 items-center w-max">
                  {[...skillsIcons, ...skillsIcons].map((icon, index) => (
                    <SkillsIcon
                      key={index}
                      src={`assets/images/skills/${icon}`}
                      alt={icon.split(".")[0]}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
