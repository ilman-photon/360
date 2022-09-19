import * as React from "react";
import { Box, Typography, Button, Divider, useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";
import styles from "./styles.module.scss";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import TablePagination from "@mui/material/TablePagination";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

export default function TestLabResult() {
  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });
  const isDesktop = useMediaQuery("(min-width: 769px)");

  function createData(name, orderedBy, date, status) {
    return { name, orderedBy, date, status };
  }

  const rows = [
    createData("Eye Surgery", "Hopkins, D.M.", "09/09/2022", "Completed"),
    createData("Eye Surgery2", "Hopkins, D.M.", "09/09/2022", "Completed"),
    createData("Eye Surgery3", "Hopkins, D.M.", "09/09/2022", "Completed"),
    createData("Eye Surgery4", "Hopkins, D.M.", "09/09/2022", "Completed"),
  ];

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const headCells = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Test Name",
    },
    {
      id: "orderBy",
      numeric: true,
      disablePadding: true,
      label: "Ordered by",
    },
    {
      id: "date",
      numeric: true,
      disablePadding: true,
      label: "Test Date",
    },
    {
      id: "status",
      numeric: true,
      disablePadding: true,
      label: "Test Status",
    },
    {
      id: "download",
      numeric: true,
      disablePadding: false,
      label: "",
    },
  ];

  function EnhancedTableHead(props) {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      onRequestSort,
    } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead sx={{ background: "#F3F5F6" }}>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
              className={styles.headerCell}
              sx={{
                padding: "15px",
                color: "#003B4A",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

  const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;

    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Nutrition
          </Typography>
        )}

        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  };

  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };

  const bodyCellStyles = [
    styles.bodyCell1,
    styles.bodyCell2,
    styles.bodyCell3,
    styles.bodyCell4,
    styles.bodyCell5,
  ];

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box className={styles.testLabBox} p={{ xs: "16px 16px", md: "24px" }}>
      <Typography
        className={styles.titleText}
        aria-label={"Who is this exam for?"}
        tabindex={0}
      >
        Test Results
      </Typography>

      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size={"medium"}
        >
          <EnhancedTableHead
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
              .map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.name)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}
                  >
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      className={[styles.bodyCell, styles.bodyCell1].join(" ")}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="right"
                      className={[styles.bodyCell, styles.bodyCell2].join(" ")}
                    >
                      {row.orderedBy}
                    </TableCell>
                    <TableCell
                      align="right"
                      className={[styles.bodyCell, styles.bodyCell3].join(" ")}
                    >
                      {row.date}
                    </TableCell>
                    <TableCell
                      align="right"
                      className={[styles.bodyCell, styles.bodyCell4].join(" ")}
                    >
                      {row.status}
                    </TableCell>
                    <TableCell
                      align="right"
                      className={[styles.bodyCell, styles.bodyCell5].join(" ")}
                    >
                      <FileDownloadOutlinedIcon />
                    </TableCell>
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

      <div className={styles.disclaimerWrapper}>
        <div
          className={styles.noResultText}
          style={isDesktop ? { textAlign: "left" } : { textAlign: "center" }}
        >
          There are no tests or lab results
        </div>
      </div>
      <div className={styles.disclaimerWrapper}>
        <div className={styles.disclaimerText}>
          <InfoOutlinedIcon
            sx={{
              width: "18px",
              height: "18px",
              color: "#0288D1",
              marginRight: "18px",
            }}
          />{" "}
          Disclaimer message here
        </div>
      </div>
    </Box>
  );
}
