import React from 'react';

import { Select } from 'majr-react';
import 'majr-react/dist/index.css';

// select: string[];
// setSelect: (target: number) => void;
// def: string;
// variant ?: 'light' | 'dark';

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
        default: 'light'
      }
    },
    select: {
      control: {
        type: 'array'
      }
    },
    setSelect: {
      action: 'changed'
    },
    def: {
      control: {
        type: 'text'
      }
    },
  }
}

const selectArr = [
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
  'Option 5',
]

const Template = (args) => <Select {...args} />

export const Light = Template.bind({})
Light.args = {
  variant: 'light',
  select: selectArr,
  setSelect: () => { },
  def: 'Select'
}

export const Dark = Template.bind({})
Dark.args = {
  variant: 'dark',
  select: selectArr,
  setSelect: () => { },
  def: 'Select'
}

