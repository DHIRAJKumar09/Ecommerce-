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
        <ul className='nav-ul'>
            <li><Link to="/">product</Link></li>
            <li><Link to="/add ">Add Product</Link></li>
            <li><Link to="/update">Update Product</Link></li>
            <li><Link to="/delete ">Delete Product</Link></li>
            <li><Link to="/profile">Profile</Link></li>

            <li>{ auth?<Link onClick={logout}  to="/signup">Logout</Link> :
            <>
            <li><Link to="/signup">Signup </Link></li>
            <li><Link to="/login">Login</Link></li>
            </>
             }</li>

            
        </ul>
    </div>
  )
}
