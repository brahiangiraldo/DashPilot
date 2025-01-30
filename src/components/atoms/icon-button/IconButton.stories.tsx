import type { Meta, StoryObj } from "@storybook/react"
import IconButton from "./IconButton"

const meta: Meta<typeof IconButton> = {
  title: "Components/Atoms/IconButton",
  component: IconButton,
}

export default meta

type Story = StoryObj<typeof meta>

export const iconButton: Story = {
  args: {
    icon: "Search",
  },
}
