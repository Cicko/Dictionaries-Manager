/**
 *
 * DictionaryManager
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

/* eslint-disable react/prefer-stateless-function */
export class DictionaryManager extends React.Component {
  render() {
    return <div />;
  }
}

DictionaryManager.propTypes = {
  dispatch: PropTypes.func,
};

export default compose(
  connect(() => ({})),
)(DictionaryManager);
