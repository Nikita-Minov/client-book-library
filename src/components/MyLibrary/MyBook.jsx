import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from "react-redux";
import {deleteBook} from "../../redux/books-reducer";

const useStyles = makeStyles(() => ({
  grid: {
    width: '200px',
    height: '400px',
    border: '3px solid black',
    margin: '30px 0 50px',
  }
}));

const MyBook = (props) => {
  const classes = useStyles();
  return (
    <Grid className={classes.grid}>
      <Title>{props.title}</Title>
      <Author>{props.author}</Author>
      <a href={props.link}>Читать</a>
      <button onClick={() => {
        props.deleteBook(props.idBook, props.creator)
      }} >Delete Book</button>
    </Grid>
  );
};


const Title = styled.h1`
  font-size: 24px;
  color: green;
`;

const Author = styled.h3`
  font-size: 18px;
  color: black;
`;

const MyBookContainer = connect(null, {deleteBook})(MyBook);

export default MyBookContainer;
