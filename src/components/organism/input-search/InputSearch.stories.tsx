import type { Meta, StoryObj } from "@storybook/react"
import React, { useState } from "react"
import InputSearch from "./InputSearch"

const meta = {
  title: "Components/Organism/InputSearch",
  component: InputSearch,
  parameters: {
    layout: "padded", // centered, fullscreen, padded
  },
  argTypes: {},
} satisfies Meta<typeof InputSearch>

export default meta
type Story = StoryObj<typeof meta>

export const inputSearch: Story = {
  render: (args) => {
    const [value, setValue] = useState("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    }

    const handleClear = () => {
      setValue("")
    }

    return (
      <InputSearch
        {...args}
        value={value}
        onChange={handleChange}
        handleClear={handleClear}
      />
    )
  },
  args: {
    placeholder: "Write here...",
    iconPosition: "right",
    value: "",
    onChange: () => {},
    handleClear: () => {},
  },
}
