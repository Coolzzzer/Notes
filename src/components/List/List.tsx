import React, { useContext, useMemo } from "react";
import ListStyles from "./List.module.css";
import { Item, DataItem } from "../Item/Item";
import { UserContext } from "../../context/user.context";

type ListProps = {
  items: DataItem[];
  setItem: React.Dispatch<React.SetStateAction<DataItem | null>>;
};

const sortItem = (a: { date: Date }, b: { date: Date }): number => {
  return a.date < b.date ? 1 : -1;
};

export const List: React.FC<ListProps> = ({ items, setItem }) => {
  const { userId } = useContext(UserContext);

  const filterItems = useMemo(
    () => items.filter(el => el.userId === userId).sort(sortItem),
    [items, userId]
  );

  if (filterItems.length === 0) {
    return <p>Записей нет</p>;
  }

  return (
    <div className={ListStyles.content}>
      {filterItems.map((el) => (
        <Item onClick={() => setItem(el)} key={el.id} data={el} />
      ))}
    </div>
  );
};
