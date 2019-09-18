import React from "react";
import ContentLayout from "../components/ContentLayout";
import { Typography, makeStyles } from "@material-ui/core";
import SignUpForm from "../components/SignUpForm";

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

export default function SignUp() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ContentLayout className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.textContainer}>
            <Typography className={classes.signup}> Sign Up.</Typography>
            <Typography>
              Sign up to join Raffler's mailing list to get notifies about
              special deals and when raffler launches!
            </Typography>
          </div>

          <SignUpForm />
        </div>
      </ContentLayout>
    </React.Fragment>
  );
}
