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
import React, { useEffect } from "react";
import { visuallyHidden } from "@mui/utils";
import styles from "./styles.module.scss";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ReplyIcon from "@mui/icons-material/Reply";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { TEST_ID } from "../../../utils/constants";
import moment from "moment";
import { renderCTAIcon } from "../Dashboard/prescriptions";

function descendingComparator(a, b, orderBy) {
  const refA = ref(a, orderBy);
  const refB = ref(b, orderBy);
  if (refB < refA) {
    return -1;
  }
  if (refB > refA) {
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
  let returnedRow = row;
  key.split(".").forEach((k) => {
    if (returnedRow) returnedRow = returnedRow[k];
  });

  return returnedRow;
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

  const getAriaHeader = (headCell) => {
    if (isDesc && headCell.id == orderBy) {
      return headCell.label + " sorted descending";
    } else if (!isDesc && headCell.id == orderBy) {
      return headCell.label + " sorted ascending";
    } else {
      return headCell.label;
    }
  };
  return (
    <TableHead
      aria-hidden={false}
      sx={{ backgroundColor: "#F3F5F6" }}
      tabIndex={0}
      aria-label="Table Header"
    >
      <TableRow aria-hidden={false} sx={{ whiteSpace: "nowrap" }}>
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
            case "textNoSort":
              return (
                <TableCell
                  key={`head-${headIdx}`}
                  align={headCell.numeric ? "right" : "left"}
                  padding={headCell.disablePadding ? "none" : "normal"}
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
                  <b tabIndex={0}>{headCell.label}</b>
                </TableCell>
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
                    color: "#003B4A",
                    ".MuiTableSortLabel-root.Mui-active": {
                      color: "#003B4A !important",
                    },
                    ".MuiTableSortLabel-root:hover": {
                      color: "#003B4A !important",
                    },
                    ...headCell.sx,
                  }}
                >
                  <TableSortLabel
                    aria-label={getAriaHeader(headCell)}
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : "asc"}
                    data-testid={"table-header-sort"}
                    onClick={createSortHandler(headCell.id)}
                    sx={{
                      "MuiTableSortLabel-icon:hover": {
                        color: "#757575 !important",
                        opacity: 1,
                      },
                      ".MuiTableSortLabel-icon": {
                        color: "#003B4A !important",
                      },
                    }}
                  >
                    <b>{headCell.label}</b>
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
  const [orderBy, setOrderBy] = React.useState("");
  const [selected, setSelected] = React.useState([]);
  const [page] = React.useState(0);
  const [dense] = React.useState(false);
  const [rowsPerPage] = React.useState(5);
  const [activeMenuData, setActiveMenuData] = React.useState({});

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

  useEffect(() => {
    setOrderBy("");
  }, [rows]);

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
  const handleMenuClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setActiveMenuData(row);
  };
  const isMenuOpen = Boolean(anchorEl);
  const handleMoreMenu = async (action, row) => {
    setAnchorEl(null);
    const shareData = {
      title: row.name,
      text: row.name,
      url: row.digital_assets
        ? `${window.location.origin}/patient/download/${ref(
            row,
            "digital_assets._id"
          )}`
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

  function getMultilineDate(dateValue) {
    let intent = [];
    if (dateValue) {
      dateValue?.split(" ").forEach((value) => {
        intent.push(<p>{value}</p>);
      });
    }
    return intent;
  }

  function getDateTabelCell(tabelData, type) {
    let format = "MM/DD/YYYY";
    if (type === "date-time") {
      format = "MM/DD/YYYY hh:mmA";
    }
    const dateValue = new moment(
      ref(tabelData.row, tabelData.cell.valueKey)
    ).format(format);
    return (
      <>
        <div
          style={tabelData.cell.contentStyle}
          tabIndex={0}
          aria-label={`${tabelData.cell.valueKey}. ${ref(
            tabelData.row,
            tabelData.cell.valueKey
          )}`}
          className={[styles.tableCell, tabelData.cell.contentClass].join(" ")}
        >
          {type === "date-time" ? getMultilineDate(dateValue) : dateValue}
        </div>
      </>
    );
  }

  function getTextMultipleValue(row, cell) {
    let textValue = "";
    cell.valueKey.split(",").forEach((key) => {
      const tempValue = ref(row, key);
      textValue += `${tempValue} `;
    });
    return textValue;
  }

  function getTextValue(row, cell) {
    if (cell.isMultipleKey) {
      return getTextMultipleValue(row, cell);
    } else if (cell.hasAction && cell.onClick) {
      return (
        <div
          role="button"
          className={styles.actionText}
          aria-label={`download`}
          onClick={() => {
            const assetId = ref(row, cell.additionalValueKey);
            cell.onClick(assetId);
          }}
        >
          {ref(row, cell.valueKey)}
        </div>
      );
    }

    return ref(row, cell.valueKey);
  }

  const renderCellContent = ({ row, cell, rowIdx, cellIdx }) => {
    switch (cell.type) {
      case "icon":
        return <>{cell.icon}</>;
      case "download-asset":
        return (
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
              onClick={() => {
                const assetId = ref(row, cell.valueKey);
                onAssetDownload(assetId);
              }}
            >
              {cell.icon}
            </div>
          </Tooltip>
        );
      case "download-icon":
        return (
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
        );
      case "menus":
        return (
          <>
            <IconButton
              sx={{
                width: 32,
                height: 32,
                p: 0,
                color: "#003B4A",
                background: "#EEF5F7",
                borderRadius: "50%",
              }}
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
              id="menu-more"
              anchorEl={anchorEl}
              keepMounted
              onClose={handleMoreMenu}
              data-testid={TEST_ID.MEDICAL_RECORD.moreMenu}
              open={isMenuOpen}
            >
              {MyOptions.map((more, moreIdx) => (
                <MenuItem
                  key={`menu-${moreIdx}`}
                  onClick={() => handleMoreMenu(more.id, row)}
                  aria-label={`${more.ariaLabel}`}
                  aria-live="polite"
                >
                  {more.icon}
                  <Typography
                    textAlign="center"
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
        );
      case "menu-cta":
        return (
          <>
            {renderCTAIcon(
              () => {
                handleMoreMenu("download", row);
              },
              () => {
                handleMoreMenu("print", rows);
              },
              () => {
                handleMoreMenu("share", row);
              },
              ["download", "print", "share"],
              styles.butttonIconContainer
            )}
          </>
        );
      case "date":
        return getDateTabelCell({ rowIdx, cellIdx, cell, row }, "date");
      case "date-time":
        return getDateTabelCell({ rowIdx, cellIdx, cell, row }, "date-time");
      case "text":
      default:
        return (
          <div
            style={cell.contentStyle}
            tabIndex={0}
            aria-label={`${cell.valueKey}. ${ref(row, cell.valueKey)}`}
            className={[styles.tableCell, cell.contentClass].join(" ")}
          >
            {getTextValue(row, cell)}
          </div>
        );
    }
  };

  return (
    <>
      <TableContainer sx={{ boxShadow: "none" }}>
        <Table
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
                        <Grid tabIndex={0} xs={4} p={2}>
                          {row.name}
                        </Grid>
                        <Grid xs={4} p={2}>
                          {row.orderBy}
                        </Grid>
                        <Grid xs={4} p={2} sx={{ paddingLeft: "40px" }}>
                          {row.date}
                        </Grid>
                        <hr className={styles.hrTestLab} />
                        <Grid xs={12} p={2} textAlign={"end"}>
                          <Typography className={styles.statusText}>
                            <span
                              style={{ fontWeight: "600", color: "#003B4A" }}
                            >
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
                    key={`row-${rowIdx}`}
                    selected={isItemSelected}
                    sx={{
                      border: "2px solid #F3F3F3",
                      "&.Mui-selected": {
                        backgroundColor: "#fff",
                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                      },
                      "&.MuiTableRow-hover": {
                        ":hover": {
                          backgroundColor: "transparent",
                        },
                      },
                    }}
                  >
                    {config?.cells?.map((cell, cellIdx) => (
                      <TableCell
                        key={`cell-${rowIdx}-${cellIdx}`}
                        {...cell.cellProps}
                      >
                        {renderCellContent({ row, cell, rowIdx, cellIdx })}
                      </TableCell>
                    ))}
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
