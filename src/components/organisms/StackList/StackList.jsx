import {
  Divider,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";
import React from "react";
import { useEffect } from "react";
import { renderCTAIcon } from "../../molecules/Dashboard/prescriptions";
import styles from "./styles.module.scss";

const StackList = ({
  dataList = [],
  onAssetDownload = () => {},
  sortFilterData = [],
}) => {
  const [sortBy, setSortBy] = React.useState("");
  const [sortDataList, setSortDataList] = React.useState([]);

  const handleChange = (event) => {
    setSortBy(event.target.value);
    setSortDataList(onSortData(event.target.value));
  };

  function onSortData(value) {
    if (dataList && dataList.length > 0) {
      let sortResult = [...dataList];
      const splitValue = value.split("-");

      if (splitValue[1] === "asc") {
        if (splitValue[0] === "date") {
          sortResult.sort(
            (objA, objB) =>
              new Date(objA._created).getTime() -
              new Date(objB._created).getTime()
          );
        } else {
          sortResult.sort((objA, objB) => (objA.name > objB.name ? 1 : -1));
        }
      } else {
        if (splitValue[0] === "date") {
          sortResult.sort(
            (objA, objB) =>
              new Date(objB._created).getTime() -
              new Date(objA._created).getTime()
          );
        } else {
          sortResult.sort((objA, objB) => (objA.name > objB.name ? -1 : 1));
        }
      }
      return sortResult;
    }
    return [];
  }

  useEffect(() => {
    if (sortFilterData && sortFilterData.length > 0) {
      setSortBy(sortFilterData[0].value);
      setSortDataList(onSortData(sortFilterData[0].value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataList]);

  function getUIList(data, idx) {
    return (
      <Stack key={`${idx}-stack-list`} className={styles.stackContainer}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          className={styles.stackContent}
        >
          <Typography className={styles.titleStyle}>Medical Record</Typography>
          <Typography
            className={styles.valueName}
            onClick={() => {
              onAssetDownload(data?.digitalSignature._id);
            }}
          >
            {data.name}
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          className={styles.stackContent}
        >
          <Typography className={styles.titleStyle}>
            Appointment Date
          </Typography>
          <Typography className={styles.valueStyle}>
            {new moment(data._created).format("MM/DD/YYYY | hh:mmA")}
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          className={styles.stackContent}
        >
          <Typography className={styles.titleStyle}>Provider</Typography>
          <Typography className={styles.valueStyle}>
            {`${data?.digitalSignature?.firstName} ${data?.digitalSignature?.lastName}`}
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          className={styles.stackContent}
        >
          <Typography className={styles.titleStyle}>Visit Purpose</Typography>
          <Typography className={styles.valueStyle}>
            {data.examSheetTemplate?.appointmentType}
          </Typography>
        </Stack>
        <Divider />
        <Stack
          direction={"row"}
          justifyContent={"flex-end"}
          className={styles.stackContentButton}
        >
          {renderCTAIcon(
            () => {
              onAssetDownload(data?.digitalSignature._id);
            },
            () => {
              onAssetDownload(data?.digitalSignature._id, true);
            },
            async () => {
              const shareData = {
                title: data.name,
                text: data.name,
                url: data.digitalSignature._id
                  ? `${window.location.origin}/patient/download/${data?.digitalSignature._id}`
                  : "/",
              };
              if (navigator.share) {
                await navigator.share(shareData);
              }
            },
            ["download", "print", "share"],
            styles.butttonIconContainer
          )}
        </Stack>
      </Stack>
    );
  }

  return (
    <>
      <Stack direction={"row"} className={styles.sortContainer} spacing={2}>
        <Typography className={styles.sortLabel}>Sort By</Typography>
        <FormControl
          sx={{ m: 1, minWidth: 120, flex: 1, backgroundColor: "#fff" }}
        >
          <Select
            data-testid={"sort-button-data"}
            value={sortBy}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            className={styles.dropdownLabel}
            sx={{
              ".MuiSelect-select": {
                alignItems: "center",
                display: "flex",
              },
            }}
          >
            {sortFilterData.map((data, idx) => {
              return (
                <MenuItem key={`sort-menu-${idx}`} value={data.value}>
                  {data.label}
                  {data.labelIcon}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Stack>
      {sortDataList.map((data, idx) => {
        return getUIList(data, idx);
      })}
    </>
  );
};

export default StackList;
