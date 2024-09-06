import React from 'react'
import Card from '../components/Card'
import Navbar2 from '../components/Navbar2'
export default function Microsoft() {
  return (
    <div>
    <div>
      <div><Navbar2/></div>
      </div>
    <div className="d-flex justify-content-center">
      <div><Card imagesrc={'../images/swathi.jpg'} linkedinURL={"https://www.linkedin.com/in/sripadaswetha/"} name={'Swathi Sripadha'} descript={'ETE,2014-2018<br>Data Engineer at Microsoft'} emailID={'s.swathi@gmail.com'}/></div>
    </div>
    </div>
  )
}