import React from 'react';
import products from '../data/products'; // adjust path based on your folder

const TrendingProducts = () => {
  return (
    <section className="trending-product" id="trending">
      <div className="center-text">
        <h2>Our Trending <span>Products</span></h2>
      </div>

      <div className="products">
        {products.map((item, index) => (
          <div className="row" key={index}>
            <img src={item.img} alt={item.name} />
            {item.label && (
              <div className="product-text">
                <h5>{item.label}</h5>
              </div>
            )}
            <div className="heart-icon">
              <i className="bx bx-heart"></i>
            </div>
            <div className="ratting">
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <div className="price">
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
