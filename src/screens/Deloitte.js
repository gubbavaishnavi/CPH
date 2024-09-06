import React from 'react'
import Card from '../components/Card'
import Navbar2 from '../components/Navbar2'
export default function Deloitte() {
  return (
    <div>
    <div>
      <div><Navbar2/></div>
      </div>
    <div className="d-flex justify-content-center">
      <div><Card imagesrc={'../images/madhulika.jpg'} linkedinURL={'https://www.linkedin.com/in/madhulika-erukulla-5744a81a0/'} name={'Madhulika Erukulla'} descript={'IT,2019-2023 <br> Service Engineer at Providence India'} emailID={'e.madhulika.02@gmail.com'}/></div>
    </div>
    </div>
  )
}