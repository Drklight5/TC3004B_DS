

export default function List({ items, onDelete }) {
  return (
    <div>
      {items?.map((item) => (
        <ul key={item.ID}>
          <li>{item.Nombre}</li>
          <li>{item.Price}</li>
          <li> <button type='button' onClick={() => onDelete(item)}>x</button> </li>
        </ul>
      ))}
    </div>
  );
}
