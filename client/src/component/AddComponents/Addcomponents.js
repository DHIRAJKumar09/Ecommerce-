import React from 'react'
import { useState } from 'react';
import './Addproduct.css'

export const Addcomponents = () => {
    const [name ,setname]=useState("");
    const [price , setprice]=useState("");
    const [category , setcategory]= useState("");
    const [company , setcompany] =useState("");
    const [error ,seterror] = useState(false);


    const handleproduct=async()=>{
        console.warn(!name);
        if(!name || !price || !category || !company){
            seterror(true);
            return false;
        }
        console.warn(name,price,category,company);
        const userId = JSON.parse(localStorage.getItem("username"))._id;
        let result = await fetch("http://localhost:5000/add-products",{
            method:"post",
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            },
        })
        result = await result.json();
        console.warn(result);
     

    }
  return (
    <div className='product'>
        <input type='text' value={name} placeholder='enter your product name ' className='input-box'  onChange={(e)=>setname(e.target.value)}/>
        {error && !name &&<span className='invalid-input'>Enter a valid name </span>}

        <input type='text' value={price} placeholder='enter product price ' className='input-box'  onChange={(e)=>setprice(e.target.value)}/>
        {error && !price &&<span className='invalid-input'>Enter a valid pirce </span>}

        <input type='text' value={category} placeholder='enter your product category' className='input-box'  onChange={(e)=>setcategory(e.target.value)}/>
        {error && !category &&<span className='invalid-input'>Enter a valid category </span>}

        <input type='text' value={company} placeholder='enter  product company ' className='input-box'  onChange={(e)=>setcompany(e.target.value)}/>
        {error && !company &&<span className='invalid-input'>Enter a valid company </span>}

        <button onClick={handleproduct} className='btn'> ADD Product</button>
        </div>
  )
}
