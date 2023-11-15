import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps, Box } from '@psa-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/paulosantana95.png',
    alt: 'Paulo Santana',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{ padding: '$10', background: '$gray800' }}>{Story()}</Box>
      )
    },
  ],
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
