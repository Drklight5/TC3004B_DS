import { useState } from "react";
import Item from "../interface/Item";

interface AddProps {
  add: (nuevo: Item) => void;
}

export default function Add({ add }: AddProps) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !number) return;

    const newItem: Item = {
      id: Date.now(), // Generar un ID único
      name,
      number,
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
