import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import ColumnSection from "./ColumnSection";
import WhatsInTheBox from "./WhatsInTheBox";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ColumnSection />
      <WhatsInTheBox />
      <Footer />
    </div>
  );
};

export default Homepage;
