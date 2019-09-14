import { withStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

export const styles = (theme: Theme) => ({
  root: {
    padding: 0,
    [theme.breakpoints.up("sm")]: {}
  }
});

export default withStyles(styles)(Toolbar);
