import React from "react";
import { Story } from "@storybook/react";

import { Container } from "./Container";
import { ContainerProps } from "./Container.types";
import { Button } from "../../controls";

export default {
  title: "Wrappers/Container",
  component: Container,
  argTypes: {},
  decorators: [
    (Story: any) => {
      return Story();
    },
  ],
};

const Template: Story<ContainerProps> = (args) => (
  <Container {...args}>
    <Button view={"primary"}>Button</Button>
    <Button view={"danger"}>Button</Button>
    <Button view={"info"}>Button</Button>
    <Button view={"warning"}>Button</Button>
  </Container>
);

export const Playground = Template.bind({});
Playground.args = {};
