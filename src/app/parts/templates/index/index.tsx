"use client";
import { RecoilRoot, useRecoilValue } from "recoil";
import { modalFlagState } from "@/app/lib/atoms/modal";
import { TaskButton } from "../../organisms/taskButton";
import { TaskIndex } from "../../organisms/taskIndex";
import { TaskModal } from "../../atoms/modal";
import { taskState } from "@/app/lib/atoms/task";
import { AppContainer } from "../../atoms/conteiner";
import { TaskContainer } from "../../atoms/taskConteiner";

export const TaskIndexTemplate = () => {
  const modalFlag = useRecoilValue(modalFlagState);
  const tasks = useRecoilValue(taskState);

  return (
    <>
      <AppContainer>
        <TaskButton />
      </AppContainer>
      <AppContainer>
        <TaskContainer>
          {tasks.map(
            (task) =>
              !task.isCompleted && (
                <TaskIndex
                  key={task.id}
                  title={task.title}
                  content={task.content}
                  isCompleted={task.isCompleted}
                  id={task.id}
                />
              )
          )}
        </TaskContainer>
      </AppContainer>

      <AppContainer>
        <TaskContainer isFlag>
          {tasks.map(
            (task) =>
              task.isCompleted && (
                <TaskIndex
                  key={task.id}
                  title={task.title}
                  content={task.content}
                  isCompleted={task.isCompleted}
                  id={task.id}
                />
              )
          )}
        </TaskContainer>
      </AppContainer>
      {modalFlag && <TaskModal />}
    </>
  );
};
