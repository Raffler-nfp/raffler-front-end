import React from "react";
import ContentLayout from "../components/ContentLayout";
import { Typography, makeStyles } from "@material-ui/core";
import ContactUsForm from "../components/ContactUsForm";

const useStyles = makeStyles({
  container: {
    background: "#ff0048",
    minHeight: 500,
    display: "flex",
    alignItems: "center"
  },
  wrapper: {
    display: "flex",
    minHeight: 200,
    padding: "0rem 6rem"
  },
  signup: {
    color: "#fff",
    fontWeight: 500,
    fontSize: "2rem",
    textTransform: "uppercase",
    fontFamily: "'Anton', sans-serif"
  },
  textContainer: {
    color: "#fff",
    padding: "0rem 4rem",
    textTransform: "uppercase"
  }
});

export default function ContactUs() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ContentLayout className={classes.container}>
        <Typography>Contact Us</Typography>
        <ContactUsForm />
      </ContentLayout>
    </React.Fragment>
  );
}
