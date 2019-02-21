/**
 *  Created by
 *  @author Rudolf Cicko
 *  @date 2/15/19
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { AdvancedTable } from '../../components';
import {
  addTableRow,
  removeTableRow,
  selectTableRow,
  removeDictionary,
} from '../DictionariesPage/store/actions';
import Dialog from '../../components/Dialog';

const styles = {
  container: {
    margin: 20,
    minWidth: 400,
  },
};

/* eslint-disable react/prefer-stateless-function */
class DictionaryManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addingNewRow: false,
      deletingDictionary: false,
      error: {},
    };
  }

  handleSelectRow = tableId => (e, rowIndex) => {
    this.props.dispatch(
      selectTableRow(tableId, rowIndex),
      'DictionaryManager.handleSelectRow',
    );
  };

  handleAddRowButtonClick = () => {
    this.setState({
      addingNewRow: true,
    });
  };

  addingNewRow = values => {
    this.closeAddNewRowDialog();
    this.props.dispatch(addTableRow(this.props.dictionary.id, values));
  };

  handleDeleteRows = () => {
    if (this.numSelected() > 0) {
      this.props.dispatch(removeTableRow(this.props.dictionary.id));
      toast.info('Row was deleted');
    } else {
      this.setState({
        deletingDictionary: true,
      });
    }
  };

  deleteDictionary = () => {
    this.setState({
      deletingDictionary: false,
    });
    this.props.dispatch(removeDictionary(this.props.dictionary.id));
    toast.info('Table '
      .concat(this.props.dictionary.name)
      .concat(' was deleted'));
  };

  numSelected = () =>
    this.props.dictionary.rows.filter(row => row.selected).length;

  closeAddNewRowDialog = () => {
    this.setState({
      addingNewRow: false,
    });
  };

  render() {
    const { classes, dictionary } = this.props;
    console.log(dictionary);
    return (
      <Grid md={5} lg={3} className={classes.container}>
        <AdvancedTable
          title={dictionary.name}
          onAddRow={this.handleAddRowButtonClick}
          onDeleteRows={this.handleDeleteRows}
          onSelectRow={this.handleSelectRow(dictionary.id)}
          rows={dictionary.rows}
        />
        <Dialog
          title="Introduce name of the new dictionary"
          error={this.state.error}
          open={this.state.addingNewRow}
          onClose={() => {
            this.setState({ addingNewRow: false });
          }}
          onCreate={this.addingNewRow}
          fields={[
            {
              id: 'domain',
              label: 'Domain',
              type: 'input',
            },
            {
              id: 'range',
              label: 'Range',
              type: 'input',
            },
          ]}
        />
        <Dialog
          open={this.state.deletingDictionary}
          onClose={() => {
            this.setState({ deletingDictionary: false });
          }}
          title="Are you sure you want do delete this dictionary?"
          onCreate={this.deleteDictionary}
        />
        <ToastContainer />
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
