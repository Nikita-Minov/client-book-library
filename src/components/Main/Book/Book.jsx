import React from 'react';
import styled from 'styled-components';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

const useStyles = makeStyles(() => ({
  grid: {
    width: '200px',
    height: '400px',
    border: '3px solid black',
    margin: '30px 0 50px',
  }
}));


const Book = (props) => {
  const classes = useStyles();
  return (
    <Grid className={classes.grid}>
      <Title>{props.title}</Title>
      <Author>{props.author}</Author>
      <a href={props.link}>Читать</a>
      <Link to={`/book/${props.idBook}`} >Read More</Link>
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

export default Book;
