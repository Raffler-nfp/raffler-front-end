import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { TextField as MuiTextField } from "formik-material-ui";
// import MuiTextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    // padding: 0,
    backgroundColor: theme.palette.common.white
    // transition: "none",
    // "&:hover": {
    //   backgroundColor: theme.palette.common.white
    // },
    // "&:focus": {
    //   backgroundColor: theme.palette.common.white
    // },

    // borderRadius: 0
  },
  disabled: {},
  inputSizeSmall: {
    fontSize: 14,
    width: `calc(100% - ${theme.spacing(2)}px)`
  },
  inputSizeMedium: {
    fontSize: 16
  },
  inputSizeLarge: {
    fontSize: 18,
    width: `calc(100% - ${22 * 2}px)`
  },
  inputSizeXlarge: {
    fontSize: 20,
    padding: 25,
    width: `calc(100% - ${25 * 2}px)`
  },
  formLabel: {
    fontSize: 16
  },
  select: {
    height: "auto",
    borderRadius: 0
  },
  selectIcon: {
    top: "50%",
    marginTop: -12
  },
  input: {
    padding: 12
  }
}));

function TextField(props: any) {
  const classes = useStyles();
  const {
    InputProps: { ...InputPropsOther } = {},
    InputLabelProps,
    // noBorder = false,
    // size = "medium",
    SelectProps,
    ...other
  } = props;

  return (
    <MuiTextField
      InputProps={{
        classes: {
          root: classes.root,
          input: clsx(classes.inputSizeMedium, classes.input),
          disabled: classes.disabled
        },
        ...InputPropsOther
      }}
      InputLabelProps={{
        ...InputLabelProps,
        shrink: true,
        className: classes.formLabel
      }}
      SelectProps={{
        ...SelectProps,
        classes: {
          select: classes.select,
          icon: classes.selectIcon
        }
      }}
      {...other}
    />
  );
}

export default TextField;
