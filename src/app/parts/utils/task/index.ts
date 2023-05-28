import { useRecoilValue } from "recoil";
import { taskState } from "@/app/lib/atoms/task";
import { TaskProps } from "@/app/types/task";

/**
 * タスクの編集を行う関数
 * @param Props {idとタスクの配列}
 * @returns
 */
export const UpdateTask = (Props: { id: number; tasks: TaskProps[] }) => {
  const { id, tasks } = Props;
  console.log(tasks[id]);

  // tasksを使った処理

  // タスクの更新処理を実装

  return null; // 必要に応じて適切な要素を返す
};

/**
 * 解決してるかのフラグを更新進する
 * @param Props
 * @returns
 */
export const completedTask = (Props: { id: number; tasks: TaskProps[] }) => {
  const { id, tasks } = Props;
  const isCompletedTask = !tasks[id].isCompleted;
  console.log(isCompletedTask);

  return isCompletedTask;
};
