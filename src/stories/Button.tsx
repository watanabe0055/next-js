import React from "react";
import "./button.css";

interface ButtonProps {
  /**
   * ボタン内の文字
   */
  label: string;
  /**
   * ボタン内の文字色
   */
  color: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ color, label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`py-3 px-14 text-${color}-600 bg-custom-gray rounded-custom shadow-custom w-full`}
      {...props}
    >
      {label}
    </button>
  );
};
