import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { Link as RouterLink, LinkProps } from "react-router-dom";
import rafflerLogo from "../assets/mint_green.png";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#00f0a0"
  },
  logo: {
    maxWidth: 150
  },
  footerContainer: {
    display: "flex",
    padding: theme.spacing(2)
  },
  footerMenu: {
    display: "flex"
  },
  link: {
    fontSize: "1.2rem",
    fontFamily: "'Anton', sans-serif",
    color: "#fff",
    marginLeft: 180
  }
}));

const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <RouterLink innerRef={ref} {...props} />
);

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container>
        <div className={classes.footerContainer}>
          <img src={rafflerLogo} className={classes.logo} alt="" />
          <nav className={classes.footerMenu}>
            <Link
              color="textPrimary"
              to="/contact-us"
              className={clsx(classes.link)}
              component={AdapterLink}
            >
              Contact us
            </Link>
            <Link
              color="textPrimary"
              href="/signup"
              className={clsx(classes.link)}
            >
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
