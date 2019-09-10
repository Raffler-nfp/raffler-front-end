import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import HeroLayout from "./HeroLayout";

// import backgroundImage from "../assets/background.png";
import laptopImage from "../assets/laptop_image.png";

const useStyles = makeStyles(theme => ({
  heroTitle: {
    textTransform: "uppercase",
    fontFamily: "'Anton', sans-serif",
    fontSize: "4.5rem"
  },
  heightFiller: {
    marginTop: 100,
    [theme.breakpoints.up("sm")]: {
      marginTop: 60
    }
  },
  background: {
    // backgroundImage: `url(${backgroundImage})`,
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
  },
  heroContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },
  heroImage: {
    maxWidth: 750
  },
  left: {
    flex: 1
  },
  mainText: {
    marginRight: 120
  }
}));

function Hero(props: any) {
  const classes = useStyles(props);

  return (
    <HeroLayout backgroundClassName={classes.background}>
      <div className={classes.heroContainer}>
        <div className={classes.left} />
        <Grid className={classes.mainText}>
          <div className={classes.heightFiller} />
          <Typography
            color="inherit"
            align="left"
            variant="h2"
            className={classes.heroTitle}
            gutterBottom
          >
            A Company
          </Typography>
          <Typography
            color="inherit"
            align="left"
            variant="h2"
            className={classes.heroTitle}
            gutterBottom
          >
            That
          </Typography>
          <Typography
            color="inherit"
            align="left"
            variant="h2"
            className={classes.heroTitle}
            gutterBottom
          >
            gives.
          </Typography>
        </Grid>

        <Grid>
          <img src={laptopImage} alt="" className={classes.heroImage} />
        </Grid>
      </div>
    </HeroLayout>
  );
}
export default Hero;
