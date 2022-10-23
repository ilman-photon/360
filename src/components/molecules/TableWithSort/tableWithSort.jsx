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
  Grid,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import { visuallyHidden } from "@mui/utils";
import styles from "./styles.module.scss";
import { colors } from "../../../styles/theme";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ReplyIcon from "@mui/icons-material/Reply";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { TEST_ID } from "../../../utils/constants";
import moment from "moment";

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

const ref = (row, key) => {
  key.split(".").forEach((k) => (row ? (row = row[k]) : undefined));
  return row;
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
  const isDesc = order === "desc";
  return (
    <TableHead
      sx={{
        backgroundColor: "#F3F5F6",
      }}
    >
      <TableRow
        sx={{
          whiteSpace: "nowrap",
          ".MuiTableSortLabel-root.Mui-active .MuiTableSortLabel-icon": {
            color: colors.darkGreen,
          },
        }}
      >
        {props.config.map((headCell, headIdx) => {
          switch (headCell.type) {
            case "empty":
              return (
                <TableCell
                  key={`head-${headIdx}`}
                  sx={{ ...headCell.sx }}
                  width={headCell.width}
                />
              );
            case "text":
              return (
                <TableCell
                  key={`head-${headIdx}`}
                  align={headCell.numeric ? "right" : "left"}
                  padding={headCell.disablePadding ? "none" : "normal"}
                  sortDirection={orderBy === headCell.id ? order : false}
                  width={headCell.width}
                  role={"rowheader"}
                  sx={{
                    py: "15px",
                    ".MuiTableSortLabel-icon": {
                      opacity: 0.5,
                    },
                    ...headCell.sx,
                  }}
                >
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : "asc"}
                    data-testid={"table-header-sort"}
                    onClick={createSortHandler(headCell.id)}
                    aria-live={"polite"}
                    sx={{
                      ".MuiTableSortLabel-icon": {
                        opacity: 1,
                        color: "#003B4A !important",
                      },
                      color: "#003B4A !important",
                    }}
                  >
                    <b tabIndex={0}>{headCell.label}</b>
                    {orderBy === headCell.id ? (
                      <Box component="span" sx={visuallyHidden}>
                        {isDesc ? "sorted descending" : "sorted ascending"}
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
  mobileTestLab = false,
  onAssetDownload = () => {
    // This is intentional
  },
  additionalProps = {},
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

  const isSelected = (id) => {
    return selected.indexOf(id) !== -1;
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  // menu MoreVertIcon
  const [anchorEl, setAnchorEl] = React.useState(null);
  const MyOptions = [
    {
      id: "download",
      icon: <FileDownloadOutlinedIcon />,
      label: "Download",
      dataTestId: "download-menu",
      ariaLabel: "download option",
    },
    {
      id: "share",
      icon: <ReplyIcon />,
      label: "Share",
      dataTestId: "share-menu",
      ariaLabel: "share option",
    },
    {
      id: "print",
      icon: <PrintOutlinedIcon />,
      label: "Print",
      dataTestId: "print-menu",
      ariaLabel: "print option",
    },
  ];
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const isMenuOpen = Boolean(anchorEl);
  const handleMoreMenu = async (action, row) => {
    setAnchorEl(null);
    const shareData = {
      title: row.name,
      text: row.name,
      url: row.digital_assets
        ? `${window.location.origin}/patient/download/${row.digital_assets._id}`
        : "/",
    };
    switch (action) {
      case "download":
        onAssetDownload(ref(row, "digital_assets._id"));
        break;
      case "print":
        onAssetDownload(ref(row, "digital_assets._id"), true);
        break;
      case "share":
        if (navigator.share) {
          await navigator.share(shareData);
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <TableContainer sx={{ boxShadow: "none" }}>
        <Table
          tabIndex={0}
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
          {...additionalProps?.tableProps}
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
                const isItemSelected = isSelected(row.id || row._id);
                return mobileTestLab ? (
                  <TableRow>
                    <TableCell colspan={3}>
                      <Grid container spacing={2}>
                        <Grid xs={4} p={2}>
                          {row.name}
                        </Grid>
                        <Grid xs={4} p={2}>
                          {row.orderBy}
                        </Grid>
                        <Grid xs={4} p={2}>
                          {row.date}
                        </Grid>
                        <hr className={styles.hrTestLab} />
                        <Grid xs={12} p={2} textAlign={"end"}>
                          <Typography className={styles.statusText}>
                            <span style={{ fontWeight: "600" }}>
                              Test Status:
                            </span>{" "}
                            {row.status}
                          </Typography>
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id || row._id)}
                    data-testid={"table-sort-header"}
                    role={"row"}
                    tabIndex={-1}
                    key={`row-${rowIdx}`}
                    selected={isItemSelected}
                    sx={{ border: "2px solid #F3F3F3" }}
                  >
                    {config?.cells?.map((cell, cellIdx) => {
                      switch (cell.type) {
                        case "icon":
                          return (
                            <TableCell
                              key={`cell-${rowIdx}-${cellIdx}`}
                              {...cell.cellProps}
                            >
                              {cell.icon}
                            </TableCell>
                          );
                        case "download-asset":
                          return (
                            <TableCell
                              key={`cell-${rowIdx}-${cellIdx}`}
                              {...cell.cellProps}
                            >
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
                                    Download
                                  </Typography>
                                }
                                placement="top"
                              >
                                <div
                                  role="button"
                                  aria-label={`download`}
                                  onClick={() => {
                                    const assetId = ref(row, cell.valueKey);
                                    onAssetDownload(assetId);
                                  }}
                                >
                                  {cell.icon}
                                </div>
                              </Tooltip>
                            </TableCell>
                          );
                        case "download-icon":
                          return (
                            <TableCell
                              key={`cell-${rowIdx}-${cellIdx}`}
                              {...cell.cellProps}
                            >
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
                        case "menus":
                          return (
                            <TableCell
                              key={`${rowIdx}-${cellIdx}`}
                              {...cell.cellProps}
                            >
                              <>
                                <IconButton
                                  sx={{ width: 24, height: 24, p: 0 }}
                                  aria-label="more option"
                                  onClick={handleMenuClick}
                                  aria-haspopup="true"
                                  aria-controls="menu-appbar"
                                  data-testid="more-vert-button"
                                >
                                  <MoreVertIcon />
                                </IconButton>
                                <Menu
                                  sx={{ mt: "40px" }}
                                  anchorEl={anchorEl}
                                  keepMounted
                                  onClose={handleMoreMenu}
                                  data-testid={TEST_ID.MEDICAL_RECORD.moreMenu}
                                  open={isMenuOpen}
                                >
                                  {MyOptions.map((more, moreIdx) => (
                                    <MenuItem
                                      key={`menu-${moreIdx}`}
                                      onClick={() =>
                                        handleMoreMenu(more.id, row)
                                      }
                                      aria-label={`${more.ariaLabel}`}
                                      aria-live="polite"
                                    >
                                      {more.icon}
                                      <Typography
                                        textAlign="center"
                                        tabIndex={0}
                                        sx={{
                                          margin: "0 8px",
                                          fontFamily: "Libre Franklin",
                                          fontWeight: "500",
                                          fontSize: "14px",
                                        }}
                                        data-testid={more.dataTestId}
                                      >
                                        {more.label}
                                      </Typography>
                                    </MenuItem>
                                  ))}
                                </Menu>
                              </>
                            </TableCell>
                          );
                        case "date":
                          return (
                            <TableCell
                              key={`cell-${rowIdx}-${cellIdx}`}
                              {...cell.cellProps}
                            >
                              <div
                                style={cell.contentStyle}
                                tabIndex={0}
                                aria-label={`${cell.valueKey}. ${ref(
                                  row,
                                  cell.valueKey
                                )}`}
                                className={[
                                  styles.tableCell,
                                  cell.contentClass,
                                ].join(" ")}
                              >
                                {new moment(ref(row, cell.valueKey)).format(
                                  "MM/DD/YYYY"
                                )}
                              </div>
                            </TableCell>
                          );
                        case "text":
                        default:
                          return (
                            <TableCell
                              key={`cell-${rowIdx}-${cellIdx}`}
                              {...cell.cellProps}
                            >
                              <div
                                style={cell.contentStyle}
                                tabIndex={0}
                                aria-label={`${cell.valueKey}. ${ref(
                                  row,
                                  cell.valueKey
                                )}`}
                                className={[
                                  styles.tableCell,
                                  cell.contentClass,
                                ].join(" ")}
                              >
                                {ref(row, cell.valueKey)}
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
