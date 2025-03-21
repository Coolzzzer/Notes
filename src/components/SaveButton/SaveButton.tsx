import React,{useState} from 'react';
import SaveButtonStyles from "./SaveButton.module.css";

export const SaveButton:React.FC = () =>{
    const [text, setText] = useState<string>('Сохранить');
    const clicked = () =>{
        setText('Закрыть')
    }
	return(
		<button onClick={clicked}>{text}</button>
	)
}