import BodyStyles from "./AddButton.module.css";
import { SaveButton } from "../../components/SaveButton/SaveButton";
export const Body:React.FC = () =>{
	const inputChange = (event:any) =>{
		console.log(event.target.value)
	}
	return(
		<>
			<input type="text" onChange={inputChange}/>
			<SaveButton/>
		</>
	)
}