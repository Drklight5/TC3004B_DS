import { useState } from "react";
import Header from "./components/Header";
import Buttom from "./components/Buttom"; 
import Add from "./components/Add";
import List from "./components/List";
import Item from "./interface/Item";

function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState<Item[]>([]);

  const add = () => setCount((count) => count + 1);
  const rest = () => setCount((count) => count - 1);

  const addList = (nuevo: Item) => {
    setList((prev) => [...prev, { ...nuevo, id: prev.length + 1 }]); 
  };

  const deleteItem = (del: Item) => {
    setList(prev => prev.filter(i => i.id != del.id))
  }

  return (
    <>
      <Header />
      <h1>Actividad</h1>
      <div className="card">
        <h1>{count}</h1>
        <Buttom name="Sumar" onClick={add} />
        <Buttom name="Restar" onClick={rest} />
      </div>

      <div>
        <h2>Agregar item</h2>
        <Add add={addList} />
        <List items={list} onDelete={deleteItem}/>
      </div>
    </>
  );
}

export default App;
