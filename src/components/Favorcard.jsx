import React from 'react'
import Card from 'react-bootstrap/Card';
import { addfromfavorites, deletefavorites } from '../services/allAPI';
import { Button, Col, Row } from 'react-bootstrap';
import { useState } from 'react';


function Favorcard({showpro,Setdeletefavors}) {
  const [isAddedfromfavorite, setIsAddedfromfavorite] = useState(false);

  const removeproduct = async(id)=>{
    const response = await deletefavorites(id) 
    Setdeletefavors(true)
    console.log(response);

  }

  const addfromfavor = async () => {
  
     if(!isAddedfromfavorite){ 
      const {id, url, name, category, price, description } = showpro;

      const response = await addfromfavorites({ id,url, name, price, category, description });
      console.log( response);
      setIsAddedfromfavorite(true);
 }
  };
  
 

  return (
    <div className='mt-5'>
       <div className='mt-5'>
    




    <Row className="container   "  >
    <Col  md={3}> 
    <Card data-aos="fade-down" data-aos-duration="1000" className='mt-5 card shadow ' style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{height:'250px'}} className='p-5' src={showpro.url} />
      <Card.Body>
        <Card.Title>{showpro.name}</Card.Title>
        <Card.Text>
        <p><span>Price-₹</span>{showpro.price}</p>
         <p><span>Category-</span>{showpro.category}</p>
       
         <p><span>Description-</span>{showpro.description}</p>
        </Card.Text>
        <div className='d-flex align-items-center justify-content-between'>   <Button onClick={()=>removeproduct(showpro?.id)}  variant="outline-danger btn rounded"><i class="fa-solid fa-trash"></i></Button>
        <Button onClick={addfromfavor} variant="primary">
          {isAddedfromfavorite?'Added to Cart':'Add to Cart'}
          </Button>
      </div>
      </Card.Body>
    </Card>
    </Col>
    <Col  md={3}> </Col>
    <Col  md={3}> </Col>
    <Col  md={3}> </Col>

</Row>

       </div>
  </div>
  )
}

export default Favorcard
