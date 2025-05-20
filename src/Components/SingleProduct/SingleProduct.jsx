import React from 'react';

const SingleProduct = ({product}) => {
    // console.log(product)
    const{title,description,category,image,id,price}=product
    return (
       <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img className='w-35'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description.slice(0,50)}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
    );
};

export default SingleProduct;