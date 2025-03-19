import React from 'react';
import ButtonStyle from "./Button.module.css"

type ButtonProps = {
	children: React.ReactNode
}

export const Button:React.FC<ButtonProps> = ({children}) =>{
	return(
		<>
				<button className={ButtonStyle.btn}>{children}</button>
		</>
	)
}