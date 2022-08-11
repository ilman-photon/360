import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import {
  Avatar,
  Button,
  Divider,
  Fade,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import LabelWithInfo from "../../atoms/LabelWithInfo/labelWithInfo";
import AccountCard from "../../molecules/AccountCard/accountCard";
import styles from "./insuranceInformationNew.module.scss";
import { useForm, Controller } from "react-hook-form";
import { StyledInput } from "../../atoms/Input/input";
import { colors } from "../../../styles/theme";

import * as React from "react";
import Image from "next/image";
import { Regex } from "../../../utils/regex";
import RowRadioButtonsGroup from "../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import SelectOptionButton from "../../atoms/SelectOptionButton/selectOptionButton";

import InsuranceForm from "./insuranceForm";
import InsuranceView from "./insuranceView";

export default function InsuranceDocument({
  isEditing = true,
  OnSaveClicked = (data) => {
    // This is intended
  },
  OnCancelEditClicked = () => {
    // This is intended
  },
  OnEditClicked = () => {
    // This is intended
  },
}) {
  const DEFAULT_CONTACT_INFO = {
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    preferredCommunication: "both",
  };

  const { handleSubmit, control, watch, reset } = useForm({
    defaultValues: DEFAULT_CONTACT_INFO,
  });

  const priorityOptions = [
    { label: "Primary", value: "Primary" },
    { label: "Secondary", value: "Secondary" },
    { label: "Tertiary", value: "Tertiary" },
  ];

  const [watchedEmail, watchedMobile, watchedPreferredCommunication] = watch([
    "email",
    "mobile",
    "preferredCommunication",
  ]);

  const relationshipList = ["Single", "Double"];

  const handleCancel = () => {
    reset(DEFAULT_CONTACT_INFO);
    OnCancelEditClicked();
  };

  const onSubmit = (data) => {
    OnSaveClicked(data);
  };

  return (
    <AccountCard
      titleIcon={<PermContactCalendarOutlinedIcon />}
      title="Insurance Documents"
      OnAddInsurance={true}
    >
      <InsuranceView
        isEditing={isEditing}
        OnEditClicked={(_) => OnEditClicked(true)}
      />

      <InsuranceForm
        isEditing={isEditing}
        OnCancelEditClicked={(_) => OnCancelEditClicked(false)}
        OnSaveClicked={(_) => OnSaveClicked(false)}
      />
    </AccountCard>
  );
}
