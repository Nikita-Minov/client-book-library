import React from 'react';
import {ErrorMessage, Formik} from 'formik';
import { registerUser } from '../../redux/user-reducer';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {validateForRegister} from "../../utils/validator";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  grid: {
    width: '400px',
    height: '300px',
    display: 'flex'
  },
  inputGrid: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  input: {
    width: '70%'
  }
}));



const RegisterForm = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Formik validate={validateForRegister}
        initialValues={{ username: '', password: '' }}
        onSubmit={(values, {resetForm}) => {
          props.registerUser(values.username, values.password);
          resetForm();
        }}
      >
        {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid container
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                  className={classes.grid}
            >
              <Typography variant="h5" component="h5">
               REGISTRATION
              </Typography>
              <Grid className={classes.inputGrid} >
                <TextField
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  className={classes.input}
                />
              </Grid>
              <ErrorMessage name='username' />
              <Grid className={classes.inputGrid}>
                <TextField
                  type="text"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  className={classes.input}
                />
              </Grid>

              <ErrorMessage name='password' />
              {
                errors.username || errors.password ?
                <Button variant="contained" disabled type="submit">Submit</Button>:
                <Button variant="contained" onClick={props.handleCloseRegisterForm} type="submit">Registration</Button>
              }
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  );
};

const RegisterFormContainer = connect(null, { registerUser })(RegisterForm);

export default RegisterFormContainer;
