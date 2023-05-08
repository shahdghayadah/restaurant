import React,{useEffect, useState} from 'react';
import './mealHome.css';
import MealCard from '../../componants/meal';
import { Link, useParams } from 'react-router-dom';
const MealHome = () => {
    const {strCategory} = useParams();
    const [meals,setmeals]= useState([]);
useEffect(()=>{ fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`).then(res=>res.json())
.then(data=>{
 // console.log("hellllllllllllllllllo",data.meals)

  setmeals(data.meals)})
},[]);

  return (
    <div className="home-div">
      <div className="catogry-list">
        {
          meals.map((meal)=>{
            return  <Link to={`/meal/${meal.strMeal}`}> <MealCard meal= {meal} key = {meal.strMeal}></MealCard></Link>
          })
        }
      </div>
    </div>
  );
};

export default MealHome;
