import React from "react";
import { Body } from "./panel/Body/Body";
import { Left } from "./panel/Left/Left";
import { List } from "./components/List/List";
import { useLocalstorage } from "./hooks/useLocalstorage";
import { UserContextProvider } from "./context/user.context";

export type DataItem = {
  id: number;
  title: string;
  text: string;
  date: Date;
	userId: number
};

export const App: React.FC = () => {

  const [items, setItems] = useLocalstorage<DataItem[]>('data', []);

	const mapItems = (items: DataItem[]) =>{
		if (!items){
			return []
		}
		return items.map(i => ({
      ...i,
			date: new Date(i.date)
		}))
	}

  const addItem = (item: Omit<DataItem, "id">) => {
    setItems([
			...mapItems(items), 
			{
				...item,
				date: new Date(item.date),
        id: items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1
				
      }
		]);
  };
  return (
		<UserContextProvider>
			<div style={{ display: "flex", width: "150vh"}}>
				<Left>
					<List items={mapItems(items)} />
				</Left>
				<Body addItem={addItem} />
			</div>
		</UserContextProvider>
  );
};
