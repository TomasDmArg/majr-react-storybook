import React from "react";

import { Spotlight } from "majr-react";
import "majr-react/dist/index.css";

// clicked: boolean;
// setClicked: (target: boolean) => void;
// variant ?: 'light' | 'dark';
export default {
  title: "Spotlight",
  component: Spotlight,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["light", "dark"],
        default: "light",
      },
    },
    clicked: {
      control: {
        type: "boolean",
      },
    },
    setClicked: {
      action: "changed",
    },
  },
};

const Template = (args) => <Spotlight {...args} />;

export const Light = Template.bind({});
Light.args = {
  variant: "light",
  clicked: false,
  setClicked: () => { },
};

export const Dark = Template.bind({});
Dark.args = {
  variant: "dark",
  clicked: false,
  setClicked: () => { },
};

export const LightClicked = Template.bind({});
LightClicked.args = {
  variant: "light",
  clicked: true,
  setClicked: () => { },
};

export const DarkClicked = Template.bind({});
DarkClicked.args = {
  variant: "dark",
  clicked: true,
  setClicked: () => { },
};
