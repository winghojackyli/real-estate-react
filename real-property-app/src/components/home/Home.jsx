import React from "react";
import Hero from "./Hero";
import NewsLetter from "./NewsLetter";
import FeatureTypes from "./FeatureTypes";
import Questions from "./Questions";

function Home(props) {
  return (
    <>
      <Hero />
      <NewsLetter />
      <FeatureTypes />
      <Questions />
    </>
  );
}

export default Home;
