/**
 *  Created by
 *  @author Rudolf Cicko
 *  @date 2/15/19
 *
 */

import React from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { AdvancedTable } from '../../components';
import { selectTableRow } from '../DictionariesPage/store/actions';

const styles = {
  container: {
    margin: 20,
    minWidth: 400,
  },
};

/* eslint-disable react/prefer-stateless-function */
class DictionaryManager extends React.Component {
  handleSelectRow = tableId => (e, rowId) => {
    this.props.dispatch(
      selectTableRow(tableId, rowId),
      'DictionaryManager.handleSelectRow',
    );
  };

  handleDeleteRows = () => {
    console.log('delete rows');
  };

  render() {
    const { classes, dictionary } = this.props;
    return (
      <Grid md={5} lg={3} className={classes.container}>
        <AdvancedTable
          title={dictionary.name}
          onDeleteRows={this.handleDeleteRows}
          onSelectRow={this.handleSelectRow(dictionary.id)}
          rows={dictionary.rows}
        />
      </Grid>
    );
  }
}

DictionaryManager.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  dictionary: PropTypes.object,
};

DictionaryManager.defaultProps = {
  dictionary: {},
};

export default compose(
  connect(),
  withStyles(styles),
)(DictionaryManager);
