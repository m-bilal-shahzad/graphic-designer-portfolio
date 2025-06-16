import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [footerVisbility, setFooterVisbility] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    inView ? setFooterVisbility(true) : setFooterVisbility(false);
  }, [inView]);

  return (
    <>
      <footer className="footer-section bg-[#ECF3F1] py-6 overflow-y-hidden">
        <div className="fixed-container">
          <div
            ref={ref}
            className={`footer-container bg-white p-10 rounded-3xl ${
              footerVisbility ? "section-transform" : ""
            }`}
          >
            <div className="footer-upper grid grid-cols-2 gap-10 pb-8">
              <div className="footer-info">
                <h2 className="uppercase font-semibold text-2xl pb-5">
                  Let's Work Together
                </h2>
                <p className="text-justify">
                  Crafting user-centric designs with a focus on clarity,
                  emotion, and visual impact. Blending creativity and precision
                  to deliver engaging experiences across digital and print
                  platforms.
                </p>
              </div>
              <div className="footer-nav-links">
                <ul className="footer-nav-items flex items-center justify-center gap-5 text-base font-medium leading-[30px]">
                  <li className="footer-nav-item transition-transform duration-300 ease-in-out hover:text-[#448c74] hover:scale-105">
                    <Link to="/Home">Home</Link>
                  </li>
                  <li className="footer-nav-item transition-transform duration-300 ease-in-out hover:text-[#448c74] hover:scale-105">
                    <Link to="/Skills">Skills</Link>
                  </li>
                  <li className="footer-nav-item transition-transform duration-300 ease-in-out hover:text-[#448c74] hover:scale-105">
                    <Link to="/Projects">Projects</Link>
                  </li>
                  <li className="footer-nav-item transition-transform duration-300 ease-in-out hover:text-[#448c74] hover:scale-105">
                    <Link to="/Contact">Contact</Link>
                  </li>
                </ul>

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
            </div>

            <div className="footer-lower">
              <div className="line h-[1px] w-[80%] bg-[#eee] m-auto"></div>
              <div className="copyright-line text-center pt-4 text-[14px] font-medium">
                <h3>
                  Copyright @2025,{" "}
                  <a href="/" className="text-[#448c74]">
                    Alex Carter
                  </a>{" "}
                  <span className="uppercase">All rights reserved</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
