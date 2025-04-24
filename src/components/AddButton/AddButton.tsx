import AddButtonStyles from "./AddButton.module.css";
import { FormItem } from "../Item/Item";

type AddButtonProps = {
	onClearForm: (item: FormItem) => void;
};
export const AddButton:React.FC<AddButtonProps> = ({onClearForm}) =>{
	return(
		<>
			<button onClick={onClearForm}>
				<img src="plus.svg" width="10px"/> Новое воспоминание
			</button>
		</>
	)
}