import React from 'react';
import {ErrorMessage, Formik} from "formik";
import {loginUser} from '../../redux/user-reducer';
import {connect} from 'react-redux';
import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {validateForLogin} from "../../utils/validator";

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

const LoginForm = (props) => {
  const classes = useStyles();
  return (
    <Formik validate={validateForLogin}
      initialValues={{username: '', password: ''}}
      onSubmit={(values, {resetForm}) => {
        props.loginUser(values.username, values.password);
        resetForm();
      }}
    >
      {({values, errors, handleChange, handleBlur, handleSubmit}) => (
        <form onSubmit={handleSubmit}>
          <Grid container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                className={classes.grid}
          >
            <Typography variant="h5" component="h5">
              LOGIN
            </Typography>
            <Grid className={classes.inputGrid}>
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
              <Button variant="contained" disabled type="submit">Login</Button>:
              <Button variant="contained" type="submit" onClick={props.handleCloseLoginForm}>Login</Button>
            }
          </Grid>
        </form>
      )}
    </Formik>
  );
};

const LoginFormContainer = connect(null, {loginUser})(LoginForm);

export default LoginFormContainer;
