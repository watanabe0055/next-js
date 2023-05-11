import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Post: Story = {
  args: {
    color: "blue",
    label: "投稿",
  },
};

export const Save: Story = {
  args: {
    color: "green",
    label: "保存",
  },
};

export const Delete: Story = {
  args: {
    color: "red",
    label: "保存",
  },
};
