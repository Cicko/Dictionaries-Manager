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

const styles = {
  tableContainer: {
    padding: 100,
  },
};

/* eslint-disable react/prefer-stateless-function */
export class DictionariesPage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Grid container>
        <Grid
          container
          className={this.props.classes.tableContainer}
          justify="center"
          alignContent="center"
          direction="column"
        >
          <Typography component="h3" variant="h4" gutterBottom>
            <FormattedMessage {...messages.header} />
          </Typography>
          <Grid>
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
};

export default compose(
  connect(() => ({})),
  withStyles(styles),
)(DictionariesPage);
