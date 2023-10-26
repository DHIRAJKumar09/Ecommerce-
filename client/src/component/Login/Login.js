import React from 'react'

export const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        <input className='input-box' type='email' value={email} placeholder='enter your email'  />
        <input className='input-box' type='password' value={passward} placeholder='enter your password'/>
        <button className='submit-btn' type='submit'>Submit</button>
    </div>
  )
}
