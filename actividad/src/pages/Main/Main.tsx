import { useState } from "react";
import Buttom from "../../components/Buttom";

function Main() {
  const [count, setCount] = useState(0);

  const add = () => setCount((count) => count + 1);
  const rest = () => setCount((count) => count - 1);



  return (
    <>
      <h1>Actividad</h1>
      <div className="card">
        <h1>{count}</h1>
        <Buttom name="Sumar" onClick={add} />
        <Buttom name="Restar" onClick={rest} />
      </div>

     
    </>
  );
}

export default Main;
