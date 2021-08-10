import { booksAPI } from '../api/booksAPI';

const SET_BOOKS = 'SET_BOOKS';
const SET_USER_BOOKS = 'SET_USER_BOOKS';

const initialState = {
  books: [],
  myBooks: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS: {
      return {
        ...state,
        books: action.books.items,
      };
    }
    case SET_USER_BOOKS: {
      return {
        ...state,
        myBooks: action.userBooks.items
      }
    }
    default: {
      return state;
    }
  }
};

export const setBooks = (books) => {
  return {
    type: SET_BOOKS,
    books,
  };
};

export const setUserBooks = (userBooks) => {
  return {
    type: SET_USER_BOOKS,
    userBooks,
  };
};

export const getUserBooks = (id) => async (dispatch) => {
  const data = await booksAPI.getUserBooks(id);
  dispatch(setUserBooks(data));
  console.log(data);
};

export const getBooks = () => async (dispatch) => {
  const books = await booksAPI.getBooks();
  dispatch(setBooks(books));
};

export const addBook = (creator, file) => async (dispatch) => {
  await booksAPI.addBook(file);
  await dispatch(getBooks());
  await dispatch(getUserBooks(creator))
};

export default booksReducer;
