import React from "react";
import ContentLayout from "../components/ContentLayout";
import { Typography, makeStyles } from "@material-ui/core";
import ContactUsForm from "../components/ContactUsForm";

const useStyles = makeStyles({
  container: {
    marginTop: 24,
    background: "#ff0048",
    minHeight: 500,
    display: "flex",
    alignItems: "center"
  },
  title: {
    color: "#fff",
    fontFamily: "'Anton', sans-serif",
    textTransform: "uppercase",
    marginBottom: "24px"
  },
  wrapper: {
    maxWidth: 500,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "auto",
    alignItems: "center",
    padding: "16px",
    border: "8px solid #c30037",
    background: "#fff"
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
        <Typography align="center" variant="h4" className={classes.title}>
          Contact Us
        </Typography>
        <div className={classes.wrapper}>
          <ContactUsForm />
        </div>
      </ContentLayout>
    </React.Fragment>
  );
}
