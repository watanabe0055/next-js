import { modalFlagState } from "@/app/lib/atoms/modal";
import React from "react";
import { useRecoilState } from "recoil";

export const TaskModal = () => {
  const [isModal, setIsModal] = useRecoilState(modalFlagState);
  const handleClickModal = () => {
    setIsModal(!isModal);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="p-6 bg-white rounded-lg">
        <h2 className="mb-4 text-xl font-bold">Modal Title</h2>
        <p className="mb-4">Modal content goes here.</p>
        <button
          className="px-4 py-2 text-white bg-gray-500 rounded"
          onClick={handleClickModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};
