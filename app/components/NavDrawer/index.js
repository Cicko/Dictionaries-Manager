/**
 *
 * NavDrawer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { push } from 'connected-react-router/immutable';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { toggleNavDrawer } from '../../containers/App/store/actions';
import navItems from './navItems';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class NavDrawer extends React.Component {
  toggleDrawer = () => {
    this.props.dispatch(toggleNavDrawer());
  };

  handleClick = path => () => {
    this.props.dispatch(push(path));
  };

  render() {
    const { classes, open } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {navItems.map(({ label, Icon, path }) => (
            <ListItem button key={label} onClick={this.handleClick(path)}>
              <ListItemIcon> <Icon/> </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <Drawer
          open={open}
          onClose={this.toggleDrawer}
          variant="temporary"
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    open: state.getIn(['generic', 'navDrawer', 'open']),
  };
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
  dispatch: PropTypes.func,
};

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(NavDrawer);
