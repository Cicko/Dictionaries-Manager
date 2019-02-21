/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import NotFoundPage from '../NotFoundPage/Loadable';
import routes from './routes';

import GlobalStyle from '../../global-styles';

import { NavDrawer, AppBar } from '../../components';

class App extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.location.get('pathname')
      !== this.props.location.get('pathname');
  }

  render() {
    return (
      <div>
        <AppBar />
        <NavDrawer />
        <Switch>
          {routes.map(({ component, path }) => (
            <Route exact key={path} path={path} component={component} />
          ))}
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object,
};

export default connect(state => ({
  location: state.getIn(['router', 'location']),
}))(App);
