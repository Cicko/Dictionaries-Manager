/**
 *
 * NavDrawer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { fromJS } from 'immutable';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import toggleNavDrawer from '../../containers/App/store/actions';

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

  render() {
    const { classes, open } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
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
    open: get(state.getIn(['generic']), 'navDrawer.open', false),
  }
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
