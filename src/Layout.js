import React from "react";
import Navbar from "./layouts/Navbar";
import Banner from "./layouts/Banner";
import SectionCollection from "./layouts/SectionCollection";
import SectionBeautify from "./layouts/SectionBeautify";
import SectionBrowseRange from "./layouts/SectionBrowseRange";
import SectionHowItWorks from "./layouts/SectionHowItWorks";
import SectionMailingList from "./layouts/SectionMailingList";
import Footer from "./layouts/Footer";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <SectionCollection />
      <SectionBeautify />
      <SectionBrowseRange />
      <SectionHowItWorks />
      <SectionMailingList />
      <Footer />
    </>
  );
};

export default Layout;
