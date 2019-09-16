import * as React from "react";
import { Formik, FormikActions, FormikProps, Form, Field } from "formik";
import TextField from "./TextField";
import { makeStyles } from "@material-ui/styles";
import { Theme, FormControlLabel } from "@material-ui/core";
import { CheckboxWithLabel } from "formik-material-ui";

interface MyFormValues {
  fullName: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  textField: {
    marginBottom: theme.spacing(2)
  },
  formContainer: {
    minWidth: 300
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
              label="NAME:"
              variant="filled"
              type="text"
              fullWidth
              className={classes.textField}
              component={TextField}
              size={"small"}
            />
            <Field
              name="email"
              label="EMAIL:"
              variant="filled"
              type="text"
              fullWidth
              size={"small"}
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
          </Form>
        )}
      />
    </div>
  );
};

export default SignUpForm;
