import React,{useEffect, useState} from 'react';
import './home.css';
import CatogryCard from '../../componants/catogryCard';
import { Link } from 'react-router-dom';
const Home = () => {
const [catogrys,setCatogrys]= useState([]);

useEffect(()=>{ fetch('https://www.themealdb.com/api/json/v1/1/categories.php').then(res=>res.json())
.then(data=>setCatogrys(data.categories))
},[]);

  return (
    <div className="home-div">
      <div className="catogry-list">
        {
          catogrys.map((catogry)=>{
            return <Link to={`/categoty/${catogry.strCategory}`}><CatogryCard catogry= {catogry} key = {catogry.idCategory}></CatogryCard></Link>
          })
        }
      </div>
    </div>
  );
};

export default Home;
