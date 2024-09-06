// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const RegistrationForm = () => {
// //     const navigate=useNavigate()
// //   const [formData, setFormData] = useState({
// //     username: '',
// //     password: '',
// //     securityQuestion: '',
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await axios.post('http://localhost:5000/register', formData);
// //       if(response.data.success) navigate("/Adminlogin")  
// //       console.log('Registration successful:', response.data);
// //     } catch (error) {
// //       console.error('Error during registration:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       <form onSubmit={handleSubmit}>
// //         <label>
// //           Username:
// //           <input
// //             type="text"
// //             name="username"
// //             value={formData.username}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //         <br />

// //         <label>
// //           Password:
// //           <input
// //             type="password"
// //             name="password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //         <br />

// //         <label>
// //           Security Question:
// //           <input
// //             type="text"
// //             name="securityQuestion"
// //             value={formData.securityQuestion}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //         <br />

// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default RegistrationForm;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './RegistrationForm.css'; // Import CSS file

// const RegistrationForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     securityQuestion: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/register', formData);
//       if (response.data.success){
//        navigate("/Adminlogin")
       
//       }
//       else
//       alert("Enter correct credentials");
//       //console.log('Registration successful:', response.data);
//     } catch (error) {
//       console.error('Error during registration:', error);
//     }
//   };

//   return (
//     <div className='registration-box'>
//     <div className="registration-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//             className="input-field"
//           />
//         </label>
//         <br />

//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="input-field"
//           />
//         </label>
//         <br />

//         <label>
//           Security Question:
//           <input
//             type="text"
//             name="securityQuestion"
//             value={formData.securityQuestion}
//             onChange={handleChange}
//             required
//             className="input-field"
//           />
//         </label>
//         <br />

//         <button type="submit" className="submit-button">Submit</button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default RegistrationForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Whatwedo.css';

export default function RegistrationForm() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target; 
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      })
    });

    const data = await response.json();

    if (!data.success) alert('Enter correct credentials');
    else {
      navigate("/Adminlogin");
    }
  };
  return (
    <div className='cont'>
      
      <div style={styles.container}>
        <h2 style={styles.title}>Administrator Login</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label}>Username:</label>
          <input
            type="string"
            name="username"
            value={formData.username}
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
    width: '400px',
    margin: 'auto', 
    padding: '20px',
    border: '1px solid black',
    borderRadius: '5px',
    marginTop: '175px',
    marginLeft: '450px',
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
