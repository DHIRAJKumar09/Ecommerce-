import React, { useEffect } from 'react'
import { useState } from 'react';
import '../AddComponents/Addproduct.css'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Updateproduct = () => {
    const [name ,setname]=useState("");
    const [price , setprice]=useState("");
    const [category , setcategory]= useState("");
    const [company , setcompany] =useState("");
    const params = useParams();
    const  navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setname(result.name);
        setprice(result.price);
        setcategory(result.category);
        setcompany(result.company)
    }


    const updateProduct = async () => {
        console.warn(name, price, category, company)
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': 'Application/json'
            }
        });
        result = await result.json();
        if (result) {
            navigate('/')
        }

    }


    
   
  return (
    <div className='product'>
        <input type='text' value={name} placeholder='enter your product name ' className='input-box'  onChange={(e)=>setname(e.target.value)}/>

        <input type='text' value={price} placeholder='enter product price ' className='input-box'  onChange={(e)=>setprice(e.target.value)}/>

        <input type='text' value={category} placeholder='enter your product category' className='input-box'  onChange={(e)=>setcategory(e.target.value)}/>

        <input type='text' value={company} placeholder='enter  product company ' className='input-box'  onChange={(e)=>setcompany(e.target.value)}/>

        <button onClick={updateProduct} className='btn'> UPDATE PRODUCT</button>
        </div>
  )
}
