import React from 'react';
import ReactDOM from 'react-dom';
import { makeMainRoutes } from './routes';
import { Provider } from "react-redux";
import store from "./store";

const routes = makeMainRoutes();

// ReactDOM.render(
//   routes,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>
  , document.getElementById('root'));