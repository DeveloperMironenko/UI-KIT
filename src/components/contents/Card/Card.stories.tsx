import React from "react";
import { Story } from "@storybook/react";

import { Card } from "./Card";
import { CardProps } from "./Card.types";

export default {
  title: "Contents/Card",
  component: Card,
  argTypes: {},
  decorators: [
    (Story: any) => {
      return Story();
    },
  ],
};

const Template: Story<CardProps> = (args) => (
  <Card {...args}>{args.children}</Card>
);

export const Playground = Template.bind({});
Playground.args = {
  children:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};
