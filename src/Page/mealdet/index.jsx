import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './mealdet.css'

const MealDet = () => {
    const {strMeal} = useParams();
  
  
    const [meal, setMeal] = useState({})
      useEffect(()=>{ 
       fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`).then(res=>res.json()).then(data=>setMeal(data.meals[0]))
  },[])
  
 
    return (
      <div className='div'>
              <img className='img' src={meal.strMealThumb}  />
             < h1 className='h1'>{meal.strMeal}</h1>
             < p className='h3'>{meal.strCategory}</p>
             < p className='p3'>{meal.strArea}</p>
             < p className='p3'>{meal.strInstructions}</p>   
             <a href={meal.strYoutube}>Youtube Video</a>        
      </div>
    );
  };
  
  export default MealDet;
  