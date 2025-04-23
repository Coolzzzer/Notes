import React, { ReactNode } from "react";
import BodyStyles from "./Body.module.css";

type BodyProps = {
  children: ReactNode
};

export const Body: React.FC<BodyProps> = ({ children }) => {
  return (
    <div className={BodyStyles.bodyContainer}>
			{children}
    </div>
  );
};
