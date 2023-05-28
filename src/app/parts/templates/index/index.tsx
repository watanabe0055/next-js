"use client";
import { RecoilRoot, useRecoilValue } from "recoil";
import { modalFlagState } from "@/app/lib/atoms/modal";
import { TaskButton } from "../../organisms/taskButton";
import { TaskIndex } from "../../organisms/taskIndex";
import { TaskModal } from "../../atoms/modal";
import { taskState } from "@/app/lib/atoms/task";

export const TaskIndexTemplate = () => {
  const modalFlag = useRecoilValue(modalFlagState);
  const tasks = useRecoilValue(taskState);

  return (
    <>
      <TaskButton />
      {tasks.map((task, id) => (
        <TaskIndex
          key={id}
          title={task.title}
          content={task.content}
          isCompleted={task.isCompleted}
        />
      ))}
      {modalFlag && <TaskModal />}
    </>
  );
};
