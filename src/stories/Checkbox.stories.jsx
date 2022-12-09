import React from "react";

import { Checkbox } from "majr-react";
import "majr-react/dist/index.css";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    checkbox: { control: { type: "array" } },
    setCheckbox: { control: { type: "function" } },
    index: { control: { type: "number" } },
    variant: { control: { type: "select", options: ["light", "dark"] } },
  },
};

const Template = (args) => (
  <>
    {Array.from(Array(3).keys()).map((_, i) => (
      <Checkbox {...args} index={i} />
    ))}
  </>
);
export const Primary = Template.bind({});
Primary.args = {
  checkbox: [false, true, false],
  setCheckbox: () => { },
  variant: "light",
};

export const Secondary = Template.bind({});
Secondary.args = {
  checkbox: [false, false, false],
  setCheckbox: () => { },
  variant: "dark",
};
