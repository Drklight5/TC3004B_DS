
export default function Header() {
  return (
    <div style={{
        width:"",
        padding:"1.5rem",
        display: "d-flex",
        backgroundColor: "lightblue"
    }}>
        {
            ["Home", "About"].map((e, i) => 
            <span key={i} style={{padding:"0.5rem"}}>{e}</span>)
        }
    </div>
  )
}
