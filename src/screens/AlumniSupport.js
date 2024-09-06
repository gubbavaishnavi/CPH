import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar2 from "../components/Navbar2";
export default function AlumniSupport() {
  let navigate = useNavigate();
    const handleAmazon = async()=>{
        navigate('/Amazon');
    }
    const handleJPMC = async()=>{
        navigate('/JPMC');
    }
    const handleServiceNow=async()=>{
        navigate('/ServiceNow');
    }
    const handleSalesForce=async()=>{
      navigate('/SalesForce');
  }
  const handleDeloitte=async()=>{
    navigate('/Deloitte');
}
const handleMicrosoft=async()=>{
  navigate('/Microsoft');
}
  return (
    <div>
    <div>
      <div><Navbar2/></div>
      </div>
    {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <div style={{ textAlign: "center" }}> */}
      <div className="d-flex justify-content-center">
      <button style={styles.button} onClick={handleJPMC}>JPMC</button>
      <button style={styles.button} onClick={handleMicrosoft}>Microsoft</button>
      <button style={styles.button} onClick={handleAmazon}>Amazon</button>
      </div>
      <div className="d-flex justify-content-center">      
      <button style={styles.button} onClick={handleDeloitte}>Providence</button>      
      <button style={styles.button} onClick={handleServiceNow}>ServiceNow</button>
      <button style={styles.button} onClick={handleSalesForce}>SalesForce</button>
      </div>
      {/* </div>
    </div> */}
    </div>
  );
}

const styles={
  button:{
    width:'120px',
    height:'70px',
    margin:'30px',
    backgroundColor:'#00bc8c',
    color:'white', 
    fontStyle: 'italic',
    fontSize: 'calc(1rem + 0.15vw)',
    fontWeight: 'bold'
}
};

// import React from 'react'
// import Card from '../components/Card'
// import Navbar3 from '../components/Navbar3'
// export default function AlumniSupport() {
//   return (
//     <div>
//       <div><Navbar3/></div>
//       </div>
//     <div className="d-flex justify-content-center">
//       <div><Card imagesrc={'../images/himaja.jpg'} linkedinURL={'https://www.linkedin.com/in/himaja-elluru-858a63227'} name={'Himaja Elluru'} descript={'CSE,2020-2024<br>SDE Intern at SalesForce'}/></div>
//       <div><Card imagesrc={'../images/akanksha.jpg'} linkedinURL={'https://www.linkedin.com/in/akanksha-srikanth-52638016a'} name={'Akanksha SriKanth'} descript={'CSE,2017-2021<br>Programmer Analyst at Amazon'}/></div>
//       <div><Card imagesrc={'../images/ambika.jpg'} linkedinURL={"https://www.linkedin.com/in/ambika-bongirwar"}  name={'Ambika Bongirwar'} descript={'IT,2019-2023<br>SDE1 at Amazon'}/></div>
//     </div>
//     <div className="d-flex justify-content-center">
//       <div><Card imagesrc={'../images/R.jpg'} linkedinURL={'https://www.linkedin.com/in/rupasri-ravuri-b199711aa/'} name={'Rupasri Ravuri'} descript={'CSE,2019-2023<br>Assistant Machine Learning Engineer at ServiceNow'}/></div>
//       <div><Card imagesrc={'../images/sindhuja.jpg'} linkedinURL={'https://www.linkedin.com/in/sindhuja-mudunuru-664aaa242/'} name={'Sindhuja Mudunuru'} descript={'CSE,2020-2024<br>SEP Intern at J P Morgan&Chase'}/></div>
//       <div><Card imagesrc={'../images/swathi.jpg'} linkedinURL={"https://www.linkedin.com/in/sripadaswetha/"} name={'Swathi Sripadha'} descript={'ETE,2014-2018<br>Data Engineer at Microsoft'}/></div>
//     </div>
//     </div>
//   )
// }
