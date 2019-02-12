/**
 *  Created by
 *  @author Rudolf Cicko
 *  @date 2/12/19
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { get } from 'lodash';
import Table from '../../components/Table';
import NavDrawer from '../../components/NavDrawer';
import AppBar from '../../components/AppBar';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <AppBar />
        <NavDrawer open={this.props.drawerOpen} />
        <Table />
      </div>
    );
  }
}

HomePage.propTypes = {
  drawerOpen: PropTypes.bool,
}

export default connect(
  state => ({
    drawerOpen: get(state, 'generic.navDrawer.open', false),
  })
)(HomePage);