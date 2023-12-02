import React, { useState } from 'react';
import { sellproduct } from '../services/allAPI';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

function Addpro() {
  const [show, setShow] = useState(false);
  const [pro, setPro] = useState({
    id: '',
    url: '',
    name: '',
    category: '',
    price: '',
    description: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setPro({ ...pro, [field]: value });
  };

  const handleUpload = async () => {
    const { id, url, name, category, price, description } = pro;

    if (!id || !url || !name || !category || !price || !description) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all the details!',
      });
    } else {
      try {
        const response = await sellproduct(pro);

        if (response.status >= 200 && response.status < 300) {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Uploaded successfully',
          }).then(handleClose);
        } else {
          console.log(response);
          throw new Error('Something went wrong.');
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Try Again Later!',
        });
      }
    }
  };

  return (
    <div className='d-flex align-items-center'>
      <div className='d-block mx-auto'>
        <Button onClick={handleShow} className='d-block mx-auto' variant="primary">Sell Now</Button>
      </div>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title><i className="fa-brands fa-opencart me-2"></i>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="border border-primary p-3 rounded">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter product ID" onChange={(e) => handleInputChange(e, 'id')} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="text" placeholder="Enter product Image URL"onChange={(e)=>setPro({...pro,url:e.target.value})} />
      
     </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Enter product Name"onChange={(e)=>setPro({...pro,name:e.target.value})} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="text" placeholder="Enter product Category  "onChange={(e)=>setPro({...pro,category:e.target.value})} />
      
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="text" placeholder="Price"onChange={(e)=>setPro({...pro,price:e.target.value})} />
      
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="text" placeholder="Description"onChange={(e)=>setPro({...pro,description:e.target.value})} />
      
     </Form.Group>

            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className='w-25' variant="danger" onClick={handleClose}>
              CANCEL
            </Button>
            <Button onClick={handleUpload} className='w-25' variant="success">ADD</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Addpro;
