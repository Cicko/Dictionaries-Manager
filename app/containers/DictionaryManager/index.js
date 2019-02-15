/**
 *
 * DictionaryManager
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { AdvancedTable } from '../../components';
import { selectTableRow } from './store/actions';

const styles = {
  container: {
    margin: 20,
    minWidth: 400,
  },
};

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
    const { classes } = this.props;
    return (
      <Grid md={5} className={classes.container}>
        <AdvancedTable
          title="cucu"
          onDeleteRows={this.handleDeleteRows}
          onSelectRow={this.handleSelectRow}
          rows
        />
      </Grid>
    );
  }
}

DictionaryManager.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  id: PropTypes.number,
};

DictionaryManager.defaultProps = {
  id: 0,
};

export default compose(
  connect(),
  withStyles(styles),
)(DictionaryManager);
