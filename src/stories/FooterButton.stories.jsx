import React from "react";

import { FooterButton } from "majr-react";
import "majr-react/dist/index.css";

/*
  variant?: 'light' | 'dark' | 'twitter';
    text: string;
    onClick?: () => void;
*/

export default {
  title: "FooterButton",
  component: FooterButton,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["light", "dark", "twitter"],
      },
    },
    text: {
      control: {
        type: "text",
      },
    },
    onClick: {
      action: "clicked",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "Height is 100% of the parent container, and should be overflow: hidden.",
      },
    },
  },
};

const Template = (args) => {
  return (
    <div
      style={{
        width: "100%",
        height: "59px",
        overflow: "hidden",
      }}
    >
      <FooterButton {...args} />
    </div>
  )
};
export const Light = Template.bind({});
Light.args = {
  variant: "light",
  text: "Light",
};

export const Dark = Template.bind({});
Dark.args = {
  variant: "dark",
  text: "Dark",
};

export const Twitter = Template.bind({});
Twitter.args = {
  variant: "twitter",
  text: "Twitter",
};
