import React from "react";
import { Typography, Button, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import clsx from "clsx";

import ContentLayout from "./ContentLayout";
import orgImage from "../assets/orgs.jpg";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: "#fff"
  },
  useOswald: {
    fontFamily: '"Oswald", sans-serif'
  },
  useCap: {
    textTransform: "uppercase"
  },
  contentContainer: {
    display: "flex",
    padding: theme.spacing(8, 0, 4, 0),
    justifyContent: "center"
  },
  textContainer: {
    maxWidth: 450,
    marginRight: 200
  },
  largeFont: {
    fontSize: "1.4rem"
  },
  img: {
    width: "100%"
  },
  imgContainer: {
    maxWidth: 400
  },
  button: {
    marginTop: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  }
}));

export default function TextBox() {
  const classes = useStyles();
  return (
    <ContentLayout className={classes.root}>
      <div className={classes.contentContainer} id="learn-more">
        <div className={classes.textContainer}>
          <Typography
            className={clsx(classes.useOswald, classes.useCap)}
            variant="h3"
            gutterBottom
          >
            Win while you make a difference!
          </Typography>
          <Typography
            className={clsx(
              classes.useOswald,
              classes.useCap,
              classes.largeFont
            )}
            variant="body1"
            gutterBottom
          >
            Win exciting items with raffler, while you make a difference to the
            world!
          </Typography>
          <Typography
            className={clsx(
              classes.useOswald,
              classes.useCap,
              classes.largeFont
            )}
            variant="body1"
            gutterBottom
          >
            From large amounts of cash, to luxury items and in game currencies,
            raffler has it all.
          </Typography>
          <Typography
            className={clsx(
              classes.useOswald,
              classes.useCap,
              classes.largeFont
            )}
            variant="body1"
            gutterBottom
          >
            Revenue raised is donated to charitable organizations!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            to="/sign-up"
            component={Link}
          >
            Sign up
          </Button>
        </div>
        <div className={classes.imgContainer}>
          <img src={orgImage} alt="" className={classes.img} />
        </div>
      </div>
    </ContentLayout>
  );
}
