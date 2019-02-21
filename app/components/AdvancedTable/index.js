/**
 *
 * AdvancedTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { noop, isArray } from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { AdvancedTableToolbar, AdvancedTableHead } from './components';

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const styles = {
  root: {
    width: '100%',
  },
  tableWrapper: {
    overflowX: 'auto',
  },
<<<<<<< Updated upstream
=======
  rowErrorMedium: {
    backgroundColor: '#FFECB3',
  },
  rowErrorImportant: {
    backgroundColor: '#FFCDD2',
  },
  cellErrorMedium: {
    color: '#FFC107',
  },
  cellErrorImportant: {
    color: '#F44336',
  },
>>>>>>> Stashed changes
};

class AdvancedTable extends React.Component {
  state = {
    order: 'asc',
    orderBy: 'calories',
    page: 0,
    rowsPerPage: 5,
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  numberOfSelected = () => {
    if (isArray(this.props.rows)) {
      return this.props.rows.filter(row => row.selected).length;
    }
    return 0;
  };

<<<<<<< Updated upstream
=======
  getClassNameForCell = (row, field) => {
    if (!has(row, `error.${field}`)) return '';
    return this.props.classes[`cellError${row.error.importance}`];
  };

  getClassNameForRow = row => has(row, 'error') ? this.props.classes[`rowError${row.error.importance}`] : '';

>>>>>>> Stashed changes
  /**
   * Render the body of the Table
   * @returns {*}
   */
  renderTableBody = () => {
    const { onSelectRow, rows } = this.props;
    const { order, orderBy, rowsPerPage, page } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    return (
      <TableBody>
        {stableSort(rows, getSorting(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row, index) => (
            <TableRow
              hover
              onClick={event => onSelectRow(event, page * rowsPerPage + index)}
              role="checkbox"
              aria-checked={row.selected}
              className={this.getClassNameForRow(row)}
              tabIndex={-1}
              key={row.id}
              selected={row.selected}
            >
              <TableCell padding="checkbox">
                <Checkbox checked={row.selected} />
              </TableCell>
<<<<<<< Updated upstream
              <TableCell component="th" scope="row" padding="none">
                {row.domain}
              </TableCell>
              <TableCell>{row.range}</TableCell>
=======
              <TableCell
                component="th"
                scope="row"
                padding="none"
                className={this.getClassNameForCell(row, 'domain')}
              >
                {row.domain}
              </TableCell>
              <TableCell
                className={this.getClassNameForCell(row, 'range')}
              >
              {row.range}
              </TableCell>
>>>>>>> Stashed changes
            </TableRow>
          ))}
        {emptyRows > 0 && (
          <TableRow style={{ height: 49 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
    );
  };

  render() {
    const { classes, onDeleteRows, onAddRow, title, rows } = this.props;
    const { order, orderBy, rowsPerPage, page } = this.state;
    const numberOfSelected = this.numberOfSelected();

    return (
      <Paper className={classes.root}>
        <AdvancedTableToolbar
          numSelected={numberOfSelected}
          title={title}
          onDeleteRows={onDeleteRows}
          onAddRow={onAddRow}
        />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <AdvancedTableHead
              numSelected={numberOfSelected}
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={rows.length}
            />
            {this.renderTableBody()}
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

AdvancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  rows: PropTypes.array,
  onDeleteRows: PropTypes.func,
  onSelectRow: PropTypes.func,
  title: PropTypes.string,
  onAddRow: PropTypes.func,
};

AdvancedTable.defaultProps = {
  onAddRow: noop,
  onDeleteRows: noop,
  onSelectRow: noop,
  title: 'Default title',
  rows: [],
};

export default withStyles(styles)(AdvancedTable);
