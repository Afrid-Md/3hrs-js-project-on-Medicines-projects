function CartItem(props) {
  return (
    <li style={{listStyle:'none', borderBottom:'1px solid black'}}>
      <div style={{ display: "flex", justifyContent: "space-between",alignItems:'center' }}>
        <div>
          <h1>{props.Name}</h1>
          <div
            style={{
              display: "flex",
              justifyItems: "flex-start",
              alignItems: "center",
            }}
          >
            <h3>Rs.{props.Price}</h3>
            <span style={{ marginLeft: "5px" }}>x{props.Quantity}</span>
          </div>
        </div>
        <div style={{display:'flex', alignItems:'center'}}>
            <button style={{width:'40px', margin:'5px', border:'1px solid brown', borderRadius:'5px', fontSize:'20px', backgroundColor:'white'}}>-</button>
            <button button style={{width:'40px', margin:'5px', border:'1px solid brown', borderRadius:'5px', fontSize:'20px', backgroundColor:'white'}}>+</button>
        </div>
      </div>
    </li>
  );
}
export default CartItem;
