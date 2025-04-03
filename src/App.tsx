import React, { useEffect, useState } from "react";
import { Body } from "./panel/Body/Body";
import { Left } from "./panel/Left/Left";
import { List } from "./components/List/List";

type DataItem = {
  id: number;
  title: string;
  text: string;
  date: Date;
};

export const App: React.FC = () => {

  const [items, setItems] = useState<DataItem[]>([]);

	useEffect(()=>{
		const data = localStorage.getItem('data')
		if(data){
			const parsedData = JSON.parse(data).map(item => ({
				...item,
				date: new Date(item.date)
			}))
			setItems(parsedData)
		}
	},[])

  const addItem = (item: Omit<DataItem, "id">) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        id: (oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1),
        ...item,
      },
    ]);
  };

  return (
    <div style={{ display: "flex", width: "150vh"}}>
			<Left>
				<List items={items} />
			</Left>
			<Body addItem={addItem} />
    </div>
  );
};
