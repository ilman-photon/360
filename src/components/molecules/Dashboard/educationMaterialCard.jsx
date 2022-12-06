import * as React from "react";
import styles from "./styles.module.scss";
import {
  Box,
  Stack,
  useMediaQuery,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import { useEffect } from "react";
import moment from "moment";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import CommonCard from "./commonCard";
import Slider from "react-slick";
import ImageFallback from "../../atoms/Image/image";

export default function EducationMaterialCard({}) {
  const [educationMaterialData, setEducationMaterialData] = React.useState([]);
  const isDesktop = useMediaQuery("(min-width: 700px)");

  useEffect(() => {
    setEducationMaterialData([
      {
        image: "",
        title: "Guide To Macular Degeneration Surgery",
        date: "10/22/2022",
        descriptionn:
          "Age-related macular degeneration is an eye condition that can affect central vision. Macular degeneration surgery can help prevent further vision loss ...",
      },
      {
        image: "",
        title: "Guide To Macular Degeneration Surgery",
        date: "10/22/2022",
        descriptionn:
          "Age-related macular degeneration is an eye condition that can affect central vision. Macular degeneration surgery can help prevent further vision loss ...",
      },
      {
        image: "",
        title: "Guide To Macular Degeneration Surgery",
        date: "10/22/2022",
        descriptionn:
          "Age-related macular degeneration is an eye condition that can affect central vision. Macular degeneration surgery can help prevent further vision loss ...",
      },
    ]);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    arrows: isDesktop,
    speed: 500,
    slidesToShow: isDesktop ? 1 : 1.3,
    slidesToScroll: 1,
  };

  function renderDekstopView() {
    return (
      <Box
        sx={{
          padding: isDesktop ? "16px 64px" : "0px",
          height: "100%",
        }}
        className={"slickContainer"}
      >
        <Slider {...settings} style={{ height: "100%" }}>
          {educationMaterialData.map((item, idx) => (
            <>
              <Grid
                container
                columns={3}
                sx={{
                  padding: isDesktop ? "8px 0px !important" : "unset",
                }}
              >
                <Grid item xs={3} sm={1} className={styles.slackGridItem}>
                  <Box sx={{ width: "100%" }}>
                    <ImageFallback
                      source={""}
                      width={250}
                      height={233}
                      objectFit="cover"
                      tabIndex={0}
                      alt="Material Image"
                      fallbackSrc={"/ex_education.png"}
                      aria-label="Material image"
                      priority
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sm={2}
                  className={styles.slackGridItem}
                  sx={{
                    paddingLeft: "32px",
                    " @media (max-width: 767px)": {
                      paddingLeft: "0px",
                    },
                  }}
                >
                  <Typography className={styles.materialTitle} tabIndex={0}>
                    {item.title}
                  </Typography>
                  <Typography className={styles.materialDate} tabIndex={0}>
                    {new moment(item.date).format("MMMM DD, YYYY")}
                  </Typography>
                  <Typography className={styles.materialDescription} tabIndex={0}>
                    {item.descriptionn}
                  </Typography>
                  <Stack direction={"row"} className={styles.menuContainer}>
                    <IconButton className={styles.menuItem} aria-label={"download"}>
                      <FileDownloadOutlinedIcon
                        sx={{ color: "#003B4A" }}
                        aria-hidden="false"
                      />
                    </IconButton>
                    <IconButton className={styles.menuItem} aria-label={"print"}>
                      <LocalPrintshopOutlinedIcon
                        sx={{ color: "#003B4A" }}
                        aria-hidden="false"
                      />
                    </IconButton>
                  </Stack>
                </Grid>
              </Grid>
            </>
          ))}
        </Slider>
      </Box>
    );
  }
  return (
    <CommonCard
      title={"Patient Education"}
      titleIcon={
        <SchoolOutlinedIcon sx={{ color: "#003B4A" }} aria-hidden="false" />
      }
      content={renderDekstopView()}
      navRouter={"/patient"}
      viewAllText={"View Education Materials"}
    />
  );
}
