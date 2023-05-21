import React from "react";
type ContentProps = {
  content: string;
};
export const Content = (Props: ContentProps) => {
  const { content } = Props;
  return (
    <>
      <div className="whitespace-pre-line">{content}</div>
    </>
  );
};
