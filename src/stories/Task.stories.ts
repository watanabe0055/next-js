import type { Meta, StoryObj } from "@storybook/react";

import { Task } from "./Task";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const metaTask: Meta<typeof Task> = {
  title: "Example/Task",
  component: Task,
  tags: ["autodocs"],
  argTypes: {},
};

export default metaTask;
type Story = StoryObj<typeof Task>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Test: Story = {
  args: {
    title: "test",
    content:
      "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
};
