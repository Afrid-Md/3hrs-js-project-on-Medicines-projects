import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import CartContext from "./Cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const CartCtx = useContext(CartContext);
  let totalAmount=0;
  CartCtx.items.items.forEach((item)=>{
    totalAmount=totalAmount+item.Qunatity*item.Price
});


const orderHandler=()=>{
    CartCtx.purchase();
}
  return (
    <div
      className="modal show fade in"
      style={{ display: "block", position: "center" }}
    >
      <Modal.Dialog>
        <Modal.Header style={{ display: "flex", justifyContent: "center" }}>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ul>
            {CartCtx.items.items.map((item) => (
                <CartItem
                key={item.id}
                Name={item.Name}
                Price={item.Price}
                Quantity={item.Quantity}
              />
            ))}
          </ul>
        </Modal.Body>
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
        <h1>Total amount</h1>
        <h1>Rs.{totalAmount}</h1>

        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={orderHandler}>Order</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
export default Cart;
