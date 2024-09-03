import React, { useEffect, useRef } from "react";

import Hero from "parts/Hero";
import Header from "parts/Header";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import landingPage from "json/landingPage.json";

const LandingPage = (props) => {
  const refMostPicked = useRef();

  useEffect(() => {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header {...props} />
      <Hero refMostPicked={refMostPicked} data={landingPage.hero} />
      <MostPicked refMostPicked={refMostPicked} data={landingPage.mostPicked} />
      <Categories data={landingPage.categories} />
      <Testimony data={landingPage.testimonial} />
      <Footer />
    </>
  );
};

export default LandingPage;
