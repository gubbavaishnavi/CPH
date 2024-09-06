import React from 'react'
import Card from '../components/Card'
import Navbar2 from '../components/Navbar2'
export default function Amazon() {
  return (
    <div>
    <div>
      <div><Navbar2/></div>
      </div>
    <div className="d-flex justify-content-center">
      <div><Card imagesrc={'../images/akanksha.jpg'} linkedinURL={'https://www.linkedin.com/in/akanksha-srikanth-52638016a'} name={'Akanksha SriKanth'} descript={'CSE,2017-2021<br>Programmer Analyst at Amazon'} emailID={'akankshasrikanth@gmail.com'}/></div>
      <div><Card imagesrc={'../images/ambika.jpg'} linkedinURL={"https://www.linkedin.com/in/ambika-bongirwar"}  name={'Ambika Bongirwar'} descript={'IT,2019-2023<br>SDE1 at Amazon'} emailID={'ambika.bongirwar@gmail.com'}/></div>
    </div>
    </div>
  )
}