import SaveButtonStyles from "./SaveButton.module.css";

type TextProps = {
	text: string,
	onClick: any
}

export const SaveButton:React.FC<TextProps> = ({text, onClick}) =>{
	return(
		<button onClick={onClick}>{text}</button>
	)
}