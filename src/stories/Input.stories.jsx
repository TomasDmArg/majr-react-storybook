import React from 'react';

import { Input } from 'majr-react';
import 'majr-react/dist/index.css';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['light', 'dark', 'password', 'passwordDark', 'search', 'searchDark'],
        default: 'light'
      }
    },
    placeholder: {
      control: {
        type: 'text'
      }
    },
    setText: {
      action: 'changed'
    },
    text: {
      control: {
        type: 'text'
      }
    },
  }
}

const Template = (args) => <Input {...args} />

export const Light = Template.bind({})
Light.args = {
  variant: 'light',
  placeholder: 'Light Input',
  setText: () => { },
  text: ''
}
export const Dark = Template.bind({})
Dark.args = {
  variant: 'dark',
  placeholder: 'Dark Input',
  setText: () => { },
  text: ''
}

export const Password = Template.bind({})
Password.args = {
  variant: 'password',
  placeholder: 'Password',
  setText: () => { },
  text: ''
}

export const PasswordDark = Template.bind({})
PasswordDark.args = {
  variant: 'passwordDark',
  placeholder: 'Password',
  setText: () => { },
  text: ''
}

export const Search = Template.bind({})
Search.args = {
  variant: 'search',
  placeholder: 'Search',
  setText: () => { },
  text: ''
}

export const SearchDark = Template.bind({})
SearchDark.args = {
  variant: 'searchDark',
  placeholder: 'Search',
  setText: () => { },
  text: ''
}


