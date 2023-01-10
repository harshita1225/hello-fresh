import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import ColumnSection from "./ColumnSection";
import FlexiblePlans from "./FlexiblePlans";
import WhatsInTheBox from "./WhatsInTheBox";
import CarouselSection from "./CarouselSection";
import Questions from "./Questions";
import LargeFooter from "./LargeFooter";
import Footer from "./Footer";
import InstagramSection from "./InstagramSection";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ColumnSection />
      <WhatsInTheBox />
      <CarouselSection />
      <InstagramSection />
      <FlexiblePlans />
      <Questions />
      <LargeFooter />
      <Footer />
    </div>
  );
};

export default Homepage;
