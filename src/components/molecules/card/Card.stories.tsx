import type { Meta, StoryObj } from "@storybook/react"
import Card from "./Card"
import { IconFactory } from "@/components/atoms/icons/domain/use-cases/factoryIcon"
import ProgressCircle from "../progress-circle/ProgressCircle"

const meta = {
  title: "Components/Molecules/Card",
  component: Card,
  parameters: {
    layout: "padded", // centered, fullscreen, padded
  },
  argTypes: {
    showWave: {
      control: { type: "boolean" },
    },
    linearGradient: {
      control: { type: "boolean" },
    },
    title: {
      control: { type: "text" },
    },
    subtitle: {
      control: { type: "text" },
    },
    percentageWidth: {
      control: { type: "number" },
    },
    percentageHeight: {
      control: { type: "number" },
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const exampleCard1: Story = {
  args: {
    title: "12,450",
    subtitle: "Daily Views",
    showWave: false,
    widget: <IconFactory color="#9c9c9c" height={102} width={104} name="Eye" />,
    percentageWidth: 20,
    percentageHeight: 5,
    linearGradient: true,
  },
}

export const exampleCard2: Story = {
  args: {
    subtitle: "% Global CFTD",
    showWave: true,
    widget: <ProgressCircle percentage={45} size="md" />,
    linearGradient: false,
  },
}

export const exampleCard3: Story = {
  args: {
    subtitle: "% Global CFTD",
    showWave: false,
    widget: <ProgressCircle percentage={45} size="md" />,
    linearGradient: true,
  },
}
