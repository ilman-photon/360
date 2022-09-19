import * as React from "react";
import TestLabResult from "../../../components/organisms/TestLabResult/testLabResult";

import AccountTitleHeading from "../../../components/atoms/AccountTitleHeading/accountTitleHeading";
import styles from "./styles.module.scss";

import BaseHeader from "../../../components/organisms/BaseHeader/baseHeader";

import {
  Button,
  Grid,
  Box,
  Divider,
  useMediaQuery,
  Stack,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../../store/store";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  DEFAULT_PATIENT_INFO_DATA,
  editAppointmentScheduleData,
  resetAppointmentSchedule,
  resetFilterData,
} from "../../../store/appointment";
import { fetchUser, setUserAppointmentDataByIndex } from "../../../store/user";
import { Api } from "../../api/api";
import MESSAGES from "../../../utils/responseCodes";
import { setFormMessage } from "../../../store";
import { TEST_ID } from "../../../utils/constants";
import { StyledButton } from "../../../components/atoms/Button/button";
import { colors } from "../../../styles/theme";

export default function testLabPage() {
  const isDesktop = useMediaQuery("(min-width: 769px)");

  return (
    <section style={{ paddingTop: "64px" }}>
      <BaseHeader />
      <AccountTitleHeading title={"Test & Lab Results"} />
      <Grid
        width="100%"
        container
        className={styles.container}
        sx={isDesktop ? { p: "24px 40px" } : { p: 0 }}
      >
        <div className={styles.pageWrapper}>
          <TestLabResult />
        </div>
      </Grid>
    </section>
  );
}

testLabPage.getLayout = function getLayout(page) {
  return <Provider store={store}>{page}</Provider>;
};
