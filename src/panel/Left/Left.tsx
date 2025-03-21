import LeftStyles from "./Left.module.css";
import { Header } from "../../components/Header/Header";
import { List } from "../../components/List/List";
import { AddButton } from "../../components/AddButton/AddButton";
export const Left:React.FC = () =>{

	return(
		<>
			<Header/>
			<AddButton/>
			<List/>
		</>
	)
}