import React from "react";

import { AddButton } from "majr-react";
import "majr-react/dist/index.css";
// Onclick function
export default {
  title: "Add Button",
  component: AddButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <AddButton {...args} />;
export const Main = Template.bind({});
Main.args = {
  onClick: () => { },
};
