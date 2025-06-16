import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Projects from "../components/Projects/Projects";
import Scroller from "../components/ScrollUp/Scroller";
// import ProjectsImages from "../components/Projects/ProjectsImages";

const ProductPage = () => {
  return (
    <>
      <Scroller />
      <Header />
      <Projects />
      {/* <ProjectsImages/> */}
      <Footer />
    </>
  );
};

export default ProductPage;
