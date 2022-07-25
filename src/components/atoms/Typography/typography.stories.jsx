import React from "react";
import { Typography as MUITypography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { patientTypography, providerTypography } from "../../../styles/theme";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Typography",
  component: MUITypography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    theme: {
      options: ["patient", "provider"],
      control: { type: "radio" },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <ThemeProvider
    theme={args.theme === "patient" ? patientTypography : providerTypography}
  >
    <MUITypography variant={args.variant}>{args.content}</MUITypography>
  </ThemeProvider>
);

export const H1 = Template.bind({});
H1.args = {
  theme: "patient",
  variant: "h1",
  content: "Our Services",
};

export const H2 = Template.bind({});
H2.args = {
  theme: "patient",
  variant: "h2",
  content: "Our Services",
};

export const H3 = Template.bind({});
H3.args = {
  theme: "patient",
  variant: "h3",
  content: "Our Services",
};

export const H4 = Template.bind({});
H4.args = {
  theme: "patient",
  variant: "h4",
  content: "Our Services",
};

export const BodyLarge = Template.bind({});
BodyLarge.args = {
  theme: "patient",
  variant: "bodyLarge",
  content:
    "Our doctors are committed to providing vision care to those who need it during this crisis. Our trusted team of highly trained eye care professionals focus on maintaining the health of your eyes with comprehensive eye care including routine eye exams, preventative care and treatment.",
};

export const BodyRegular = Template.bind({});
BodyRegular.args = {
  theme: "patient",
  variant: "bodyRegular",
  content:
    "Our doctors are committed to providing vision care to those who need it during this crisis. Our trusted team of highly trained eye care professionals focus on maintaining the health of your eyes with comprehensive eye care including routine eye exams, preventative care and treatment.",
};

export const BodySmallRegular = Template.bind({});
BodySmallRegular.args = {
  theme: "patient",
  variant: "bodySmallRegular",
  content:
    "Our doctors are committed to providing vision care to those who need it during this crisis. Our trusted team of highly trained eye care professionals focus on maintaining the health of your eyes with comprehensive eye care including routine eye exams, preventative care and treatment.",
};

export const BodySmallMedium = Template.bind({});
BodySmallMedium.args = {
  theme: "patient",
  variant: "bodySmallMedium",
  content:
    "Our doctors are committed to providing vision care to those who need it during this crisis. Our trusted team of highly trained eye care professionals focus on maintaining the health of your eyes with comprehensive eye care including routine eye exams, preventative care and treatment.",
};

export const BodyTinyRegular = Template.bind({});
BodyTinyRegular.args = {
  theme: "patient",
  variant: "bodyTinyRegular",
  content:
    "Our doctors are committed to providing vision care to those who need it during this crisis. Our trusted team of highly trained eye care professionals focus on maintaining the health of your eyes with comprehensive eye care including routine eye exams, preventative care and treatment.",
};

export const BodyTinyMedium = Template.bind({});
BodyTinyMedium.args = {
  theme: "patient",
  variant: "bodyTinyMedium",
  content:
    "Our doctors are committed to providing vision care to those who need it during this crisis. Our trusted team of highly trained eye care professionals focus on maintaining the health of your eyes with comprehensive eye care including routine eye exams, preventative care and treatment.",
};
