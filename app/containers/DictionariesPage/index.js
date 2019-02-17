/**
 *  Created by
 *  @author Rudolf Cicko
 *  @date 2/15/19
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Map } from 'immutable';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import messages from './messages';
import DictionaryManager from '../DictionaryManager';
import mockDictionary from '../../data/mockDictionaryOne';
import { FormDialog } from '../../components';
import { addExistingDictionary, addDictionary } from './store/actions';

const styles = (theme) => ({
  tableContainer: {
    padding: 100,
  },
  dictionariesContainer: {
    flexDirection: 'row',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

/* eslint-disable react/prefer-stateless-function */
export class DictionariesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creatingNewTable: false,
    };
    if (props.dictionaries.length === 0) {
      props.dispatch(addExistingDictionary(mockDictionary));
    }
  }

  createNewDictionary = ({ name }) => {
    this.closeDialogForNewDictionary();
    this.props.dispatch(addDictionary(name));
  };

  openDialogForNewDictionary = () => {
    this.setState({
      creatingNewTable: true,
    });
  };

  closeDialogForNewDictionary = () => {
    this.setState({
      creatingNewTable: false,
    });
  };

  renderDictionary = dictionary =>
    <DictionaryManager dictionary={dictionary} />;

  render() {
    const { classes, dictionaries } = this.props;
    return (
      <Grid container>
        <Grid
          container
          className={classes.tableContainer}
          justify="center"
          alignContent="center"
          direction="column"
        >
          <Typography component="h3" variant="h4" gutterBottom>
            <FormattedMessage {...messages.header} />
          </Typography>
          <Grid container className={classes.dictionariesContainer}>
            {dictionaries.map(this.renderDictionary)}
          </Grid>
        </Grid>
        <Tooltip title="Add Dictionary" aria-label="Add dictionary">
          <Fab
            color="primary"
            aria-label="Add"
            className={classes.fab}
            onClick={this.openDialogForNewDictionary}
          >
            <AddIcon />
          </Fab>
        </Tooltip>
        <FormDialog
          title="Introduce name of the new dictionary"
          open={this.state.creatingNewTable}
          onClose={() => {
            this.setState({ creatingNewTable: false });
          }}
          onCreate={this.createNewDictionary}
          fields={[
            {
              id: 'name',
              label: 'Table name',
              type: 'input',
            },
          ]}
        />
      </Grid>
    );
  }
}

DictionariesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  dictionaries: PropTypes.array,
};

export default compose(
  connect((state) => ({
    dictionaries: state.getIn(['dictionaries', 'dictionaries']).toJS(),
  })),
  withStyles(styles),
)(DictionariesPage);
