import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {getBook} from "../redux/books-reducer";

const BookPage = ({currentBook, getBook}) => {
  let { id } = useParams();
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect( () => {
    getBook(id)
  }, [currentBook.name]);
  /* eslint-enable react-hooks/exhaustive-deps */

  console.log(currentBook)
  return (
    <>
      {currentBook.name}
    </>
  );
};

const MapStateToProps = (state) => ({
  currentBook: state.books.currentBook
})

const BookPageContainer = connect(MapStateToProps, {getBook})(BookPage);

export default BookPageContainer;
