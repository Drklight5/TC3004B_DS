import { useEffect, useState } from "react";
import Add from "../../components/Add.jsx";
import List from "../../components/List.jsx";
import { addItem, deleteItem, getItems } from "../../services/item";

export default function Items() {


  const [list, setList] = useState([]);

  useEffect(() => {
    const callI = async ()=> {
      
      let response = await getItems()
      console.log(response)
      setList(response)
    }
    callI()
  }, [])
  
  const addList = async (nuevo) => {
    await addItem(nuevo)
    setList((prev) => [...prev, { ...nuevo, id: prev.length + 1 }]);
  };

  const quitItem = async (del) => {
    console.log(del)
    await deleteItem(del.ID)
    setList((prev) => prev.filter((i) => i.ID != del.ID));
  };
  return (
    <div>
      <div>
        <h2>Agregar item</h2>
        <Add add={addList} />
        <List items={list} onDelete={quitItem} />
      </div>
    </div>
  );
}
