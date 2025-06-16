import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Scroller = () => {
  // useState for Scroll Button Visibility
  const [isVisible, setIsVisible] = useState(false);

  // Function for Scroll Check
  const handleScroll = () => {
    const visibility = window.scrollY > 12;
    setIsVisible(visibility);
  };

  // Side Effect for Scroll Event
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function for Scrolling to Top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Button */}
      
      <button
        onClick={() => scrollToTop()}
        className={`progress-circle z-[999] w-10 h-10 bg-[#ECF3F1] rounded-[50%] fixed right-5 bottom-5 flex items-center justify-center border-[1px] border-[#444] transition-opacity duration-500 ease-in hover:bg-[#77777d33] ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <MdKeyboardDoubleArrowUp size={25} color="#448c74" />
      </button>
    </>
  );
};

export default Scroller;
