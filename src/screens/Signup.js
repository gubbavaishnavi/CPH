import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const[credentials,setcredentials]=useState({email:"",password:""})
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify({email:credentials.email,password:credentials.password})
    });
    const json = await response.json()
    console.log(json);
    if(!json.success){
      
      alert("Enter valid credentials")
    }
  }

  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }
  return (
    <>
      
    </>
  );
}
