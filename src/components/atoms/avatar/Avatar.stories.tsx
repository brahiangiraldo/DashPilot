import type { Meta, StoryObj } from "@storybook/react"
import Avatar from "./Avatar"
import Image from "@/assets/images/avatar-fem.avif"

const meta = {
  title: "Components/Atoms/Avatar",
  component: Avatar,
  parameters: {
    layout: "padded", // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const avatar: Story = {
  args: {
    width: "clamp(50px, 10vw, 150px)",
    height: "clamp(50px, 10vw, 150px)",
    image: Image,
  },
  render: (args) => (
    <div style={{ maxWidth: "1000px", height: "auto" }}>
      <Avatar {...args} />
    </div>
  ),
}
