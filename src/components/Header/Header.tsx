import HeaderStyles from "./Header.module.css";
import { SelectUser } from "../SelectUser/SelectUser";
import { useCallback, useState } from "react";
import { Logo } from "../Logo/Logo";

const logos = ['/logo.svg', '/vite.svg']

export const Header:React.FC = () =>{

	const [logoIndex, setLogoIndex] = useState(0)

	const toggleIndes = useCallback(() => {
		setLogoIndex(state =>Number(!(state)))
	},[])

	return(
		<>
			<button onClick={toggleIndes}>toggle logo</button>
			<Logo image={logos[logoIndex]}/>
			<SelectUser/>
		</>
	)

}