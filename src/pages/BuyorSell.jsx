import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Addpro from '../components/Addpro';

function BuyorSell() { 
  return (
    <div>   
<div className='container'>
<Row className="container mt-5  "  >
<Col > </Col>
    <Col  data-aos="zoom-in-right"   data-aos-duration="1000"  md={3}> <Card className='me-5 card shadow ' style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://assets-v2.lottiefiles.com/a/5f52011c-1167-11ee-bb7a-87ae82e79a64/WoZMYyosBw.gif" />
      <Card.Body>
      
        <Card.Text>
        Explore our wide range of items.We will guide you through the complete buying Expericence.
        </Card.Text>
        <Link to={'/home'} className='text-decoration-none' > <Button className='d-block mx-auto' variant="primary">Buy Now</Button></Link>
        
      </Card.Body>
    </Card> </Col>
    <Col data-aos="zoom-in-left" data-aos-duration="1000"  md={3}> <Card className='ms-5 card shadow ' style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://parcamkapinda.com/img/cart.gif" />
      <Card.Body>
      
        <Card.Text>
         We can give you an option to sell your items.Also we will find prospective buyers for you.
        </Card.Text>
        <div>
        <Addpro/>
      </div>
       
      </Card.Body>
    </Card> </Col>
    <Col  md={3}>  </Col>




</Row>
<br /><br />
</div>




</div>
  )
}

export default BuyorSell