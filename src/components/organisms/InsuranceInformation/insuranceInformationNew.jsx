/* eslint-disable jsx-a11y/aria-unsupported-elements */
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Box, Stack, Typography } from "@mui/material";
import Head from "next/head";
import AccountCard from "../../molecules/AccountCard/accountCard";
import InsuranceForm from "./insuranceForm";

export default function InsuranceInformationNew({
  OnCreateInsurance = () => {
    // This is intended
  },
  OnCancelEditClicked = () => {
    // This is intended
  },
  providerList = [],
  planList = [],
  isAutocompleteLoading = false,
  patientId,
  OnProviderChanged,
}) {
  return (
    <Box
      sx={{
        border: "2px solid #F3F3F3",
      }}
    >
      <Head>
        <title role={"alertdialog"} aria-live="assertive">
          Insurance Documents page
        </title>
      </Head>
      <AccountCard
        titleIcon={<AccountCircleOutlinedIcon aria-hidden="false" />}
        title="Insurance Documents "
        textStyle={{ fontWeight: "700" }}
      >
        <Stack spacing={2}>
          <Typography variant="bodyLarge">
            You have no insurance on file.
          </Typography>
          <InsuranceForm
            providerList={providerList}
            planList={planList}
            memberId={patientId}
            isAutocompleteLoading={isAutocompleteLoading}
            OnProviderChanged={OnProviderChanged}
            OnCancelEditClicked={(_) => OnCancelEditClicked(false)}
            OnSaveClicked={OnCreateInsurance}
          />
        </Stack>
      </AccountCard>
    </Box>
  );
}
