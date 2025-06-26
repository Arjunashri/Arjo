import React from 'react';
import logo from '../assets/logo.png';

function Contact() {
  return (
    <section className="contact">
      <div className="contact-info">
        <div className="first-info">
          <img src={logo} alt="Logo" />
          <p>3245 Grant Street Longview, <br /> TX United Kinddom 765378</p>
          <p>01601348732</p>
          <p>clothsshopping3080@gmail.com</p>
          <div className="social-icon">
            <a href="#"><i className='bx bxl-facebook'></i></a>
            <a href="#"><i className='bx bxl-twitter'></i></a>
            <a href="#"><i className='bx bxl-instagram'></i></a>
            <a href="#"><i className='bx bxl-youtube'></i></a>
            <a href="#"><i className='bx bxl-linkedin'></i></a>
          </div>
        </div>
        
        <div className="second-info">
          <h4>Support</h4>
          <p>Contact</p>
          <p>About page</p>
          <p>Size Guide</p>
          <p>Shopping & Resturns</p>
          <p>Privacy</p>
        </div>

        <div className="third-info">
          <h4>Shop</h4>
          <p>Men's Shopping</p>
          <p>Women's Shopping</p>
          <p>Kids's Shopping</p>
          <p>Furniture</p>
          <p>Discount</p>
        </div>

        <div className="fourth-info">
          <h4>Company</h4>
          <p>About</p>
          <p>Blog</p>
          <p>Affiliate</p>
          <p>Login</p>
        </div>

        <div className="five">
          <h4>Subscribe</h4>
          <p>Receive Update, Hot Deals, Discounts Sent Straight In Your Inbox Daily</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, exercitationem.</p>
          <p>Receive Update, Hot Deals, Discounts Sent Straight In Your Inbox Daily</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
