import { useState } from "react";

export default function Add({ add }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return;

    const newItem = {
      Nombre: name,
      Price: number,
    };

    add(newItem);
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="number">Número:</label>
        <input
          type="number"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </div>

      <button type="submit">Agregar</button>
    </form>
  );
}
