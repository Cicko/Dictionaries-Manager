/**
 *
 * DictionaryManager
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { AdvancedTable } from '../../components';
import { selectTableRow } from './store/actions';

/* eslint-disable react/prefer-stateless-function */
class DictionaryManager extends React.Component {
  handleSelectRow = (e, rowId) => {
    console.log(rowId);
    console.log(this.props);
    this.props.dispatch(
      selectTableRow(rowId),
      'DictionaryManager.handleSelectRow',
    );
  };

  handleDeleteRows = () => {
    console.log('delete rows');
  };

  render() {
    return (
      <Grid md={12}>
        <Grid md={6}>
          <AdvancedTable
            title="cucu"
            onDeleteRows={this.handleDeleteRows}
            onSelectRow={this.handleSelectRow}
            rows
          />
        </Grid>
      </Grid>
    );
  }
}

DictionaryManager.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.number,
};

DictionaryManager.defaultProps = {
  id: 0,
};

export default connect()(DictionaryManager);
