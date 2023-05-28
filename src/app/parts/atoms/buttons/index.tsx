"use client";

import { modalFlagState } from "@/app/lib/atoms/modal";

import { useRecoilState, useRecoilValue } from "recoil";
import { completedTask, UpdateTask } from "../../utils/task";
import { taskState } from "@/app/lib/atoms/task";

export type ButtonProps = {
  id: number;
  /**ボタンの文字色 */
  color: string;
  /**ボタンの文字 */
  label1: string;
  /**ボタンの文字 */
  label2?: string;
  /**ボタンタイプ */
  type?: boolean;
};

/**ボタンコンポーネント
 * @params color　ボタン内のテキストの色
 * @params label1 ボタン内のテキスト
 * @params label2 ボタン内のテキスト
 * @params type ボタン内のテキスト
 */
export const Buttons = ({
  id,
  color = "black",
  label1,
  label2,
  type,
}: ButtonProps) => {
  const [isModal, setIsModal] = useRecoilState(modalFlagState);
  const [tasks, setTasks] = useRecoilState(taskState);

  const handleClick = () => {
    setIsModal(!isModal);
  };

  const handleUpdate = (id: number) => {
    setIsModal(!isModal);
    UpdateTask({ id, tasks });
  };

  const handleCompleted = () => {
    console.log(tasks);
    const isCompleted = completedTask({ id, tasks });
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task, index) => {
        if (index === id) {
          return { ...task, isCompleted: isCompleted };
        }
        return task;
      });
      return updatedTasks;
    });
  };

  if (type === true) {
    return (
      <div className="flex justify-center p-2 space-x-4 bg-gray-200 shadow-2xl rounded-xl">
        <button
          className="px-4 py-2 transition-shadow duration-300 bg-blue-300 shadow-inner rounded-xl hover:shadow-none"
          onClick={() => handleUpdate(id)}
        >
          {label1}
        </button>
        <button
          className="px-4 py-2 transition-shadow duration-300 bg-red-300 shadow-inner rounded-xl hover:shadow-none"
          onClick={handleCompleted}
        >
          {label2}
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`w-full py-3 text-red-600 px-14 bg-custom-gray rounded-custom shadow-custom`}
      onClick={handleClick}
    >
      {label1}
    </button>
  );
};
