import { useRecoilValue } from "recoil";
import { taskState } from "@/app/lib/atoms/task";
import { TaskProps } from "@/app/types/task";

/**
 * 編集をタップしたタスクのidを返す
 * @param Props {idとタスクの配列}
 * @returns
 */
export const UpdateTask = (Props: {
  id: number;
  tasks: TaskProps[];
}): number => {
  const { id, tasks } = Props;
  return tasks[id].id;
};

/**
 * 解決してるかのフラグを更新進する
 * @param Props
 * @returns
 */
export const completedTask = (Props: {
  id: number;
  tasks: TaskProps[];
}): boolean => {
  const { id, tasks } = Props;
  const isCompletedTask = !tasks[id].isCompleted;

  return isCompletedTask;
};
