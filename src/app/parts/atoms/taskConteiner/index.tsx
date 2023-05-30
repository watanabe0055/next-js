type Props = {
  children: any;
  isFlag?: boolean;
};
export const TaskContainer = (Props: Props) => {
  const { children, isFlag = false } = Props;
  return (
    <>
      <div
        className={
          isFlag ? "bg-blue-300 rounded p-5" : "bg-red-300 rounded p-5"
        }
      >
        <h3 className="text-center">{isFlag ? <p>完了</p> : <p>未完了</p>}</h3>
        {children}
      </div>
    </>
  );
};
