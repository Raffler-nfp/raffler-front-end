import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import rafflerLogo from "../assets/raffler_logo.png";

const useStyles = makeStyles(theme => ({
  rafflerBarContainer: {
    display: "flex",
    justifyContent: "center",
    background: "linear-gradient(to bottom, #ff0048 50%, #fff 50%);"
  }
}));

export default function RafflerBar() {
  const classes = useStyles();
  return (
    <div className={classes.rafflerBarContainer}>
      <img src={rafflerLogo} alt="" />
    </div>
  );
}
