import React from 'react';

import { Image } from 'majr-react';
import 'majr-react/dist/index.css';

/*
variant ?: 'light' | 'dark';
url: string;
alt ?: string;
width ?: number;
height ?: number;
*/

export default {
  title: 'Image',
  component: Image,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
        default: 'light'
      }
    },
    url: {
      control: {
        type: 'text'
      }
    },
    alt: {
      control: {
        type: 'text'
      }
    },
    width: {
      control: {
        type: 'number'
      }
    },
    height: {
      control: {
        type: 'number'
      }
    },
  }
}

const Template = (args) => <Image {...args} />

let def = {
  url: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  alt: 'Image',
  width: 400,
  height: 300
}
export const Light = Template.bind({})
Light.args = {
  variant: 'light',
  ...def
}

export const Dark = Template.bind({})
Dark.args = {
  variant: 'dark',
  ...def
}
