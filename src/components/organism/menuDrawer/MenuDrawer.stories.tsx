import type { Meta, StoryObj } from "@storybook/react"
import MenuDrawer from "./MenuDrawer"

const meta = {
  title: "Components/Organism/MenuDrawer",
  component: MenuDrawer,
  parameters: {
    layout: "fullscreen", // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MenuDrawer>

export default meta
type Story = StoryObj<typeof meta>

export const menuDrawer: Story = {
  args: {},
}
