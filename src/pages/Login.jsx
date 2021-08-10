import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from "react-router-dom";
import LoginFormContainer from "../components/Login/LoginForm";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

const Login = (props) => {
    if(props.isAuth === false) {
        return (
            <Dialog open={props.openLoginForm} onClose={props.handleCloseLoginForm} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <LoginFormContainer handleCloseLoginForm={props.handleCloseLoginForm} />
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

const LoginContainer = connect(MapStateToProps, {})(Login);

export default LoginContainer;
