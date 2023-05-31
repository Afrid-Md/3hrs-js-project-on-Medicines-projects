import React,{useContext} from "react";
import { Container, Navbar as NavBar } from "react-bootstrap";
import './Navbar.css'
import CartContext from "../cart/Cart-context";
function Navbar(props) {
  const CartCtx=useContext(CartContext);
  const totalItems=CartCtx.items.items.length;
  return (
    <NavBar bg="dark" variant="dark" expand="lg">
      <Container>
        <NavBar.Text style={{fontFamily:'cursive',fontSize:'30px'}}>Medicines</NavBar.Text>
        <button className="buttonn" onClick={props.onOpen}>
            <span>Cart</span>
            <span className="number">{totalItems}</span>  
        </button>
      </Container>
    </NavBar>
  );
}
export default Navbar;
