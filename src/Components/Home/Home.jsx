import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../../Products/Products';
import Cart from '../../Cart/Cart';

const Home = () => {

  const [selectedProducts,setSelectedProducts]=useState([])
  const [price,setPrice]=useState(0)

  const handleAddToCart=(product,productPrice)=>{
    setPrice(price+productPrice)
    //  console.log(product)
    setSelectedProducts([...selectedProducts,product])
  }
  // console.log(selectedProducts)
     const handleDelete=(id)=> {
         const remainingProduct= selectedProducts.filter(p=>p.id !==id)
         setSelectedProducts(remainingProduct)
     }
    return (
      <div>
         <Navbar selectedProducts={selectedProducts}></Navbar>
          <div className='p-8'>
              <Banner></Banner>
          </div>
          
          <div className='flex justify-around'>
            <div>
                <Products handleAddToCart={handleAddToCart}> </Products>
            </div>
            <div>
                <Cart selectedProducts={selectedProducts} handleDelete={handleDelete} price={price}></Cart>
            </div>
          </div>

         <div className='mt-15 py-15'>
          <Footer></Footer>
         </div>
      </div>
    );
};

export default Home;