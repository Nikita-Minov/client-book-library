import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {logout} from "../../redux/user-reducer";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
  toolbar: {
    width: '100%',
    padding: 0,
  },
  link: {
    color: '#ffffff',
    padding: '0px 10px',
    fontWeight: 500,
    textDecoration: 'none'
  },
  logoLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '24px',
  },
}));


const Header = (props) => {
  const classes = useStyles();

  return (
      <AppBar position="static">
        <Container>
          <Toolbar className={classes.toolbar} >
            <Typography variant="h6" className={classes.title}>
              <Link to="/" className={classes.logoLink} >Book Library</Link>
            </Typography>
            <List>
              <Link to='/' className={classes.link} >Main</Link>
              {props.isAuth ?
                <>
                  <Link to='/my-library' className={classes.link} >My Library</Link>
                  <Link to='/' onClick={props.logout} className={classes.link} >Logout</Link>
                  <Link to='/profile' className={classes.link} >Profile</Link>
                </>:
                <>
                  <Link onClick={props.handleClickOpenLoginForm} className={classes.link} >Login</Link>
                  <Link onClick={props.handleClickOpenRegisterForm} className={classes.link} >Register</Link>
                </>}
            </List>
          </Toolbar>
        </Container>
      </AppBar>
  );
};

const MapStateToProps = (state) => {
  return {
    user: state.user,
    isAuth: state.user.isAuth
  };
};

const HeaderContainer = connect(MapStateToProps, { logout })(Header);

export default HeaderContainer;