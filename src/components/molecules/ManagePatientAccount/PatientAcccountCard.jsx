import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import moment from "moment/moment";
import React from "react";
import MenuAccountRecoveryMore from "../MenuAccountRecoveryMore/menuAccountRecoveryMore";
import {
  ArrowDownward,
  ArrowUpward,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { colors } from "../../../styles/theme";
import {
  getComparator,
  getUserStatus,
  ref,
  stableSort,
} from "../TableWithSort/tableWithSort";
import InfiniteScroll from "react-infinite-scroller";

export default function PatientAcccountCard({
  config,
  rows,
  onActionClicked = () => {
    //this is intentional
  },
  additionalContent = () => <></>,
  showResultNum = true,
  cardSx = {},
  sortSx = {},
}) {
  const [activeMenuData, setActiveMenuData] = React.useState({});
  const [selectedSort, setSelectedSort] = React.useState("");
  const [anchorAccountRecoveryEl, setAnchorAccountRecoveryEl] =
    React.useState(null);
  const [sortedRows, setSortedRows] = React.useState([]);
  const [sortOptions, setSortOptions] = React.useState();

  const itemsPerPage = rows.length < 10 ? rows.length : 10;
  const [hasMore, setHasMore] = React.useState(true);
  const [records, setrecords] = React.useState(itemsPerPage);

  const loadMore = () => {
    if (records === rows.length) {
      setHasMore(false);
    } else {
      const newRecords = records + itemsPerPage;
      if (newRecords > rows.length) {
        setrecords(rows.length);
      } else {
        setrecords(newRecords);
      }
    }
  };

  const renderMenuItemContent = ({ type, title }) => {
    return (
      <Typography variant="bodyRegular" sx={sortStyles.typography}>
        {title}
        {type === "asc" ? (
          <ArrowUpward sx={sortStyles.icon} />
        ) : (
          <ArrowDownward sx={sortStyles.icon} />
        )}
      </Typography>
    );
  };

  const sortStyles = {
    typography: {
      color: colors.inputPlaceholderDark,
      fontWeight: 400,
      display: "flex",
      alignItems: "center",
    },
    icon: {
      color: colors.blackInactive,
      width: 16,
      height: 16,
      ml: "10px",
    },
  };

  React.useEffect(() => {
    const splitted = selectedSort.split(" ");
    const sorted = stableSort(rows, getComparator(splitted[1], splitted[0]));
    setSortedRows(sorted);
    sortOptions === undefined && generateSortOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSort]);

  const generateSortOptions = () => {
    const sort = [];
    config.header.map((item) => {
      if (item.type !== "empty" && item.type !== "textNoSort") {
        sort.push(
          {
            label: renderMenuItemContent({
              type: "asc",
              title: item.label,
            }),
            value: `${item.id} asc`,
          },
          {
            label: renderMenuItemContent({
              type: "desc",
              title: item.label,
            }),
            value: `${item.id} desc`,
          }
        );
      }
    });

    setSortOptions(sort);
    setSelectedSort(sort[0].value);
  };

  const handleAccountRecoveryMenuClick = (event, row) => {
    setAnchorAccountRecoveryEl(event.currentTarget);
    setActiveMenuData(row);
  };
  const isAccountRecoveryMenuOpen = Boolean(anchorAccountRecoveryEl);
  const handleAccountRecoveryMoreMenu = async (action, row) => {
    setAnchorAccountRecoveryEl(null);
    onActionClicked(action, row);
  };

  const showItems = (patientItem) => {
    const data = [];
    for (let i = 0; i < records; i++) {
      if (records <= sortedRows.length) {
        const item = patientItem[i];
        data.push(
          <Box
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 2,
              background: "#FFFFFF",
              ...cardSx,
            }}
            key={`patient-${i}`}
          >
            {config.cells.map((cell, idx) => {
              switch (cell.type) {
                case "text":
                  return (
                    <Box
                      key={`row-${i}-cell-${idx}`}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        mb: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "14px",
                          lineHeight: "18px",
                          color: "#003B4A",
                          flex: 1,
                        }}
                      >
                        {
                          config.header.find(
                            (head) => head.id === cell.valueKey
                          ).label
                        }
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "16px",
                          lineHeight: "22px",
                          color: "#191919",
                          textAlign: "end",
                          flex: 1,
                          ...cell.sx,
                        }}
                      >
                        {ref(item, cell.valueKey)}
                      </Typography>
                    </Box>
                  );
                case "date":
                  return (
                    <Box
                      key={`row-${i}-cell-${idx}`}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        mb: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "14px",
                          lineHeight: "18px",
                          color: "#003B4A",
                          flex: 1,
                        }}
                      >
                        {
                          config.header.find(
                            (head) => head.id === cell.valueKey
                          ).label
                        }
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "16px",
                          lineHeight: "22px",
                          color: "#191919",
                          flex: 1,
                          textAlign: "end",
                          ...cell.sx,
                        }}
                      >
                        {moment(ref(item, cell.valueKey)).format("MM/DD/YYYY")}
                      </Typography>
                    </Box>
                  );
                case "user-status":
                  return (
                    <Box
                      key={`row-${i}-cell-${idx}`}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        mb: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "14px",
                          lineHeight: "18px",
                          color: "#003B4A",
                          flex: 1,
                        }}
                      >
                        Status
                      </Typography>
                      {getUserStatus(ref(item, cell.valueKey))}
                    </Box>
                  );
                case "unlock-button":
                  return (
                    <Stack
                      key={`row-${i}-cell-${idx}`}
                      sx={{
                        borderTop: "0.5px solid #dadada",
                        pt: 2,
                      }}
                    >
                      <Button
                        startIcon={<LockOutlinedIcon />}
                        variant="contained"
                        onClick={() => {
                          onActionClicked(ref(item, cell.valueKey));
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
                    </Stack>
                  );
                case "account-recovery-menu":
                  return (
                    <Box
                      key={`row-${i}-cell-${idx}`}
                      sx={{
                        borderTop: "0.5px solid #dadada",
                        pt: 2,
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <IconButton
                        sx={{
                          width: 24,
                          height: 24,
                          color: "black",
                          display: "flex",
                        }}
                        aria-label="more option"
                        onClick={(e) => handleAccountRecoveryMenuClick(e, item)}
                        aria-haspopup="true"
                        aria-controls="menu-appbar"
                      >
                        <MoreHoriz sx={{ fill: "#757575" }} />
                      </IconButton>
                      <MenuAccountRecoveryMore
                        keepMounted
                        anchorEl={anchorAccountRecoveryEl}
                        onClose={handleAccountRecoveryMoreMenu}
                        open={isAccountRecoveryMenuOpen}
                        activeMenuData={activeMenuData}
                        onMoreClicked={handleAccountRecoveryMoreMenu}
                      />
                    </Box>
                  );
              }
            })}
          </Box>
        );
      } else {
        break;
      }
    }
    return data;
  };

  return (
    <>
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          p: 2,
          backgroundColor: "#f3f5f6",
          gap: 2,
          mt: 0,
          ...sortSx,
        }}
      >
        <Typography
          sx={{
            whiteSpace: "nowrap",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "18px",
            color: colors.darkGreen,
          }}
        >
          Sort By
        </Typography>
        {sortOptions !== undefined && (
          <Select
            sx={{
              width: "100%",
              backgroundColor: "white",
              ".MuiInputBase-root": {
                color: "#A5A5AC",
              },
            }}
            IconComponent={KeyboardArrowDown}
            MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
          >
            {sortOptions.map((option, idx) => {
              return (
                <MenuItem key={idx} value={option.value}>
                  {option.label}
                </MenuItem>
              );
            })}
          </Select>
        )}
      </Stack>
      {additionalContent()}
      {showResultNum && (
        <Typography
          variant="headlineH4"
          tabIndex={0}
          sx={{ fontSize: "16px", p: 2, background: "white", mb: 0.1 }}
        >
          {`${rows.length} Results found using your search criteria`}
        </Typography>
      )}

      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={
          <Box
            sx={{
              m: "0 auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </Box>
        }
        style={{
          display: "inherit",
          flexWrap: "inherit",
          flexDirection: "inherit",
        }}
      >
        {showItems(sortedRows)}
      </InfiniteScroll>
    </>
  );
}
