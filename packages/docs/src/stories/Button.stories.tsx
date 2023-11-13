import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@ignite-ui/react";

interface ButtonStoryProps extends ButtonProps {}

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Enviar",
  },
} as Meta<ButtonStoryProps>;

export const Primary: StoryObj<ButtonStoryProps> = {};

export const Big: StoryObj<ButtonStoryProps> = {
  args: {
    size: "big",
  },
};
