import React, { useState, useEffect } from "react";
import FormStyles from "./Form.module.css";
import cn from "classnames";

type FormProps = {
  onSubmit: (item: { title: string; text: string; date: Date }) => void;
};

const INITIAL_STATE = {
	title: true,
	text: true,
	date: true
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
	const [formValidState, setFormValidState] = useState(INITIAL_STATE)
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());
	const handlerValidationForm = (e: React.FormEvent)=>{
		e.preventDefault()
		let isFormValid = true
		if (!title?.trim().length){
			setFormValidState(state =>({...state,title:false}))
			isFormValid = false
		} else{
			setFormValidState(state =>({...state,title:true}))
		}
		if (!text?.trim().length){
			setFormValidState(state =>({...state,text:false}))
			isFormValid = false
		} else{
			setFormValidState(state =>({...state,text:true}))
		}
		if (!date){
			setFormValidState(state =>({...state,date:false}))
			isFormValid = false
		}
		else{
			setFormValidState(state =>({...state,date:true}))
		}
		if(!isFormValid){
			return;
		}
		handlerSubmit()
	}
	const handlerSubmit =()=>{
		onSubmit({ title, text, date })
		setTitle("");
    setText("");
    setDate(new Date());
	}
	useEffect(()=>{
		let timerId:any;
		if(!formValidState.date || !formValidState.text || !formValidState.title){
			timerId = setTimeout(()=>{
				setFormValidState(INITIAL_STATE)
			},2000)
		}
		return ()=>{
			clearTimeout(timerId)
		}
	},[formValidState])
  return (
    <form className={FormStyles.formContainer} onSubmit={handlerValidationForm}>
      <input className={cn(FormStyles.input, {
				[FormStyles.inValid]: !formValidState.title
			})} 
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea className={cn(FormStyles.textarea, {
				[FormStyles.inValid]: !formValidState.text
			})}
        value={text}
        placeholder="Text"
        onChange={(e) => setText(e.target.value)}
      />
      <input className={cn(FormStyles.input, {
				[FormStyles.inValid]: !formValidState.date
			})}
        type="date"
        value={date.toISOString().substr(0, 10)}
        onChange={(e) => setDate(new Date(e.target.value))}
      />
      <button className={FormStyles.button} type="submit">Сохранить</button>
    </form>
  );
};
