import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

export const PrivateComponents = () => {

    const auth = localStorage.getItem("username");

    return auth ?<Outlet/>:<Navigate to='/signup'></Navigate>
 
}
