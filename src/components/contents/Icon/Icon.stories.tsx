import React from "react";
import { Story } from "@storybook/react";
import { Icon } from "./Icon";
import { IconProps } from "./Icon.types";

export default {
  title: "Contents/Icon",
  component: Icon,
  argTypes: {},
  decorators: [
    (Story: any) => {
      return Story();
    },
  ],
};

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Playground = Template.bind({});
Playground.args = {};
