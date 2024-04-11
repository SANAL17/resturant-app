import React from 'react'
import { Link } from 'react-router-dom';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
function Restcard({restuarants}) {
    console.log(restuarants);
  return (
    <div>
   <Link to={`view/${restuarants.id}`}>
   <MDBCard className='mx-3 my-4' style={{height:'550px'}}>
    <MDBCardImage src={restuarants.photograph} height={'400px'} position='top' alt='...' />
    <MDBCardBody>
      <MDBCardTitle style={{}} className='text-white fw-bold' >{restuarants.name}</MDBCardTitle>
      <MDBCardText className='text-white'>
        <p>Address : <br />{restuarants.address}</p>
       
        {/* <p>Opening : <br />{restuarants[operating_hours]}</p> */}
       
      </MDBCardText>
    
    </MDBCardBody>
  </MDBCard>
   </Link>
  </div>
  )
}

export default Restcard