import React from 'react';

import { ThemeSwitch } from 'majr-react';
import 'majr-react/dist/index.css';

// value: boolean;
// setSwitch: (target: boolean) => void;

export default {
  title: 'ThemeSwitch',
  component: ThemeSwitch,
  argTypes: {
    value: {
      control: {
        type: 'boolean'
      }
    },
    setSwitch: {
      action: 'changed'
    }
  }
}

const Template = (args) => {
  const [value, setValue] = React.useState(args.value)
  return <ThemeSwitch value={value} setSwitch={setValue} />
}

export const Light = Template.bind({})
Light.args = {
  value: false,
  setSwitch: () => { }
}

export const Dark = Template.bind({})
Dark.args = {
  value: true,
  setSwitch: () => { }
}

