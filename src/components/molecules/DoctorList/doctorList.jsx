import {
  Box,
  CircularProgress,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CareTeamCard from "../CareTeamCard/careTeamCard";
import InfiniteScroll from "react-infinite-scroller";
import { useState } from "react";

export default function DoctorList({
  providerData,
  showNumberResult,
  coordinate,
}) {
  const itemsPerPage = providerData.length < 6 ? providerData.length : 6;
  const [hasMore, setHasMore] = useState(true);
  const [records, setrecords] = useState(itemsPerPage);

  const isMobile = useMediaQuery("(max-width: 600px)");

  const loadMore = () => {
    if (records === providerData.length) {
      setHasMore(false);
    } else {
      const newRecords = records + itemsPerPage;
      if (newRecords > providerData.length) {
        setrecords(providerData.length);
      } else {
        setrecords(newRecords);
      }
    }
  };

  const showItems = (providerItem) => {
    const items = [];
    for (let i = 0; i < records; i++) {
      if (records <= providerData.length) {
        items.push(
          <Grid
            item
            xs={12}
            sm={6}
            key={i}
            sx={{
              pl: 2,
              pb: 2,
              maxWidth:
                (providerData.length === 1 || isMobile) && "100% !important",
              flexBasis:
                (providerData.length === 1 || isMobile) && "100% !important",
            }}
          >
            <CareTeamCard provider={providerItem[i]} coordinate={coordinate} />
          </Grid>
        );
      } else {
        break;
      }
    }
    return items;
  };

  return (
    <Box bgcolor={"white"}>
      {showNumberResult && (
        <Typography
          variant="h2"
          sx={{
            fontWeight: 400,
            fontSize: {
              xs: "22px",
              md: "26px",
            },
            lineHeight: "32px",
            paddingTop: {
              xs: "16px",
              md: "32px",
            },
            marginLeft: {
              xs: "16px",
              md: "24px",
            },
          }}
        >
          {`${providerData.length} Results found with your search criteria`}
        </Typography>
      )}
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        sx={{
          "&.MuiGrid-container": {
            padding: {
              xs: "16px",
              sm: "32px 24px 24px 24px",
            },
          },
        }}
      >
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
            width: isMobile ? "100%" : providerData.length === 1 && "50%",
          }}
        >
          {showItems(providerData)}
        </InfiniteScroll>
      </Grid>
    </Box>
  );
}
