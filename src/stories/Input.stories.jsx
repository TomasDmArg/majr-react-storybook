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
    onChange: {
      action: 'changed'
    },
    value: {
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
  onChange: () => { },
  value: ''
}
export const Dark = Template.bind({})
Dark.args = {
  variant: 'dark',
  placeholder: 'Dark Input',
  onChange: () => { },
  value: ''
}

export const Password = Template.bind({})
Password.args = {
  variant: 'password',
  placeholder: 'Password',
  onChange: () => { },
  value: ''
}

export const PasswordDark = Template.bind({})
PasswordDark.args = {
  variant: 'passwordDark',
  placeholder: 'Password',
  onChange: () => { },
  value: ''
}

export const Search = Template.bind({})
Search.args = {
  variant: 'search',
  placeholder: 'Search',
  onChange: () => { },
  value: ''
}

export const SearchDark = Template.bind({})
SearchDark.args = {
  variant: 'searchDark',
  placeholder: 'Search',
  onChange: () => { },
  value: ''
}


