import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import { Button } from "@mui/material";
import AccountCard from "../../molecules/AccountCard/accountCard";
import styles from "./InsuranceInformationNew.module.scss";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import InsuranceForm from "./insuranceForm";
import InsuranceView from "./insuranceView";

export default function InsuranceInformationNew({
  userData = {},
  isEditing = false,
  OnSaveClicked = () => {
    // This is intended
  },
  OnCancelEditClicked = () => {
    // This is intended
  },
  OnEditClicked = () => {
    // This is intended
  },
}) {
  return (
    <AccountCard
      titleIcon={<PermContactCalendarOutlinedIcon />}
      title="Insurance Documents"
      isEditing={isEditing}
      actionContent={
        <Button
          onClick={OnEditClicked}
          variant="text"
          className={styles.addInsuranceButton}
        >
          <AddIcon sx={{ width: 20, height: 20 }} />
          Add Insurance
        </Button>
      }
    >
      <InsuranceView
        isEditing={isEditing}
        OnEditClicked={(_) => OnEditClicked(true)}
        userData={userData}
      />

      <InsuranceForm
        isEditing={isEditing}
        OnCancelEditClicked={(_) => OnCancelEditClicked(false)}
        OnSaveClicked={OnSaveClicked}
        userData={userData}
      />
    </AccountCard>
  );
}
