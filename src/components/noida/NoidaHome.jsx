import React from "react";
import CityHeader from "../CityHeader";
import NoidaAbout from "./NoidaAbout";
import MaidSection from "./MaidSection";
import Gallery from "../Gallery";
import Contact from "../Contact";
import Footer from "../Footer";
import Services from "../Services";

const NoidaHome = () => {
  return (
    <>
      <CityHeader />
      <NoidaAbout />
      <MaidSection />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default NoidaHome;
