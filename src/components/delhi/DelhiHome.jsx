import React from "react";
import CityHeader from "../CityHeader";
import DelhiAbout from "./DelhiAbout";
import MaidSection from "./MaidSection";
import Gallery from "../Gallery";
import Contact from "../Contact";
import Footer from "../Footer";
import Services from "../Services";

const DelhiHome = () => {
  return (
    <>
      <CityHeader />
      <DelhiAbout />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default DelhiHome;
