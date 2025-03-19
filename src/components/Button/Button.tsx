import React,{useState} from 'react';
import AddButton from "./Button.module.css";
export const Button:React.FC = () =>{
    const [text, setText] = useState<string>('Сохранить');
    const clicked = () =>{
        setText('Закрыть')
    }
	return(
			<button onClick={clicked}>{text}</button>
	)
}