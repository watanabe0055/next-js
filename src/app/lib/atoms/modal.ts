import { atom } from "recoil";

/**モーダル開閉のグローバルステート */
export const modalFlagState = atom({
  key: "taskModal",
  default: false,
});

/**編集モーダル判定フラグ */
export const modalUpdateFlagState = atom({
  key: "taskUpdateModal",
  default: false,
});

export const isSelected = atom({
  key: "isSelectedId",
  default: 0,
});
