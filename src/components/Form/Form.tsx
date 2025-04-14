import React, { useEffect, useReducer } from "react";
import FormStyles from "./Form.module.css";
import cn from "classnames";
import { INITIAL_STATE, formReducer } from "./Form.state";

type FormProps = {
  onSubmit: (item: { title: string; text: string; date: Date }) => void;
};

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formState;

  const handlerValidationForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatchForm({ type: "SUBMIT" });
  };
  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatchForm({ type: "SET_VALUE", payload: { [name]: value } });
  };

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit({
        ...values,
        date: new Date(values.date as string),
      });
      dispatchForm({ type: "CLEAR" });
    }
  }, [isFormReadyToSubmit, onSubmit, values]);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    if (!isValid.date || !isValid.text || !isValid.title) {
      timerId = setTimeout(() => {
        dispatchForm({ type: "RESET_VALIDITY" });
      }, 2000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  return (
    <form className={FormStyles.formContainer} onSubmit={handlerValidationForm}>
      <input
        className={cn(FormStyles.input, {
          [FormStyles.isValid]: !isValid.title,
        })}
        type="text"
        placeholder="Title"
        name="title"
        value={values.title}
        onChange={handlerOnChange}
      />
      <textarea
        className={cn(FormStyles.textarea, {
          [FormStyles.isValid]: !isValid.text,
        })}
        placeholder="Text"
        name="text"
        value={values.text}
        onChange={handlerOnChange}
      />
      <input
        className={cn(FormStyles.input, {
          [FormStyles.isValid]: !isValid.date,
        })}
        name="date"
        type="date"
        value={
          values.date
            ? new Date(values.date).toISOString().substring(0, 10)
            : ""
        }
        onChange={handlerOnChange}
      />
      <button className={FormStyles.button} type="submit">
        Сохранить
      </button>
    </form>
  );
};
