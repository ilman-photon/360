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
import moment from "moment";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import CommonCard from "./commonCard";
import Slider from "react-slick";
import ImageFallback from "../../atoms/Image/image";
import TableEmpty from "../../atoms/TableEmpty/tableEmpty";
import { Api } from "../../../pages/api/api";
import { useEffect } from "react";
import { fetchSource } from "../../../utils/fetchDigitalAssetSource";

export default function EducationMaterialCard() {
  const [educationMaterialData] = React.useState([]);
  const isDesktop = useMediaQuery("(min-width: 700px)");

  const settings = {
    dots: false,
    infinite: false,
    arrows: isDesktop,
    speed: 500,
    slidesToShow: isDesktop ? 1 : 1.3,
    slidesToScroll: 1,
  };

  function onCalledGetEducationMaterialsData() {
    const api = new Api();
    api
      .getEducationMaterial(false)
      .then(function (response) {
        if (response && response?.entities.length > 0) {
          const listData = [];
          for (const item of response?.entities) {
            listData.push({
              id: item._id,
              title: item.name,
              imgSrc: "/image166.png",
              author: `${item.uploadedBy?.firstName} ${item.uploadedBy?.lastName}`,
              date: new moment(item._created).format("MMM dd, yyyy"),
              digital_assets: item.digital_assets,
              desc: "",
            });
          }
          setEducationMaterialData(listData);
        }
      })
      .catch(() => {
        //Handle error code
      });
  }

  useEffect(() => {
    onCalledGetEducationMaterialsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAssetDownload = (id, isPrint = false) => {
    fetchSource(id, isPrint);
  };

  function renderDekstopView() {
    const tableEmptyStyle = !isDesktop
      ? { m: "16px", textAlign: "center" }
      : { margin: "24px 0 8px 0" };
    return (
      <>
        {educationMaterialData && educationMaterialData.length > 0 ? (
          <Box
            sx={{
              padding: isDesktop ? "16px 64px" : "0px",
              height: "100%",
            }}
            className={"slickContainer"}
          >
            <Slider {...settings} style={{ height: "100%" }}>
              {educationMaterialData.map((item) => (
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
                      <Stack
                        sx={{
                          display: "flex",
                          height: "60%",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          className={styles.materialDescription}
                          tabIndex={0}
                        ></Typography>
                        <Stack
                          direction={"row"}
                          className={styles.menuContainer}
                        >
                          <IconButton
                            className={styles.menuItem}
                            aria-label={"download"}
                            onClick={() => {
                              handleAssetDownload(item?.digital_assets?._id);
                            }}
                          >
                            <FileDownloadOutlinedIcon
                              sx={{ color: "#003B4A" }}
                              aria-hidden="false"
                            />
                          </IconButton>
                          <IconButton
                            className={styles.menuItem}
                            aria-label={"print"}
                            onClick={() => {
                              handleAssetDownload(
                                item?.digital_assets?._id,
                                true
                              );
                            }}
                          >
                            <LocalPrintshopOutlinedIcon
                              sx={{ color: "#003B4A" }}
                              aria-hidden="false"
                            />
                          </IconButton>
                        </Stack>
                      </Stack>
                    </Grid>
                  </Grid>
                </>
              ))}
            </Slider>
          </Box>
        ) : (
          <Box
            sx={{
              padding: isDesktop ? "16px" : "0px",
              height: "100%",
            }}
            className={"slickContainer"}
          >
            <TableEmpty
              text={"There is no educational material document."}
              sxContainer={tableEmptyStyle}
            />
          </Box>
        )}
      </>
    );
  }
  return (
    <CommonCard
      title={"Patient Education"}
      titleIcon={
        <SchoolOutlinedIcon sx={{ color: "#003B4A" }} aria-hidden="false" />
      }
      content={renderDekstopView()}
      navRouter={"/patient/education-materials"}
      viewAllText={"View Education Materials"}
    />
  );
}
