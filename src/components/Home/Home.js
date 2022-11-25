import React, { useState } from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Album from "./Album";
import Banner from "./Banner";
import Faq from "./Faq";
import TabSection from "./TabSection";

const Home = () => {
  const [selectedMenu, setSelectedMenu] = useState("ALL");

  return (
    <div className="ScrollHome">
      <Header />
      <Banner />
      <TabSection
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
      <Album selectedMenu={selectedMenu} />
      <div className="footer Background_basic">
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
