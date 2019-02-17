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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Table } from '../../components';
import messages from './messages';
import mockData from '../../data/mockOverviewData';

const styles = {
  tableContainer: {
    padding: 100,
  },
};

/* eslint-disable react/prefer-stateless-function */
class OverviewPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDictionary: -1,
    };
  }

  handleChange = e => {
    this.setState({
      currentDictionary: e.target.value,
    });
  };

  renderSelectItem = dictionary => (
    <MenuItem value={dictionary.id}> {dictionary.name} </MenuItem>
  );

  renderDictionarySelector = () => (
    <Select
      value={this.state.currentDictionary}
      onChange={this.handleChange}
      inputProps={{
        name: 'name',
        id: 'name',
      }}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {this.props.dictionaries.map(this.renderSelectItem)}
    </Select>
  );

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
            <Table rows={mockData.rows} headers={mockData.headers}/>
          </Grid>
        </Grid>
        <Typography component="h5" variant="h5" gutterBottom>
          <FormattedMessage {...messages.dictionarySelectLabel} />
        </Typography>
        <Grid container sm={4} justify="center">
          {this.renderDictionarySelector()}
        </Grid>
      </Grid>
    );
  }
}

OverviewPage.propTypes = {
  drawerOpen: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  dictionaries: PropTypes.object,
};

export default compose(
  connect(state => ({
    drawerOpen: state.getIn(['generic', 'navDrawer', 'open']),
    dictionaries: state.getIn(['dictionaries', 'dictionaries']),
  })),
  withStyles(styles),
)(OverviewPage);
