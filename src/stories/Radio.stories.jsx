import React from "react";

import { Radio } from "majr-react";
import "majr-react/dist/index.css";

export default {
  title: "Radio",
  component: Radio,
  argTypes: {
    radio: { control: { type: "array" } },
    setRadio: { control: { type: "function" } },
    index: { control: { type: "number" } },
    variant: { control: { type: "select", options: ["light", "dark"] } },
  },
};

const Template = (args) => (
  <>
    {
      Array.from(Array(3).keys()).map((_, i) => (
        <Radio {...args} index={i} />
      ))
    }
  </>
);
export const Primary = Template.bind({});
Primary.args = {
  radio: [false, true, false],
  setRadio: () => { },
  index: 0,
  variant: "light",
};

export const Secondary = Template.bind({});
Secondary.args = {
  radio: [false, false, false],
  setRadio: () => { },
  index: 1,
  variant: "dark",
};
