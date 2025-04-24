import HeaderStyles from "./Header.module.css";
import { SelectUser } from "../SelectUser/SelectUser";
import { Logo } from "../Logo/Logo";

export const Header:React.FC = () =>{

	return(
		<>
			<Logo image={'/logo.svg'}/>
			<SelectUser/>
		</>
	)

}