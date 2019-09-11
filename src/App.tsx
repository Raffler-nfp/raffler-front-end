import React from "react";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import RafflerBar from "./components/RafflerBar";
import TextBox from "./components/TextBox";
import Footer from "./components/Footer";
import RaffleCategories from "./components/RaffleCategories";

export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <RafflerBar />
      <TextBox />
      <RaffleCategories />
      <Footer />
    </React.Fragment>
  );
}
