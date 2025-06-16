import React from 'react'
import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import Footer from "../components/Footer/Footer";
import Scroller from '../components/ScrollUp/Scroller';

const HomePage = () => {
  return (
    <>
    <Scroller/>
    <Header/>
    <Intro/>
    <Footer/>
    </>
  )
}

export default HomePage