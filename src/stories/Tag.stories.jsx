import React from "react";

import { Tag, IconCompatible, IconVerified, IconReport } from "majr-react";
import "majr-react/dist/index.css";

/*
  theme?: 'light' | 'dark';
    icon?: any;
    text: string;
    color?: string;
    onClick?: () => void;
  
 */
export default {
  title: "Tag",
  component: Tag,
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["light", "dark"],
      },
    },
    // icon is an object
    icon: {
      control: {
        type: "object",
      },
    },
    text: {
      control: {
        type: "text",
      },
    },
    // color is a string that represents an hex color
    color: {
      control: {
        type: "text",
      },
    },
    onClick: {
      control: {
        type: "function",
      },
    },
  },
};

const Template = (args) => <Tag {...args} />;

export const Light = Template.bind({});
Light.args = {
  theme: "light",
  icon: null,
  text: "Tag",
  color: "#171717",
  onClick: () => console.log("Clicked"),
};

export const Dark = Template.bind({});
Dark.args = {
  theme: "dark",
  icon: null,
  text: "Tag",
  color: "#171717",
  onClick: () => console.log("Clicked"),
};

export const CompatibleLight = Template.bind({});
CompatibleLight.args = {
  theme: "light",
  icon: <IconCompatible />,
  text: "Tag",
  color: "#009410",
  onClick: () => console.log("Clicked"),
};

export const CompatibleDark = Template.bind({});
CompatibleDark.args = {
  theme: "dark",
  icon: <IconCompatible />,
  text: "Tag",
  color: "#009410",
  onClick: () => console.log("Clicked"),
};

export const VerifiedLight = Template.bind({});
VerifiedLight.args = {
  theme: "light",
  icon: <IconVerified />,
  text: "Verified",
  color: "#de1149",
  onClick: () => console.log("Clicked"),
};

export const VerifiedDark = Template.bind({});
VerifiedDark.args = {
  theme: "dark",
  icon: <IconVerified />,
  text: "Verified",
  color: "#de1149",
  onClick: () => console.log("Clicked"),
};

export const ReportedLight = Template.bind({});
ReportedLight.args = {
  theme: "light",
  icon: <IconReport />,
  text: "Reported",
  color: "#FCCA46",
  onClick: () => console.log("Clicked"),
};

