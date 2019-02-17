/**
 *  Created by
 *  @author Rudolf Cicko
 *  @date 2/12/19
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { find } from 'lodash';
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
  selectContainer: {
    marginTop: 40,
  },
};

/* eslint-disable react/prefer-stateless-function */
class OverviewPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDictionary: -1,
      rows: mockData.rows,
      headers: mockData.headers,
    };
  }

  handleChange = e => {
    const dictionaries = this.props.dictionaries.toArray();
    if (e.target.value === '') {
      this.setState({
        currentDictionary: -1,
        rows: mockData.rows,
      });
      return;
    }
    const dictionaryId = e.target.value;
    this.setState({
      currentDictionary: dictionaryId,
      rows: mockData.rows.map(row => ({
        ...row,
        color: this.translate(row.color, find(dictionaries,
          dictionary => dictionary.id === dictionaryId)),
      })),
    });
  };

  translate = (word, dictionary) => {
    const found = find(dictionary.rows, row => row.domain === word);
    if (!found) return word;
    return found.range;
  };

  renderSelectItem = dictionary => (
    <MenuItem value={dictionary.id}> {dictionary.name} </MenuItem>
  );

  renderDictionarySelector = () => (
    <Select
      value={this.state.currentDictionary}
      onChange={this.handleChange}
      fullWidth
      displayEmpty
      name="Select dictionary"
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
            <Table rows={this.state.rows} headers={this.state.headers}/>
            <Grid justify="center" className={this.props.classes.selectContainer}>
              <Typography variant="h6" guttenBottom>
                <FormattedMessage {...messages.dictionarySelectLabel} />
              </Typography>
              {this.renderDictionarySelector()}
            </Grid>
          </Grid>
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
