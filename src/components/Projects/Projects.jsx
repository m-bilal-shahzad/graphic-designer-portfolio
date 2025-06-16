import React, { useEffect, useMemo, useState } from "react";
import "./Projects.css";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { FiArrowUpRight } from "react-icons/fi";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";

const Projects = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  // useState to Select Category to Show Projects
  const [selectCategory, setSelectCategory] = useState("Show All");

  // useLocation to Detect Route Change
  const location = useLocation();

  // useState for Heading Transition
  const [textShown, setTextShown] = useState(false);

  // useState for Section Visibility for Transition Effect
  const [projectsVisbile, setProjectsVisbile] = useState(false);

  // Project Images for Project Section
  const projectsImgs = useMemo(
    () => [
      {
        id: 1,
        title: "Brand Identity Design",
        category: "Branding",
        image: "Branding.webp",
      },
      {
        id: 2,
        title: "Website Design",
        category: "Design",
        image: "Website.webp",
      },
      {
        id: 3,
        title: "Game UI Design",
        category: "Game",
        image: "Game.webp",
      },
      {
        id: 4,
        title: "Mobile Application Design",
        category: "Design",
        image: "Mobile.webp",
      },
      {
        id: 5,
        title: "Marketing Startegy Designs",
        category: "Marketing",
        image: "Marketing.webp",
      },
    ],
    []
  );

  // Filtering Projects on User Selected Category
  const filteredProjects =
    selectCategory === "Show All"
      ? projectsImgs
      : projectsImgs.filter((project) => project.category === selectCategory);

  // useEffect to Run Transition on Headings When Location Changes
  useEffect(() => {
    let timer;
    location.pathname === "/Projects"
      ? (timer = setTimeout(() => {
          setTextShown(true);
        }, 50))
      : setTextShown(false);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Using Intersection Observer for Transition Effect for Project Section
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // useEffect to Run Transition When State Changes
  useEffect(() => {
    setProjectsVisbile(inView);
  }, [inView]);

  const projectCategories = [
    "Show All",
    "Design",
    "Branding",
    "Marketing",
    "Game",
  ];

  return (
    <>
      <section className="projects-section bg-[#ECF3F1] pt-32 pb-4 relative">
        <div className="fixed-container">
          <div className="projects-container">
            {/* Project Heading & Info */}
            <div className="projects-headings text-center pb-8">
              <h2
                className={`text-[50px] font-medium leading-[60px] mb-6 transition-all duration-1000 ease-in-out ${
                  textShown
                    ? "translate-y-0  scale-105"
                    : "translate-y-8  scale-90"
                }`}
              >
                Works & Projects
              </h2>
              <p
                className={`px-40 transition-all duration-1000 ease-in-out ${
                  textShown
                    ? "translate-y-0  scale-105"
                    : "translate-y-8  scale-90"
                }`}
              >
                Check out some of my design projects, meticulously crafted with
                love and dedication, each one reflecting the passion and soul I
                poured into every detail.
              </p>
            </div>

            {/* Projects Showcase Section*/}
            <div
              ref={ref}
              className={`all-projects bg-white p-10 rounded-3xl ${
                projectsVisbile ? "section-transform" : ""
              }`}
            >
              {/* Project Categories */}
              <ul className="project-filter-options flex items-center gap-8 pb-10">
                {projectCategories.map((category) => (
                  <li className="relative" key={category}>
                    <button
                      onClick={() => setSelectCategory(category)}
                      className={`project-filter transition-all hover:text-[#448c74] hover:scale-105 focus:text-[#448c74] text-sm font-medium leading-3.5 cursor-pointer ${
                        selectCategory === "Show All" && category === "Show All"
                          ? "default-category"
                          : "before:hidden"
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Projects Images */}
              <div className="projects-images grid grid-cols-3 gap-4">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="project-card group overflow-hidden rounded-2xl p-3.5 bg-[#ECF3F1] relative"
                  >
                    <div className="project-img w-full bg-[#444] aspect-[4/3] overflow-hidden relative rounded-xl after:absolute after:bg-black after:w-full after:h-full after:top-0 after:left-0 after:z-20 after:opacity-100 after:invisible group-hover:after:visible  group-hover:after:opacity-35 transition-opacity duration-300">
                      <img
                        loading="lazy"
                        src={`assets/images/projects/${project.image}`}
                        alt={project.image.split(".")[0]}
                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                      <button
                        onClick={() => {
                          setIsOverlayOpen(!isOverlayOpen);
                          setSelectedProject(project.image);
                        }}
                        className={`project-add-btn flex items-center justify-center w-14 h-14 rounded-full text-4xl text-white bg-[#448c74] z-50 absolute top-1/2 left-1/2 -translate-1/2 opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-300`}
                      >
                        <FiArrowUpRight size={20} />
                      </button>
                    </div>

                    <div className="project-details py-4 px-1">
                      <h3 className="text-[#444] leading-8">
                        {project.category}
                      </h3>
                      <h2 className="text-[#444] text-xl leading-6 font-medium">
                        {project.title}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Images Overlay */}
            {isOverlayOpen && (
              <section
                className={`projects-imags-overlay fixed top-0 left-0 w-screen h-screen bg-[#000000d9] z-[999999] p-8 justify-center items-center ${
                  isOverlayOpen ? "flex" : "hidden"
                }`}
              >
                {/* Left Button */}
                {/* <button className="nav-btn left absolute left-10 top-1/2 -translate-y-1/2 z-[3] bg-[#ECF3F1] text-4xl text-[#333] rounded-full p-0.5 cursor-pointer transition-all duration-500 ease-linear hover:text-[#448c74] hover:scale-105">
                <FaCaretLeft />
              </button> */}

                {/* Project Button */}
                <div className="image-box relative w-[700px] h-[500px] flex items-center justify-center flex-col overflow-hidden shadow-2xs">
                  <button
                    onClick={() => setIsOverlayOpen(!isOverlayOpen)}
                    className="close-btn absolute right-5 top-0 z-10 text-3xl cursor-pointer transition-all duration-300 ease-linear text-[#ECF3F1] hover:text-[#448c74]"
                  >
                    <RiCloseFill />
                  </button>

                  <figure className="image-frame w-full h-full flex justify-center items-center">
                    <img
                      loading="lazy"
                      src={`assets/images/projects/${selectedProject}`}
                      alt={selectedProject.split(".")[0]}
                      className="max-w-full max-h-full w-auto h-auto object-contain block bg-[#ECF3F1] opacity-95 py-6 px-5 rounded-2xl"
                    />
                  </figure>
                </div>

                {/* Right Button */}
                {/* <button className="nav-btn absolute right-10 top-1/2 -translate-y-1/2 z-[3] bg-[#ECF3F1] text-4xl text-[#333] rounded-full p-0.5 cursor-pointer transition-all duration-500 ease-linear hover:text-[#448c74] hover:scale-105">
                <FaCaretRight />
              </button> */}
              </section>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
