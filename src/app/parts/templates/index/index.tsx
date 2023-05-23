"use client";
import { RecoilRoot, useRecoilValue } from "recoil";
import { modalFlagState } from "@/app/lib/atoms/modal";
import { TaskButton } from "../../organisms/taskButton";
import { TaskIndex } from "../../organisms/taskIndex";

export const TaskIndexTemplate = () => {
  const test = useRecoilValue(modalFlagState);
  console.log(test);
  return (
    <>
      <RecoilRoot>
        <TaskButton />
        <TaskIndex />
      </RecoilRoot>
    </>
  );
};
