import React from "react";

import { Navbar } from "majr-react";
import "majr-react/dist/index.css";

/**
 * theme: boolean;
    variant?: 'theme' | 'buttons';
    buttons?: [string, string][];
    setTheme: (target: boolean) => void;
 */
export default {
  title: "Navbar",
  component: Navbar,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["theme", "buttons"],
        default: "theme",
      },
    },
    theme: {
      control: {
        type: "boolean",
      },
    },
    setTheme: {
      action: "changed",
    },
    buttons: {
      control: {
        type: "array",
      },
    },
  },
};

const Template = (args) => <Navbar {...args} />;

const buttonsDef = {
  variant: "buttons",
  buttons: [
    ["Home", "/"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ],
  setTheme: () => { },
}

export const LightTheme = Template.bind({});
LightTheme.args = {
  variant: "theme",
  theme: false,
  setTheme: () => { },
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  variant: "theme",
  theme: true,
  setTheme: () => { },
};

export const LightButtons = Template.bind({});
LightButtons.args = {
  ...buttonsDef,
  theme: false,
};

export const DarkButtons = Template.bind({});
DarkButtons.args = {
  ...buttonsDef,
  theme: true,
};

