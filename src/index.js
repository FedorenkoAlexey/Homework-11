import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers'
// import authReducer from "./store/auth/reducers";

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const store = createStore(rootReducer)
// const store = createStore(authReducer);
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
