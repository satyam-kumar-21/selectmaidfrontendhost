import React from "react";
import CityHeader from "../CityHeader";
import GurugramAbout from "./GurugramAbout";
import MaidSection from "./MaidSection";
import Gallery from "../Gallery";
import Contact from "../Contact";
import Footer from "../Footer";
import Services from "../Services";

const GurugramHome = () => {
  return (
    <>
      <CityHeader />
      <GurugramAbout />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default GurugramHome;
