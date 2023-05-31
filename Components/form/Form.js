import React,{useRef, useState} from "react";
import { Button, Form } from "react-bootstrap";
import ItemsList from "../List/ItemsList";



function ProductsForm(props) {

  const[item, setItem]=useState([]);

  const nameRef=useRef();
  const desRef=useRef();
  const priceRef=useRef();

  const submitHandler=(e)=>{
    e.preventDefault();

    const name=nameRef.current.value;
    const description=desRef.current.value;
    const price=priceRef.current.value;

    const obj={
      id:name.toLowerCase(),
      Name:name,
      Description:description,
      Price:price,
      Quantity:1,
    }
    setItem((prev)=>[...prev,obj]);
    nameRef.current.value=null;
    desRef.current.value=null;
    priceRef.current.value=null;
  }

  return (
    <React.Fragment>
    <Form
    onSubmit={submitHandler}
      className="shadow-lg p-3 mb-5 bg-white rounded"
      style={{
        maxWidth: "1000px",
        marginTop: "50px",
        marginLeft: "300px",
        marginRight: "300px",
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name of the medicine</Form.Label>
        <Form.Control type="text" placeholder="enter name" ref={nameRef}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="descrition of the medicine" ref={desRef}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="enter price" ref={priceRef} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add product
      </Button>
    </Form>
    <ItemsList items={item}/>
    </React.Fragment>
  );
}
export default ProductsForm;
