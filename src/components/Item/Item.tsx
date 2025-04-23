import React, { ButtonHTMLAttributes } from 'react';
import ItemStyles from "./Item.module.css";

export type DataItem = {
  id: number;
  title: string;
  text: string;
  date: Date;
  userId: number;
};

export type FormItem = {
  id?: number;
  title: string;
  text: string;
  date: Date;
  userId: number;
};

type ItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  data: DataItem;
};

export const Item: React.FC<ItemProps> = ({ data, ...rest }) => {
  const formatDate = new Intl.DateTimeFormat("ru-RU").format(data.date);
  return (
    <button {...rest} className={ItemStyles.itemContainer}>
      <h2>{data.title}</h2>
      <div>
        <h4>{formatDate} {data.text}</h4>
      </div>
    </button>
  );
};
