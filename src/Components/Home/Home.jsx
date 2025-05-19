import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
      <div className='w-9/10 m-auto'>
         <Navbar></Navbar>
          <div className='p-8'>
              <Banner></Banner>
          </div>
       <Footer></Footer>
      </div>
    );
};

export default Home;