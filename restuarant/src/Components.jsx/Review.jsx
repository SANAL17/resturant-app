import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
function Review({Op}) {
    console.log(Op);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <h6 variant="primary" style={{cursor:'pointer'}} onClick={handleShow}>
          
    Reviews <i class="fa-solid fa-star mx-2"></i>
  </h6>

  <Offcanvas show={show} onHide={handleClose}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Reviews</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
   {
    Op?.map(item=>(
        <ListGroup>
        <ListGroup.Item>Name : {item.name}</ListGroup.Item>
        <ListGroup.Item>Date : {item.date}</ListGroup.Item>
        <ListGroup.Item>Rating : {item.rating}</ListGroup.Item>
        <ListGroup.Item>Comments : {item.comments}</ListGroup.Item>
        
      </ListGroup>
    ))
   }
    </Offcanvas.Body>
  </Offcanvas>
  </div>
  )
}

export default Review