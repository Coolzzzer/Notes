import React, { useContext } from "react";
import ListStyles from "./List.module.css";
import { Item } from "../Item/Item";
import { UserContext } from "../../context/user.context";

type DataItem = {
  id: number;
  title: string;
  text: string;
  date: Date;
	userId: number
};

type ListProps = {
  items: DataItem[];
};

const sortItem = (a: { date: Date }, b: { date: Date }): number => {
  return a.date < b.date ? 1 : -1;
};

export const List: React.FC<ListProps> = ({ items }) => {
	const {userId} = useContext(UserContext)
	if (items.length===0){
		
		return <p>Записей нет</p>
	}
	if (items.length >= 1){
		return (
			<div className={ListStyles.content}>
				{items
				.filter(el=>el.userId === userId)
				.sort(sortItem)
				.map((el) => (
					<Item key={el.id} data={el}/>
				))}
			</div>
		)
	}
};

