import React from 'react';
import './meal.css';

const MealCard = (props) => {
  const {meal}= props

  return (

    <div className="catogry-card">
      <div className="catogry-image">
        <img src={meal.strMealThumb} />
      </div>
      <div>
        <h3>{meal.strMeal}</h3>
      </div>
    </div>

  );
};

export default MealCard;
