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
  Chip,
  Button,
  TablePagination,
} from "@mui/material";
import React, { useEffect } from "react";
import { visuallyHidden } from "@mui/utils";
import styles from "./styles.module.scss";

import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { TEST_ID } from "../../../utils/constants";
import moment from "moment";
import { MoreHoriz } from "@mui/icons-material";
import { renderCTAIcon } from "../Dashboard/prescriptions";
import MenuAccountRecoveryMore from "../MenuAccountRecoveryMore/menuAccountRecoveryMore";
import Image from "next/image";

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

export const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

export const ref = (row, key) => {
  let returnedRow = row;
  key.split(".").forEach((k) => {
    if (returnedRow) returnedRow = returnedRow[k];
  });

  return returnedRow;
};

export const getUserStatus = (status) => {
  switch (status) {
    case "locked":
    case "Locked":
      return (
        <Chip
          label="Locked"
          sx={{
            fontWeight: 700,
            fontSize: 16,
            color: "#E27A05",
            backgroundColor: "#E27A051A",
          }}
        />
      );
    case "unlocked":
      return (
        <Chip
          label="Unlocked"
          sx={{
            fontWeight: 700,
            fontSize: 16,
            color: "#0F8C4A",
            backgroundColor: "#0F8C4A1A",
          }}
        />
      );
    case "inactive":
      return (
        <Chip
          label="Inactive"
          sx={{
            fontWeight: 700,
            fontSize: 16,
            color: "#7B7B7B",
            backgroundColor: "#7b7b7b1a",
          }}
        />
      );
  }
};

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
export const stableSort = (array, comparator) => {
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

  const renderHiddenSortedUI = (headCell) => {
    const sortedText = isDesc ? "sorted descending" : "sorted ascending";

    return orderBy === headCell.id ? (
      <Box component="span" sx={visuallyHidden}>
        {sortedText}
      </Box>
    ) : null;
  };

  return (
    <TableHead sx={{ backgroundColor: "#F3F5F6" }}>
      <TableRow aria-hidden={false} tabIndex={0} sx={{ whiteSpace: "nowrap" }}>
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
                >
                  <b tabIndex={0} style={{ fontWeight: 600, color: "#003B4A" }}>
                    {headCell.label}
                  </b>
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
                  aria-label={headCell.label}
                  sx={{
                    py: "15px",
                    color: "#003B4A",
                    ".MuiTableSortLabel-root.Mui-active": {
                      color: "#003B4A !important",
                    },
                    ".MuiTableSortLabel-root:hover": {
                      color: "#003B4A !important",
                    },
                    ".MuiTableSortLabel-root:focus": {
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
                  >
                    <b style={{ fontWeight: 600 }}>{headCell.label}</b>
                    {renderHiddenSortedUI(headCell)}
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
  onShareDocument = () => {
    // This is intentional
  },
  onActionClicked = () => {
    // This is intentional
  },
  additionalProps = {},
  withNavigation = false,
}) {
  const [order, setOrder] = React.useState("");
  const [orderBy, setOrderBy] = React.useState("");
  const [selected, setSelected] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(0);
  const [dense] = React.useState(false);
  const [rowsPerPage] = React.useState(10);
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
    pageNumber > 0
      ? Math.max(0, (1 + pageNumber) * rowsPerPage - rows.length)
      : 0;

  // menu MoreVertIcon
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [moreMenuIdx, setMoreMenuIdx] = React.useState(null);
  const iconShare = "/icon-share.png";
  const iconDownload = "/download_icon.png";
  const MyOptions = [
    {
      id: "download",
      icon: (
        <IconButton
          sx={{ width: 24, height: 24, p: 0 }}
          data-testid="download-menu"
        >
          <Image alt="" src={iconDownload} width={16} height={20} />
        </IconButton>
      ),
      label: "Download",
      dataTestId: "download-menu",
      ariaLabel: "download option",
    },
    {
      id: "share",
      icon: (
        <IconButton
          sx={{ width: 24, height: 24, p: 0 }}
          data-testid="share-menu"
        >
          <Image alt="" src={iconShare} width={18} height={18} />
        </IconButton>
      ),
      label: "Share",
      dataTestId: "share-menu",
      ariaLabel: "share option",
    },
    {
      id: "print",
      icon: (
        <PrintOutlinedIcon
          sx={{ color: "#003B4A", width: "23px", height: "23px" }}
        />
      ),
      label: "Print",
      dataTestId: "print-menu",
      ariaLabel: "print option",
    },
  ];
  const handleMenuClick = (event, row, rowIdx) => {
    setMoreMenuIdx(rowIdx);
    setAnchorEl(event.currentTarget);
    setActiveMenuData(row);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setTimeout(() => {
      inputRef.current[moreMenuIdx]?.focus();
    }, 40);
  };
  const isMenuOpen = Boolean(anchorEl);
  const handleMoreMenu = async (action, row) => {
    setAnchorEl(null);
    switch (action) {
      case "download":
        onAssetDownload(ref(row, "digital_assets._id"));
        break;
      case "print":
        onAssetDownload(ref(row, "digital_assets._id"), true);
        break;
      case "share":
        onShareDocument(row);
        break;
      default:
        break;
    }
  };

  // Account Recovery menus
  const [anchorAccountRecoveryEl, setAnchorAccountRecoveryEl] =
    React.useState(null);
  const handleAccountRecoveryMenuClick = (event, row) => {
    setAnchorAccountRecoveryEl(event.currentTarget);
    setActiveMenuData(row);
  };
  const isAccountRecoveryMenuOpen = Boolean(anchorAccountRecoveryEl);
  const handleAccountRecoveryMoreMenu = async (action, row) => {
    setAnchorAccountRecoveryEl(null);
    onActionClicked(action, row);
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
    const dateValue = moment(
      ref(tabelData.row, tabelData.cell.valueKey)
    ).format(format);
    return (
      <>
        <div
          style={tabelData.cell.contentStyle}
          className={[styles.tableCell, tabelData.cell.contentClass].join(" ")}
          aria-label={dateValue}
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
      const assetId = ref(row, cell.additionalValueKey);
      return (
        <div
          role="button"
          className={assetId ? styles.actionText : styles.actionTextDisable}
          aria-label={ref(row, cell.valueKey)}
          onClick={() => {
            if (assetId) {
              cell.onClick(assetId);
            }
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
                {cell.customTooltipText ? cell.customTooltipText : "Download"}
              </Typography>
            }
            placement="top"
          >
            <div
              onClick={() => {
                const assetId = ref(row, cell.valueKey);
                onAssetDownload(assetId);
              }}
              aria-label="Download"
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
              aria-label="Download"
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
                ...(cell.cellProps?.sxButton || {}),
              }}
              aria-label="more option"
              onClick={(event) => handleMenuClick(event, row, rowIdx)}
              ref={(el) => (inputRef.current[rowIdx] = el)}
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
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              onClose={handleCloseMenu}
              data-testid={TEST_ID.MEDICAL_RECORD.moreMenu}
              open={isMenuOpen}
            >
              {MyOptions.map((more, moreIdx) => (
                <MenuItem
                  key={`menu-${moreIdx}`}
                  onClick={() => handleMoreMenu(more.id, activeMenuData)}
                  aria-label={`${more.ariaLabel}`}
                  aria-live="polite"
                >
                  {more.icon}
                  <Typography
                    textAlign="center"
                    sx={{
                      margin: "0 8px",
                      fontFamily: "Museo Sans",
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
            {ref(row, cell.valueKey) ? (
              renderCTAIcon(
                () => {
                  handleMoreMenu("download", row);
                },
                () => {
                  handleMoreMenu("print", row);
                },
                () => {
                  handleMoreMenu("share", row);
                },
                ["download", "print", "share"],
                styles.butttonIconContainer
              )
            ) : (
              <></>
            )}
          </>
        );
      case "date":
        return getDateTabelCell({ rowIdx, cellIdx, cell, row }, "date");
      case "date-time":
        return getDateTabelCell({ rowIdx, cellIdx, cell, row }, "date-time");
      case "account-recovery-menu":
        return (
          <>
            <IconButton
              sx={{
                width: 24,
                height: 24,
                color: "black",
                m: 2,
              }}
              aria-label="more option"
              data-testid="table-cell-account-recovery-more-menu-btn"
              onClick={(e) => handleAccountRecoveryMenuClick(e, row)}
              aria-haspopup="true"
              aria-controls="menu-appbar"
            >
              <MoreHoriz />
            </IconButton>
            <MenuAccountRecoveryMore
              keepMounted
              anchorEl={anchorAccountRecoveryEl}
              onClose={handleAccountRecoveryMoreMenu}
              open={isAccountRecoveryMenuOpen}
              activeMenuData={activeMenuData}
              onMoreClicked={handleAccountRecoveryMoreMenu}
            />
          </>
        );
      case "unlock-button":
        return (
          <Button
            startIcon={<LockOutlinedIcon />}
            variant="contained"
            onClick={() => {
              onActionClicked(ref(row, cell.valueKey));
            }}
            sx={{
              height: "36px",
              background: "#007E8F !important",
              borderRadius: "30px",
              padding: "8px 16px",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "18px",
              color: "white",
              textTransform: "unset",
            }}
          >
            Unlock
          </Button>
        );
      case "user-status":
        return (
          <div
            style={cell.contentStyle}
            tabIndex={0}
            aria-label={`${cell.valueKey}. ${ref(row, cell.valueKey)}`}
            className={[styles.tableCell, cell.contentClass].join(" ")}
          >
            {getUserStatus(ref(row, cell.valueKey))}
          </div>
        );
      case "button-icon-text":
        return <>{cell.children(row)}</>;
      case "text":
      default:
        return (
          <div
            style={cell.contentStyle}
            className={[styles.tableCell, cell.contentClass].join(" ")}
            tabIndex={0}
          >
            {getTextValue(row, cell)}
          </div>
        );
    }
  };

  const handleChangePage = (_event, newPage) => {
    setPageNumber(newPage);
  };
  const inputRef = React.useRef([]);

  return (
    <>
      <TableContainer sx={{ boxShadow: "none" }} data-testid="table-container">
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
              fontSize: "14px",
            },
            ".MuiTableRow-root td:first-of-type": {
              borderLeft: "2px solid #F3F3F3",
            },
            ".MuiTableRow-root td:last-of-type": {
              borderRight: "2px solid #F3F3F3",
            },
            ".MuiTableBody-root .MuiTableCell-root": {
              color: "#191919",
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
              .slice(
                withNavigation ? pageNumber * rowsPerPage : 0,
                withNavigation
                  ? pageNumber * rowsPerPage + rowsPerPage
                  : rows.length
              )
              .map((row, rowIdx) => {
                const isItemSelected = isSelected(row.id || row._id);
                return mobileTestLab ? (
                  <TableRow>
                    <TableCell colspan={3}>
                      <Grid container spacing={2}>
                        <Grid tabIndex={0} xs={4} p={2}>
                          {row.data.testingOrder.orderDetails.testType.name}
                        </Grid>
                        <Grid xs={4} p={2}>
                          {
                            row.data.testingOrder.orderDetails.orderingProvider
                              .firstName
                          }
                        </Grid>
                        <Grid xs={4} p={2} sx={{ paddingLeft: "40px" }}>
                          {moment(
                            row.data.testingOrder.orderDetails.dateTime
                              .startDate
                          ).format("MM/DD/YYYY")}
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
            {!withNavigation && emptyRows > 0 && (
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
      {withNavigation && (
        <TablePagination
          rowsPerPageOptions={[10]}
          labelRowsPerPage={""}
          labelDisplayedRows={({ count, page }) => {
            return `${page + 1} of ${Math.ceil(count / rowsPerPage)}`;
          }}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={pageNumber}
          onPageChange={handleChangePage}
        />
      )}
    </>
  );
}
