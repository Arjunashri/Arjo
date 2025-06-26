import React from 'react';

function HeroSection() {
  return (
    <section className="main-home">
      <div className="main-text">
        <h5>Winter Collection</h5>
        <h1>New Winter<br /> collection 2025</h1>
        <p>There's Nothing like Trend</p>
        <a href="#" className="main-btn">Shop Now <i className="bx bx-right-arrow-alt"></i></a>
      </div>
      <div className="down-arrow">
        <a href="#trending" className="down">
          <i className='bx bx-down-arrow-alt'></i>
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
