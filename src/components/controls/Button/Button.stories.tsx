import React from "react";
import { Story } from "@storybook/react";

import { Button } from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  title: "Controls/Button",
  component: Button,
  argTypes: {},
  decorators: [
    (Story: any) => {
      return Story();
    },
  ],
};

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Playground = Template.bind({});
Playground.args = {
  children: "I'm Button",
};
