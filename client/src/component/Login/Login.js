import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email , setemail] = useState("");
    const [password, setpassword]= useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate("/")
        }
    })


    const handleLogin=async()=>{
        console.warn(email,password);
        let result = await fetch("http://localhost:5000/login",{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':"application/json"
            },
        })
        result = await result.json();
        console.log(result);
        if(result.name){
            localStorage.setItem("username",JSON.stringify(result));
            navigate("/");
        }
        else{
            alert("please enter correct details")
        }
    }



  return (
    <div>
        <h1>Login</h1>
        <input className='input-box' type='email' value={email} placeholder='enter your email' onChange={(e)=>setemail(e.target.value)} />
        <input className='input-box' type='password' value={password} placeholder='enter your password' onChange={(e)=>setpassword(e.target.value)} />
        <button className='submit-btn' onClick={handleLogin} type='submit'>Login</button>
    </div>
  )
}

