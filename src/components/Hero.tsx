import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import HeroLayout from "./HeroLayout";

const backgroundImage = "../assets/background.png";

const useStyles = makeStyles(theme => ({
  heroTitle: {
    textTransform: "uppercase",
    fontFamily: "'Anton', sans-serif"
  },
  formContainer: {
    marginTop: theme.spacing(3)
  },
  heightFiller: {
    marginTop: 120,
    [theme.breakpoints.up("sm")]: {
      marginTop: 240
    }
  },
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#ff0048",
    backgroundPosition: "center"
  },
  button: {
    minWidth: 200
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10)
    }
  },
  more: {
    marginTop: theme.spacing(2)
  }
}));

function Hero(props: any) {
  const classes = useStyles(props);

  return (
    <HeroLayout backgroundClassName={classes.background}>
      <div className={classes.heightFiller} />
      <Grid>
        <Typography
          color="inherit"
          align="left"
          variant="h1"
          className={classes.heroTitle}
          gutterBottom
        >
          A Company that gives
        </Typography>
      </Grid>

      <Grid className={classes.formContainer}></Grid>
    </HeroLayout>
  );
}
export default Hero;
