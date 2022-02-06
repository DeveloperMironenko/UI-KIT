import React from "react";
import { Story } from "@storybook/react";

import { Input } from "./Input";
import { InputProps } from "./Input.types";

export default {
  title: "Controls/Input",
  component: Input,
  argTypes: {},
  decorators: [
    (Story: any) => {
      return Story();
    },
  ],
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  value: "I'm Input",
};
