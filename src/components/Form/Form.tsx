import React, { useEffect, useReducer, useRef, useContext } from "react";
import FormStyles from "./Form.module.css";
import { UserContext } from "../../context/user.context";
import cn from "classnames";
import { INITIAL_STATE, formReducer } from "./Form.state";
import { Input } from "../Input/Input";
import { FormItem } from "../Item/Item";

type FormProps = {
  onSubmit: (item: FormItem) => void;
  data: FormItem | null;
	onDelete: (item: FormItem) => void;
};

export const Form: React.FC<FormProps> = ({ onSubmit, data, onDelete }) => {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formState;
  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const { userId } = useContext(UserContext);

  const focusError = (isValid: { title: boolean; text: boolean; date: boolean }) => {
    if (!isValid.title && titleRef.current) {
      titleRef.current.focus();
    } else if (!isValid.date && dateRef.current) {
      dateRef.current.focus();
    } else if (!isValid.text && textRef.current) {
      textRef.current.focus();
    } 
  };

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
        userId: userId,
        date: new Date(values.date as string),
      });
      dispatchForm({ type: "CLEAR" });
      dispatchForm({ type: "SET_VALUE", payload: { userId: userId } });
    }
  }, [isFormReadyToSubmit, values, onSubmit, userId]);

  useEffect(() => {
    if (!data) {
			dispatchForm({ type: "CLEAR" });
      dispatchForm({ type: "SET_VALUE", payload: { userId: userId } });
    }
		dispatchForm({ type: "SET_VALUE", payload: { ...data } });
  }, [data]);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    if ( !isValid.text || !isValid.date || !isValid.title) {
      focusError(isValid);
      timerId = setTimeout(() => {
        dispatchForm({ type: "RESET_VALIDITY" });
      }, 2000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  useEffect(() => {
    dispatchForm({ type: "SET_VALUE", payload: { userId: userId } });
  }, [userId]);
	const deleteItem = () =>{
		onDelete(data.id)
		dispatchForm({ type: "CLEAR" });
		dispatchForm({ type: "SET_VALUE", payload: { userId: userId } });
	}

  return (
    <form className={FormStyles.formContainer} onSubmit={handlerValidationForm}>
      <Input
        isValid={isValid.title}
        type="text"
        ref={titleRef}
        placeholder="Title"
        name="title"
        value={values.title}
        onChange={handlerOnChange}
      />
			<Input
        isValid={isValid.date}
        name="date"
        type="date"
        ref={dateRef}
        value={
          values.date
            ? new Date(values.date).toISOString().substring(0, 10)
            : ""
        }
        onChange={handlerOnChange}
      />
      <textarea
        className={cn(FormStyles.textarea, {
          [FormStyles.isValid]: !isValid.text,
        })}
        placeholder="Text"
        name="text"
        ref={textRef}
        value={values.text}
        onChange={handlerOnChange}
      />
			<div className={FormStyles.containerButton}>
				<button className={FormStyles.button} type="submit">
					Save
				</button>
				{data?.id && <button className={FormStyles.deleteButton} type="button" onClick={()=>deleteItem()}>Delete</button>}
			</div>
    </form>
  );
};
