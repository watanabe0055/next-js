import {
  isSelected,
  modalFlagState,
  modalUpdateFlagState,
} from "@/app/lib/atoms/modal";
import { useRecoilState, useRecoilValue } from "recoil";
import { useForm } from "react-hook-form";
import { taskCounter, taskState } from "@/app/lib/atoms/task";
import { AppContainer } from "../conteiner";

type FormData = {
  taskTitle: string;
  taskContent: string;
};

export const TaskModal = () => {
  const [isModal, setIsModal] = useRecoilState(modalFlagState);
  const [isUpdateModal, setIsUpdateModal] =
    useRecoilState(modalUpdateFlagState);
  const isUpdateFlag = useRecoilValue(modalUpdateFlagState);
  // タスクの配列
  const [tasks, setTasks] = useRecoilState(taskState);
  //タスクのidのカウンター
  const [taskId, setTaskId] = useRecoilState(taskCounter);
  /**編集をタップしたタスク */
  const selectedTaskId = useRecoilValue(isSelected);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  /**モーダルを閉じる */
  const handleClickModal = () => {
    setIsModal(!isModal);
    setIsUpdateModal(false);
  };

  /**登録できる時はグローバルステートに保存して、モーダルとフォームを閉じる */
  const onCreateSubmit = (data: FormData) => {
    setTaskId((prevTaskId) => prevTaskId + 1);
    const newTask = {
      id: taskId,
      title: data.taskTitle,
      content: data.taskContent,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    reset();
    setIsModal(!isModal);
  };

  /**登録できる時はグローバルステートに保存して、モーダルとフォームを閉じる */
  const handleUpdateSubmit = (data: FormData) => {
    const updatedTask = {
      ...tasks[selectedTaskId],
      title: data.taskTitle,
      content: data.taskContent,
    };
    const updatedTasks = [...tasks];
    updatedTasks[selectedTaskId] = updatedTask;
    setTasks(updatedTasks);
    reset();
    setIsModal(!isModal);
  };

  return (
    <>
      {isUpdateFlag ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-yellow-300"
          style={{ background: "rgba(252, 211, 77, 0.6)" }}
        >
          <div className="p-6 bg-white rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">タスク更新</h2>
              <button
                className="px-4 py-2 text-white bg-red-500 rounded "
                onClick={handleClickModal}
              >
                閉じる
              </button>
            </div>
            <p className="mb-4">更新するタスクを入力してください</p>
            <form onSubmit={handleSubmit(handleUpdateSubmit)}>
              <AppContainer>
                <label
                  htmlFor="my-input"
                  className="mb-1 font-medium text-gray-700 "
                >
                  タスク概要
                </label>
                <input
                  {...register("taskTitle", { required: true })}
                  defaultValue={tasks[selectedTaskId].title}
                  className="w-full min-w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.taskTitle && (
                  <p className="text-red-400">必須項目です</p>
                )}
              </AppContainer>
              <AppContainer>
                <label
                  htmlFor="my-input"
                  className="mb-1 font-medium text-gray-700"
                >
                  タスク内容
                </label>
                <input
                  {...register("taskContent", { required: true })}
                  defaultValue={tasks[selectedTaskId].content}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.taskContent && (
                  <p className="text-red-400">必須項目です</p>
                )}
              </AppContainer>
              <button className="px-4 py-2 text-white bg-gray-500 rounded">
                更新
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-yellow-300"
          style={{ background: "rgba(252, 211, 77, 0.6)" }}
        >
          <div className="p-6 bg-white rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">タスク</h2>
              <button
                className="px-4 py-2 text-white bg-red-500 rounded "
                onClick={handleClickModal}
              >
                閉じる
              </button>
            </div>
            <p className="mb-4">登録するタスクを入力してください</p>
            <form onSubmit={handleSubmit(onCreateSubmit)}>
              <AppContainer>
                <label
                  htmlFor="my-input"
                  className="mb-1 font-medium text-gray-700 "
                >
                  タスク概要
                </label>
                <input
                  {...register("taskTitle", { required: true })}
                  className="w-full min-w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.taskTitle && (
                  <p className="text-red-400">必須項目です</p>
                )}
              </AppContainer>
              <AppContainer>
                <label
                  htmlFor="my-input"
                  className="mb-1 font-medium text-gray-700"
                >
                  タスク内容
                </label>
                <input
                  {...register("taskContent", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.taskContent && (
                  <p className="text-red-400">必須項目です</p>
                )}
              </AppContainer>
              <button className="px-4 py-2 text-white bg-gray-500 rounded">
                登録
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
