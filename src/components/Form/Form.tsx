import React, { useState } from "react";
import FormStyles from "./Form.module.css";

type FormProps = {
  onSubmit: (item: { title: string; text: string; date: Date }) => void;
};

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, text, date });
    setTitle("");
    setText("");
    setDate(new Date());
  };

  return (
    <form className={FormStyles.formContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={text}
        placeholder="Text"
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="date"
        value={date.toISOString().substr(0, 10)}
        onChange={(e) => setDate(new Date(e.target.value))}
      />
      <button type="submit">Сохранить</button>
    </form>
  );
};
