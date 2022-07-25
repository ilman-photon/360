import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LabelWithIcon } from "./labelWithIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/LabelWithIcon",
  component: LabelWithIcon,
} as ComponentMeta<typeof LabelWithIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LabelWithIcon> = (args) => (
  <LabelWithIcon {...args} />
);

export const ErrorLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ErrorLabel.args = {
  error: true,
  label:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
};

export const SuccessLabel = Template.bind({});
SuccessLabel.args = {
  error: false,
  label:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
};
