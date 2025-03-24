import React from "react";
import ListStyles from "./List.module.css";
import { Item } from "../Item/Item";

type DataItem = {
  id: number;
  title: string;
  text: string;
  date: Date;
};

type ListProps = {
  items: DataItem[];
};

const sortItem = (a: { date: Date }, b: { date: Date }): number => {
  return a.date < b.date ? 1 : -1;
};

export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <div>
      {items.sort(sortItem).map((el) => (
        <Item key={el.id} data={el} />
      ))}
    </div>
  );
};

