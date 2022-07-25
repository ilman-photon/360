import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Checkboxes } from "./checboxes";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Checkboxes",
  component: Checkboxes,
} as ComponentMeta<typeof Checkboxes>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkboxes> = (args) => (
  <Checkboxes {...args} />
);

export const Unselected = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unselected.args = {
  selected: false,
  disable: false,
  label: "Checkboxes",
};

export const UnselectedDisabled = Template.bind({});
UnselectedDisabled.args = {
  selected: false,
  disable: true,
  label: "Checkboxes",
};

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
  disable: false,
  label: "Checkboxes",
};

export const SelectedDisabled = Template.bind({});
SelectedDisabled.args = {
  selected: true,
  disable: true,
  label: "Checkboxes",
};
