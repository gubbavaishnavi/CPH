import React from 'react'
import Navbar2 from '../components/Navbar2'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';
export default function Homepage() {
    let navigate = useNavigate();
    const handlePlacements = async()=>{
        navigate('/notificationPage');
    }
    const handleTSD = async()=>{
        navigate('/tandSD');
    }
    const handleAS=async()=>{
        navigate('/alumniSupport');
    }
    return (
    <div>
        <div><Navbar2/></div>
        <div className='maindiv' style={styles.divv}>
            <button onClick={handlePlacements} style={styles.button}>Placements and Hackathons</button>
            <button onClick={handleTSD} style={styles.button}>Training and Skill Development</button>
            <button onClick={handleAS} style={styles.button}>Alumni Support</button>
        </div>
        <div><Footer/></div>
    </div>
  )
};
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