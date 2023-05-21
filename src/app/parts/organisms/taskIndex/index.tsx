import React from "react";
import { Buttons } from "../../atoms/buttons";
import { TaskModule } from "../../molecules/taskmodule";

export const TaskIndex = () => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="p-2 m-3 bg-green-300 rounded-lg">
          <TaskModule />
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
