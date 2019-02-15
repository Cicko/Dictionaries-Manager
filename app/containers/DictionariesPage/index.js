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
import messages from './messages';
import DictionaryManager from '../DictionaryManager';
import dictionaryOne from '../../data/mockDictionaryOne';
import { addExistingDictionary } from './store/actions';

const styles = {
  tableContainer: {
    padding: 100,
  },
  dictionariesContainer: {
    flexDirection: 'row',
  },
};

/* eslint-disable react/prefer-stateless-function */
export class DictionariesPage extends React.Component {
  constructor(props) {
    super(props);
    props.dispatch(addExistingDictionary(dictionaryOne));
  }

  render() {
    const { classes, dictionaries } = this.props;
    console.log(dictionaries);
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
            <DictionaryManager />
            <DictionaryManager />
            <DictionaryManager />
          </Grid>
        </Grid>
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
