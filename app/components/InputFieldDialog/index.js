/**
 *  Created by
 *  @author Rudolf Cicko
 *  @date 2/15/19
 *
 */
import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class InputFieldDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  submitNewTable = () => {
    this.props.onCreate(this.state.value);
  };

  render() {
    const { open, onClose, title } = this.props;
    return (
      <div>
        <Dialog
          open={open}
          onClose={onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Table name"
              value={this.state.value}
              onChange={this.handleInputChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.submitNewTable} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
};

InputFieldDialog.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  onCreate: PropTypes.func,
  onClose: PropTypes.func,
  value: PropTypes.string,
};

InputFieldDialog.defaultProps = {
  open: false,
  onCreate: noop,
  onClose: noop,
  value: '',
};

export default InputFieldDialog;
