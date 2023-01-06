import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import ColumnSection from "./ColumnSection";
import FlexiblePlans from "./FlexiblePlans";
import WhatsInTheBox from "./WhatsInTheBox";
import Questions from "./Questions";
import LargeFooter from "./LargeFooter";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ColumnSection />
      <WhatsInTheBox />
      <FlexiblePlans />
      <Questions />
      <LargeFooter />
    </div>
  );
};

export default Homepage;
