import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MyBook from "../components/MyLibrary/MyBook";
import {makeStyles} from '@material-ui/core/styles';
import {connect} from "react-redux";
import AddBookContainer from "../components/Main/AddBook/AddBook";
import {Redirect} from "react-router-dom";

const useStyles = makeStyles(() => ({
  wrapper: {
    padding: 0
  }
}));

const MyLibrary = (props) => {
  const books = props.myBooks.map((el) => {
    return <MyBook idBook={el.idBook} link={el.link} title={el.name} author={el.author} creator={el.creator}/>;
  });
  const classes = useStyles();
  if(props.isAuth === true) {
    return (
      <Container className={classes.wrapper}>
        <h1>My Library</h1>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start">
          {books}
        </Grid>
        <AddBookContainer/>
      </Container>
    );
  } else {
    return <Redirect to={`/`} />;
  }
};

const MapStateToProps = (state) => (
  {
    myBooks: state.books.myBooks,
    isAuth: state.user.isAuth
  }
)

const MyLibraryContainer = connect(MapStateToProps, {})(MyLibrary);

export default MyLibraryContainer;
