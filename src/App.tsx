import React from "react";
import Container from "@material-ui/core/Container";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import RafflerBar from "./components/RafflerBar";

export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <RafflerBar />
      <Container maxWidth="lg"></Container>
    </React.Fragment>
  );
}
