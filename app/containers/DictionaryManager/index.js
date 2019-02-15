/**
 *
 * DictionaryManager
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AdvancedTable } from '../../components';

/* eslint-disable react/prefer-stateless-function */
export class DictionaryManager extends React.Component {
  handleDeleteRows = () => {
    console.log('delete rows');
  };

  render() {
    return (
      <Grid md={12}>
        <Grid md={6}>
          <AdvancedTable title="cucu" onDeleteRows={this.handleDeleteRows}/>
        </Grid>
      </Grid>
    );
  }
}

DictionaryManager.propTypes = {
  dispatch: PropTypes.func,
  id: PropTypes.number,
};

export default compose(
  connect(() => ({})),
)(DictionaryManager);
