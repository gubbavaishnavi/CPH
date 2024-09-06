
import React from 'react'
import Card from '../components/Card'
import Navbar2 from '../components/Navbar2'
export default function JPMC() {
  return (
    <div>
    <div>
      <div><Navbar2/></div>
      </div>
    <div className="d-flex justify-content-center">
        <div><Card imagesrc={'../images/rishitha.jpg'} linkedinURL={'https://www.linkedin.com/in/nallapu-rishitha-17ba15226/'} name={'Nallapu Rishitha'} descript={'IT,2020-2024<br>SEP Intern at J P Morgan&Chase'} emailID={'n.rishitha@gmail.com'}/></div>
      <div><Card imagesrc={'../images/gayathri.jpg'} linkedinURL={'https://www.linkedin.com/in/malisettygayathridevi/'} name={'Malisetty Gayathri Devi'} descript={'ECE,2020-2024<br>SEP Intern at J P Morgan&Chase'} emailID={'gayathrimalishetty03@gmail.com'}/></div>
      <div><Card imagesrc={'../images/sindhuja.jpg'} linkedinURL={'https://www.linkedin.com/in/sindhuja-mudunuru-664aaa242/'} name={'Sindhuja Mudunuru'} descript={'CSE,2020-2024<br>SEP Intern at J P Morgan&Chase'} emailID={'m.sindhuja@gmail.com'}/></div>
    </div>
    </div>
  )
}