import React from "react";
import { Buttons } from "../../atoms/buttons";
import { TaskModule } from "../../molecules/taskmodule";
import { taskState } from "@/app/lib/atoms/task";
import { useRecoilValue } from "recoil";
import { TaskProps } from "@/app/types/task";

export const TaskIndex = (Props: TaskProps) => {
  const { title, content, isCompleted } = Props;
  return (
    <>
      <div className="p-2 m-3 bg-green-300 rounded-lg">
        <TaskModule title={title} content={content} isCompleted={isCompleted} />

        <div className="flex justify-center">
          <div className="w-2/5">
            <Buttons
              color={"blue"}
              label1={"編集"}
              label2={"削除"}
              type={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};
