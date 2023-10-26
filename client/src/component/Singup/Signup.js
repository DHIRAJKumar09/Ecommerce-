import React, { useState } from 'react'
import './signup.css'
const Signup =()=>{
    const [username ,setUsernmae] = useState("");
    const [email ,setEmail] =useState("");
    const [password , setPassword] =useState("");

    const handlesubmit =()=>{
        console.warn(username , email , password);
    }

      return (
        <div className='signup'>
            <form>
            <input  className='input-box' type='text' value={username} placeholder='enter your name' onChange={(e)=>setUsernmae(e.target.value)} ></input>
            <input  className='input-box' type='email' value={email} placeholder='enter your email'  onChange={(e)=>setEmail(e.target.value)}></input>
            <input  className='input-box' type='password' value={password} placeholder='enter your password'  onChange={(e)=>setPassword(e.target.value)}></input>
           <button  className='input-box' type='submit' onClick={handlesubmit}>submit</button>
                
            </form>
        </div>
    )
}
export default Signup;