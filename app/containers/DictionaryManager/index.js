/**
 *
 * DictionaryManager
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectDictionaryManager from './selectors';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export class DictionaryManager extends React.Component {
  render() {
    return <div />;
  }
}

DictionaryManager.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dictionaryManager: makeSelectDictionaryManager(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'dictionaryManager', reducer });

export default compose(
  withReducer,
  withConnect,
)(DictionaryManager);
