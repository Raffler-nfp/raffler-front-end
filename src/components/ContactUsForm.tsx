import * as React from "react";
import { Formik, FormikActions, FormikProps, Form, Field } from "formik";
import TextField from "./TextField";
import { makeStyles } from "@material-ui/styles";
import { Theme, Button } from "@material-ui/core";

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

export const ContactUsForm: React.SFC<{}> = () => {
  const classes = useStyles();
  return (
    <div className={classes.formContainer}>
      <Formik
        initialValues={{ fullName: "", email: "", message: "" }}
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
              variant="outlined"
              fullWidth
              className={classes.textField}
              component={TextField}
            />
            <Field
              name="email"
              placeholder="EMAIL:"
              type="text"
              variant="outlined"
              fullWidth
              className={classes.textField}
              component={TextField}
            />
            <Field
              name="message"
              placeholder="MESSAGE:"
              type="text"
              multiline={true}
              rows={6}
              variant="outlined"
              fullWidth
              className={classes.textField}
              component={TextField}
            />

            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Contact Us
            </Button>
          </Form>
        )}
      />
    </div>
  );
};

export default ContactUsForm;
