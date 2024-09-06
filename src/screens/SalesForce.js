import React from 'react'
import Card from '../components/Card'
import Navbar2 from '../components/Navbar2'
export default function SalesForce() {
  return (
    <div>
    <div>
      <div><Navbar2/></div>
      </div>
    <div className="d-flex justify-content-center">
    <div><Card imagesrc={'../images/himaja.jpg'} linkedinURL={'https://www.linkedin.com/in/himaja-elluru-858a63227'} name={'Himaja Elluru'} descript={'CSE,2020-2024<br>SDE Intern at SalesForce'} emailID={'himajaelluru@gmail.com'}/></div>
    </div>
    </div>
  )
}