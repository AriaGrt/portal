import React from "react"
import ReactDOM from "react-dom"
import 'semantic-ui-css/semantic.min.css';
import App from "./App"
import {createStore} from "redux"
import {Provider} from "react-redux"
import portalApp from "./reducers/index"

const initialState = {}
const devTools = window.devToolsExtension && window.devToolsExtension()
const store = createStore(portalApp, initialState, devTools)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
