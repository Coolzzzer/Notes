import React from "react";
import BodyStyles from "./Body.module.css";
import { Form } from "../../components/Form/Form";

type BodyProps = {
  addItem: (item: { title: string; text: string; date: Date; userId: number }) => void;
};

export const Body: React.FC<BodyProps> = ({ addItem }) => {
  return (
    <div className={BodyStyles.bodyContainer}>
      <Form onSubmit={addItem} />
    </div>
  );
};
