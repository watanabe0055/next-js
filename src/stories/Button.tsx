import React from "react";
import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  color: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
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
