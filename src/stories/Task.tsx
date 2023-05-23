import React from "react";
import "./Task.css";

type TaskProps = {
  /**
   * ボタン内の文字
   */
  title: string;
  /**
   * ボタン内の文字
   */
  content: string;
};

/**
 * Primary UI component for user interaction
 */
export const Task = ({ title, content }: TaskProps) => {
  return (
    <>
      <div className="w-2 background-color: #34D399">
        <div>{title}</div>
        <div>{content}</div>
      </div>
    </>
  );
};
