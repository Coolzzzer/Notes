import React, { useState } from "react";
import { Body } from "./panel/Body/Body";
import { Left } from "./panel/Left/Left";
import { List } from "./components/List/List";
import { Form } from "./components/Form/Form";
import { useLocalstorage } from "./hooks/useLocalstorage";
import { UserContextProvider } from "./context/user.context";
import { DataItem, FormItem } from "./components/Item/Item";

export const App: React.FC = () => {
  const [items, setItems] = useLocalstorage<DataItem[]>("data", []);
  const [selectedItem, setSelectedItem] = useState<DataItem | null>(null);

  const mapItems = (items: DataItem[]): DataItem[] => {
    if (!items) {
      return [];
    }
    return items.map(i => ({
      ...i,
      date: new Date(i.date)
    }));
  };

  const addItem = (item: FormItem) => {
    if (!item.id) {
      setItems([
        ...items,
        {
          ...item,
          date: new Date(item.date),
          id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
        }
      ]);
    } else {
      setItems(
        items.map(i => (i.id === item.id ? { ...item, date: new Date(item.date), id: i.id } : i))
      );
    }
  };

  return (
    <UserContextProvider>
      <div style={{ display: "flex", width: "150vh" }}>
        <Left>
          <List items={mapItems(items)} setItem={setSelectedItem} />
        </Left>
        <Body>
          <Form onSubmit={addItem} data={selectedItem} />
        </Body>
      </div>
    </UserContextProvider>
  );
};
