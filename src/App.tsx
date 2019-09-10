import React from "react";
import Container from "@material-ui/core/Container";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Container maxWidth="lg"></Container>
    </React.Fragment>
  );
}
