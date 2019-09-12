import React from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import ContentLayout from "./ContentLayout";
import orgImage from "../assets/orgs.jpg";

const useStyles = makeStyles({
  useAnton: {
    fontFamily: '"Anton", sans-serif'
  },
  contentContainer: {
    display: "flex"
  }
});

export default function TextBox() {
  const classes = useStyles();
  return (
    <ContentLayout className={classes.contentContainer}>
      <div>
        <Typography className={classes.useAnton} variant="h3" gutterBottom>
          Win while you make a difference!
        </Typography>
        <Typography className={classes.useAnton} variant="h5" gutterBottom>
          Win exciting items with raffler, while you make a difference to the
          world!
        </Typography>
        <Typography className={classes.useAnton} variant="h5" gutterBottom>
          From large amounts of cash, to luxury items and in game currencies,
          raffler has it all.
        </Typography>
        <Typography className={classes.useAnton} variant="h5" gutterBottom>
          Revenue raised is donated to charitable organizations!
        </Typography>
        <Button> Sign up</Button>
      </div>
      <div>
        <img src={orgImage} alt="" />
      </div>
    </ContentLayout>
  );
}
