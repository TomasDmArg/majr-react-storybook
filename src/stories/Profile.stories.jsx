import React from "react";

import { Profile } from "majr-react";

/**variant?: 'light' | 'dark';
    url: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg'; */
export default {
  title: "Profile",
  component: Profile,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["light", "dark"],
        default: "light",
      },
    },
    url: {
      control: {
        type: "text",
      },
    },
    alt: {
      control: {
        type: "text",
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
        default: "md",
      },
    },
  },
};

const Template = (args) => <Profile {...args} />;

let def = {
  url: "https://www.w3schools.com/howto/img_avatar.png",
  alt: "Profile",
};

export const Light = Template.bind({});
Light.args = {
  variant: "light",
  size: "md",
  ...def,
};

export const Dark = Template.bind({});
Dark.args = {
  variant: "dark",
  size: "md",
  ...def,
};

export const Small = Template.bind({});
Small.args = {
  variant: "light",
  size: "sm",
  ...def,
};

export const Large = Template.bind({});
Large.args = {
  variant: "light",
  size: "lg",
  ...def,
};

export const DarkSmall = Template.bind({});
DarkSmall.args = {
  variant: "dark",
  size: "sm",
  ...def,
};

export const DarkLarge = Template.bind({});
DarkLarge.args = {
  variant: "dark",
  size: "lg",
  ...def,
};



