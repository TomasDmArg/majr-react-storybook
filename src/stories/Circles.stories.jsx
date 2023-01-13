import { Circle } from "majr-react"
import PropTypes from 'prop-types'
import 'majr-react/dist/index.css'

export const shield = (<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_232_275)">
    <path d="M11.25 15L13.75 17.5L18.75 12.5" stroke="#38383D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15 3.75C17.9198 6.33322 21.7306 7.67821 25.625 7.5C26.192 9.42877 26.3655 11.4518 26.1352 13.449C25.9048 15.4461 25.2754 17.3766 24.2843 19.1257C23.2931 20.8747 21.9605 22.4067 20.3656 23.6306C18.7706 24.8545 16.946 25.7453 15 26.25C13.054 25.7453 11.2293 24.8545 9.63443 23.6306C8.03951 22.4067 6.70689 20.8747 5.71574 19.1257C4.7246 17.3766 4.09517 15.4461 3.86484 13.449C3.63452 11.4518 3.80801 9.42877 4.375 7.5C8.26941 7.67821 12.0802 6.33322 15 3.75Z" stroke="#38383D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_232_275">
      <rect width="30" height="30" fill="white" />
    </clipPath>
  </defs>
</svg>
)
// variant: 'yellow' | 'blue' | 'red';
// icon: any;
// active: boolean;
// onClick: () => void;
// className ?: string;
export default {
  title: "Circle",
  component: Circle,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['yellow', 'blue', 'red'],
        default: 'light'
      }
    },
    onClick: {
      action: 'clicked'
    },
    icon: {
      // JSX element
      control: {
        type: 'object'
      }
    },
    active: {
      control: {
        type: 'boolean'
      },
    },
    className: {
      control: {
        type: 'text'
      }
    }
  },
}
const Template = (args) => <Circle {...args} />

export const Yellow = Template.bind({})
Yellow.args = {
  variant: 'yellow',
  icon: shield,
  onClick: () => { },
  active: false,
}

export const YellowActive = Template.bind({});
YellowActive.args = {
  variant: 'yellow',
  icon: shield,
  onClick: () => { },
  active: true,
}

export const Blue = Template.bind({})
Blue.args = {
  variant: 'blue',
  icon: shield,
  onClick: () => { },
  active: false,
}

export const BlueActive = Template.bind({});
BlueActive.args = {
  variant: 'blue',
  icon: shield,
  onClick: () => { },
  active: true,
}

export const Red = Template.bind({})
Red.args = {
  variant: 'red',
  icon: shield,
  onClick: () => { },
  active: false,
}

export const RedActive = Template.bind({});
RedActive.args = {
  variant: 'red',
  icon: shield,
  onClick: () => { },
  active: true,
}

