import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Whatwedo.css';

export default function Login() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target; 
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log('Login Data:', formData);
    const response = await fetch("http://localhost:5000/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      })
    });

    const data = await response.json(); 
  console.log("response2", data);

    if (!data.success) alert('Enter correct credentials');
    else {
      navigate("/Afterlogin");
    }
  };
  return (
    <div className='cont'>
      <div >
        <button style={styles.button1} onClick={() => navigate('/Adminloginf')}>
          Adminstrator Login
        </button>
      </div>
      <div style={styles.container}>
        <h2 style={styles.title}>Student Login</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label}>Mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleInputChange(e)}
            style={styles.input}
          />

          <label style={styles.label}>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '300px',
    margin: 'auto', 
    padding: '20px',
    border: '1px solid black',
    borderRadius: '5px',
    marginTop: '175px',
    marginLeft: '350px',
    backgroundColor: 'black',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: 'white',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '8px',
    color: 'white',
  },
  input: {
    padding: '8px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  button: {
    backgroundColor: 'green',
    color: 'white', 
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '3px',
    border: 'none',
  },
  button1: {
    margin: '20px',
    backgroundColor: 'black',
    color: 'white', 
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '3px',
    border: 'none',
  }
};
