import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Route path="/" exact component={Main} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/contact-us" component={ContactUs} />
        <Footer />
      </Router>
    </React.Fragment>
  );
}
