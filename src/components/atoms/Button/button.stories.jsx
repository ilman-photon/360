import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StyledButton } from "./button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: StyledButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    theme: {
      options: ["patient", "provider"],
      control: { type: "radio" },
    },
    type: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "large"],
      control: { type: "radio" },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <StyledButton {...args}>{args.label}</StyledButton>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  theme: "patient",
  type: "primary",
  size: "large",
  gradient: false,
  label: "button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: "patient",
  type: "secondary",
  size: "large",
  gradient: false,
  label: "button",
};
