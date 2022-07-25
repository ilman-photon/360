import React from "react";

import { StyledInput } from "./input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Input",
  component: StyledInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
    variant: {
      options: ["outlined", "filled", "standard"],
      control: { type: "radio" },
    },
    type: {
      options: ["text", "password", "dob"],
      control: { type: "radio" },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <StyledInput {...args} />;

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
  type: "text",
  placeholder: "Email ID or Username",
  label: "",
  helperText: "",
  error: false,
  withIcon: false,
};

export const Password = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Password.args = {
  type: "password",
  placeholder: "******",
  label: "",
  helperText: "",
  error: false,
  withIcon: false,
};
