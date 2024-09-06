import React from 'react'
import Card from '../components/Card'
import Navbar2 from '../components/Navbar2'
export default function ServiceNow() {
  return (
    <div>
    <div>
      <div><Navbar2/></div>
      </div>
    
    <div className="d-flex justify-content-center">
      <div><Card imagesrc={'../images/R.jpg'} linkedinURL={'https://www.linkedin.com/in/rupasri-ravuri-b199711aa/'} name={'Rupasri Ravuri'} descript={'CSE,2019-2023<br>Assistant Machine Learning Engineer at ServiceNow'} emailID={'rupasriravuri02@gmail.com'}/></div>
    </div>
    </div>
  )
}