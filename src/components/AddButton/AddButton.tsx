import AddButtonStyles from "./AddButton.module.css";

export const AddButton:React.FC = () =>{
	return(
		<>
			<button>
				<img src="plus.svg" width="10px"/> Новое воспоминание
			</button>
		</>
	)
}