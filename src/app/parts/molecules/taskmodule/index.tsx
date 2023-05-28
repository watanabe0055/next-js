import React from "react";
import { Title } from "../../atoms/title";
import { Content } from "../../atoms/content";
import { TaskProps } from "@/app/types/task";

export const TaskModule = (Props: TaskProps) => {
  const { title, content, isCompleted } = Props;
  return (
    <>
      <div>
        <Title title={title} />
        <Content content={content} />
      </div>
    </>
  );
};
