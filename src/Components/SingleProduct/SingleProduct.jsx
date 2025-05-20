import React from 'react';

const SingleProduct = ({product,handleAddToCart}) => {
    // console.log(product)
    const{title,description,image}=product;
    const handleSelect=()=>{
      handleAddToCart(product)
    }

    return (
       <div className="card w-96 shadow-sm bg-green-200 border-2">
  <figure>
    <img className='w-35'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description.slice(0,80)}</p>
    <div className="card-actions justify-end">
      <button onClick={handleSelect} className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
    );
};

export default SingleProduct;