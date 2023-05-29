import { TaskProps } from "@/app/types/task";
import { atom } from "recoil";

/**タスクのグルーバルステート */
export const taskState = atom<TaskProps[]>({
  key: "taskState",
  default: [],
});

export const taskCounter = atom({
  key: "taskCounterState",
  default: 0,
});

export const taskSelected = atom({
  key: "taskSelected",
  default: [],
});
