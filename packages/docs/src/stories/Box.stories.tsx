import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps } from "@ignite-ui/react";

interface BoxStoryProps extends BoxProps {}

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    ),
  },
} as Meta<BoxStoryProps>;

export const Primary: StoryObj<BoxStoryProps> = {};
