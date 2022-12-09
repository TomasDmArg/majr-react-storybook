import React from "react";
import { NavbarBtn } from "majr-react";
import "majr-react/dist/index.css";
import { IconAward } from "@tabler/icons";

export default {
  title: "Navbar Button",
  component: NavbarBtn,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ['light', 'dark', 'active'],
        default: "light",
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
  }
}

const Template = (args) => <NavbarBtn {...args} />

export const Light = Template.bind({})
Light.args = {
  variant: "light",
  text: 'Leaderboard',
  icon: <IconAward />,
  onClick: () => { }
}
export const LightActive = Template.bind({})
LightActive.args = {
  variant: "active",
  text: 'Leaderboard',
  icon: <IconAward />,
  onClick: () => { }
}

export const Dark = Template.bind({})
Dark.args = {
  variant: 'dark',
  text: 'Dark Button',
  icon: <IconAward color="#f9f9f9" />,
  onClick: () => { }
}

export const DarkActive = Template.bind({})
DarkActive.args = {
  variant: "activeDark",
  text: 'Leaderboard',
  icon: <IconAward color="#de1149" />,
  onClick: () => { }
}