import React from "react";
import { Title } from "../../atoms/title";
import { Content } from "../../atoms/content";
import { TaskProps } from "@/app/types/task";
import { AppContainer } from "../../atoms/conteiner";

export const TaskModule = (Props: TaskProps) => {
  const { title, content, isCompleted } = Props;
  return (
    <>
      <div>
        <AppContainer>
          <Title title={title} />
        </AppContainer>
        <AppContainer>
          <Content content={content} />
        </AppContainer>
      </div>
    </>
  );
};
