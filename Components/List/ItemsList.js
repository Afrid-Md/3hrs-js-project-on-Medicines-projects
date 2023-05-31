import './ItemsList.css'
import { useContext } from 'react';
import CartContext from '../cart/Cart-context'

function ItemsList(props){
    const cartCtx=useContext(CartContext);

    const addToCartItemHandler=(item)=>{
        cartCtx.add(item);
        console.log(cartCtx.items.items)
        console.log(cartCtx.totalAmount);
    }

   const item=props.items.map((item)=>(
    <li className="list" key={item.Name}>
        <span>{item.Name}</span>
        <span>{item.Description}</span>
        <span>Rs.{item.Price}</span>
        <button className='buttonn' onClick={()=>addToCartItemHandler(item)}>Add to cart</button>
    </li>
   )) 


    return(
        <ul>
            {item}
        </ul>
    )
}
export default ItemsList;