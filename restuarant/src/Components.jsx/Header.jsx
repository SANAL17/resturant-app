import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
      <MDBNavbar light bgColor='dark' >
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='text-white' >
           <i  class="fa-solid fa-utensils fa-flip mx-3 fs-5"></i>
           <h4 className=''>            RESTO CAFE</h4>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    
    </div>
  )
}

export default Header