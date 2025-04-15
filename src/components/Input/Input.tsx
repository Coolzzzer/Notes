import React, { forwardRef } from "react";
import cn from "classnames";
import InputStyles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;
  appearance?: keyof typeof InputStyles;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, isValid = true, appearance, ...props }, ref) => {
    return (
      <input
        {...props}
        className={cn(InputStyles.input, className, {
          [InputStyles.isValid]: !isValid,
          [appearance as string]: appearance,
        })}
        ref={ref}
      />
    );
  }
);

Input.displayName = "Input";

