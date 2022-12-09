import React from 'react';

import { Textarea } from 'majr-react';
import 'majr-react/dist/index.css';

// text: string;
// setText: (text: string) => void;
// variant ?: 'light' | 'dark';
// placeholder ?: string;
export default {
  title: 'Textarea',
  component: Textarea,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
        default: 'light'
      }
    },
    text: {
      control: {
        type: 'text'
      }
    },
    setText: {
      action: 'changed'
    },
    placeholder: {
      control: {
        type: 'text'
      }
    },
  }
}

const Template = (args) => <Textarea {...args} />

export const Light = Template.bind({})
Light.args = {
  variant: 'light',
  text: '',
  setText: () => { },
  placeholder: 'Light Textarea'
}

export const Dark = Template.bind({})
Dark.args = {
  variant: 'dark',
  text: '',
  setText: () => { },
  placeholder: 'Dark Textarea'
}


