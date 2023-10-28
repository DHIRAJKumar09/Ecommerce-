import React, { useEffect } from 'react';
import { useState } from 'react';
import './productlist.css';
const Productlist =()=>{

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products',{
            headers:{
                authorization:JSON.parse(localStorage.getItem('token'))
            }
        });
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct = async (id) => {
        console.warn(id)
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getProducts();
        }
    }
    return (
        <div className="product-list">
        <h3>Product List</h3>
       
        <ul>
            <li>S. No.</li>
            <li>Name</li>
            <li>Price</li>
            <li>Operation</li>

        </ul>
        {
            products.length>0 ? products.map((item, index) =>
                <ul key={item._id}>
                    <li>{index + 1}</li>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                    <li>
                        <button onClick={() => deleteProduct(item._id)}>Delete</button>
                        
                    </li>

                </ul>
            )
            :<h1>No Result Found</h1>
        }
    </div>
    )
}
export default Productlist;