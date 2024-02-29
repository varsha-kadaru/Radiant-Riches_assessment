import React from 'react';
import "./Card.css";

const Card = ({ imageSrc, title, description, rating }) => {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={imageSrc} alt={title} />
      </div>
      <div className='card-content'>
        <p>{description}</p>
      </div>
      <div className='card-actions'>
        <div className='card-rating'>
          Rating: {rating}
        </div>
        <button className='card-viewmore'>View More</button>
      </div>
    </div>
  );
}

export default Card;
