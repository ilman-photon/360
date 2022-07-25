import React from "react";

import FormMessage from "./formMessage";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/FormMessage",
  component: FormMessage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={{ maxWidth: "322px" }}>
    <FormMessage {...args} success={args.success}>
      {args.content}
    </FormMessage>
  </div>
);

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
  content:
    "You are already a registered user. Please login to the application using your username and password.",
  success: true,
};

export const Error = Template.bind({});
Error.args = {
  content:
    "You have registered. We have sent a link to set your password on the email below.",
  success: false,
};
