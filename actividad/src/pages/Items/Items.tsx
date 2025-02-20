import { useState } from "react";
import Add from "../../components/Add";
import List from "../../components/List";
import Item from "../../interface/Item";

export default function Items() {

    
  const [list, setList] = useState<Item[]>([]);
      const addList = (nuevo: Item) => {
        setList((prev) => [...prev, { ...nuevo, id: prev.length + 1 }]);
      };

      const deleteItem = (del: Item) => {
        setList((prev) => prev.filter((i) => i.id != del.id));
      };
  return (
    <div>
      <div>
        <h2>Agregar item</h2>
        <Add add={addList} />
        <List items={list} onDelete={deleteItem} />
      </div>
    </div>
  );
}
