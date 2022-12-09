import React from "react";

import { SwitchComponent } from "majr-react";
import "majr-react/dist/index.css";

/*
value: boolean;
    setSwitch: (target: boolean) => void;
    variant?: 'light' | 'dark';
*/

export default {
  title: "Switch",
  component: SwitchComponent,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["light", "dark"],
        default: "light",
      },
    },
    value: {
      control: {
        type: "boolean",
      },
    },
    setSwitch: {
      action: "changed",
    },
  },
};

const Template = (args) => {
  return <SwitchComponent {...args} />;
}

export const Light = Template.bind({});
Light.args = {
  variant: "light",
  value: false,
  setSwitch: () => { },
};

export const Dark = Template.bind({});
Dark.args = {
  variant: "dark",
  value: true,
  setSwitch: () => { },
};


