import { Link } from "majr-react"
import PropTypes from 'prop-types'
import 'majr-react/dist/index.css'

Link.propTypes = {
  variant: PropTypes.oneOf(['light', 'dark', 'animated']),
  text: PropTypes.string,
  link: PropTypes.string,
}
// Default props
Link.defaultProps = {
  variant: 'light',
  text: 'Link',
  link: '#'
}
export default {
  title: "Link",
  component: Link,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['light', 'dark', 'animated'],
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
const Template = (args) => <Link {...args} />

export const Light = Template.bind({})
Light.args = {
  variant: 'light',
  text: 'Main Button',
  link: '#'
}
export const Dark = Template.bind({})
Dark.args = {
  variant: 'dark',
  text: 'Dark Button',
  link: '#'
}
export const Animated = Template.bind({})
Animated.args = {
  variant: 'animated',
  text: 'Hover me',
  link: '#'
}
