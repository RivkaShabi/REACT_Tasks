import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers, applyMiddleware, compose } from 'redux';
import { errorReducer, userReducer, todoReducer } from './store/reducers';
import thunk from 'redux-thunk';
import { getToDos } from './store/actions';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
const combine = combineReducers({ user: userReducer, error: errorReducer, todo: todoReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combine, composeEnhancers(applyMiddleware(thunk)))
// store.dispatch(getToDos(4))
//navigator.geolocation.getCurrentPosition((success)=>{console.log(success)});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
<Router>
      <App />
</Router>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
