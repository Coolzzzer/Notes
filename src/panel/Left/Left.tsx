import LeftStyles from "./Left.module.css";
import { Header } from "../../components/Header/Header";

type LeftProps = {
	children: any
}
export const Left:React.FC<LeftProps> = ({children}) =>{

	return(
		<>
			<div className={LeftStyles.leftContainer}>
				<Header/>
				<div>{children}</div>
			</div>
		</>
	)
}