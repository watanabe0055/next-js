import { TaskProps } from "@/app/types/task";
import { atom } from "recoil";

/**タスクのグルーバルステート */
export const taskState = atom<TaskProps[]>({
  key: "taskState",
  default: [],
});
