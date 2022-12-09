import { Button } from "majr-react"
import PropTypes from 'prop-types'
import 'majr-react/dist/index.css'
Button.propTypes = {
  variant: PropTypes.oneOf(['light', 'dark', 'main']),
  text: PropTypes.string,
  onClick: PropTypes.func,
  rounded: PropTypes.bool
}
// Default props
Button.defaultProps = {
  variant: 'light',
  text: 'Button',
  onClick: () => { },
  rounded: false
}
export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['light', 'dark', 'main'],
        default: 'light'
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
  },
}
const Template = (args) => <Button {...args} />

export const Main = Template.bind({})
Main.args = {
  variant: 'main',
  text: 'Main Button',
  onClick: () => { }
}
export const Light = Template.bind({})
Light.args = {
  variant: 'light',
  text: 'Light Button',
  onClick: () => { }
}
export const Dark = Template.bind({})
Dark.args = {
  variant: 'dark',
  text: 'Dark Button',
  onClick: () => { }
}
export const Rounded = Template.bind({})
Rounded.args = {
  variant: 'main',
  text: 'Rounded Button',
  onClick: () => { },
  rounded: true
}