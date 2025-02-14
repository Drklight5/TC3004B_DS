import Item from "../interface/Item"

interface ListProps {
  items: Item[];
  onDelete: (item: Item) => void;
}

export default function List({ items, onDelete }: ListProps) {
  return (
    <div>
      {items?.map((item) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>{item.number}</li>
          <li> <button type='button' onClick={() => onDelete(item)}>x</button> </li>
        </ul>
      ))}
    </div>
  );
}
