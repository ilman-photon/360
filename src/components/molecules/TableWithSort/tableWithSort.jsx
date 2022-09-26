import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { visuallyHidden } from "@mui/utils";
import styles from "./styles.module.scss";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

const EnhancedTableHead = (props) => {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{ backgroundColor: "#F3F5F6" }}>
      <TableRow>
        {props.config.map((headCell, headIdx) => {
          switch (headCell.type) {
            case "empty":
              return (
                <TableCell
                  key={headIdx}
                  sx={{ ...headCell.sx }}
                  width={headCell.width}
                />
              );
            case "text":
              return (
                <TableCell
                  key={headIdx}
                  align={headCell.numeric ? "right" : "left"}
                  padding={headCell.disablePadding ? "none" : "normal"}
                  sortDirection={orderBy === headCell.id ? order : false}
                  width={headCell.width}
                  sx={{ py: "15px", ...headCell.sx }}
                >
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : "asc"}
                    onClick={createSortHandler(headCell.id)}
                  >
                    <b>{headCell.label}</b>
                    {orderBy === headCell.id ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              );
          }
        })}
      </TableRow>
    </TableHead>
  );
};

export default function TableWithSort({
  config = { header: [], cells: [] },
  rows = [],
  isDesktop = false,
  onAssetDownload = () => {
    // This is intentional
  },
}) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page] = React.useState(0);
  const [dense] = React.useState(false);
  const [rowsPerPage] = React.useState(5);

  const handleRequestSort = (_event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (_event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <>
      <TableContainer sx={{ boxShadow: "none" }}>
        <Table
          aria-labelledby="tableTitle"
          size={dense ? "small" : "medium"}
          sx={{
            minWidth: isDesktop ? 750 : "none",
            "&.MuiTable-root": {
              borderCollapse: "separate",
              borderSpacing: "0 8px",
              border: "transparent",
            },
            "&.MuiTable-root th, &.MuiTable-root td": {
              borderTop: "2px solid #F3F3F3",
              borderBottom: "2px solid #F3F3F3",
            },
            ".MuiTableRow-root td:first-of-type": {
              borderLeft: "2px solid #F3F3F3",
            },
            ".MuiTableRow-root td:last-of-type": {
              borderRight: "2px solid #F3F3F3",
            },
          }}
        >
          <EnhancedTableHead
            config={config.header}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                rows.slice().sort(getComparator(order, orderBy)) */}
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIdx) => {
                const isItemSelected = isSelected(row.id);
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={rowIdx}
                    selected={isItemSelected}
                    sx={{ border: "2px solid #F3F3F3" }}
                  >
                    {config.cells.map((cell, cellIdx) => {
                      switch (cell.type) {
                        case "icon":
                          return (
                            <TableCell key={cellIdx} {...cell.cellProps}>
                              {cell.icon}
                            </TableCell>
                          );
                        case "download-asset":
                          return (
                            <TableCell key={cellIdx} {...cell.cellProps}>
                              <Tooltip
                                title={
                                  <Typography
                                    sx={{
                                      fontSize: {
                                        xs: 13,
                                        md: 14,
                                        color: "white",
                                      },
                                    }}
                                  >
                                    download
                                  </Typography>
                                }
                                placement="top"
                              >
                                <div
                                  role="button"
                                  onClick={() =>
                                    onAssetDownload(row[cell.valueKey])
                                  }
                                >
                                  {cell.icon}
                                </div>
                              </Tooltip>
                            </TableCell>
                          );
                        case "download-icon":
                          return (
                            <TableCell key={cellIdx} {...cell.cellProps}>
                              <Tooltip
                                title={
                                  <Typography
                                    sx={{
                                      fontSize: {
                                        xs: 13,
                                        md: 14,
                                        color: "white",
                                      },
                                    }}
                                  >
                                    download
                                  </Typography>
                                }
                                placement="top"
                              >
                                <a
                                  href={row.source}
                                  download
                                  data-testid="downloadPDFButton"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {cell.icon}
                                </a>
                              </Tooltip>
                            </TableCell>
                          );
                        case "test-lab-mobile":
                          return (
                            <TableCell key={cellIdx} {...cell.cellProps}>
                              <div style={cell.contentStyle}>
                                {row[cell.valueKey1]}
                                <a
                                  style={{
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    color: "#003B4A",
                                    paddingTop: "16px",
                                  }}
                                >
                                  {cell.cellHeadLabel}
                                </a>
                                {row[cell.valueKey2]}
                              </div>
                            </TableCell>
                          );
                        case "text":
                        default:
                          return (
                            <TableCell key={cellIdx} {...cell.cellProps}>
                              <div
                                style={cell.contentStyle}
                                className={[
                                  styles.tableCell,
                                  cell.contentClass,
                                ].join(" ")}
                              >
                                {row[cell.valueKey]}
                              </div>
                            </TableCell>
                          );
                      }
                    })}
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: (dense ? 33 : 53) * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
