import { IconButton, IconCompatible } from "majr-react"
import PropTypes from 'prop-types'
import 'majr-react/dist/index.css'


export default {
  title: "Icon Button",
  component: IconButton,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
        default: 'light'
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
    }
  },
}
const Template = (args) => <IconButton {...args} />

export const Light = Template.bind({})
Light.args = {
  variant: 'light',
  icon: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>,
  onClick: () => { }
}

export const Dark = Template.bind({})
Dark.args = {
  variant: 'dark',
  icon: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#f9f9f9" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>,
  onClick: () => { }
}

export const LightRounded = Template.bind({})
LightRounded.args = {
  variant: 'light',
  rounded: true,
  icon: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>,
  onClick: () => { }
}

export const DarkRounded = Template.bind({})
DarkRounded.args = {
  variant: 'dark',
  rounded: true,
  icon: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#f9f9f9" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>,
  onClick: () => { },
}