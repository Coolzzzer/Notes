import React from 'react';
import ItemStyles from "./Item.module.css";
type ItemProps = {
	data: {
		id: number;
		title: string;
		text: string;
		date: Date;
  };
}
export const Item:React.FC<ItemProps> = ({data}) => {
	const formatDate = new Intl.DateTimeFormat('ru-Ru').format(data.date)
	return (
		<>
		<button className={ItemStyles.itemContainer}>
			<h2>{data.title}</h2>
			<div>
				<h4>{formatDate} {data.text}</h4>
			</div>
		</button>
		</>
	)
}