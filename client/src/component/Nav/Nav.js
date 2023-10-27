import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './nav.css';


export const Nav = () => {
  const auth = localStorage.getItem("username");
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.clear();
    navigate('/signup');
  }

  
  return (
    <div>
    <img
    alt="logo"
    className='logo' 
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYi6Isvq26OGhkB5mEev1Yb7J2qSvcUsv9p4qKWKDbzsUVLof-CGrTVoS5Z2b3dMqMv1k&usqp=CAU'


    />

    
     { auth ? 
        <ul className='nav-ul'>
            <li><Link to="/">product</Link></li>
            <li><Link to="/add ">Add Product</Link></li>
            <li><Link to="/update">Update Product</Link></li>
            <li><Link to="/delete ">Delete Product</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link onClick={logout}  to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
 
        </ul>

        :

        <ul className=' nav-ul nav-right'>
            <li><Link to="/signup">Signup </Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>

     }
    </div>
  )
}
