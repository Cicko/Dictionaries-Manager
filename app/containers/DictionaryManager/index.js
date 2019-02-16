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
import { selectTableRow } from '../DictionariesPage/store/actions';
import FormDialog from '../../components/FormDialog';
import { addTableRow } from '../DictionariesPage/store/actions';

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
    };
  }

  handleSelectRow = tableId => (e, rowId) => {
    this.props.dispatch(
      selectTableRow(tableId, rowId),
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
    console.log('delete rows');
    console.log(3);
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
