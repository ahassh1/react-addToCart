import React from 'react';

const Cart = ({selectedProducts,price}) => {
    return (
      <div className='text-end'>
          <h1 className='text-4xl font-semibold text-center'>Cart Item --- ${price.toFixed()}</h1>
        {
            selectedProducts.map((p)=> <div className='flex justify-around items-center gap-2 bg-gray-200 my-3 border-2 '>
                <img className='w-15' src={p.image} alt="" />
                <p>{p.title.slice(0,22)}</p>
                <button className='btn bg-red-400'>Delete</button>
            </div>)
        }
      </div>
    );
};

export default Cart;