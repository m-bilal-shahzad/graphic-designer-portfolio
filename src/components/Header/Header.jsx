import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpened, setIsOpened] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 20 ? setIsSticky(true) : setIsSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHamburgerMenu = () =>{
      setIsOpened(!isOpened)
      console.log(isOpened)
  }

  return (
    <>
      <header
        className={`navbar-section ${
          isSticky ? "navbar-fixed" : ""
        } w-full absolute top-0 left-0 z-[99] bg-transparent transition-shadow`}
      >
        <div className="fixed-container">
          <div
            className={`navbar-container flex items-center justify-between px-2 ${
              isSticky
                ? "py-3 border-b-[1px] border-solid border-[#77777d33] transition-all duration-500 ease-in"
                : "py-8 transition-all duration-500 ease-in"
            }`}
          >
            <div className="logo">
              <Link to="/" className="text-3xl font-bold uppercase leading-6">
                Alex.
              </Link>
            </div>
            <ul className="nav-items flex justify-center items-center gap-8 text-base font-medium leading-[30px]">
              <li className="nav-item relative transition-all duration-300 ease-linear hover:text-[#448c74]  hover:scale-105">
                <Link to="/Home">Home</Link>
              </li>
              <li className="nav-item relative transition-all duration-300 ease-linear hover:text-[#448c74] hover:scale-105">
                <Link to="/Skills">Skills</Link>
              </li>
              <li className="nav-item relative transition-all duration-300 ease-linear hover:text-[#448c74] hover:scale-105 ">
                <Link to="/Projects">Projects</Link>
              </li>
              <li className="nav-item relative transition-all duration-300 ease-linear hover:text-[#448c74] hover:scale-105">
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>

            <Link
              className="contact-btn text-[14px] font-medium leading-[20px] px-6 py-3 border rounded-2xl flex items-center gap-2 transition-all duration-500 ease-linear hover:bg-[#448c74] hover:text-white hover:border-none"
              to="/Contact"
            >
              <span>Hire Me</span> <FaArrowRight />
            </Link>

            {/* Hamburger Navbar for Small Screens */}
            <nav className="hamburger-navbar hidden">
              <button onClick={() => handleHamburgerMenu()} className="text-2xl text-[#444] transition-all duration-300 ease-linear">
                <RxHamburgerMenu />
              </button>

              <div className={`"hamburger-navbar-menu bg-white rounded-l-2xl absolute -right-1/2 top-16 w-1/2 pt-5 pb-3 transition-transfor transition-opacity duration-[1s] ease-out overflow-x-hidden opacity-0 translate-x-0" ${isOpened ? "hamburger-menu-show" : "hidden"}`}>
                <ul className="hamburger-nav-items inline">
                  <li className="hamburger-nav-item relative text-[#333] font-medium transition-all duration-300 ease-linear px-3.75 hover:text-[#448c74]  hover:scale-105">
                    <Link to="/Home" className="p-2.5 block">Home</Link>
                  </li>
                  <li className="hamburger-nav-item relative text-[#333] font-medium transition-all duration-300 ease-linear px-3.75 hover:text-[#448c74]  hover:scale-105">
                    <Link to="/Skills" className="p-2.5 block">Skills</Link>
                  </li>
                  <li className="hamburger-nav-item relative text-[#333] font-medium transition-all duration-300 ease-linear px-3.75  hover:text-[#448c74]  hover:scale-105">
                    <Link to="/Projects" className="p-2.5 block">Projects</Link>
                  </li>
                  <li className="hamburger-nav-item relative text-[#333] font-medium transition-all duration-300 ease-linear px-3.75 hover:text-[#448c74]  hover:scale-105">
                    <Link to="/Contact" className="p-2.5 block">Contact</Link>
                  </li>
                 
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
