import React from 'react'
import { Provider } from 'react-redux';
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from "./App";
const Root = ({ store }) => {
  return (
    <Provider store={store} >
      <Router>
        <Route path='/' component={App} />
      </Router>
    </Provider>
  )
};

export default Root;

Root.propTypes = {
  store: PropTypes.object.isRequired
}
