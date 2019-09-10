import React from "react";
import Container from "@material-ui/core/Container";

import NavBar from "./components/NavBar";

export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Container maxWidth="lg"></Container>
    </React.Fragment>
  );
}
