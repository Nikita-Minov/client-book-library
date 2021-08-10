import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Book from '../components/Main/Book/Book.jsx';
import { getBooks } from '../redux/books-reducer';
import Grid from "@material-ui/core/Grid";

const Main = (props) => {
  const books = props.books.map((el) => {
    return <Book key={el.idBook} title={el.name} author={el.author} />;
  });
  return (
    <MainWrapper>
      <h1>Books</h1>
      <Grid container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start">{books}</Grid>

    </MainWrapper>
  );
};

const MainWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;


const MapStateToProps = (state) => {
  return {
    books: state.books.books,
  };
};

const MainContainer = connect(MapStateToProps, {
  getBooks,
})(Main);

export default MainContainer;
