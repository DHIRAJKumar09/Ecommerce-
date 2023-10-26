import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css';

export const Nav = () => {
  return (
    <div>
        <ul className='nav-ul'>
            <li><Link to="/">product</Link></li>
            <li><Link to="/add ">Add Product</Link></li>
            <li><Link to="/update">Update Product</Link></li>
            <li><Link to="/delete ">Delete Product</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/logout">Logout</Link></li>
            <li><Link to="/signup">Signup </Link></li>
        </ul>
    </div>
  )
}
