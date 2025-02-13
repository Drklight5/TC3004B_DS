
interface ButtonProps {
  name: string;
  onClick: () => void;
}


export default function Buttom({name, onClick}:ButtonProps) {

  return (
    <button onClick={onClick} type="button"> {name}</button>
  )
}
