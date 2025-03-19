import React from 'react';
import { Button } from '../Button/Button';
import ItemStyle from "./Item.module.css"

type ItemProps = {
	data: {
    title: string;
    text: string;
    date: Date;
  };
}
export const Item:React.FC<ItemProps> = ({data}) => {
	const formatDate = new Intl.DateTimeFormat('ru-Ru').format(data.date)
	return (
		<>
		<Button>
		<h2>{data.title}</h2>
		<div>
			<div>{data.text}</div>
			<h4>{formatDate}</h4>
		</div>
		<br></br>
		</Button>
		</>
	)
}