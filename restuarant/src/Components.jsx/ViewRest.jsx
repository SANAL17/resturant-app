import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import Review from './Review';




function ViewRest() {
  //get the id of particular restuaraent
  // const pathParams=useParams()
  // console.log(pathParams.id);
  // using Destructring
  const {id}=useParams()
  console.log(id);// object id=1

  const base_url="https://rest-backend-adrb.onrender.com/restaurants"
  const [restDetails,setRestDetails]=useState({})
  
  // api call toget restuarant details
  const fetchRestDeatails =async()=>{
    const result = await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setRestDetails(result.data)
  }
  console.log(restDetails);

  useEffect(()=>{
    fetchRestDeatails()
  },[])
  return (
    <div>
      <Row>
        <Col>
        <img style={{minWidth:'400px'}} src={restDetails.photograph} width={'100%'} height={'50%'} className='m-4' alt="" />
        </Col>
        <Col>
        <ListGroup className='p-5 m-5'>
      <h1>{restDetails.name}</h1>
      <ListGroup.Item>Address : {restDetails.address}</ListGroup.Item>
      <ListGroup.Item>Cousine_Type : {restDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Neighborhood : {restDetails.neighborhood}c</ListGroup.Item>
      <div className=''>
      <ListGroup.Item><RestOp op={restDetails.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><Review Op={restDetails.reviews}/></ListGroup.Item>

      </div>
     
     
    </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default ViewRest