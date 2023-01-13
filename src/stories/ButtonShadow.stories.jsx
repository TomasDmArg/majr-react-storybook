import { ButtonShadow } from "majr-react"
import PropTypes from 'prop-types'
import 'majr-react/dist/index.css'
import { shield } from "./Circles.stories"

// text: string;
// onClick: () => void;
// variant ?: 'light' | 'dark' | 'main' | 'highlight' | 'highlightdark' | 'green';
// rounded ?: boolean;
// icon ?: React.ReactElement;
// iconPosition ?: 'right' | 'left';
// className ?: string;
// size ?: 'small' | 'normal' | 'fillWidth';
// altFont ?: boolean;
// color ?: 'yellow' | 'blue' | 'red' | 'green' | 'black';

ButtonShadow.propTypes = {
  color: PropTypes.oneOf(['yellow', 'blue', 'red', 'green', 'black']),
  text: PropTypes.string,
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(['right', 'left']),
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal', 'fillWidth']),
  altFont: PropTypes.bool,
}
// Default props
ButtonShadow.defaultProps = {
  color: 'yellow',
  text: 'Hover me',
  onClick: () => { },
  rounded: false,
  icon: shield,
  iconPosition: 'right',
  className: '',
  size: 'normal',
  altFont: false,
}
export default {
  title: "Button Shadow",
  component: ButtonShadow,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['yellow', 'blue', 'red', 'green', 'black'],
        default: 'yellow'
      }
    },
    text: {
      control: {
        type: 'text'
      }
    },
    onClick: {
      action: 'clicked'
    },
    rounded: {
      control: {
        type: 'boolean'
      }
    },
    icon: {
      // JSX element
      control: {
        type: 'object'
      }
    },
  },
}
const Template = (args) => <ButtonShadow {...args} />

export const Yellow = Template.bind({})
Yellow.args = {
  color: 'yellow',
}

export const Blue = Template.bind({})
Blue.args = {
  color: 'blue',
}

export const Red = Template.bind({})
Red.args = {
  color: 'red',
}

export const Green = Template.bind({})
Green.args = {
  color: 'green',
}

export const Black = Template.bind({})
Black.args = {
  color: 'black',
}
