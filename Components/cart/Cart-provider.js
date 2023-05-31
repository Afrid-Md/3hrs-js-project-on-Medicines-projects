import { useReducer } from "react";
import CartContext from "./Cart-context";

const defaultCart={
    items:[],
    totalAmount:0
}

const reducer=(state, action)=>{

    if(action.type==='ADD'){
        let totalAmount=state.totalAmount + action.item.Quantity * action.item.Price;

        const existingCartItemIndex=state.items.findIndex((item)=>item.id===action.item.id)

        const existingCartItem=state.items[existingCartItemIndex];

        let updatedItems;
        if(existingCartItem){
            const updatedItem={
                ...existingCartItem,
                Quantity:existingCartItem.Quantity+action.item.Quantity
            }

            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        }
        else{
            updatedItems=state.items.concat(action.item);
        }

        return{
            items:updatedItems,
            totalAmount:totalAmount,
        }
    }

    if(action.type==='REMOVE'){
        let totalAmount=state.totalAmount-action.item.Price*action.item.Quantity;

        const existingCartItemIndex=state.items.findIndex((item)=>item.id===action.item.id);

        const existingCartItem=state.items[existingCartItemIndex];

        let updatedItems;
        if(existingCartItem.Quantity===1){
            updatedItems=state.items.filter((item)=>item.id!==action.item.id)
        }
        else{
            const updatedItem={
                ...existingCartItem,
                Quantity:existingCartItem.Quantity-1
            }
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        }

        return{
            items:updatedItems,
            totalAmount:totalAmount
        }

    }
  return defaultCart;
}



function CartProvider(props){

    const[items,dispatchItems]=useReducer(reducer,defaultCart);

    const addItemHandler=(item)=>{
        dispatchItems({type:'ADD',item:item})
    }

    const removeItemHandler=(id)=>{
        dispatchItems({type:'REMOVE', id:id})
    }

    const purchaseHandler=()=>{
        dispatchItems({type:'PURCHASE'})
    }

    const CartContextValue={
        items:items,
        totalAmount:0,
        add:addItemHandler,
        remove:removeItemHandler,
        purchase:purchaseHandler
    }
    return(
        <CartContext.Provider value={CartContextValue}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;