import React, { useEffect, useReducer } from "react";
import FormStyles from "./Form.module.css";
import cn from "classnames";
import { INITIAL_STATE, formReducer } from "./Form.state";

type FormProps = {
  onSubmit: (item: { title: string; text: string; date: Date }) => void;
};

export const Form: React.FC<FormProps> = ({ onSubmit }) => {

	const [formState, dispatchForm] = useReducer(formReducer,INITIAL_STATE)
	const {isValid, isFormReadyToSubmit, values} = formState
	
	
  const handlerValidationForm = (e: React.FormEvent) => {
    e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
    const formProps = Object.fromEntries(formData.entries());
    const payload = {
			title: formProps.title as string,
      text: formProps.text as string,
      date: formProps.date ? new Date(formProps.date as string) : undefined,
    };
    dispatchForm({ type: "SUBMIT", payload });
  };

	const handlerOnChange = (e: React.FormEvent)=>{
		dispatchForm({type: 'SET_VALUE', payload: {[e.target.name]: e.target.value}})
	}

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values);
			dispatchForm({ type: 'CLEAR'});
		}
	}, [isFormReadyToSubmit]);


	useEffect(()=>{
		let timerId: ReturnType<typeof setTimeout>;
		if(!isValid.date || !isValid.text || !isValid.title){
			timerId = setTimeout(()=>{
				dispatchForm({type: 'RESET_VALIDITY'})
			},2000)
		}
		return ()=>{
			clearTimeout(timerId)
		}
	},[isValid])


  return (
    <form className={FormStyles.formContainer} onSubmit={handlerValidationForm}>
      <input className={cn(FormStyles.input, {
				[FormStyles.isValid]: !isValid.title
			})} 
        type="text"
        placeholder="Title"
				name="title"	
				value={values.title}
				onChange={handlerOnChange}
      />
      <textarea className={cn(FormStyles.textarea, {
				[FormStyles.isValid]: !isValid.text
			})}
        placeholder="Text"
				name="text"	
				value={values.text}
				onChange={handlerOnChange}
      />
      <input className={cn(FormStyles.input, {
				[FormStyles.isValid]: !isValid.date
			})}
				name="date"	
        type="date"
				value={values.date}
				onChange={handlerOnChange}
      />
      <button className={FormStyles.button} type="submit">Сохранить</button>
    </form>
  );
};
