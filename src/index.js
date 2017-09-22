import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {createStore, applyMiddleware} from 'redux'
import promise from 'redux-promise';
import reducers from './reducers';


const creteStoreWithMiddleware = applyMiddleware(
	promise
	)(createStore);

ReactDOM.render(
  <Provider store={creteStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
