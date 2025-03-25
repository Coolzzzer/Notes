import React, { useState } from "react";
import { Body } from "./panel/Body/Body";
import { Left } from "./panel/Left/Left";
import { List } from "./components/List/List";

type DataItem = {
  id: number;
  title: string;
  text: string;
  date: Date;
};

const INITIAL_DATA: DataItem[] = [
  // {
  //   id: 1,
  //   title: "Убедитесь, что TypeScript установлен",
  //   text: "npm install typescript @types/react @types/react-dom --save-dev",
  //   date: new Date(),
  // },
  // {
  //   id: 2,
  //   title: "Добавьте файл tsconfig.json",
  //   text: "Если его ещё нет, создайте файл tsconfig.json в корне проекта. Вот минимальная конфигурация, которая включает поддержку алиасов:",
  //   date: new Date(),
  // },
  // {
  //   id: 3,
  //   title: "Подключите алиасы в vite.config.ts",
  //   text: "Ваш текущий код уже поддерживает TypeScript. Вот готовый файл vite.config.ts:",
  //   date: new Date(),
  // },
];

export const App: React.FC = () => {

  const [items, setItems] = useState<DataItem[]>(INITIAL_DATA);

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
