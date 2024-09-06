import React, { useState } from 'react';
import axios from 'axios';
import Navbar2 from '../components/Navbar2';

import Footer from "../components/Footer";
export default function Adminlogin() {
    const [formData, setFormData] = useState({
        companyName: '',
        description: '',
        companyType: '',
        websiteUrl: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData,[name]: value 
        });
    };
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/company', formData)
            .then(response => {
                alert('Submission successful');

            })
            .catch(error => {
                console.error('Error submitting form:', error);
            });
            document.getElementById("myForm").reset();
    };
    return <div>
        <Navbar2/>
        <br/>
        <br/>
        <div>
            
            <div style={styles.container}>
            <center><h2>Jobs, Internships & Contests Posting Form</h2></center>
            <form id="myForm" style={styles.form} onSubmit={handleSubmit}>
                <label style={styles.label}>
                    Company Name:
                    <input style={styles.input}
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                {/* <label style={styles.label}>
                    Type:
                    <input style={styles.input}
                        type="text"
                        name="companyType"
                        value={formData.companyType}
                        onChange={handleChange} placeholder='Placement/Hackathon/Coding Contest'
                        required
                    />
                </label> */}
                <br />
                <label style={styles.label}>
                    Description:
                    <textarea style={styles.textarea}
                        name="description"
                        value={formData.description}
                        onChange={handleChange} placeholder='details like package,expectations,skills required'
                        required
                    />
                </label>
                <label style={styles.label}>
    Type:
    <select 
        style={styles.input}
        name="companyType"
        value={formData.companyType}
        onChange={handleChange}
        required
    >
        <option value="">Select Type</option>
        <option value="Placement">Placements (Full time and Internships)</option>
        <option value="Hackathon">Hackathons and Coding Contests</option>
    </select>
</label>

                <br />

                <label style={styles.label}>
                    Website URL:
                    <input style={styles.input}
                        type="text"
                        name="websiteUrl"
                        value={formData.websiteUrl}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />

                <button style={styles.button} type="submit">Submit</button>
            </form>
            </div>
        </div>
        <Footer/>
    </div>
}


const styles={
    container:{
        border: '2px solid white',
        padding: '20px',
        width: '800px',
        marginTop:'50px',
        margin: 'auto'
    },
    label :{
        marginBottom: '10px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    input:{
        padding: '5px',
        marginBottom: '10px',
        width: '100%'
    },
    textarea: {
        padding: '5px',
        marginBottom: '10px',
        width: '100%'
    },
    button: {
        padding: '10px',
        backgroundColor: '#00bc8c',
        color: '#fff',
        border: 'none',
        cursor: 'pointer'
    }
}