import { booksAPI } from '../api/booksAPI';

const SET_BOOKS = 'SET_BOOKS';
const SET_USER_BOOKS = 'SET_USER_BOOKS';
const SET_CURRENT_BOOK = 'SET_CURRENT_BOOK';

const initialState = {
  books: [],
  myBooks: [],
  currentBook: {
    author: '',
    creator: null,
    fileName: '',
    idBook: null,
    link: '',
    name: '',
  }
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
    case SET_CURRENT_BOOK: {
      return {
        ...state,
        currentBook: action.currentBook.book
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

export const setCurrentBook = (currentBook) => {
  return {
    type: SET_CURRENT_BOOK,
    currentBook,
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

export const deleteBook = (id, creator) => async (dispatch) => {
  await booksAPI.deleteBook(id);
  await dispatch(getBooks());
  await dispatch(getUserBooks(creator))
}

export const getBook = (id) => async (dispatch) => {
  const book = await booksAPI.getBook(id);
  console.log(book);
  dispatch(setCurrentBook(book));
};

export default booksReducer;
