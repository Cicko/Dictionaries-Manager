/**
 *
 * DictionariesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import messages from './messages';
import DictionaryManager from '../DictionaryManager';
import dictionaryOne from '../../data/mockDictionaryOne';
import { addExistingDictionary } from './store/actions';

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
    props.dispatch(addExistingDictionary(dictionaryOne));
  }

  handleNewDictionary = () => {
    console.log('new dictionary');
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
            {dictionaries.map(this.renderDictionary)}
          </Grid>
        </Grid>
        <Tooltip title="Add Dictionary" aria-label="Add dictionary">
          <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.handleNewDictionary}>
            <AddIcon />
          </Fab>
        </Tooltip>
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
    dictionaries: state.getIn(['dictionaries', 'dictionaries']).toArray(),
  })),
  withStyles(styles),
)(DictionariesPage);
