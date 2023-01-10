import { Button } from "majr-react";
import PropTypes from "prop-types";
import "majr-react/dist/index.css";
import "./assets/custom.css";
import { IconArrowBadgeLeft } from "@tabler/icons";
Button.propTypes = {
  variant: PropTypes.oneOf(["light", "dark", "main"]),
  text: PropTypes.string,
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
};
// Default props
Button.defaultProps = {
  variant: "light",
  text: "Button",
  onClick: () => {},
  rounded: false,
};
export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["light", "dark", "main", "green"],
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
    rounded: {
      control: {
        type: "boolean",
      },
    },
    icon: {
      control: {
        // React element
        type: "text",
      },
    },
    iconPosition: {
      control: {
        type: "select",
        options: ["left", "right"],
        default: "left",
      },
    },
    className: {
      control: {
        type: "text",
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "normal", "fillWidth"],
        default: "md",
      },
    },
    altFont: {
      control: {
        type: "boolean",
      },
    },
  },
};
const Template = (args) => <Button {...args} />;

export const Main = Template.bind({});
Main.args = {
  variant: "main",
  text: "Main Button",
  onClick: () => {},
};
export const Light = Template.bind({});
Light.args = {
  variant: "light",
  text: "Light Button",
  onClick: () => {},
};
export const Dark = Template.bind({});
Dark.args = {
  variant: "dark",
  text: "Dark Button",
  onClick: () => {},
};
export const Green = Template.bind({});
Green.args = {
  variant: "green",
  text: "Green Button",
  onClick: () => {},
};
export const Rounded = Template.bind({});
Rounded.args = {
  variant: "main",
  text: "Rounded Button",
  onClick: () => {},
  rounded: true,
};
export const AlternativeFont = Template.bind({});
AlternativeFont.args = {
  variant: "light",
  text: "Nasalization",
  onClick: () => {},
  altFont: true,
};
export const Small = Template.bind({})
Small.args = {
  variant: "green",
  text: "Small Button",
  onClick: () => {},
  altFont: true,
  size: "small",
};
export const Fill = Template.bind({})
Fill.args = {
  variant: "main",
  text: "Fill the width of the container",
  onClick: () => {},
  altFont: false,
  size: "fillWidth",
};
export const Icon = Template.bind({});
Icon.args = {
  variant: "main",
  text: "Button with an icon",
  onClick: () => {},
  altFont: false,
  icon: <IconArrowBadgeLeft />,
  iconPosition: "left",
};

export const Custom = Template.bind({});
Custom.args = {
  variant: "main",
  text: "Buttom with custom styles",
  onClick: () => {},
  altFont: false,
  className: "customclass",
}