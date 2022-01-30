import React from 'react';


import { Story } from '@storybook/react';

import {Button}  from './Button';
import {ButtonProps} from "./Button.types";

export default {
    title: 'Controls/Button',
    component: Button,
    argTypes: {
    },
}

const Template: Story<ButtonProps> = (args) => <Button {...args} >{args.children}</Button>;

export const Primary = Template.bind({});
Primary.args = {
    children: "I'm Button",
};
