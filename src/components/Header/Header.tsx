import HeaderStyles from "./Header.module.css";
import { SelectUser } from "../SelectUser/SelectUser";

export const Header:React.FC = () =>{

	return(
		<>
			<img src="/logo.svg"></img>
			<SelectUser/>
		</>
	)
}