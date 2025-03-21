import ListStyles from "./List.module.css";
import { Item } from "../Item/Item";
export const List:React.FC = () =>{
	const data: ItemProps[] = [
		{
			title : "Убедитесь, что TypeScript установлен",
			text : "npm install typescript @types/react @types/react-dom --save-dev",
			date : new Date()
		},
		{
			title : "Добавьте файл tsconfig.json",
			text : "Если его ещё нет, создайте файл tsconfig.json в корне проекта. Вот минимальная конфигурация, которая включает поддержку алиасов:",
			date : new Date()
		},
		{
			title : "Подключите алиасы в vite.config.ts",
			text : "Ваш текущий код уже поддерживает TypeScript. Вот готовый файл vite.config.ts:",
			date : new Date()
		}
	]
	return(
		<div>
			<Item
				data = {data[0]}
			/>
			<Item
				data = {data[1]}
			/>
			<Item
				data = {data[2]}
			/>
		</div>
	)
}