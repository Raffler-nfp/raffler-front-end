import React from "react";
import ContentLayout from "../components/ContentLayout";
import { Typography, makeStyles } from "@material-ui/core";
import SignUpForm from "../components/SignUpForm";

const useStyles = makeStyles({
  container: {
    background: "#ff0048"
  },
  wrapper: {
    display: "flex",
    minHeight: 200
  }
});

export default function SignUp() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ContentLayout className={classes.container}>
        <div className={classes.wrapper}>
          <div>
            <Typography> Sign Up.</Typography>
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
