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
    return (
      <div className='w-9/10 m-auto'>
         <Navbar selectedProducts={selectedProducts}></Navbar>
          <div className='p-8'>
              <Banner></Banner>
          </div>
          
          <div className='flex justify-around'>
            <div>
                <Products handleAddToCart={handleAddToCart}> </Products>
            </div>
            <div>
                <Cart selectedProducts={selectedProducts} price={price}></Cart>
            </div>
          </div>

       <Footer></Footer>
      </div>
    );
};

export default Home;