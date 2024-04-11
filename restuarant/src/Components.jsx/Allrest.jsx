import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Restcard from './Restcard';
import './home.css'
function Allrest() {
  const base_url="https://rest-backend-adrb.onrender.com/restaurants"

  const [AllRestdata,setAllRestdata]=useState([])

  const fetchData=async()=>{
    const result =await axios.get(base_url)
    console.log(result.data);
    setAllRestdata(result.data)
  }
  useEffect(()=>{fetchData()},[])
  return (
    <div>
      <div className="banner">
        <img style={{width:'100%'}} src="https://cdn.pixabay.com/photo/2024/04/03/18/55/ai-generated-8673601_1280.png" alt="" />
        <div className='b-text' style={{position:'absolute',top:'28%',left:'30%'}}>
          <h1 className=' text-center'>ENJOY YOUR FOOD 
          AT <br /> </h1>
          <h1 className=' text-center'>RESTO-CAFE</h1>
          <div className="text-center m-4">
            <button className='btn bg-white text-black px-5'>Reservation</button>
          </div>
        </div>
      </div>
      <div className="text container">
        <h1 className='text-center m-5'>Find your best food</h1>
        <p className='text m-5' style={{textAlign:'justify'}}>Welcome to RESTO-CAFE, where every meal is a masterpiece and every bite is a celebration of flavor. Step into a world where
         culinary excellence meets warm hospitality, and let us take you on a gastronomic adventure
          you won't soon forget. It is a paradisematic country, in which roasted parts of sentences fly into your mouth..</p>
        <p className=''></p>
      </div>
      <div>
      <img style={{width:"100%"}} src="https://preview.colorlib.com/theme/meal/images/bg_hero.png" alt="" />

      </div>
      <div className='container'>
        <h2 className='text-center mt-4 mb-5 '>Meet The Chefs</h2>
        <Row>
          <Col className='text-center'>
          <img className='m-3' style={{width:'200px',borderRadius:'50%'}} src="https://preview.colorlib.com/theme/meal/images/chef_1.jpg" alt="" />
          <h4>Daniel Graham</h4>
          <p className='fs-5 text-center'>MASTER CHEF</p>
          <p style={{textAlign:'justify',padding:'10px 60px 10px 60px'}}>Introducing Chef Daniel, the creative genius behind  RESTO-CAFE's culinary wonders. With 12 years of experience and a passion for crafting unforgettable dishes, Chef Daniel brings innovation and artistry to every plate. Prepare to be dazzled by Chef Daniel's culinary masterpieces</p>
          </Col>
          <Col className='text-center'>
          <img className='m-3' style={{width:'200px',borderRadius:'50%'}} src="https://preview.colorlib.com/theme/meal/images/chef_2.jpg" alt="" />
          <h4>Nick Browning</h4>
          <p className='fs-5'>MASTER CHEF</p>
          <p  style={{textAlign:'justify',padding:'10px 60px 10px 60px'}}> Introducing Chef Nick, the creative genius behind  RESTO-CAFE's culinary wonders. With 10 years of experience and a passion for crafting unforgettable dishes, Chef Nick brings innovation and artistry to every plate. Prepare to be dazzled by Chef Nick's culinary masterpieces</p>

          </Col>
        </Row>

        <h2 className='text-center m-5'>Delicious Menu</h2>
        {/* <p className='mb-3'>Discover culinary bliss at [Restaurant Name]. Our menu: a celebration of fresh ingredients, bold flavors, and unforgettable dining experiences. Indulge in the artistry of our dishes, where every bite tells a story of passion and creativity.</p> */}

      </div>
      <Row className='m-5'>
        {
          AllRestdata.map(item=>(
            <Col  sm={12} md={6} lg={4} xl={3}>
           <Restcard restuarants={item}/>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default Allrest