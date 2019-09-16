import React from "react";

import Hero from "../components/Hero";
import RafflerBar from "../components/RafflerBar";
import TextBox from "../components/TextBox";
import RaffleCategories from "../components/RaffleCategories";

export default function Main() {
  return (
    <React.Fragment>
      <Hero />
      <RafflerBar />
      <TextBox />
      <RaffleCategories />
    </React.Fragment>
  );
}
