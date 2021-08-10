import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from "react-router-dom";
import RegisterFormContainer from "../components/Register/RegisterForm";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";

const Register = (props) => {
    if(props.isAuth === false) {
        return (
          <Dialog maxWidth="xs" fullWidth={true} open={props.openRegisterForm} onClose={props.handleCloseRegisterForm} aria-labelledby="form-dialog-title">
            <DialogContent>
              <RegisterFormContainer handleCloseRegisterForm={props.handleCloseRegisterForm} />
            </DialogContent>
          </Dialog>
        );
    } else {
        return <Redirect to={'/'} />
    }

};

const MapStateToProps = (state) => {
  return {
      isAuth: state.user.isAuth
  };
};

const RegisterContainer = connect(MapStateToProps, {})(Register);

export default RegisterContainer;
