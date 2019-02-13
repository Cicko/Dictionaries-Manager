/**
 *  Created by
 *  @author Rudolf Cicko
 *  @date 2/12/19
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { get } from 'lodash';
import Grid from '@material-ui/core/Grid';
import Table from '../../components/Table';
import NavDrawer from '../../components/NavDrawer';
import AppBar from '../../components/AppBar';

const styles = {
  tableContainer: {
  },
};

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  render() {
    return (
      <Grid container>
        <AppBar />
        <NavDrawer open={this.props.drawerOpen} />
        <Grid
          container
          className={this.props.classes.tableContainer}
          justify="center"
        >
          <Grid>
            <Table />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

HomePage.propTypes = {
  drawerOpen: PropTypes.bool,
  classes: PropTypes.object.isRequired,
}

export default compose(
  connect(
    state => ({
      drawerOpen: get(state, 'generic.navDrawer.open', false),
    })
  ),
  withStyles(styles),
)(HomePage);
