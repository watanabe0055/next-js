import { atom } from "recoil";

/**タスクのグルーバルステート */
export const taskState = atom({
  key: "user",
  default: {
    title: "",
    content: "",
    isCompleted: false,
  },
});
