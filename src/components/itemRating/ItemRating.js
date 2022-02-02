import React from "react";
import "./item_rating_styles.css";

export const ItemRating = ({ itemId, rating }) => {
  let numBlueStars = Math.round(rating);
  let numGreyStars = 5 - numBlueStars;

  return (
    <div className='rating-container'>
      <div className='rating-star-container'>
        <ul>
          {[...Array(numBlueStars)].map((e, i) => (
            <li key={`${itemId}-blue-${i}`}>
              <i className={`fa fa-star fa-blue`} aria-hidden='true'></i>
            </li>
          ))}

          {[...Array(numGreyStars)].map((e, i) => (
            <li key={`${itemId}-grey-${i}`}>
              <i className={`fa fa-star fa-grey`} aria-hidden='true'></i>
            </li>
          ))}
        </ul>
      </div>
      <div className='item-rating'>{rating}</div>
    </div>
  );
};
