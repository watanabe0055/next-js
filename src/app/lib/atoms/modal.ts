import { atom } from "recoil";

/**モーダル開閉のグローバルステート */
export const modalFlagState = atom({
  key: "taskModal",
  default: false,
});
