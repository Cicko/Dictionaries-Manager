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
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { AdvancedTable } from '../../components';
import { addTableRow, removeTableRow, selectTableRow } from '../DictionariesPage/store/actions';
import FormDialog from '../../components/FormDialog';
import validate from './utils/validation';

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
    try {
      validate(this.props.dictionary.rows, values);
      this.closeAddNewRowDialog();
      this.props.dispatch(addTableRow(this.props.dictionary.id, values));
    } catch (err) {
      console.log(err);
      this.setState({
        error: err,
      });
    }
  };

  handleDeleteRows = () => {
    this.props.dispatch(removeTableRow(this.props.dictionary.id));
  };

  closeAddNewRowDialog = () => {
    this.setState({
      addingNewRow: false,
    });
  };

  render() {
    const { classes, dictionary } = this.props;
    return (
      <Grid md={5} lg={3} className={classes.container}>
        <AdvancedTable
          title={dictionary.name}
          onAddRow={this.handleAddRowButtonClick}
          onDeleteRows={this.handleDeleteRows}
          onSelectRow={this.handleSelectRow(dictionary.id)}
          rows={dictionary.rows}
        />
        <FormDialog
          title="Introduce name of the new dictionary"
          error={this.state.error}
          open={this.state.addingNewRow}
          onClose={() => {
            this.setState({ addingNewRow: false })
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
