/**
 *  Created by
 *  @author Rudolf Cicko
 *  @date 2/15/19
 *
 */

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { lighten } from '@material-ui/core/styles/colorManipulator';

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight: {
    color: theme.palette.secondary.main,
    backgroundColor: lighten(theme.palette.secondary.light, 0.85),
  },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

const AdvancedTableToolbar = props => {
  const { numSelected, classes, title, onDeleteRows, onAddRow } = props;
  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle">
            {title}
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 && (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete" onClick={onDeleteRows}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
        {numSelected === 0 && (
          <Tooltip title="Add row">
            <IconButton aria-label="Add row" onClick={onAddRow}>
              <AddIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

AdvancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onAddRow: PropTypes.func,
  onDeleteRows: PropTypes.func,
};

AdvancedTableToolbar.defaultProps = {
  onAddRow: noop,
  onDeleteRows: noop,
};

export default withStyles(toolbarStyles)(AdvancedTableToolbar);
