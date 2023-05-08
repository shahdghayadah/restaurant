import React from 'react';
import './catogryCard.css';
import { Link } from 'react-router-dom';
const CatogryCard = (props) => {
  const {catogry}= props
  console.log('catgeory',catogry);

  return (
    <div className="catogry-card">
      <div className="catogry-image">
        <img src={catogry.strCategoryThumb} />
      </div>
      <div>
        <h3>{catogry.strCategory}</h3>
      </div>
    </div>
    
  );
};

export default CatogryCard;
