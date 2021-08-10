import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppContainer from './App';

window.store = store;

ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
