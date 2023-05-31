import React, { useState } from 'react';
import './App.css';
import ProductsForm from './Components/form/Form'
import Navbar from './Components/navbar/Navbar';
import Cart from './Components/cart/Cart';

function App() {

  const[cart,showCart]=useState(false);

  const cartOpen=()=>{
    showCart(true);
  }

  const closeHandler=()=>{
    showCart(false);
  }


  return (
    <React.Fragment>
      {cart && <Cart onClose={closeHandler}/>}
      <Navbar onOpen={cartOpen}/>
      <ProductsForm/>
    </React.Fragment>

  );
}

export default App;
