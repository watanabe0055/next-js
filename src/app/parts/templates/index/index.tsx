"use client";
import { RecoilRoot, useRecoilValue } from "recoil";
import { modalFlagState } from "@/app/lib/atoms/modal";
import { TaskButton } from "../../organisms/taskButton";
import { TaskIndex } from "../../organisms/taskIndex";
import { TaskModal } from "../../atoms/modal";

export const TaskIndexTemplate = () => {
  const modalFlag = useRecoilValue(modalFlagState);

  return (
    <>
      <TaskButton />
      <TaskIndex />
      {modalFlag && <TaskModal />}
    </>
  );
};
