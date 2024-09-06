import React from 'react'
import Footer from '../components/Footer'
import Navbar2 from '../components/Navbar2'
import { useNavigate } from 'react-router-dom';
export default function TandSD() {
  let navigate = useNavigate();
    const handleDSA = async()=>{
        navigate('/DSA');
    }
    const handleDev = async()=>{
        navigate('/Dev');
    }
    const handleDBMS=async()=>{
        navigate('/DBMS');
    }
    const handleOC=async()=>{
      navigate('/OC');
  }
  return (
    <div>
      <div><Navbar2/></div>
        <div className='maindiv' style={styles.divv}>
            <button onClick={handleDSA} style={styles.button}>Data Structures & Algorithms</button>
            <button onClick={handleDev} style={styles.button}>Web Development</button>
            <button onClick={handleDBMS} style={styles.button}>Aptitude</button>
            <button onClick={handleOC} style={styles.button}>Other Courses</button>
        </div>
        <div><Footer/></div>
    </div>
  )
}
const styles={
  button:{
      width:'200px',
      height:'170px',
      margin:'30px',
      backgroundColor:'#00bc8c',
      color:'white', 
      fontStyle: 'italic',
      fontSize: 'calc(1rem + 0.15vw)',
      fontWeight: 'bold'
  },
  divv:{
      margin:'100px',
      display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center' 
  }
};