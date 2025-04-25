import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import SelectUserStyles from "./SelectUser.module.css";


export const SelectUser:React.FC = () =>{
	const {userId,setUserId} = useContext(UserContext);

	const changeUser = (e: React.FormEvent<HTMLSelectElement>) => {
		setUserId(Number(e.currentTarget.value))
	}
	return(
			<select className={SelectUserStyles.select} name="user" id="user" onChange={changeUser} value={userId} > 
				<option value="1">Vika </option>
				<option value="2">Andrey</option>
			</select>
	)
}