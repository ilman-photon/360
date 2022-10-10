import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Box, Stack, Typography } from "@mui/material";
import AccountCard from "../../molecules/AccountCard/accountCard";
import InsuranceForm from "./insuranceForm";

export default function InsuranceInformationNew({
  OnCreateInsurance = () => {
    // This is intended
  },
  OnCancelEditClicked = () => {
    // This is intended
  },
  FormMessageEl,
  isShowError = false,
  providerList = [],
  planList = [],
  isAutocompleteLoading = false,
  OnProviderChanged,
}) {
  return (
    <Box
      sx={{
        border: "2px solid #F3F3F3",
      }}
    >
      <AccountCard
        titleIcon={<AccountCircleOutlinedIcon aria-hidden="false" />}
        title="Insurance Documents"
        textStyle={{ fontWeight: "700" }}
      >
        <Stack spacing={2}>
          {isShowError && FormMessageEl}
          <Typography variant="bodyLarge">
            You have no insurance on file
          </Typography>
          <InsuranceForm
            providerList={providerList}
            planList={planList}
            isAutocompleteLoading={isAutocompleteLoading}
            OnProviderChanged={OnProviderChanged}
            OnCancelEditClicked={(_) => OnCancelEditClicked(false)}
            OnSaveClicked={OnCreateInsurance}
            isError={isShowError}
          />
        </Stack>
      </AccountCard>
    </Box>
  );
}
