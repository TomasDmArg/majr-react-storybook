import React from "react";

import { Steps } from "majr-react";
import "majr-react/dist/index.css";

// current: number;
// total: number;
// variant ?: 'light' | 'dark';

export default {
  title: "Steps",
  component: Steps,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["light", "dark"],
        default: "light",
      },
    },
    current: {
      control: {
        type: "number",
      },
    },
    total: {
      control: {
        type: "number",
      },
    },
  },
};

const Template = (args) => <Steps {...args} />;
export const Light = Template.bind({});
Light.args = {
  variant: "light",
  current: 1,
  total: 3,
};

export const Dark = Template.bind({});
Dark.args = {
  variant: "dark",
  current: 1,
  total: 3,
};
