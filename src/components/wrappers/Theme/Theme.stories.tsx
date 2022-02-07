import React from "react";
import { Story } from "@storybook/react";

import { Theme } from "./Theme";
import { ThemeProps } from "./Theme.types";
import { Button, Input } from "../../controls";
import { Card, Text } from "../../contents";
import { Themes, useTheme } from "../../../shared";
import { Container } from "../Container";

export default {
  title: "Wrappers/Theme",
  component: Theme,
  argTypes: {},
  decorators: [
    (Story: any) => {
      return Story();
    },
  ],
};

const Template: Story<ThemeProps> = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Theme theme={theme}>
      <Container
        flexDirection={"row"}
        width={`${100}%`}
        height={`${100}%`}
        padding={`${50}px`}
      >
        <Card>
          <Container width={`${100}%`} height={`${100}%`} padding={`${50}px`}>
            <Container
              marginBottom={`${16}px`}
              width={`${100}%`}
              flexDirection={"row"}
            >
              <Container marginRight={`${16}px`}>
                <Button onClick={() => setTheme(Themes[0])}>Theme Dark</Button>
              </Container>
              <Container>
                <Button onClick={() => setTheme(Themes[1])}>Theme Light</Button>
              </Container>
            </Container>
            <Container
              marginBottom={`${16}px`}
              width={`${100}%`}
              flexDirection={"row"}
            >
              <Container marginRight={`${16}px`}>
                <Button view={"primary"}>Button</Button>
              </Container>
              <Container marginRight={`${16}px`}>
                <Button view={"secondary"}>Button</Button>
              </Container>
              <Container marginRight={`${16}px`}>
                <Button view={"success"}>Button</Button>
              </Container>
              <Container marginRight={`${16}px`}>
                <Button view={"danger"}>Button</Button>
              </Container>
              <Container marginRight={`${16}px`}>
                <Button view={"warning"}>Button</Button>
              </Container>
              <Container marginRight={`${16}px`}>
                <Button view={"info"}>Button</Button>
              </Container>
              <Container marginRight={`${16}px`}>
                <Button view={"light"}>Button</Button>
              </Container>
              <Container marginRight={`${16}px`}>
                <Button view={"dark"}>Button</Button>
              </Container>
            </Container>
            <Container
              marginBottom={`${16}px`}
              width={`${100}%`}
              flexDirection={"row"}
            >
              <Container marginRight={`${16}px`} width={`${10}%`}>
                <Input view={"primary"} width={`${100}%`} />
              </Container>
              <Container marginRight={`${16}px`} width={`${10}%`}>
                <Input view={"secondary"} width={`${100}%`} />
              </Container>
              <Container marginRight={`${16}px`} width={`${10}%`}>
                <Input view={"success"} width={`${100}%`} />
              </Container>
              <Container marginRight={`${16}px`} width={`${10}%`}>
                <Input view={"danger"} width={`${100}%`} />
              </Container>
              <Container marginRight={`${16}px`} width={`${10}%`}>
                <Input view={"warning"} width={`${100}%`} />
              </Container>
              <Container marginRight={`${16}px`} width={`${10}%`}>
                <Input view={"info"} width={`${100}%`} />
              </Container>
              <Container marginRight={`${16}px`} width={`${10}%`}>
                <Input view={"light"} width={`${100}%`} />
              </Container>
              <Container marginRight={`${16}px`} width={`${10}%`}>
                <Input view={"dark"} width={`${100}%`} />
              </Container>
            </Container>
            <Text view={"primary"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Text view={"secondary"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Text view={"success"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Text view={"danger"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Text view={"warning"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Text view={"info"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Text view={"light"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Text view={"dark"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </Container>
        </Card>
      </Container>
    </Theme>
  );
};

export const Playground = Template.bind({});
Playground.args = {};
