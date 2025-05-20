import React, { useEffect, useState } from 'react';
import SingleProduct from '../Components/SingleProduct/SingleProduct';

const Products = () => {
     
    const [products,setproducts]=useState([]);
    useEffect(()=>{
        fetch("./products.json")
        .then(res=> res.json())
        .then(data=> setproducts(data))
    },[])

    return (
        <div className='grid grid-cols-2 gap-8 border-sky-300 shadow-blue-300 shadow-2xl'>
         
             {
                products.map((p)=><SingleProduct product={p}></SingleProduct>)
             }
        </div>
            
    );
};

export default Products;