import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import ColumnSection from "./ColumnSection";
import WhatsInTheBox from "./WhatsInTheBox";
import CarouselSection from "./CarouselSection";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ColumnSection />
      <WhatsInTheBox />
      <CarouselSection />
    </div>
  );
};

export default Homepage;
