import React from 'react';
import team from '../assets/team.png';

function ClientReview() {
  return (
    <section className="client-reviews">
      <div className="reviews">
        <h3>Client Reviews</h3>
        <img src={team} alt="Client" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iure officiis,
          eaque nesciunt quam earum eum doloribus <br />
          provident possimus similique natus rerum magni quos deleniti labore temporibus
          excepturi expedita laborum, quasi adipisci aperiam. <br />
          Optio totam, ab porro architecto, dignissimos repudiandae enim voluptatum quas
          iste molestias ex repellat illum assumenda! Vitae.
        </p>
        <h2>Maureen Chiquet</h2>
        <p>CEO of Addle</p>
      </div>
    </section>
  );
}

export default ClientReview;