import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Container } from "@material-ui/core";
import Toolbar from "./Toolbar";
import Link from "@material-ui/core/Link";

import rafflerLogo from "../assets/raffler_logo.png";

const useStyles = makeStyles(theme => ({
  appBar: {
    flexDirection: "row",
    padding: theme.spacing(1)
  },
  borderBottom: {
    borderBottom: "1px solid rgba(255,255,255,0.3)"
  },
  menu: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
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
    fontSize: "2rem",
    fontFamily: "'Anton', sans-serif",
    margin: theme.spacing(1, 1.5),
    color: "#fff"
  },
  nav: {
    justifyContent: "space-around"
  },
  logo: {
    maxWidth: 300
  }
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Link href="/">
          <img src={rafflerLogo} alt="" className={classes.logo} />
        </Link>
        <Container>
          <Toolbar>
            <nav className={classes.menu}>
              <Link
                variant="button"
                color="textSecondary"
                href="#"
                className={classes.link}
              >
                Home
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="/#"
                className={classes.link}
              >
                Learn more
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="/signup"
                className={classes.link}
              >
                Signup
              </Link>
            </nav>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}
