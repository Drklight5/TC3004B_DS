

export default function List({ items, onDelete }) {
  return (
    <div>
      {items?.map((item) => (
        <ul key={item["_id"]}>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li> <button type='button' onClick={() => onDelete(item)}>x</button> </li>
        </ul>
      ))}
    </div>
  );
}
