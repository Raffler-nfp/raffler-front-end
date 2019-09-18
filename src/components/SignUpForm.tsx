import * as React from "react";
import { Formik, FormikActions, FormikProps, Form, Field } from "formik";
import TextField from "./TextField";
import { makeStyles } from "@material-ui/styles";
import { Theme, FormControlLabel, Button } from "@material-ui/core";
import { CheckboxWithLabel } from "formik-material-ui";

interface MyFormValues {
  fullName: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  textField: {
    marginBottom: theme.spacing(2)
  },
  formContainer: {
    minWidth: 300,
    color: "#fff"
  },
  button: {
    color: "#fff",
    fontFamily: "'Anton', sans-serif",
    fontSize: "1.2rem"
  }
}));

export const SignUpForm: React.SFC<{}> = () => {
  const classes = useStyles();
  return (
    <div className={classes.formContainer}>
      <Formik
        initialValues={{ fullName: "", email: "" }}
        onSubmit={(
          values: MyFormValues,
          actions: FormikActions<MyFormValues>
        ) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        render={(formikBag: FormikProps<MyFormValues>) => (
          <Form>
            <Field
              name="fullName"
              placeholder="NAME:"
              type="text"
              fullWidth
              className={classes.textField}
              component={TextField}
            />
            <Field
              name="email"
              placeholder="EMAIL:"
              type="text"
              fullWidth
              className={classes.textField}
              component={TextField}
            />
            <FormControlLabel
              control={
                <Field
                  label="agree"
                  name="agree"
                  component={CheckboxWithLabel}
                />
              }
              label="I agree to the Terms & Conditions"
            />
            <Button className={classes.button}> Sign up.</Button>
          </Form>
        )}
      />
    </div>
  );
};

export default SignUpForm;
