import React from "react";

import { Footer } from "majr-react";
import "majr-react/dist/index.css";

// variant?: 'light' | 'dark';
// links: [string, string][];
// twitter?: string;
export default {
  title: "Footer",
  component: Footer,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["light", "dark"],
      },
    },
  },
};

const Template = (args) => <Footer {...args} />;
const links = {
  links: [
    ["Home", "/"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ],
}
export const OnlyLinks = Template.bind({});
OnlyLinks.args = {
  ...links,
};

export const WithTwitter = Template.bind({});
WithTwitter.args = {
  ...links,
  twitter: "https://twitter.com/MAJR_DAO",
};

export const DarkOnlyLinks = Template.bind({});
DarkOnlyLinks.args = {
  variant: "dark",
  ...links,
}

export const DarkWithTwitter = Template.bind({});
DarkWithTwitter.args = {
  variant: "dark",
  ...links,
  twitter: "https://twitter.com/MAJR_DAO",
}