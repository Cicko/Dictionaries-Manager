/**
 *  Created by
 *  @author Rudolf Cicko
 *  @date 2/12/19
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Grid from '@material-ui/core/Grid';
import { Table } from '../../components';
import messages from './messages';

const styles = {
  tableContainer: {
    padding: 100,
  },
};

/* eslint-disable react/prefer-stateless-function */
class OverviewPage extends React.Component {
  render() {
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
            <Table />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

OverviewPage.propTypes = {
  drawerOpen: PropTypes.bool,
  classes: PropTypes.object.isRequired,
}

export default compose(
  connect(state => ({
    drawerOpen: state.getIn(['generic', 'navDrawer', 'open']),
  })),
  withStyles(styles),
)(OverviewPage);
