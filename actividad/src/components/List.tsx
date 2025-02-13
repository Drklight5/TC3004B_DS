import Item from "../interface/Item"

interface ListProps {
  items: Item[];
}

export default function List({ items }: ListProps) {
  return (
    <div>
      {items?.map((item) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>{item.number}</li>
        </ul>
      ))}
    </div>
  );
}
