import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import booksReducer from './books-reducer';
import userReducer from './user-reducer';
import ReduxThunk from 'redux-thunk';

const reducers = combineReducers({
  books: booksReducer,
  user: userReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxThunk)));

export default store;
