import React from "react";
type TitleProps = {
  title: string;
};

export const Title = (Props: TitleProps) => {
  const { title } = Props;
  return <div>{title}</div>;
};
