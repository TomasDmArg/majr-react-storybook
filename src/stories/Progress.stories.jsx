import React from "react";

import { Progress } from "majr-react";
import "majr-react/dist/index.css";

/*
  variant?: 'light' | 'dark';
    width: string;
    value: number;
    max: number;
*/

export default {
  title: "Progress",
  component: Progress,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["light", "dark"],
        default: "light",
      },
    },
    width: {
      control: {
        type: "text",
      },
    },
    value: {
      control: {
        type: "number",
      },
    },
    max: {
      control: {
        type: "number",
      },
    },
  },
};

const Template = (args) => <Progress {...args} />;
export const Light = Template.bind({});
Light.args = {
  variant: "light",
  width: "100%",
  value: 50,
  max: 100,
};

export const Dark = Template.bind({});
Dark.args = {
  variant: "dark",
  width: "100%",
  value: 50,
  max: 100,
};





