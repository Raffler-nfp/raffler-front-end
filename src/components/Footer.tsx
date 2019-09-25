import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { Link as RouterLink, LinkProps } from "react-router-dom";
import { withRouter } from "react-router-dom";
import rafflerLogo from "../assets/mint_green.png";
import rafflerLogoPink from "../assets/raffler_babypink.png";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#00f0a0",
    marginTop: "auto"
  },
  logo: {
    maxWidth: 150,
    width: "100%",
    height: "100%"
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
  },
  custom: {
    backgroundColor: "#ffb6c1"
  }
}));

const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <RouterLink innerRef={ref} {...props} />
);

function Footer(props: any) {
  console.log(props);
  const classes = useStyles();
  return (
    <footer
      className={
        props.location.pathname === "/"
          ? classes.root
          : clsx(classes.root, classes.custom)
      }
    >
      <Container>
        <div className={classes.footerContainer}>
          {props.location.pathname === "/" ? (
            <img src={rafflerLogo} className={classes.logo} alt="" />
          ) : (
            <img src={rafflerLogoPink} className={classes.logo} alt="" />
          )}
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

export default withRouter(Footer);
