import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../../Products/Products';
import Cart from '../../Cart/Cart';

const Home = () => {
    return (
      <div className='w-9/10 m-auto'>
         <Navbar></Navbar>
          <div className='p-8'>
              <Banner></Banner>
          </div>
          
          <div className='flex justify-around'>
            <div>
                <Products> </Products>
            </div>
            <div>
                <Cart></Cart>
            </div>
          </div>

       <Footer></Footer>
      </div>
    );
};

export default Home;