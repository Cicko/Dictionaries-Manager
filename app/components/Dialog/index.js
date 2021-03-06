/**
 *  Created by
 *  @author Rudolf Cicko
 *  @date 2/15/19
 *
 */
import React from 'react';
import { noop, isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class CustomDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: props.values,
    };
  }

  handleInputChange = fieldId => e => {
    const { value } = e.target;
    this.setState(({ values }) => ({
      values: {
        ...values,
        [fieldId]: value,
      },
    }));
  };

  submitNewTable = () => {
    this.props.onCreate(this.state.values);
  };

  renderField = field => (
    <TextField
      autoFocus
      error={!isEmpty(this.props.error[field.id])}
      helperText={this.props.error[field.id]}
      margin="dense"
      id={field.id}
      label={field.label}
      value={this.state.values[field.id]}
      onChange={this.handleInputChange(field.id)}
      fullWidth
    />
  );

  render() {
    const { open, onClose, title, fields } = this.props;
    return (
      <div>
        <Dialog
          open={open}
          onClose={onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{title}</DialogTitle>
          <DialogContent>
            {fields.map(this.renderField)}
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.submitNewTable} color="primary">
              Accept
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

CustomDialog.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  onCreate: PropTypes.func,
  onClose: PropTypes.func,
  values: PropTypes.object,
  fields: PropTypes.array,
  error: PropTypes.object,
};

CustomDialog.defaultProps = {
  open: false,
  onCreate: noop,
  onClose: noop,
  values: {},
  error: {},
  fields: [],
};

export default CustomDialog;
