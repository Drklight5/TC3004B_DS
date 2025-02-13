import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button"; 
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

  return (
    <>
      <Header />
      <h1>Actividad</h1>
      <div className="card">
        <h1>{count}</h1>
        <Button name="Sumar" onClick={add} />
        <Button name="Restar" onClick={rest} />
      </div>

      <div>
        <h2>Agregar item</h2>
        <Add add={addList} />
        <List items={list} />
      </div>
    </>
  );
}

export default App;
