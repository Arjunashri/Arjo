import React from 'react';
import bl1 from '../assets/bl-1.png';
import bl2 from '../assets/bl-2.png';
import bl3 from '../assets/bl-3.png';

const updates = [
  {
    img: bl1,
    date: "26 july 2025",
    title: "Let's Start bring sale on this summer vacation.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    img: bl2,
    date: "26 july 2025",
    title: "Let's Start bring sale on this summer vacation.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    img: bl3,
    date: "26 july 2025",
    title: "Let's Start bring sale on this summer vacation.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
];

function Updates() {
  return (
    <section className="update-news">
      <div className="up-center-text">
        <h2>New Updates</h2>
      </div>
      <div className="update-cart">
        {updates.map((item, index) => (
          <div className="cart" key={index}>
            <img src={item.img} alt="blog" />
            <h5>{item.date}</h5>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
            <h6>Continue Reading...</h6>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Updates;