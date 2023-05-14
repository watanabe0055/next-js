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
    label1: "投稿",
    type: true,
  },
};

export const Save: Story = {
  args: {
    color: "green",
    label1: "保存",
    type: true,
  },
};

export const Delete: Story = {
  args: {
    color: "red",
    label1: "削除",
    label2: "削除2",
    type: false,
  },
};
