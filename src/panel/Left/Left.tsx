import LeftStyles from "./Left.module.css";
import { Header } from "../../components/Header/Header";
import { AddButton } from "../../components/AddButton/AddButton";

type LeftProps = {
	children: any
}
export const Left:React.FC<LeftProps> = ({children}) =>{

	return(
		<>
			<div className={LeftStyles.leftContainer}>
				<Header/>
				<AddButton/>
				<div>{children}</div>
			</div>
		</>
	)
}