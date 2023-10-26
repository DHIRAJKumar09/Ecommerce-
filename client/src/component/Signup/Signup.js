import React ,{useState,useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';
import './signup.css'

 const Signup= ()=> {

  const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem("username");
    if(auth){
      navigate("/");
    }
  })
  const [name ,setName] = useState("");
  const [email , setEmail] = useState("");
  const [password ,setPassword] = useState("");

 

 

  const collectData= async ()=>{
    console.warn(name,email,password);
    let result = await fetch('http://localhost:5000/signup',{
      method:'post',
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      }

    });
     
    result = await result.json();
    console.warn(result);
    localStorage.setItem('username',JSON.stringify(result));

    if(result){
      navigate("/")
    }
 
    
  }
  return (
    <div className='signup'>
      <h1>Register</h1>
      <input className='input-box' type='text' value={name}     placeholder='Enter your Name'     onChange={(e)=>setName(e.target.value)}/><br></br>
      <input className='input-box' type='email'  value={email}     placeholder='enter your email'     onChange={(e)=>setEmail(e.target.value)}/><br></br>
      <input className='input-box' type='password' value={password}   placeholder='enter your password'     onChange={(e)=>setPassword(e.target.value)}/><br></br>
      
        <button type='button' onClick={collectData}>Submit Here..</button>
    </div>
  )
}
export default Signup;
