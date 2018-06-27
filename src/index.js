import React from "react"
import ReactDOM from "react-dom"
import 'semantic-ui-css/semantic.min.css';
import App from "./App"
import {createStore, applyMiddleware } from "redux"
import {Provider} from "react-redux"
import thunk from 'redux-thunk';
import portalApp from "./reducers/index"

const store = createStore(portalApp, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
