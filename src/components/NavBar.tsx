import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Container } from "@material-ui/core";
import Toolbar from "./Toolbar";
import { Link as RouterLink, LinkProps } from "react-router-dom";
import Link from "@material-ui/core/Link";
import clsx from "clsx";

import rafflerLogo from "../assets/raffler_logo.png";

const useStyles = makeStyles(theme => ({
  logoContainer: {
    display: "flex",
    alignSelf: "center"
  },
  appBarContainer: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(0, 1)
  },
  borderBottom: {
    borderBottom: "1px solid rgba(255,255,255,0.3)"
  },
  menu: {
    width: "100%",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  toolbar: {
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0
    }
  },
  siteName: {
    fontWeight: "bold",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: 18
    }
  },
  title: {
    fontSize: 24
  },
  left: {
    flex: 1
  },
  leftLinkActive: {
    color: theme.palette.common.white
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3)
  },
  linkSecondary: {
    color: theme.palette.secondary.main
  },
  link: {
    fontSize: "1.2rem",
    fontFamily: "Impact, sans-serif",
    margin: theme.spacing(1, 1.5),
    color: "#fff",
    marginLeft: 180
  },
  nav: {
    justifyContent: "space-around"
  },
  logo: {
    maxWidth: 180,
    marginRight: 100
  },
  toolbarContainer: {
    width: "100%",
    maxWidth: 1280
  },
  green: {
    color: "#00f0a0"
  },
  blue: {
    color: "#66fcf1"
  },
  purple: {
    color: "#ffc9f8"
  },
  appBar: {
    backgroundColor: "#ff0048"
  }
}));

const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <RouterLink innerRef={ref} {...props} />
);

export default function NavBar() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Container maxWidth="lg" className={classes.appBarContainer}>
          <Link href="/" className={classes.logoContainer}>
            <img src={rafflerLogo} alt="" className={classes.logo} />
          </Link>
          <Toolbar>
            <nav className={classes.menu}>
              <Link
                color="textSecondary"
                to="/"
                className={clsx(classes.link, classes.green)}
                component={AdapterLink}
              >
                Home
              </Link>
              <Link
                color="textPrimary"
                href="#learn-more"
                className={clsx(classes.link, classes.blue)}
              >
                Learn more
              </Link>
              <Link
                color="textPrimary"
                to="/sign-up"
                className={clsx(classes.link, classes.purple)}
                component={AdapterLink}
              >
                Sign Up
              </Link>
            </nav>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}
