import React from "react";
type TitleProps = {
  title: string;
};

export const Title = (Props: TitleProps) => {
  const { title } = Props;
  return (
    <div>
      <h3>タスク概要</h3>
      <p className="ml-2">{title}</p>
    </div>
  );
};
