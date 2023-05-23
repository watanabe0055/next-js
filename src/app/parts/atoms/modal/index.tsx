import { modalFlagState } from "@/app/lib/atoms/modal";
import React from "react";
import { useRecoilState } from "recoil";

export const TaskModal = () => {
  const [isModal, setIsModal] = useRecoilState(modalFlagState);
  /**モーダルを閉じる */
  const handleClickModal = () => {
    setIsModal(!isModal);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-yellow-300 opacity-50">
      <div className="p-6 bg-white rounded-lg">
        <h2 className="mb-4 text-xl font-bold">タスク</h2>
        <p className="mb-4">登録するタスクを入力してください</p>
        <button
          className="px-4 py-2 text-white bg-gray-500 rounded"
          onClick={handleClickModal}
        >
          登録
        </button>
      </div>
    </div>
  );
};
