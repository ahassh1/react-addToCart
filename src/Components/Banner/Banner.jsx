import React from 'react';

const Banner = () => {
    return (
      <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://assets.turbologo.com/blog/en/2021/09/10094210/product-photo-1.png)",
  }}
 >
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-7xl font-bold">Hello there</h1>
      <p className="mb-5 text-[18px] my-3">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;